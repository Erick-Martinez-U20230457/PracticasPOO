class Libro {
  constructor(titulo, autor, numPaginas, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
    this.estado = 'disponible'
  }
  
  obtenerTitulo() {
    return this.titulo;
  }
  
  obtenerAutor() {
    return this.autor;
  }
  
  obtenerNumPaginas() {
    return this.numPaginas;
  }

  obtenerEstado(){
    return this.estado
  }
}
export default Libro; 