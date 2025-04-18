"use client";

import { useAddWorkspaceModal } from "~/components/auth/workspaces/add-workspace-modal";
// import { useUpgradePlanModal } from "@/ui/modals/upgrade-plan-modal";
import Intro from "./Intro";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import LoadingSpinner from "~/components/ui/icons/LoadingSpinner";

export default function WelcomePageClient() {
  const { setShowAddWorkspaceModal, AddWorkspaceModal } =
    useAddWorkspaceModal();
  //   const { setShowUpgradePlanModal, UpgradePlanModal } = useUpgradePlanModal();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("step") === "workspace") {
      setTimeout(() => {
        setShowAddWorkspaceModal(true);
      }, 200);
    } else {
      setShowAddWorkspaceModal(false);
    }
    // if (searchParams.get("step") === "upgrade") {
    //   setTimeout(() => {
    //     setShowUpgradePlanModal(true);
    //   }, 200);
    // } else {
    //   setShowUpgradePlanModal(false);
    // }
  }, [searchParams.get("step")]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="flex h-screen flex-col items-center">
        <AddWorkspaceModal />

        <AnimatePresence mode="wait">
          <Intro />
          <>
            <button
              className="group fixed left-10 top-10 isolate z-[99] rounded-full p-2 transition-all hover:bg-gray-100"
              onClick={() => router.back()}
            >
              <ArrowLeft
                size={20}
                className="text-gray-500 group-hover:text-gray-700 group-active:scale-90"
              />
            </button>
          </>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}
