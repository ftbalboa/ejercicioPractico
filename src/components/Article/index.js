import { ArticleOne } from './ArticlesTypes/ArticleOne';

export function Article({info}) {
console.log(info);
  return (
    <div className="Article">
        <ArticleOne info={info} />
    </div>
  );
}

