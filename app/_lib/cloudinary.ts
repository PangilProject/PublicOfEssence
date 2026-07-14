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
 * 강제 다운로드 URL. <a download>는 크로스 오리진에서 무시되므로
 * Cloudinary의 fl_attachment로 Content-Disposition을 지정한다.
 */
export function cldDownload(publicId: string): string {
  return `${UPLOAD_BASE}/fl_attachment/${publicId}`;
}
