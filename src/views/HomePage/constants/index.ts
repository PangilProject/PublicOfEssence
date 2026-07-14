import { cldImage } from "../../../../app/_lib/cloudinary";

// 홈 히어로 슬라이더는 화면 폭 전체를 채우므로 넉넉한 폭으로 전송
export const slideImages: string[] = [
  cldImage("banner-1", 1600),
  cldImage("banner-2", 1600),
  cldImage("banner-3", 1600),
];
