import Libro from './libro.js';
import Prestamo from './prestamo.js';
import Usuario from './usuario.js';
import Biblioteca from './biblioteca.js';

const libro = new Libro('Harry Potter y el cáliz de fuego', 'J. K. Rowling', 640);
const libro1 = new Libro('Yo, robot','Isaac Asimov',500)

const biblioteca = new Biblioteca()
biblioteca.guardarLibros(libro)
biblioteca.guardarLibros(libro1)

biblioteca.verLibros()

const usuario1 = new Usuario('Erick')
const usuario2 = new Usuario('Isaias')


const fechaInicio = new Date(2024, 3, 1); 
const fechaFin = new Date(2024, 3, 15); 
const prestamo = new Prestamo(libro, fechaInicio, fechaFin, usuario1);
const prestamo2 = new Prestamo(libro1, fechaInicio, fechaFin, usuario2)

console.log(`El libro "${prestamo.obtenerLibro().obtenerTitulo()}" se presto al cliente ${prestamo.obtenerCliente().obtenerNombre()}`);

console.log(`El libro "${prestamo2.obtenerLibro().obtenerTitulo()}" se presto al cliente ${prestamo2.obtenerCliente().obtenerNombre()}`);
