import { Equipo } from './Equipo';
import { Deporte } from './Deporte';
export class Basquet extends Deporte {
  constructor(public nombre: string, public maxPorEquipo: number = 5) {
    super(nombre, maxPorEquipo);
  }

  validar(equipo: Equipo): boolean {
    const jugadores = equipo.listarIntegrantes();
    if (jugadores.length !== this.maxPorEquipo) {
      return false;
    }
    return true;
  }
}
