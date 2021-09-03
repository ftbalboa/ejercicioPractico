import { ArticleTypeOne } from './ArticlesTypes/ArticleTypeOne';

export function Article({info}) {
console.log(info);
  return (
    <div className="Article">
        <ArticleTypeOne info={info} />
    </div>
  );
}

