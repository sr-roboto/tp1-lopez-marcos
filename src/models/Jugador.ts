import { v4 as uuidv4 } from 'uuid';
import type { IIdentificable } from '../interfaces/IIdentificable';

export class Jugador implements IIdentificable {
  public readonly id: string;
  constructor(public nombre: string, public posicion?: string) {
    this.id = uuidv4();
  }

  toString(): string {
    return (
      `Jugador: ${this.nombre}` +
      (this.posicion ? ` - Posición: ${this.posicion}` : '')
    );
  }
}
