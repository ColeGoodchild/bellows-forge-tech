import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import {
  sitemapStaticPaths,
  sitemapXML,
  sitemapPathForLocation,
  isSitemapRouteIncluded,
  type SitemapEntry,
} from "@/lib/sitemap";
import { automationServices } from "@/data/automation-services";
import { industries } from "@/components/site/industries-data";
import { locations } from "@/data/locations";

const BASE_URL = "https://bellows-forge-tech.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const dynamic: { routeId: string; to: string; slugs: string[] }[] = [
          {
            routeId: "/automation/$slug",
            to: "/automation/$slug",
            slugs: automationServices.map((s) => s.slug),
          },
          {
            routeId: "/industries/$slug",
            to: "/industries/$slug",
            slugs: industries.map((i) => i.slug),
          },
          {
            routeId: "/locations/$slug",
            to: "/locations/$slug",
            slugs: locations.map((l) => l.slug),
          },
        ];

        for (const group of dynamic) {
          if (!isSitemapRouteIncluded(router.routesById[group.routeId])) continue;
          for (const slug of group.slugs) {
            const location = router.buildLocation({
              to: group.to,
              params: { slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, group.routeId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }

        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
