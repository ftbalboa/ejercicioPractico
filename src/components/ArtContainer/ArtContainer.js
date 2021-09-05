import { HeadContainer } from "./types/HeadContainer";
import { OpinionContainer } from "./types/OpinionContainer";

export function ArtContainer({ articles }) {
  return (
    <div className="ArtContainer">
        <HeadContainer articles={[articles[0],articles[2],articles[3]]} />
        <OpinionContainer articles={[articles[4],articles[5],articles[6]]} title="Opinion" link="opinion" />
    </div>
  );
}
