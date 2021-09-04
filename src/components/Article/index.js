import { ArticleOne } from './ArticlesTypes/ArticleOne';
import { ArticleThree } from './ArticlesTypes/ArticleThree';
import { ArticleTwo } from './ArticlesTypes/ArticleTwo';

export function Article({info}) {
console.log(info);
  return (
    <div className="Article">
        <ArticleThree info={info} />
    </div>
  );
}

