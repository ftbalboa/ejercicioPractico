import { ArticleOne } from "./ArticlesTypes/ArticleOne";
import { ArticleThree } from "./ArticlesTypes/ArticleThree";
import { ArticleTwo } from "./ArticlesTypes/ArticleTwo";
import { ArticleFour } from "./ArticlesTypes/ArticleFour";
import { ArticleFive } from "./ArticlesTypes/ArticleFive";

export function Article({ info, type }) {
  console.log(info);
  const articleTypes = {
    one: (info) => <ArticleOne info={info} />,
    two: (info) => <ArticleTwo info={info} />,
    three: (info) => <ArticleThree info={info} />,
    four: (info) => <ArticleFour info={info} />,
    five: (info) => <ArticleFive info={info} />,
  };
  return (
    <div className="Article">
      {articleTypes[type] && articleTypes[type](info)}
    </div>
  );
}
