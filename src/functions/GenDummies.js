import axios from "axios";
import { DATA } from "./data/dataFromApi";

//import imgs for PORTRAITS
import por1 from "../assets/portrait1.png";
import por2 from "../assets/portrait2.png";
import por3 from "../assets/portrait3.png";
import por4 from "../assets/portrait4.png";
import por5 from "../assets/portrait5.png";
import lnImage from "../assets/Nav/placeholderLN.jpg";

//API DATA
const API = "https://newsapi.org/v2/everything";
const KEY = "87d5534e9b5f4e3381d8c7ccaf1385fb";

const VOLANTAS = ["Análisis.", "Alerta.", "Historia.", "Inesperado."];
const PORTRAITS = [por1, por2, por3, por4, por5];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

//Random null se utiliza para generar una probabilidad de que cierto campo
//se encuentre en null y realizar pruebas mas aleatorias
const randomNull = (parametro, probabilidad) => {
  return Math.random() < probabilidad ? parametro : null;
};

export function GenDummies(force) {
  const cleanModel = (articles)=> {
    return articles.map((article) => ({
      titulo: randomNull(article.title, 1),
      autor: randomNull(article.author, 1),
      img: randomNull(article.urlToImage, 1),
      url: randomNull(article.url, 1),
      bajada: randomNull(article.description, 1),
      volanta: randomNull(VOLANTAS[getRandomInt(0, VOLANTAS.length - 1)], 1),
      marquesina: randomNull("Marquesina " + getRandomInt(0, 9), 0.5),
      autorImg: randomNull(PORTRAITS[getRandomInt(0, PORTRAITS.length - 1)], 1),
    }))
  }
  //utilizar force cuando no se desee usar la API o falle
  if (force) {
    return cleanModel(DATA[getRandomInt(0,1)].articles);
  }

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
    return cleanModel(res.data.articles);
  });
}
