import { ArticleOne } from './ArticlesTypes/ArticleOne';
import { ArticleThree } from './ArticlesTypes/ArticleThree';
import { ArticleTwo } from './ArticlesTypes/ArticleTwo';
import { ArticleFour } from './ArticlesTypes/ArticleFour';
import { ArticleFive } from './ArticlesTypes/ArticleFive';

export function Article({info}) {
console.log(info);
  return (
    <div className="Article">
        <ArticleFive info={info} />
    </div>
  );
}

