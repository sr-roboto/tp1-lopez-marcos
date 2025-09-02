import type { ICompetidor } from '../interfaces/ICompetidor';
import type { Jugador } from './Jugador';
import { v4 as uuidv4 } from 'uuid';

// Esta clase implementa la interfaz ICompetidor para asegurar que cumple con el contrato definido
export class Equipo implements ICompetidor {
  public readonly id: string;
  private integrantes: Jugador[] = [];

  constructor(public nombre: string) {
    this.id = uuidv4();
  }

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
