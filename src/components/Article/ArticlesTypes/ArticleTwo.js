export function ArticleTwo({ info }) {
  const handleTituloMarquesina = () => {
    if (info.autor) return `Por ${info.autor}`;
    if (info.marquesina) return info.marquesina;
  };
  return (
    <div className="Article_two">
      <div className="Article_two_title">
        <a href={info.url}>
          <em>{info.volanta}</em> 
          {info.titulo}
        </a>
      </div>
      <p className="Article_two_bajada">{info.bajada}</p>
      <strong className="Article_two_author">{handleTituloMarquesina()}</strong>
    </div>
  );
}
