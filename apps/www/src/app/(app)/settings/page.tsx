import UploadLogo from "~/components/ui/auth/workspaces/upload-logo";
import DeleteWorkspace from "~/components/ui/auth/workspaces/DeleteWorkspace";
import { api } from "~/trpc/server";
import { TooltipProvider } from "~/components/ui/tooltip";
import GeneralSettings from "./_components/GeneralSettings";

export default async function Page(props: { params: { accountSlug: string } }) {
  // const params = useParams();
  // const { data, isLoading } = api.workspace.getSpecificWorkspace.useQuery({
  //   slug: params.accountSlug as unknown as string,
  // });
  const data = await api.workspace.getSpecificWorkspace({
    slug: props.params.accountSlug,
  });
  return (
    <section className="space-y-5 pb-10">
      <TooltipProvider>
        <GeneralSettings data={data} />
        <UploadLogo
          id={data?.workspace.id!}
          isOwner={data?.isOwner!}
          logo={data?.workspace.logo!}
        />
        <DeleteWorkspace />
      </TooltipProvider>
    </section>
  );
}
