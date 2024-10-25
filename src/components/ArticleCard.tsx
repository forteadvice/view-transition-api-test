"use client";

import { ArticleObject } from "@/data/articles";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState } from "react";

export default function ArticleCard({ id, title, image }: ArticleObject) {
  const [clicked, setClicked] = useState(false);

  return (
    <article className={cn("relative", { "z-100": id == "1" })}>
      <Image
        className="article-image w-full rounded-xl aspect-[5/4]"
        src={`${image.url}&w=2000&h=1300`}
        alt={image.alt}
        width={2000}
        height={1300}
        placeholder="blur"
        blurDataURL={image.lqip}
        style={{
          //@ts-expect-error not supported yet
          viewTransitionClass: "article-image",
          viewTransitionName: clicked ? `article-image-${id}` : undefined,
        }}
      />
      <div className="my-2">
        <Link
          href={`/articles/${id}`}
          className={cn("text-sm font-bold", "after:absolute after:top-0 after:left-0 after:size-full")}
          onClick={() => {
            setClicked(true);
          }}
        >
          {title}
        </Link>
      </div>
    </article>
  );
}
