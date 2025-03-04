"use client";
import { Form } from "./form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import { useToast } from "~/utils/hooks/useToast";

export default function GeneralSettings({ data }: any) {
  const router = useRouter();
  const { update } = useSession();
  const { toast } = useToast();
  const changeWorkspaceName = api.workspace.changeWorkspaceName.useMutation({
    onSettled(data, error, variables, context) {
      toast({
        description: "Successfully updated workspace name!",
      });
    },
  });

  const changeWorkspaceSlug = api.workspace.changeWorkspaceSlug.useMutation({
    onError(error, variables, context) {
      toast({
        description: `${error.message}`,
        variant: "destructive",
      });
    },
  });

  return (
    <>
      <Form
        title="Workspace Name"
        description={`This is the name of your workspace on ${process.env.NEXT_PUBLIC_APP_NAME}.`}
        inputAttrs={{
          name: "name",
          defaultValue: data?.workspace.name,
          placeholder: "My Workspace",
          maxLength: 32,
        }}
        helpText="Max 32 characters."
        {...(!data?.isOwner && {
          disabledTooltip:
            "Only workspace owners can change the workspace name.",
        })}
        handleSubmit={async (formData) => {
          const res = changeWorkspaceName.mutateAsync({
            updatedName: formData.name,
            workspaceId: data?.workspace.slug,
          });
        }}
      />
      <Form
        title="Workspace Slug"
        description={`This is your workspace's unique slug on ${process.env.NEXT_PUBLIC_APP_NAME}.`}
        inputAttrs={{
          name: "slug",
          defaultValue: data?.workspace.slug!,
          placeholder: "my-workspace",
          pattern: "^[a-z0-9-]+$",
          maxLength: 48,
        }}
        helpText="Only lowercase letters, numbers, and dashes. Max 48 characters."
        {...(!data?.isOwner && {
          disabledTooltip:
            "Only workspace owners can change the workspace slug.",
        })}
        handleSubmit={async (formData) => {
          const res = changeWorkspaceSlug
            .mutateAsync({
              workspaceId: data?.workspace.slug,
              updatedSlug: formData.slug,
            })
            .then((res) => {
              if (res?.slug === formData.slug) {
                toast({
                  description: "Succesfully updated workspace slug!",
                });
                router.push(`/dashboard/${res?.slug}/settings`);
              }
            });

          console.log(res);
        }}
       
      />
    </>
  );
}
