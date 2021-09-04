import axios from "axios";

//import imgs for portraits
import por1 from "../assets/portrait1.png";
import por2 from "../assets/portrait2.png";
import por3 from "../assets/portrait3.png";
import por4 from "../assets/portrait4.png";
import por5 from "../assets/portrait5.png";

//https://newsapi.org/v2/everything?sources=la-nacion&page=20&pageSize=15&apiKey=87d5534e9b5f4e3381d8c7ccaf1385fb
const API = "https://newsapi.org/v2/everything";
//const KEY = '87d5534e9b5f4e3381d8c7ccaf1385fb';
const KEY = "224affd0c5da4fdb88e3cd62fe80361a";

const volantas = ["Análisis.", "Alerta.", "Historia.", "Inesperado."];
const portraits = [por1, por2, por3, por4, por5];
const nombres = ["Pedro", "Rodrigo", "Malena", "Sofia"];
const apellidos = ["Suarez", "Perez", "López", "Rodriguez"];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomNull = (parametro, probabilidad) => {
  return Math.random() < probabilidad ? parametro : null;
};

export function GenDummies() {
  // get random info for newsapi
  return axios({
    method: "get",
    url: API,
    params: {
      sources: "la-nacion",
      page: getRandomInt(1, 5),
      pageSize: 15,
      apiKey: KEY,
    },
  }).then((res) => {
    return res.data.articles.map((article) => ({
      titulo: randomNull(article.title, 1),
      autor: randomNull(
        article.author,
        1
      ),
      img: randomNull(article.urlToImage, 1),
      url: randomNull(article.url, 1),
      bajada: randomNull(article.description, 1),
      volanta: randomNull(volantas[getRandomInt(0, volantas.length - 1)], 1),
      marquesina: randomNull("Marquesina " + getRandomInt(0, 9), 0.5),
      autorImg: randomNull(
        portraits[getRandomInt(0, portraits.length - 1)],
        1
      ),
    }));
  });
}
