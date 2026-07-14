const CLOUD_NAME = "u8v4hevz";
const UPLOAD_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Cloudinary 전송 URL 생성 헬퍼.
 * f_auto(브라우저별 최적 포맷), q_auto(자동 화질)를 기본 적용하고
 * width를 주면 해당 폭으로 리사이즈해 전송량을 줄인다.
 */
export function cldImage(publicId: string, width?: number): string {
  const transforms = ["f_auto", "q_auto"];
  if (width) transforms.push(`w_${width}`);
  return `${UPLOAD_BASE}/${transforms.join(",")}/${publicId}`;
}

/**
 * 갤러리 썸네일 URL. 원본 비율이 제각각이어도 4:3으로 중앙 크롭해
 * 그리드가 균일하게 유지되도록 한다.
 */
export function cldThumb(publicId: string, width: number): string {
  return `${UPLOAD_BASE}/f_auto,q_auto,w_${width},ar_4:3,c_fill/${publicId}`;
}

/**
 * 강제 다운로드 URL. <a download>는 크로스 오리진에서 무시되므로
 * Cloudinary의 fl_attachment로 Content-Disposition을 지정한다.
 */
export function cldDownload(publicId: string): string {
  return `${UPLOAD_BASE}/fl_attachment/${publicId}`;
}
