import { notFound } from "next/navigation";
import EventDetail from "@/Components/EventDetail/EventDetail";
import { scheduleList } from "@/views/SchedulePage/constants";
import { buildPageMetadata } from "../../_lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return scheduleList.map((item) => ({ slug: item.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = scheduleList.find((s) => s.slug === slug);
  if (!item) return {};

  return buildPageMetadata({
    title: item.title,
    description: item.description,
    path: `/schedule/${slug}`,
    image: item.image,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const item = scheduleList.find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <EventDetail
      kicker="SCHEDULE"
      title={item.title}
      posterSrc={item.image}
      posterAlt={item.image_alt}
      meta={[
        { label: "일시", value: item.date },
        { label: "장소", value: item.place },
        { label: "대상", value: item.target },
      ]}
      verse={item.verse}
      story={item.story ?? [item.description]}
      photos={item.photos}
      backHref="/schedule/"
      backLabel="일정으로"
      showPagination={false}
    />
  );
}
