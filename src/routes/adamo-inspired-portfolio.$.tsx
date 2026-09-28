import { createFileRoute, redirect } from "@tanstack/react-router";

const legacyDestinations = {
  about: "/about",
  belts: "/belts",
  "casual-shoes": "/casual-shoes",
  "classic-shoes": "/classic-shoes",
  collections: "/collections",
  contact: "/contact",
} as const;

export const Route = createFileRoute("/adamo-inspired-portfolio/$")({
  beforeLoad: ({ params }) => {
    const destination = params._splat?.replace(/^\/+|\/+$/g, "") ?? "";
    const to = destination in legacyDestinations
      ? legacyDestinations[destination as keyof typeof legacyDestinations]
      : "/";

    throw redirect({
      to,
      replace: true,
    });
  },
});