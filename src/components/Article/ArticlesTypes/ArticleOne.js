
export function ArticleOne({info}) {
  const handleTituloMarquesina = () => {
    if(info.autor) return (`Por ${info.autor}`)
    if(info.marquesina) return (info.marquesina)
  }
  return (
    <div className="Article_one">
        <a href={info.url}><img alt={info.title} src={info.img} /></a>
        <div className = "Article_one_title"> <a href={info.url}> <em>{info.volanta}</em> {info.titulo} </a></div>
        <strong className= "Article_one_author">{handleTituloMarquesina()}</strong>
    </div>
  );
}

