import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

// output: export에서는 metadata 라우트에 명시적 정적 선언이 필요
export const dynamic = "force-static";

const routes = ["", "/about", "/worship", "/schedule", "/resource", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
