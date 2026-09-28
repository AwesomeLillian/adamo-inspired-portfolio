import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/adamo-inspired-portfolio")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});