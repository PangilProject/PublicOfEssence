import React, { useState } from "react";
import {
  ScheduleInfoItem,
  ItemInfo,
  ScheduleTitle,
  ScheduleInfo,
  Hr,
  WorshipCount,
  WorshipImage,
} from "../styles";

const emptyImage = "/Img/Image404.png";

function ScheduleItem({ item, imageExists }) {
  const [isHovered, setIsHovered] = useState(false);

  const hasImage = item?.image && imageExists[item.image];

  return (
    <ScheduleInfoItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ItemInfo color="white">
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
        </ItemInfo>
      ) : (
        <ItemInfo color="black">
          <WorshipCount>{item?.title}</WorshipCount>
          <WorshipImage
            src={hasImage ? item.image : emptyImage}
            alt={item?.image_alt || "schedule_poster"}
          />
        </ItemInfo>
      )}
    </ScheduleInfoItem>
  );
}

export default ScheduleItem;
