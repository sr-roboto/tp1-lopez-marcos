import { Equipo } from './Equipo';
import { Deporte } from './Deporte';
export class Futbol extends Deporte {
  constructor() {
    super('Fútbol', 11);
  }

  validar(equipo: Equipo): boolean {
    const jugadores = equipo.listarIntegrantes();
    if (jugadores.length !== this.maxPorEquipo) {
      return false;
    }
    return true;
  }
}
