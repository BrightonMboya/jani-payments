"use client";
import { Button } from "../../Auth-Button";
import { Modal } from "~/components/ui/modal";
import { CopyButton } from "~/components/ui/copy-button";
import { APP_DOMAIN } from "~/utils/constants";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { api } from "~/trpc/react";
import { useParams } from "next/navigation";
import { useToast } from "~/utils/hooks/useToast";


function InviteCodeModal({
  showInviteCodeModal,
  setShowInviteCodeModal,
  id,
  inviteCode,
}: {
  showInviteCodeModal: boolean;
  setShowInviteCodeModal: Dispatch<SetStateAction<boolean>>;
  id: string;
  inviteCode: string;
}) {


  const inviteLink = useMemo(() => {
    return `${APP_DOMAIN}/invites/${inviteCode}`;
  }, [inviteCode]);

  const params = useParams();
  const {toast} = useToast()
  const utils = api.useUtils()

  const {isPending, mutateAsync} = api.workspace.resetInviteLink.useMutation({
    onError: (error) => {
      toast({
        description: "Failed to reset the invite link",
        variant: "destructive"
      })
    },
    onSettled: () => {
      toast({
        description: "Invite code reset succesfully"
      })
      utils.workspace.getSpecificWorkspace.invalidate()
    },
    onSuccess: () => {
      alert("This is the on Success")
      toast({
        description: "Invite code reset succesfully"
      })
      utils.workspace.getSpecificWorkspace.invalidate()
    }
  })

  return (
    <Modal
      showModal={showInviteCodeModal}
      setShowModal={setShowInviteCodeModal}
    >
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
        {/* <Logo /> */}
        <h3 className="text-lg font-medium">Invite Link</h3>
        <p className="text-center text-sm text-gray-500">
          Allow other people to join your workspace through the link below.
        </p>
      </div>

      <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 text-left sm:px-16">
        <div className="flex items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-1.5">
          <p className="scrollbar-hide w-[88%] overflow-scroll font-mono text-xs text-gray-500">
            {inviteLink}
          </p>
          <CopyButton value={inviteLink} className="rounded-md" />
        </div>
        <Button
          text="Reset invite link"
          variant="secondary"
          loading={isPending}
          onClick={() => {
            mutateAsync({workspaceSlug: params.accountSlug as unknown as string})
          }}
        />
      </div>
    </Modal>
  );
}

export function useInviteCodeModal({
  id,
  inviteCode,
}: {
  id: string;
  inviteCode: string;
}) {
  const [showInviteCodeModal, setShowInviteCodeModal] = useState(false);

  const InviteCodeModalCallback = useCallback(() => {
    return (
      <InviteCodeModal
        showInviteCodeModal={showInviteCodeModal}
        setShowInviteCodeModal={setShowInviteCodeModal}
        id={id}
        inviteCode={inviteCode}
      />
    );
  }, [showInviteCodeModal, setShowInviteCodeModal]);

  return useMemo(
    () => ({
      setShowInviteCodeModal,
      InviteCodeModal: InviteCodeModalCallback,
    }),
    [setShowInviteCodeModal, InviteCodeModalCallback],
  );
}
