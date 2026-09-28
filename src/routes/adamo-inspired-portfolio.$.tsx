import { createFileRoute, redirect } from "@tanstack/react-router";

const knownDestinations = new Set([
  "about",
  "belts",
  "casual-shoes",
  "classic-shoes",
  "collections",
  "contact",
]);

export const Route = createFileRoute("/adamo-inspired-portfolio/$")({
  beforeLoad: ({ params }) => {
    const destination = params._splat?.replace(/^\/+|\/+$/g, "") ?? "";

    throw redirect({
      to: knownDestinations.has(destination) ? `/${destination}` : "/",
      replace: true,
    });
  },
});