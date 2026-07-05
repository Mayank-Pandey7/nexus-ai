"use client";

import { useRouter } from "next/navigation";
import ProjectsView from "@/components/sections/ProjectsView";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <ProjectsView
      onBackToHome={() => router.push("/")}
    />
  );
}