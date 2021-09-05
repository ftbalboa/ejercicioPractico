import { Article } from "../../Article/";

export function OpinionContainer({ articles, title, link }) {
  const handleTitle = () => {
    if (title) {
      return <div className="titleContainer">
      {link? <a href={link} >{title}</a> : {title}}
      </div>;
    }
  };
  return (
    <div className="OpinionContainer">
      {handleTitle()}
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
