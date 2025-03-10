"use client";
import ThreeDots from "~/components/ui/icons/three-dots";
import CheckCircleFill from "~/components/ui/icons/check-circle-fill";
import { useRemoveTeammateModal } from "~/components/ui/auth/workspaces/modals/use-remove-team-modal";
import Copy from "~/components/ui/icons/copy";
import { IconMenu } from "~/components/ui/icon-menu";
import { UserMinus } from "lucide-react";
import { useSession } from "next-auth/react";
import { Avatar } from "~/components/ui/avatar";
import { cn } from "~/utils/utils";
import { timeAgo } from "~/utils/functions/timeAgo";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import { useState } from "react";
import { Button } from "~/components/ui/auth/Auth-Button";
import { useToast } from "~/utils/hooks/useToast";
import { useEditRoleModal } from "~/components/ui/auth/workspaces/modals/edit-role-modal";

const UserCard = ({
  user,
  currentTab,
  workspaceName,
  workspaceId,
  logo,
  isOwner,
}: {
  user: any;
  currentTab: "Members" | "Invitations";
  workspaceName: string;
  workspaceId: string;
  logo: string;
  isOwner: boolean;
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  const { id, name, email, createdAt, role: currentRole } = user.user;

  const [role, setRole] = useState<"owner" | "member">(currentRole);

  const { EditRoleModal, setShowEditRoleModal } = useEditRoleModal({
    user,
    role,
  });

  const { RemoveTeammateModal, setShowRemoveTeammateModal } =
    useRemoveTeammateModal({
      user,
      invite: currentTab === "Invitations",
      workspaceId: workspaceId,
      workspaceName: workspaceName,
      logo: logo,
    });

  const { data: session } = useSession();

  const [copiedUserId, setCopiedUserId] = useState(false);
  const { toast } = useToast();

  const copyUserId = () => {
    navigator.clipboard.writeText(id);
    setCopiedUserId(true);
    toast({
      description: "User ID copied!",
    });
    setOpenPopover(false);
    setTimeout(() => setCopiedUserId(false), 3000);
  };

  return (
    <>
      <EditRoleModal />
      <RemoveTeammateModal />
      <div
        key={id}
        className="flex items-center justify-between space-x-3 px-4 py-3 sm:pl-8"
      >
        <div className="flex items-start space-x-3">
          <div className="flex items-center space-x-3">
            <Avatar user={user.user} />
            <div className="flex flex-col">
              <h3 className="text-sm font-medium">{name || email}</h3>
              <p className="text-xs text-gray-500">{email}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {currentTab === "Members" ? (
            session?.user?.email === email ? (
              <p className="text-xs capitalize text-gray-500">{role}</p>
            ) : (
              //   !isMachine && (
              <select
                className={cn(
                  "rounded-md border border-gray-200 text-xs text-gray-500 focus:border-gray-600 focus:ring-gray-600",
                  {
                    "cursor-not-allowed bg-gray-100": !isOwner,
                  },
                )}
                value={role}
                disabled={!isOwner}
                onChange={(e) => {
                  setRole(e.target.value as "owner" | "member");
                  setOpenPopover(false);
                  setShowEditRoleModal(true);
                }}
              >
                <option value="owner">Owner</option>
                <option value="member">Member</option>
              </select>
              //   )
            )
          ) : (
            <p className="text-xs text-gray-500" suppressHydrationWarning>
              Invited {timeAgo(createdAt)}
            </p>
          )}

          <Popover open={openPopover}>
            <PopoverContent>
              <div className="grid w-full gap-1 p-2 sm:w-48">
                <Button
                  text="Copy User ID"
                  variant="outline"
                  onClick={() => copyUserId()}
                  icon={
                    copiedUserId ? (
                      <CheckCircleFill className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )
                  }
                  className="h-9 justify-start px-2 font-medium"
                />
                <button
                  onClick={() => {
                    setOpenPopover(false);
                    setShowRemoveTeammateModal(true);
                  }}
                  className="rounded-md p-2 text-left text-sm font-medium text-red-600 transition-all duration-75 hover:bg-red-600 hover:text-white"
                >
                  <IconMenu
                    text={
                      session?.user?.email === email
                        ? "Leave workspace"
                        : currentTab === "Members"
                          ? "Remove teammate"
                          : "Revoke invite"
                    }
                    icon={<UserMinus className="h-4 w-4" />}
                  />
                </button>
              </div>
            </PopoverContent>
            <PopoverTrigger>
              <div>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenPopover(!openPopover);
                  }}
                  icon={<ThreeDots className="h-5 w-5 text-gray-500" />}
                  className="h-8 space-x-0 px-1 py-2"
                  variant="outline"
                  {...(!isOwner &&
                    session?.user?.email !== email && {
                      disabledTooltip:
                        "Only workspace owners can edit roles or remove teammates.",
                    })}
                />
              </div>
            </PopoverTrigger>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default UserCard;
