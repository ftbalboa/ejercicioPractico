export function ArticleThree({ info }) {
  return (
    <div className="Article_three">
      <div className="Article_three_title">
        <a href={info.url}>
          <em>{info.volanta}</em>
          {info.titulo}
        </a>
      </div>
      <figure className="Article_three_authorImg">
        <img src={info.autorImg} alt={info.author} ></img>
      </figure>
      <strong className="Article_three_author">{info.autor}</strong>
      <hr />
    </div>
  );
}
