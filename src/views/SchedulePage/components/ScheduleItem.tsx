"use client";

import type { ScheduleInfo as ScheduleInfoType } from "../constants";
import {
  ScheduleInfoItem,
  HoverInfo,
  DefaultInfo,
  ScheduleTitle,
  ScheduleInfo,
  Hr,
  WorshipCount,
  WorshipImage,
} from "../styles";

// public/Img에는 Image404.png가 없어 assets의 실제 파일을 사용
import emptyImage from "../../../assets/images/Image404.png";

interface ScheduleItemProps {
  item: ScheduleInfoType;
}

function ScheduleItem({ item }: ScheduleItemProps) {
  return (
    <ScheduleInfoItem href={`/schedule/${item.slug}/`}>
      <HoverInfo $color="white">
        <ScheduleTitle>{item?.topic}</ScheduleTitle>
        <Hr />
        <ScheduleInfo>
          <strong>장소 |</strong> {item?.place}{" "}
        </ScheduleInfo>
        <ScheduleInfo>
          <strong>대상 |</strong> {item?.target}{" "}
        </ScheduleInfo>
        <ScheduleInfo>
          <strong>일시 |</strong> {item?.date}{" "}
        </ScheduleInfo>
      </HoverInfo>

      <DefaultInfo $color="black">
        <WorshipCount>{item?.title}</WorshipCount>
        <WorshipImage
          src={item?.image || emptyImage.src}
          alt={item?.image_alt || "schedule_poster"}
          onError={(e) => {
            e.currentTarget.src = emptyImage.src;
          }}
        />
      </DefaultInfo>
    </ScheduleInfoItem>
  );
}

export default ScheduleItem;
