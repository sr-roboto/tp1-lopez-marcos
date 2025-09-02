import type { Partido } from './Partido';

export class Torneo {
  private readonly id: number;
  private static contadorId = 0;
  constructor(public nombre: string, private listaPartidos: Partido[] = []) {
    this.id = ++Torneo.contadorId;
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

  toString(): string {
    return `Torneo ${this.id}: ${this.nombre} - Partidos programados: ${this.listaPartidos.length}`;
  }
}
