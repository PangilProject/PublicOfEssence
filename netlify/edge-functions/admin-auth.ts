import type { Context } from "https://edge.netlify.com";

// /admin-stats 를 HTTP Basic 인증으로 보호하는 엣지 함수.
// 비밀번호는 Netlify 환경변수로만 존재하며, 클라이언트 번들에는 절대 실리지 않는다.
//   ADMIN_STATS_PASSWORD  (필수) — 접속 비밀번호
//   ADMIN_STATS_USER      (선택) — 사용자명, 미설정 시 "admin"
export default async (request: Request, context: Context) => {
  const expectedPass = Deno.env.get("ADMIN_STATS_PASSWORD");
  const expectedUser = Deno.env.get("ADMIN_STATS_USER") || "admin";

  // 비밀번호 환경변수가 없으면 접근 차단(fail-closed) — 실수로 열려 있는 상태를 방지
  if (!expectedPass) {
    return new Response("관리자 통계 페이지 인증이 설정되지 않았습니다.", {
      status: 503,
    });
  }

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    const decoded = atob(header.slice(6));
    const sep = decoded.indexOf(":");
    const user = decoded.slice(0, sep);
    const pass = decoded.slice(sep + 1);
    if (user === expectedUser && pass === expectedPass) {
      // 인증 통과 → 정적 페이지를 그대로 전달
      return context.next();
    }
  }

  // 미인증 → 브라우저 기본 로그인 창을 띄우는 401 응답
  return new Response("인증이 필요합니다.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="ESSENCE Stats", charset="UTF-8"',
    },
  });
};

export const config = {
  path: ["/admin-stats", "/admin-stats/"],
};
