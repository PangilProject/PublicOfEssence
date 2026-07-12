import worship1 from "../../../assets/images/worship_poster/worship_1.jpg";
import worship2 from "../../../assets/images/worship_poster/worship_2.jpg";
import worship3 from "../../../assets/images/worship_poster/worship_3.jpg";
import worship4 from "../../../assets/images/worship_poster/worship_4.jpg";
import worship5 from "../../../assets/images/worship_poster/worship_5.jpg";
import worship6 from "../../../assets/images/worship_poster/worship_6.jpg";
import worship7 from "../../../assets/images/worship_poster/worship_7.jpeg";
import worship8 from "../../../assets/images/worship_poster/worship_8.jpeg";
import worship9 from "../../../assets/images/worship_poster/worship_9.jpeg";
import worship10 from "../../../assets/images/worship_poster/worship_10.png";
import worship11 from "../../../assets/images/worship_poster/worship_11.jpg";

export interface WorshipInfo {
  count: number;
  date: string;
  place: string;
  color: string;
  image: string;
  image_alt: string;
  description: string;
  topic: string;
}

export const worshipList: WorshipInfo[] = [
  {
    count: 1,
    date: "2016-01-09",
    place: "양문교회",
    color: "pink",
    image: worship1.src,
    image_alt: "1차 집회 포스터 이미지",
    description:
      "그리스도인의 본질이 무엇인지를 돌아보며 삶의 현장인 학교에서 예배자로서의 삶을 살아내길 소망합니다.",
    topic: "ESSENCE, 본질",
  },
  {
    count: 2,
    date: "2017-01-17",
    place: "사랑스러운교회",
    color: "blue",
    image: worship2.src,
    image_alt: "2차 집회 포스터 이미지",
    description:
      "세상의 시선을 의식하는 것이 아니라 하나님을 바라보고 어떤 상황에서도 하나님 앞에서 하듯 하나님의 뜻을 구하며 나아가는 하나님의 자녀가 되길 소망합니다.",
    topic: "Coram Deo: 하나님 앞에서",
  },
  {
    count: 3,
    date: "2018-01-27",
    place: "사랑스러운교회",
    color: "pink",
    image: worship3.src,
    image_alt: "3차 집회 포스터 이미지",
    description:
      "그리스도의 선교적 사명을 감당하며 삶의 현장인 학교에 십자가를 세우는 세대로 거듭나자",
    topic: "학교에 십자가를 세우는 세대",
  },
  {
    count: 4,
    date: "2018-08-04",
    place: "여의도순복음 시흥교회",
    color: "green",
    image: worship4.src,
    image_alt: "4차 집회 포스터 이미지",
    description:
      "우리 삶의 주인, 우리가 따라가야 할 분은 오직 참 하나님 한 분이라는 것을 고백하며 오직 하나님께 영광 올려 드리길 소망합니다.",
    topic: "Soli Deo: 오직예수",
  },
  {
    count: 5,
    date: "2019-01-12",
    place: "시흥 평안교회",
    color: "yellow",
    image: worship5.src,
    image_alt: "5차 집회 포스터 이미지",
    description:
      "우리를 부르신 하나님의 말씀에 순종하며 예수님이 그러했듯 높아지는 것이 아니라 낮은 곳으로 향하여 섬기는 그리스도인 되길 소망합니다.",
    topic: "Accito: 부르심, 낮은 곳으로",
  },
  {
    count: 6,
    date: "2020-01-18",
    place: "정왕동 광진교회",
    color: "blue",
    image: worship6.src,
    image_alt: "6차 집회 포스터 이미지",
    description:
      "하나님의 자녀로서 우리의 정체성을 세상에 외치는 세대. 예수님을 믿는 믿음으로 삶을 사는 우리가 되길 원합니다.",
    topic: "Who Am I?",
  },
  {
    count: 7,
    date: "2021-03-01",
    place: "17시 유튜브",
    color: "skyblue",
    image: worship7.src,
    image_alt: "7차 집회 포스터 이미지",
    description:
      "우리가 먼저 예수님과의 첫사랑을 회복하고 다시 한번 거듭날 수 있길 소망합니다.",
    topic: "다시 한번",
  },
  {
    count: 8,
    date: "2023-02-18",
    place: "매화교회(예루살렘 성전)",
    color: "gray",
    image: worship8.src,
    image_alt: "8차 집회 포스터 이미지",
    description:
      "삶의 중심이 어디에 있는지를 돌아보고 삶의 중심이 하나님을 향하길 소망합니다.",
    topic: "중심",
  },
  {
    count: 9,
    date: "2024-01-13",
    place: "황금종교회",
    color: "gray",
    image: worship9.src,
    image_alt: "9차 집회 포스터 이미지",
    description:
      "느헤미야가 무너진 성벽을 재건하였듯이 예배의 단을 재건하는 우리 되길 소망합니다.",
    topic: "재건: 성벽을 다시 세우다",
  },
  {
    count: 10,
    date: "2025-01-18",
    place: "사랑스러운교회",
    color: "gray",
    image: worship10.src,
    image_alt: "10차 집회 포스터 이미지",
    description:
      "이 땅에서 사사로 부름받았음을 기억하고, 행동하는 자가 되어 하나님 나라와 그 뜻을 위해 움직이는, 사사와 같은 청년/청소년이 일어나기를 소망합니다.",
    topic: "THE ACTOR; 이 시대의 사사",
  },
  {
    count: 11,
    date: "2026-01-17",
    place: "양문교회",
    color: "gray",
    image: worship11.src,
    image_alt: "11차 집회 포스터 이미지",
    description:
      "‘함께’의 가치가 흐려지는 시대에서 하나님께서 말씀하신 ‘함께’의 의미를 세우는 세대, 함께 모여 예수님께 가는 세대를 꿈꿉니다.",
    topic: "함께가자",
  },
];
