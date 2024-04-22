class Prestamo {
  constructor(libro, fechaInicio, fechaFin, cliente) {
    this.libro = libro;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.cliente = cliente;
  }

  obtenerLibro() {
    return this.libro;
  }

  obtenerFechaInicio() {
    return this.fechaInicio;
  }

  obtenerFechaFin() {
    return this.fechaFin;
  }

  obtenerCliente(){
    return this.cliente
  }
}  
  
export default Prestamo;