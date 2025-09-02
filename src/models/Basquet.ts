import { Equipo } from './Equipo';
import { Deporte } from './Deporte';
export class Basquet extends Deporte {
  constructor() {
    super('Básquet', 5);
  }

  validar(equipo: Equipo): boolean {
    const jugadores = equipo.listarIntegrantes();
    if (jugadores.length !== this.maxPorEquipo) {
      return false;
    }
    return true;
  }
}
