export class Jugador {
  constructor(
    private readonly id: number,
    public nombre: string,
    public posicion?: string
  ) {}

  toString(): string {
    return (
      `Jugador ${this.id}: ${this.nombre}` +
      (this.posicion ? ` - Posición: ${this.posicion}` : '')
    );
  }
}
