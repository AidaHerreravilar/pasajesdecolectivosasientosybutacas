//Se necesita vender los pasajes de un colectivo. El colectivo tiene 20 filas de 3
//butacas cada uno
//Por convención se pone un 0 en el asiento libre y un 1 en el ya vendido.
//Cuando los pasajes se ponen a la venta están todos los asientos libres
//Cuando una persona quiere comprar se muestra los lugares desocupados y se le
// asigna un asiento elegido por el pasajero
let fila: number[] = new Array();
let butacas: number[] = new Array();
fila[0] = [1, 2, 3];
fila[1] = [4, 5, 6];
fila[2] = [7, 8, 9];
fila[3] = [10, 11, 12];
fila[4] = [13, 14, 15];
fila[5] = [16, 17, 18];
fila[6] = [19, 20, 21];
fila[7] = [22, 23, 24];
fila[8] = [25, 26, 27];
fila[9] = [28, 29, 30];
fila[10] = [31, 32, 3];
fila[11] = [1, 2, 3];
fila[12] = [1, 2, 3];
fila[13] = [1, 2, 3];
fila[14] = [1, 2, 3];
fila[15] = [1, 2, 3];
fila[16] = [1, 2, 3];
fila[17] = [1, 2, 3];
fila[18] = [1, 2, 3];
fila[19] = [1, 2, 3];
let asientosvendidos: number[] = new Array();
let asientosnovendidos: number[] = new Array();
let cantidad: number;
cantidad = 0;
//cantidad=Number(prompt("INGRESAR"))
for (let index = 0; index < fila.length; index++) {
  for (let ind = 0; ind < fila[index].lenght; ind++) {
    if (cantidad > 0) {
      cantidad = asientosvendidos[index];
      asientosvendidos[index] = 1;
      fila[index] = asientosvendidos[index];
      fila[index] = butacas[index];
      console.log(butacas);
    } else if (cantidad === 0) {
      cantidad = asientosvendidos[index];
      asientosvendidos[index] = 0;
      fila[index] = asientosvendidos[index];
      fila[index] = butacas[index];
      console.log(butacas);
    }
  }
}
console.log(asientosvendidos);
