import { GenDummies } from "../functions/GenDummies";

const dummieModel = {
  titulo: null,
  autor: null,
  img: null,
  url: null,
  bajada: null,
  volanta: null,
  marquesina: null,
  autorImg: null,
};

describe("GenDummies", () => {
  test("GenDummies must return an Array", () => {
    return GenDummies().then((dummies) => {
      expect(dummies instanceof Array).toBe(true);
    });
  });
  test("GenDummies to have a lenght of 15 ", () => {
    return GenDummies().then((dummies) => {
      expect(dummies.length).toBe(15);
    });
  });
  test("Dummies must have model keys", () => {
    return GenDummies().then((dummies) => {
      dummies.forEach((dummie) => {
        expect(Object.keys(dummie)).toEqual(Object.keys(dummieModel));
      });
    });
  });
  test("Dummies must have differents titles", () => {
    return GenDummies().then((dummies) => {
      const duplicates = dummies.filter(
        (dummy, index) =>
          dummies.findIndex((dummyAux) => dummyAux.titulo === dummy.titulo) !==
          index
      );
        expect(duplicates.length).toEqual(0);
    });
  });
});
