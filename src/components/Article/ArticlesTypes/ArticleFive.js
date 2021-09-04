export function ArticleFive({ info }) {
  const handleTituloMarquesina = () => {
    if (info.autor) return `Por ${info.autor}`;
    if (info.marquesina) return info.marquesina;
  };
  return (
    <div className="Article_five">
        <div className = "Article_five_title"> <a href={info.url}> <em>{info.volanta}</em> {info.titulo} </a></div>
        <p>{info.bajada}</p>
        <strong className= "Article_five_author">{handleTituloMarquesina()}</strong>
        <a href={info.url}><img alt={info.title} src={info.img} /></a>
    </div>
  );
}
