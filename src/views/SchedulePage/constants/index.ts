import { cldImage } from "../../../../app/_lib/cloudinary";

import type { EventPhoto } from "../../WorshipPage/constants";

export interface ScheduleInfo {
  /** 상세 페이지 URL 경로 (/schedule/[slug]) */
  slug: string;
  title: string;
  date: string;
  place: string;
  target: string;
  color: string;
  image: string;
  image_alt: string;
  description: string;
  topic: string;
  verse?: { text: string; reference: string };
  story?: string[];
  photos?: EventPhoto[];
}

export const scheduleList: ScheduleInfo[] = [
  {
    slug: "2024-summer-camp",
    title: "2024 여름 수련회",
    date: "2024.07.23 ~ 07.24",
    place: "나무들의 집 (인천 강화군 선원면 시리미로 42번길 55)",
    target: "중 • 고등부",
    color: "pink",
    image: cldImage("2024-summer-camp", 800),
    image_alt: "1차 집회 포스터 이미지",
    description:
      "무너진 예배의 단을 점검하고 재건하는 과정 가운데 하나님의 일하심을 바라보며, 하나님을 의지하여 나아가는 시간이 되기를 바랍니다.",
    topic: "𝚁𝙴𝙱𝚄𝙸𝙻𝙳﹕성벽을 다시 세우다",
    photos: [
      { id: "camp-2024-p1", alt: "2024 여름 수련회 현장 사진1" },
      { id: "camp-2024-p2", alt: "2024 여름 수련회 현장 사진2" },
      { id: "camp-2024-p3", alt: "2024 여름 수련회 현장 사진3" },
      { id: "camp-2024-p4", alt: "2024 여름 수련회 현장 사진4" },
      { id: "camp-2024-p5", alt: "2024 여름 수련회 현장 사진5" },
      { id: "camp-2024-p6", alt: "2024 여름 수련회 현장 사진6" },
    ],
  },
];
