import React from "react";
import { Image, Link, Wrapper } from "./NewsPopover.style";

export interface NewsPopoverProps {
  title: string;
  author?: string;
  url: string;
  publishedAt: Date;
  desc?: string;
  image?: string;
}

const NewsPopover = ({publishedAt, title, url, author, desc, image}: NewsPopoverProps) => {
    return <Wrapper>
        <h4>{title}</h4>
        {image ? <Image src={image} /> : <p>brak zdjęcia</p>}
        <p>Desription: {desc || "brak"}</p>
        <Link href={url}>URL: {url}</Link>
        <p>Author: {author || "nieznany"}</p>
        <p>Data: {publishedAt.toDateString()}</p>
    </Wrapper>
}

export default NewsPopover;