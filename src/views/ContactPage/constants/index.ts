export interface ContactDetail {
  label: string;
  value: string;
  /** 있으면 클릭 가능한 링크로 렌더 (tel:, mailto: 등) */
  href?: string;
}

export interface ContactInfo {
  title: string;
  subtitle: string;
  details: ContactDetail[];
}

export const ContactList: ContactInfo[] = [
  {
    title: "일반 문의",
    subtitle: "General Inquiry",
    details: [
      {
        label: "phone",
        value: "010-2076-6032 (예배팀장 오예림)",
        href: "tel:010-2076-6032",
      },
      {
        label: "email",
        value: "essence.worship.2016@gmail.com",
        href: "mailto:essence.worship.2016@gmail.com",
      },
    ],
  },
  {
    title: "후원 문의",
    subtitle: "Donation",
    details: [
      {
        label: "phone",
        value: "010-5634-6683 (후원팀장 김광일)",
        href: "tel:010-5634-6683",
      },
      {
        label: "후원 계좌",
        value: "3333-37-8490863 (카카오뱅크 김광일)",
      },
    ],
  },
];
