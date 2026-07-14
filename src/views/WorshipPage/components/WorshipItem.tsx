"use client";

import type { WorshipInfo } from "../constants";
import {
  WorshipInfoItem,
  HoverInfo,
  DefaultInfo,
  WorshipData,
  WorshipPlace,
  Hr,
  WorshipTopic,
  WorshipDescription,
  WorshipCount,
  WorshipImage,
} from "../styles";

import emptyImage from "../../../assets/images/Image404.png";

interface WorshipItemProps {
  item: WorshipInfo;
}

function WorshipItem({ item }: WorshipItemProps) {
  return (
    <WorshipInfoItem href={`/worship/${item.count}/`}>
      <HoverInfo $color="white">
        <WorshipData>일자 | {item?.date}</WorshipData>
        <WorshipPlace>장소 | {item?.place}</WorshipPlace>
        <Hr />
        <WorshipTopic>
          <strong>[주제]</strong> {item?.topic}{" "}
        </WorshipTopic>
        <WorshipDescription>{item?.description}</WorshipDescription>
      </HoverInfo>

      <DefaultInfo $color="black">
        <WorshipCount>{item?.count}회</WorshipCount>
        <WorshipImage
          src={item?.image || emptyImage.src}
          alt={item?.image_alt || "worship_poster"}
          onError={(e) => {
            e.currentTarget.src = emptyImage.src;
          }}
        />
      </DefaultInfo>
    </WorshipInfoItem>
  );
}

export default WorshipItem;
