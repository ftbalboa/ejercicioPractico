import { Article } from "../../Article/";

export function HeadContainer({ articles, title, link }) {
  return (
    <div className="HeadContainer">
        <div className="HeadContainer_mainArticle">
          {articles[0] && <Article info={articles[0]} type="five" />}
        </div>
        <div className="HeadContainer_sideArticles">
          {articles[1] && <Article info={articles[1]} type="one" />}
          {articles[2] && <Article info={articles[2]} type="one" />}
        </div>
    </div>
  );
}