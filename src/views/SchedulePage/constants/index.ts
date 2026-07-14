import { cldImage } from "../../../../app/_lib/cloudinary";

export interface ScheduleInfo {
  title: string;
  date: string;
  place: string;
  target: string;
  color: string;
  image: string;
  image_alt: string;
  description: string;
  topic: string;
}

export const scheduleList: ScheduleInfo[] = [
  {
    title: "2024 여름 수련회",
    date: "2024.07.23 ~ 07.24",
    place: "나무들의 집 (인천 강화군 선원면 시리미로 42번길 55)",
    target: "중 • 고등부, 청년",
    color: "pink",
    image: cldImage("2024-summer-camp", 800),
    image_alt: "1차 집회 포스터 이미지",
    description:
      "삶의 본질이 무엇인지 돌아보며, 하나님의 자녀된 우리가 무엇을 잃지 말고 살아가야 할지 묵상하고 찬양하는 시간이 되길 원합니다.",
    topic: "𝚁𝙴𝙱𝚄𝙸𝙻𝙳﹕성벽을 다시 세우다",
  },
];
