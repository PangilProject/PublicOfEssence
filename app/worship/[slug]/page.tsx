import { notFound } from "next/navigation";
import EventDetail from "@/Components/EventDetail/EventDetail";
import { worshipList } from "@/views/WorshipPage/constants";
import { buildPageMetadata, SITE_URL } from "../../_lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return worshipList.map((item) => ({ slug: String(item.count) }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// "2026-01-17" → "2026년 1월 17일 (토)"
function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00+09:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    timeZone: "Asia/Seoul",
  }).format(date);
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = worshipList.find((w) => String(w.count) === slug);
  if (!item) return {};

  return buildPageMetadata({
    title: `제${item.count}회 집회 ${item.topic}`,
    description: item.description,
    path: `/worship/${slug}`,
    image: item.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const index = worshipList.findIndex((w) => String(w.count) === slug);
  if (index === -1) notFound();

  const item = worshipList[index];
  const prev = worshipList[index - 1];
  const next = worshipList[index + 1];

  // 검색엔진에 집회를 행사로 전달하는 구조화 데이터 (schema.org Event)
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `제${item.count}회 집회 ${item.topic}`,
    startDate: item.date,
    location: { "@type": "Place", name: item.place },
    image: item.image,
    description: item.description,
    organizer: { "@type": "Organization", name: "ESSENCE", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <EventDetail
        kicker={`WORSHIP · 제${item.count}회`}
        title={item.topic}
        posterSrc={item.image}
        posterAlt={item.image_alt}
        meta={[
          { label: "일자", value: formatDate(item.date) },
          { label: "장소", value: item.place },
        ]}
        verse={item.verse}
        story={item.story ?? [item.description]}
        photos={item.photos}
        backHref="/worship/"
        backLabel="집회 기록으로"
        prev={
          prev && {
            href: `/worship/${prev.count}/`,
            label: `제${prev.count}회 · ${prev.topic}`,
          }
        }
        next={
          next && {
            href: `/worship/${next.count}/`,
            label: `제${next.count}회 · ${next.topic}`,
          }
        }
      />
    </>
  );
}
