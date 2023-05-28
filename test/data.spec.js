import { filtrarDirector, filtrarProductor, AZdata, ZAdata } from '../src/data.js';
import dataGhibli from '../src/data/ghibli/ghibli.js'

// ------- filtrar por director -------//
describe('filtrarDirector', () => {
  it('is a function', () => {
    expect(typeof filtrarDirector).toBe('function');
  });

  it('returns `returns movies by director Hayao Miyazaki`', () => {
    expect(filtrarDirector('Hayao Miyazaki')).toEqual([{'director': 'Hayao Miyazaki', 'title': 'Castle in the Sky'}]);
  });
});

// ------- filtrar por productor -------//
describe('filtrarProductor', () => {
  it('is a function', () => {
    expect(typeof filtrarProductor).toBe('function');
  });

  it('returns `peliculas del productor Toshio Suzuki`', () => {
    expect(filtrarProductor('Toshio Suzuki')).toEqual([{'producer': 'Toshio Suzuki', 'title': 'Porco Rosso'}]);
  });
});

//------- orden de AZ -------//
describe('AZdata', () =>{
  it('is a function', () => {
    expect(typeof AZdata).toBe('function');
  });

  it('ordenando de la A a la Z, el primer elemento debe ser `Castle in the Sky`', () => {
    const result = AZdata(dataGhibli, 'Castle in the Sky');
    expect(result[0].title).toBe('Castle in the Sky');
  });

});

//------- orden de ZA -------//
describe('ZAdata', () =>{
  it('is a function', () => {
    expect(typeof ZAdata).toBe('function');
  });

  it('ordenando de la Z a la A, el primer elemento debe ser `Whisper of the Heart`', () => {
    const result = ZAdata(dataGhibli, 'Whisper of the Heart');
    expect(result[0].title).toBe('Whisper of the Heart');
  });

});