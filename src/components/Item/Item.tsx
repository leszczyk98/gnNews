import { Popover } from "antd";
import React from "react";
import { ViewTypeValue } from "../../types/ViewType";
import NewsPopover from "../NewsPopover";
import {
  Wrapper,
  Image,
  TitleSection,
  Title,
  Description,
  Author,
  ImageWrapper,
  Meta,
  Date,
} from "./Item.style";

export interface ItemProps {
  type: ViewTypeValue;
  author?: string;
  title: string;
  url: string;
  publishedAt: Date;
  desc?: string;
  image?: string;
}

const Item = ({
  author,
  publishedAt,
  title,
  url,
  desc,
  image,
  type,
}: ItemProps) => {
  return (
    <Popover
      content={
        <NewsPopover
          title={title}
          url={url}
          publishedAt={publishedAt}
          author={author}
          desc={desc}
          image={image}
        />
      }
      trigger="click"
    >
      <Wrapper type={type}>
        {image && (
          <ImageWrapper type={type}>
            <Image src={image} alt="" />
          </ImageWrapper>
        )}
        <TitleSection type={type}>
          <Title type={type}>{title}</Title>
          {desc && type === "list" && <Description>{desc}</Description>}
          <Meta type={type}>
            <Author>{author}</Author>
            {type === "list" && <Date>{publishedAt.toDateString()}</Date>}
          </Meta>
        </TitleSection>
      </Wrapper>
    </Popover>
  );
};

export default Item;
