import { Article } from "../../Article/";
import { handleTitle } from "../ArtContainer";

export function NovedadesContainer({ articles, title, link }) {
  const mapArticles = (articleType) =>
    articles.map((article, index) => (
      <div className="NovedadesContainer_col">
        <Article info={article} type = {articleType} key={index} />
      </div>
    ));

    const rowMap = (arts) => (
        arts.reduce((acc,cv,i)=>{
            i % 3 === 0? acc.push([cv]) : acc[acc.length-1].push(cv) 
            return acc
},[]
        )
    )

  return (
    <div className="NovedadesContainer">
      {handleTitle(title, link)}
      <div className="NovedadesContainer_row">
        {mapArticles("one")}
      </div>
    </div>
  );
}