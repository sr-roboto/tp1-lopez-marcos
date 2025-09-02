import type { IIdentificable } from '../interfaces/IIdentificable';
import type { Partido } from './Partido';
import { v4 as uuidv4 } from 'uuid';

export class Torneo implements IIdentificable {
  public readonly id: string;
  constructor(public nombre: string, private listaPartidos: Partido[] = []) {
    this.id = uuidv4();
  }

  programarPartido(partido: Partido): void {
    this.listaPartidos.push(partido);
  }

  listarPartidos(): Partido[] {
    return this.listaPartidos;
  }

  buscarPartido(partido: Partido): boolean {
    return this.listaPartidos.includes(partido);
  }
}
