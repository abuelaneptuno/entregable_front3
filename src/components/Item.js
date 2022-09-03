
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useEffect, useState } from "react";
import "../index.css"

export default function Item( { data, cantProductos, setCantProductos }) {

  const [stock, setStock ] = useState([]);

  const comprar = (producto) => {
    setStock( stock.map((item) => {
      if (item.id === producto.id) {
        item.stock = item.stock -1;
        setCantProductos(cantProductos + 1);
      }
      return item;
    }));
  }

  useEffect(() => {
    setStock(data);
  }, []);

  return (
    <>
      {stock.map((prod) => (
        <div className="producto" key={prod.id}>
          <h3>{prod.producto.nombre}</h3>
          <p>{prod.producto.descripcion}</p>
          <h5>
            En stock: {prod.stock > 0 ? prod.stock : <span>agotado</span>}
          </h5>
          <button
            onClick={() => comprar(prod)}
            disabled={prod.stock < 1}
          >
            {" "}
            {prod.stock > 0 ? "COMPRAR" : "SIN STOCK"}
          </button>
        </div>
      ))}
    </>
  );
}
