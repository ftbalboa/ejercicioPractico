import { Article } from "../../Article/";
import { handleTitle } from "../ArtContainer";

export function NotasContainer({ articles, title, link }) {
  const mapArticles = (articleType) =>
    articles.map((article, index) => (
      <div className="NotasContainer_col"  key={index}>
        <Article info={article} type = {articleType} />
      </div>
    ));

  return (
    <div className="NotasContainer">
      {handleTitle(title, link)}
      <div className="NotasContainer_row">
        {mapArticles("four")}
      </div>
    </div>
  );
}
