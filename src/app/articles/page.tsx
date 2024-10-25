import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main>
      <Container>
        <h1 className="font-bold text-7xl max-w-screen-md">Articles</h1>
        <ul className="grid grid-cols-3 gap-4 mt-10">
          {articles.map((article) => {
            return (
              <li key={article.id}>
                <ArticleCard {...article} />
              </li>
            );
          })}
        </ul>
      </Container>
    </main>
  );
}
