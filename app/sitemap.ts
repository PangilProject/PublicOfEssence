import type { MetadataRoute } from "next";
import { SITE_URL } from "./_lib/site";
import { worshipList } from "@/views/WorshipPage/constants";
import { scheduleList } from "@/views/SchedulePage/constants";

// output: export에서는 metadata 라우트에 명시적 정적 선언이 필요
export const dynamic = "force-static";

const routes = ["", "/about", "/worship", "/schedule", "/resource", "/contact"];

const detailRoutes = [
  ...worshipList.map((item) => `/worship/${item.count}`),
  ...scheduleList.map((item) => `/schedule/${item.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...detailRoutes.map((route) => ({
      url: `${SITE_URL}${route}/`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
