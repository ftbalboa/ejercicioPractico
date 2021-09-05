import { HeadContainer } from "./types/HeadContainer";
import { NotasContainer } from "./types/NotasColor";
import { NovedadesContainer } from "./types/NovedadesContainer";
import { OpinionContainer } from "./types/OpinionContainer";

export function ArtContainer({ articles }) {
  const articlesSelect = (arrIndex) =>
    articles.filter((a, index) => arrIndex.includes(index));

  return (
    <div className="ArtContainer">
      <HeadContainer articles={articlesSelect([0, 1, 2])} />
      <OpinionContainer
        articles={articlesSelect([1, 2, 3])}
        title="Opinion"
        link="opinion"
      />
      <NotasContainer
        articles={articlesSelect([4, 5, 6])}
        title="Notas"
      />
      <NovedadesContainer
        articles={articlesSelect([7, 8, 9, 10, 11, 12])}
        title="Novedades"
        link="Novedades"
      />
    </div>
  );
}

// child functions
export const handleTitle = (title, link) => {
  if (title) {
    return (
      <div className="titleContainer">
        {link ? <a href={link}>{title}</a> : <>{ title }</>}
      </div>
    );
  }
};
