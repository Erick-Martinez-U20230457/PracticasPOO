class Biblioteca {
  constructor(){
    this.libros = []
  }

  guardarLibros(libro){
    this.libros.push(libro)
  }
    
  verLibros(){
    if (this.libros.length > 0 ){
      this.libros.forEach(libro => {
        console.log(libro.obtenerTitulo())
      })
    } else {
      console.log('no hay libros en la biblioteca')
    }
  }
}

export default Biblioteca
