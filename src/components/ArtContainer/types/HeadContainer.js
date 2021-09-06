import { Article } from "../../Article/";

//Head container es el unico de los containers que no implementa titulo
export function HeadContainer({ articles }) {
  return (
    <div className="HeadContainer">
        <div className="HeadContainer_mainArticle">
          {articles[0] && <Article info={articles[0]} type="five" />}
        </div>
        <div className="HeadContainer_sideArticles">
          {articles[1] && <Article info={articles[1]} type="one" marginBot={true}/>}
          {articles[2] && <Article info={articles[2]} type="one" />}
        </div>
    </div>
  );
}