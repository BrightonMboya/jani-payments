"use client";

import { useInviteCodeModal } from "~/components/auth/workspaces/modals/invite-code-modal";
import { useInviteTeammateModal } from "~/components/auth/workspaces/modals/invite-team-modal";
import { Link as LinkIcon } from "~/components/ui/icons";
import { Avatar, Badge } from "~/components/ui";
import { Button } from "~/components/auth/Auth-Button";
import { useState } from "react";
import { api } from "~/trpc/react";
import { useParams } from "next/navigation";
import { TooltipProvider } from "~/components/ui";
import { format } from "date-fns";
import UserPlaceholder from "./UserPlaceholder";
import UserCard from "./UserCard";
import { useToast } from "~/utils/hooks";

const tabs: Array<"Members" | "Invitations"> = ["Members", "Invitations"];

export default function WorkspacePeopleClient() {
  const params = useParams();
  const { data, isLoading } = api.workspace.getSpecificWorkspace.useQuery({
    slug: params.accountSlug as unknown as string,
  });
  const workspace = data?.workspace;
  const { setShowInviteTeammateModal, InviteTeammateModal } =
    useInviteTeammateModal({
      id: workspace?.id!,
      slug: workspace?.slug!,
      logo: workspace?.logo!,
      workspaceName: workspace?.name!,
    });

  const { setShowInviteCodeModal, InviteCodeModal } = useInviteCodeModal({
    id: workspace?.id!,
    inviteCode: workspace?.inviteCode!,
  });

  const [currentTab, setCurrentTab] = useState<"Members" | "Invitations">(
    "Members",
  );
  const { data: usersAndInvites } = api.workspace.getUsersAndInvites.useQuery({
    projectId: workspace?.id!,
  });

  const users =
    currentTab === "Invitations"
      ? usersAndInvites?.invites
      : usersAndInvites?.users;

  return (
    <>
      {/* <TooltipProvider> */}
      <InviteTeammateModal />
      <InviteCodeModal />
      <div className="rounded-lg border border-gray-200 bg-white">
        <div className="flex flex-col items-center justify-between space-y-3 p-5 sm:flex-row sm:space-y-0 sm:p-10">
          <div className="flex flex-col space-y-3">
            <h2 className="text-xl font-medium">People</h2>
            <p className="text-sm text-gray-500">
              Teammates that have access to this workspace.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              text="Invite"
              onClick={() => setShowInviteTeammateModal(true)}
              className="h-9"
              {...(!data?.isOwner && {
                disabledTooltip:
                  "Only workspace owners can invite new teammates.",
              })}
            />
            <Button
              icon={<LinkIcon className="h-4 w-4 text-gray-800" />}
              variant="secondary"
              onClick={() => setShowInviteCodeModal(true)}
              className="h-9 space-x-0"
              {...(!data?.isOwner && {
                disabledTooltip:
                  "Only workspace owners can generate invite links for new teammates.",
              })}
            />
          </div>
        </div>
        <div className="flex space-x-3 border-b border-gray-200 px-3 sm:px-7">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${
                tab === currentTab ? "border-black" : "border-transparent"
              } border-b py-1`}
            >
              <button
                onClick={() => setCurrentTab(tab)}
                className="rounded-md px-3 py-1.5 text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200"
              >
                {tab}
              </button>
            </div>
          ))}
        </div>
        <div className="grid divide-y divide-gray-200">
          {currentTab === "Members" &&
            users &&
            (users.length > 0 ? (
              users.map((user) => (
                <UserCard
                  //@ts-ignore too lazy to fix the type issue
                  key={user.id}
                  user={user}
                  currentTab={currentTab}
                  logo={workspace?.logo!}
                  workspaceId={workspace?.id!}
                  workspaceName={workspace?.name!}
                  isOwner={data?.isOwner!}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-10">
                <img
                  src="/_static/illustrations/video-park.svg"
                  alt="No invitations sent"
                  width={300}
                  height={300}
                  className="pointer-events-none -my-8"
                />
                <p className="text-sm text-gray-500">No invitations sent</p>
              </div>
            ))}
        </div>
        {isLoading &&
          Array.from({ length: 5 }).map((_, i) => <UserPlaceholder key={i} />)}
        <div className="grid divide-y divide-gray-200">
          {currentTab === "Invitations" &&
            users &&
            (users.length > 0 ? (
              users.map((user, index) => (
                <InvitationUsers
                  user={user}
                  isOwner={data?.isOwner}
                  key={index}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-10">
                <img
                  src="/_static/illustrations/video-park.svg"
                  alt="No invitations sent"
                  width={300}
                  height={300}
                  className="pointer-events-none -my-8"
                />
                <p className="text-sm text-gray-500">No invitations sent</p>
              </div>
            ))}
        </div>
      </div>
      {/* </TooltipProvider> */}
    </>
  );
}

const InvitationUsers = ({ user, isOwner }: any) => {
  // invites expire after 14 days of being sent
  const expiredInvite =
    user.createdAt &&
    Date.now() - new Date(user?.createdAt).getTime() > 14 * 24 * 60 * 60 * 1000;
  const utils = api.useUtils();
  const { toast } = useToast();

  const { isPending, mutateAsync } = api.workspace.deleteInvite.useMutation({
    onSuccess: () => {
      toast({
        description: "Team member deleted succesfully",
      });
    },
    onError: () => {
      toast({
        description: "Team member deleted succesfully",
      });
      toast({
        description: "Team member deleted succesfully",
      });
    },
    onSettled: () => {
      toast({
        description: "Team member deleted succesfully",
      });
      utils.workspace.getUsersAndInvites.invalidate();
    },
  });

  const params = useParams();

  const DeleteInvite = () => {
    try {
      mutateAsync({
        email: user.email,
        workspaceSlug: params.accountSlug as unknown as string,
      });
    } catch (ex) {
      toast({
        description: "Failed to delete the invite",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="flex items-center justify-between p-5">
      <div className="flex items-center space-x-3">
        <Avatar user={user} />
        <div className="flex flex-col">
          <h3 className="text-sm font-medium">{user?.email}</h3>
          <p className="text-xs text-gray-500">
            Invited at {format(user?.createdAt, "PPP")}
          </p>
        </div>
        {expiredInvite && <Badge variant="gray">Expired</Badge>}
      </div>

      {isOwner && (
        <Button
          variant="danger"
          text="Remove Team Member"
          className="w-[200px]"
          loading={isPending}
          onClick={DeleteInvite}
          type="button"
        />
      )}
    </section>
  );
};
