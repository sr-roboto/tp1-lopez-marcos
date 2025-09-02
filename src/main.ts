import { Jugador } from './models/Jugador';
import { Equipo } from './models/Equipo';
import { Basquet } from './models/Basquet';
import { Partido } from './models/Partido';
import { Futbol } from './models/Futbol';
import { Torneo } from './models/Torneo';

console.log('Creación de jugadores:');

const jugador1 = new Jugador('Lionel Messi', 'Delantero');
const jugador2 = new Jugador('Cristiano Ronaldo', 'Delantero');

console.log(jugador1.toString());
console.log(jugador2.toString());

const equipoA = new Equipo('Boca');
equipoA.agregarIntegrante(new Jugador('Sergio Romero', 'Arquero'));
equipoA.agregarIntegrante(new Jugador('Miguel Merentiel', 'Delantero'));
equipoA.agregarIntegrante(new Jugador('Leandro Paredes', 'Centrocampista'));
equipoA.agregarIntegrante(new Jugador('Cristian Lema', 'Defensor'));
equipoA.agregarIntegrante(new Jugador('Milton Giménez', 'Delantero'));
equipoA.agregarIntegrante(new Jugador('Ignacio Miramón', 'Centrocampista'));
equipoA.agregarIntegrante(new Jugador('Marco Pellegrino', 'Defensor'));
equipoA.agregarIntegrante(new Jugador('Lucas Janson', 'Delantero'));
equipoA.agregarIntegrante(new Jugador('Edinson Cavani', 'Delantero'));
equipoA.agregarIntegrante(new Jugador('Lucas Blondel', 'Lateral Derecho'));
equipoA.agregarIntegrante(new Jugador('Lautaro Di Lollo', 'Defensor'));

console.log('Creación de equipos:');
console.log(equipoA.toString());
console.log(`Cantidad de integrantes: ${equipoA.cantidadIntegrantes}`);

const equipoB = new Equipo('River');
equipoB.agregarIntegrante(new Jugador('Franco Armani', 'Arquero'));
equipoB.agregarIntegrante(new Jugador('Gonzalo Montiel', 'Lateral Derecho'));
equipoB.agregarIntegrante(new Jugador('Lucas Martínez Quarta', 'Defensor'));
equipoB.agregarIntegrante(new Jugador('Paulo Díaz', 'Defensor'));
equipoB.agregarIntegrante(new Jugador('Marcos Acuña', 'Lateral Izquierdo'));
equipoB.agregarIntegrante(new Jugador('Nacho Fernández', 'Centrocampista'));
equipoB.agregarIntegrante(new Jugador('Kranevitter', 'Centrocampista'));
equipoB.agregarIntegrante(
  new Jugador('Pity Martínez', 'Centrocampista Ofensivo')
);
equipoB.agregarIntegrante(new Jugador('Franco Mastantuono', 'Delantero'));
equipoB.agregarIntegrante(new Jugador('Maxi Meza', 'Delantero'));
equipoB.agregarIntegrante(new Jugador('Facundo Colidio', 'Delantero'));

console.log(equipoB.toString());
console.log(`Cantidad de integrantes: ${equipoB.cantidadIntegrantes}`);

const futbol = new Futbol();
const basquet = new Basquet();

console.log('Partido de Fútbol:');
const partidoFutbol = new Partido(equipoA, equipoB, futbol);
partidoFutbol.jugar();
console.log(partidoFutbol.toString());

const equipoC = new Equipo('Chicago Bulls');
equipoC.agregarIntegrante(new Jugador('Zach LaVine', 'Escolta'));
equipoC.agregarIntegrante(new Jugador('Coby White', 'Base'));
equipoC.agregarIntegrante(new Jugador('Patrick Williams', 'Alero'));
equipoC.agregarIntegrante(new Jugador('Nikola Vucevic', 'Pívot'));
equipoC.agregarIntegrante(new Jugador('Ayo Dosunmu', 'Escolta/Base'));

const equipoD = new Equipo('Toronto Raptors');
equipoD.agregarIntegrante(new Jugador('Scottie Barnes', 'Alero/Ala-pívot'));
equipoD.agregarIntegrante(new Jugador('RJ Barrett', 'Escolta/Alero'));
equipoD.agregarIntegrante(new Jugador('Immanuel Quickley', 'Base'));
equipoD.agregarIntegrante(new Jugador('Jakob Poeltl', 'Pívot'));
equipoD.agregarIntegrante(new Jugador('Gradey Dick', 'Escolta/Alero'));

console.log('Partido de Básquet:');
const partidoBasquet = new Partido(equipoC, equipoD, basquet);
partidoBasquet.jugar();
console.log(partidoBasquet.toString());

const torneo = new Torneo('Torneo Internacional');
torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

console.log('-----------------------------------------------------------');

console.log('Lista de partidos del Torneo:');
console.log(torneo.listarPartidos());
console.log(`¿El partido ${partidoFutbol} de fútbol está en el torneo?`);
console.log(torneo.buscarPartido(partidoFutbol));

console.log('Validación de equipos para Fútbol:');
console.log(`¿Equipo A es válido? ${futbol.validar(equipoA)}`);
console.log(`¿Equipo B es válido? ${futbol.validar(equipoC)}`);
console.log('Validación de equipos para Básquet:');
console.log(`¿Equipo A es válido? ${basquet.validar(equipoA)}`);
console.log(`¿Equipo B es válido? ${basquet.validar(equipoC)}`);
