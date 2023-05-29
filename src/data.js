import dataGhibli from "./data/ghibli/ghibli.js"

export const filtrarDirector = (nombre) => {
  return dataGhibli.films.filter((movie) => movie.director === nombre);
}

export const filtrarProductor = (nombre) => {
  return dataGhibli.films.filter((movie) => movie.producer === nombre);
}

export const AZdata = () => {
  const azArray = Array.from(dataGhibli.films);
  return azArray.sort((nombre, nombre1) => {
    return (nombre.title< nombre1.title) ? -1:1

  });

}

export const ZAdata = () => {
  const zaArray = Array.from(dataGhibli.films);
  return zaArray.sort((nombre, nombre1) => {
    return (nombre.title< nombre1.title) ? 1:-1

  });

}

export const filtroBuscar = (word, dataGhibli) => {
  return dataGhibli.films.filter((movie) => movie.title.includes(word));

}



