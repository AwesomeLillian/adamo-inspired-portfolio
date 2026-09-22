import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/shoes")({
  beforeLoad: () => {
    throw redirect({ to: "/collections", replace: true });
  },
});