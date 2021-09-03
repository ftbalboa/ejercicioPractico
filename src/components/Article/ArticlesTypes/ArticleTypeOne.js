
export function ArticleTypeOne({info}) {
  return (
    <div className="ArticleTypeOne">
        <img alt="imagenArticulo" src={info.img} />
        <div className = "AtoBajada"> <em>{info.volanta}</em> {info.bajada} </div>
    </div>
  );
}

