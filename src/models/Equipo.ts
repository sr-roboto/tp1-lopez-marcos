import type { ICompetidor } from '../interfaces/ICompetidor';
import type { Jugador } from './Jugador';

// Esta clase implementa la interfaz ICompetidor para asegurar que cumple con el contrato definido
export class Equipo implements ICompetidor {
  private integrantes: Jugador[] = [];

  constructor(public nombre: string) {}

  agregarIntegrante(integrante: Jugador): void {
    this.integrantes.push(integrante);
  }

  listarIntegrantes(): string[] {
    return this.integrantes.map((jugador) => jugador.toString());
  }

  toString(): string {
    return `Equipo: ${this.nombre}, Integrantes: [${this.integrantes.join(
      ', '
    )}]`;
  }

  get cantidadIntegrantes(): number {
    return this.integrantes.length;
  }
}
