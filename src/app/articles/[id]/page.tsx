import Container from "@/components/Container";
import { articles } from "@/data/articles";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageParams = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return articles.map(({ id }) => ({ id }));
}

export default function ArticlePage({ params }: PageParams) {
  const { id } = params;
  const article = articles.find((a) => a.id == id);
  if (!article) return notFound();
  const { title, image } = article;

  return (
    <main>
      <Container>
        <Image
          className="article-image rounded-2xl w-full max-w-[1300px] mx-auto"
          src={`${image.url}&w=2000&h=1300`}
          alt={image.alt}
          width={2000}
          height={1300}
          placeholder="blur"
          blurDataURL={image.lqip}
          style={{
            // @ts-expect-error not supported yet
            viewTransitionClass: "article-image",
            viewTransitionName: `article-image-${id}`,
          }}
        />
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-7xl font-bold" style={{}}>
            {title}
          </h1>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed dicta corporis. Possimus magni a
            consequatur, vero fugiat laborum rem harum aliquid provident laboriosam, iste accusantium est ducimus
            veritatis labore. Facilis ullam soluta dolore eum iste, veritatis expedita maiores vitae assumenda, maxime
            nam! Nobis asperiores dignissimos doloribus obcaecati eaque, rem provident voluptates temporibus similique
            animi iste deleniti magni exercitationem culpa minima, reiciendis dolores? Libero, repellat! Iure atque
            aspernatur libero, amet unde beatae adipisci a ex qui soluta quis magnam nostrum optio, praesentium sequi
            dolorum, recusandae culpa aut ea maiores autem repellat nam distinctio. Molestiae dolorum voluptatem
            praesentium amet natus vitae quia?
          </p>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sed dicta corporis. Possimus magni a
            consequatur, vero fugiat laborum rem harum aliquid provident laboriosam, iste accusantium est ducimus
            veritatis labore. Facilis ullam soluta dolore eum iste, veritatis expedita maiores vitae assumenda, maxime
            nam! Nobis asperiores dignissimos doloribus obcaecati eaque, rem provident voluptates temporibus similique
            animi iste deleniti magni exercitationem culpa minima, reiciendis dolores?
          </p>
        </div>
      </Container>
    </main>
  );
}
