export class Jugador {
  private static contadorId = 0;
  private readonly id: number;
  constructor(public nombre: string, public posicion?: string) {
    this.id = ++Jugador.contadorId;
  }

  toString(): string {
    return (
      `Jugador ${this.id}: ${this.nombre}` +
      (this.posicion ? ` - Posición: ${this.posicion}` : '')
    );
  }
}
