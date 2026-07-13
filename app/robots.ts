import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";

// output: export에서는 metadata 라우트에 명시적 정적 선언이 필요
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
