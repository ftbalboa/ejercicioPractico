import { Article } from "../../Article/";
import { handleTitle } from "../ArtContainer";

export function NovedadesContainer({ articles, title, link }) {
  const mapArticles = (articleType) =>
    articles.map((article, index) => (
      <div className="NovedadesContainer_col">
        <Article info={article} type = {articleType} key={index} />
      </div>
    ));

  return (
    <div className="NovedadesContainer">
      {handleTitle(title, link)}
      <div className="NovedadesContainer_row">
        {mapArticles("one")}
      </div>
    </div>
  );
}
