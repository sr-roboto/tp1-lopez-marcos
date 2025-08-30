export class Torneo {
  constructor(
    public id: number,
    public nombre: string,
    private listaPartidos: string[] = []
  ) {}

  programarPartido(partido: string): void {
    this.listaPartidos.push(partido);
  }

  listarPartidos(): string[] {
    return this.listaPartidos;
  }

  buscarPartido(partido: string): boolean {
    return this.listaPartidos.includes(partido);
  }
}
