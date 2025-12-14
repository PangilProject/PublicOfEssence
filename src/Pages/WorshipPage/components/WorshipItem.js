import React, { useState } from "react";
import {
  WorshipInfoItem,
  ItemInfo,
  WorshipData,
  WorshipPlace,
  Hr,
  WorshipTopic,
  WorshipDescription,
  WorshipCount,
  WorshipImage,
} from "../styles";

import emptyImage from "../../../assets/images/Image404.png";

function WorshipItem({ item, imageExists }) {
  const [isHovered, setIsHovered] = useState(false);

  const hasImage = item?.image && imageExists[item.image];

  return (
    <WorshipInfoItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ItemInfo color="white">
          <WorshipData>일자 | {item?.date}</WorshipData>
          <WorshipPlace>장소 | {item?.place}</WorshipPlace>
          <Hr />
          <WorshipTopic>
            <strong>[주제]</strong> {item?.topic}{" "}
          </WorshipTopic>
          <WorshipDescription>{item?.description}</WorshipDescription>
        </ItemInfo>
      ) : (
        <ItemInfo color="black">
          <WorshipCount>{item?.count}회</WorshipCount>
          <WorshipImage
            src={hasImage ? item.image : emptyImage}
            alt={item?.image_alt || "worship_poster"}
          />
        </ItemInfo>
      )}
    </WorshipInfoItem>
  );
}

export default WorshipItem;
