export function ArticleFour({ info }) {
  const handleTituloMarquesina = () => {
    if (info.autor) return `Por ${info.autor}`;
    if (info.marquesina) return info.marquesina;
  };
  return (
    <div className="Article_four">
      <a href={info.url} className="Article_four_topContainer">
        <img alt={info.title} src={info.img} />
        <strong>ESPACIO PATROCINADO</strong>
      </a>
      <div className="Article_four_botContainer">
        <div className="Article_four_title">
          <a href={info.url}>
            <em>{info.volanta}</em> {info.titulo}{" "}
          </a>
        </div>
        <strong className="Article_four_author">
          {handleTituloMarquesina()}
        </strong>
      </div>
    </div>
  );
}
