import { Article } from "../../Article/";
import { handleTitle } from "../ArtContainer";

export function OpinionContainer({ articles, title, link }) {

  return (
    <div className="OpinionContainer">
      {handleTitle(title, link)}
      <div className="OpinionContainer_row">
        <div className="OpinionContainer_col">
          {articles[0] && <Article info={articles[0]} type="one" />}
        </div>
        <div className="OpinionContainer_col">
          {articles[1] && <Article info={articles[1]} type="two" />}
        </div>
        <div className="OpinionContainer_col">
          {articles[2] && <Article info={articles[2]} type="three" />}
        </div>
      </div>
    </div>
  );
}
