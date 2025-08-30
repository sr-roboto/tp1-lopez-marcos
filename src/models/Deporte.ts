import type { Equipo } from './Equipo';

export abstract class Deporte {
  constructor(public nombre: string, public maxPorEquipo: number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }

  abstract validar(equipo: Equipo): boolean;
}
