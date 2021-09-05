import { Article } from "../../Article/";
import { handleTitle } from "../ArtContainer";

export function NotasContainer({ articles, title, link }) {
  const mapArticles = (articleType) =>
    articles.map((article, index) => (
      <div className="NotasContainer_col">
        <Article info={article} type = {articleType} key={index} />
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
