"use client";
import Input from "~/components/ui/input";
import { Modal } from "~/components/ui/modal";
import { Button } from "../../Auth-Button";
import { useMediaQuery } from "~/utils/hooks/useMediaQuery";
import { cn } from "~/utils/utils";
import { useParams, useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";
import { api } from "~/trpc/react";

function DeleteWorkspaceModal({
  showDeleteWorkspaceModal,
  setShowDeleteWorkspaceModal,
}: {
  showDeleteWorkspaceModal: boolean;
  setShowDeleteWorkspaceModal: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const params = useParams();
  const { data: workspace } = api.workspace.getSpecificWorkspace.useQuery({
    slug: params.accountSlug as unknown as string,
  });
  const [deleting, setDeleting] = useState(false);

  async function deleteWorkspace() {
    return new Promise((resolve, reject) => {
      setDeleting(true);
      fetch(`/api/workspaces/${workspace?.workspace.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.ok) {
          await mutate("/api/workspaces");
          router.push("/workspaces");
          resolve(null);
        } else {
          setDeleting(false);
          const error = await res.text();
          reject(error);
        }
      });
    });
  }

  const { isMobile } = useMediaQuery();

  return (
    <Modal
      showModal={showDeleteWorkspaceModal}
      setShowModal={setShowDeleteWorkspaceModal}
    >
      <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 px-4 py-4 pt-8 sm:px-16">
        {/* <Logo /> */}
        <h3 className="text-lg font-medium">Delete Workspace</h3>
        <p className="text-center text-sm text-gray-500">
          Warning: This will permanently delete your workspace, custom domain,
          and all associated links and their respective stats.
        </p>
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          toast.promise(deleteWorkspace(), {
            loading: "Deleting workspace...",
            success: "Workspace deleted successfully!",
            error: (err) => err,
          });
        }}
        className="flex flex-col space-y-6 bg-gray-50 px-4 py-8 text-left sm:px-16"
      >
        <div>
          <label
            htmlFor="workspace-slug"
            className="block text-sm font-medium text-gray-700"
          >
            Enter the workspace slug{" "}
            <span className="font-semibold text-black">
              {params.accountSlug}
            </span>{" "}
            to continue:
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <Input
              type="text"
              name="workspace-slug"
              id="workspace-slug"
              autoFocus={!isMobile}
              autoComplete="off"
              pattern={params.accountSlug as unknown as string}
              disabled={!workspace?.isOwner}
              className={cn(
                "block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm",
                {
                  "cursor-not-allowed bg-gray-100": !workspace?.isOwner,
                },
              )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="verification" className="block text-sm text-gray-700">
            To verify, type{" "}
            <span className="font-semibold text-black">
              confirm delete workspace
            </span>{" "}
            below
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <Input
              type="text"
              name="verification"
              id="verification"
              pattern="confirm delete workspace"
              required
              autoComplete="off"
              disabled={!workspace?.isOwner}
              className={cn(
                "block w-full rounded-md border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm",
                {
                  "cursor-not-allowed bg-gray-100": !workspace?.isOwner,
                },
              )}
            />
          </div>
        </div>

        <Button
          text="Confirm delete workspace"
          variant="danger"
          loading={deleting}
          {...(!workspace?.isOwner && {
            disabledTooltip: "Only workspace owners can delete a workspace.",
          })}
        />
      </form>
    </Modal>
  );
}

export function useDeleteWorkspaceModal() {
  const [showDeleteWorkspaceModal, setShowDeleteWorkspaceModal] =
    useState(false);

  const DeleteWorkspaceModalCallback = useCallback(() => {
    return (
      <DeleteWorkspaceModal
        showDeleteWorkspaceModal={showDeleteWorkspaceModal}
        setShowDeleteWorkspaceModal={setShowDeleteWorkspaceModal}
      />
    );
  }, [showDeleteWorkspaceModal, setShowDeleteWorkspaceModal]);

  return useMemo(
    () => ({
      setShowDeleteWorkspaceModal,
      DeleteWorkspaceModal: DeleteWorkspaceModalCallback,
    }),
    [setShowDeleteWorkspaceModal, DeleteWorkspaceModalCallback],
  );
}
