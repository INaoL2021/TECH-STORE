import React, { useState } from 'react';
import './Catalogo.css';
import { productCatalog } from '../../lib/productosCatalogo';

// Función para ordenar alfabéticamente por el campo 'model'
const sortAlphabetically = (array) => {
    return array.slice().sort((a, b) => a.model.localeCompare(b.model));
};

function Catalogo() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('all');
    const [productosFiltrados, setProductosFiltrados] = useState([...productCatalog]);
    const handleCategoriaChange = (categoria) => {
        if (categoria === 'all') {
            // Si la categoría es "all", ordena alfabéticamente los productos por el campo 'model'
            const productosOrdenadosAlfabeticamente = sortAlphabetically([...productCatalog]);
            setProductosFiltrados(productosOrdenadosAlfabeticamente);
        } else {
            // Si la categoría no es "all", filtra los productos según la categoría seleccionada
            const productosFiltrados = productCatalog.filter((producto) => producto.category === categoria);
            setProductosFiltrados(productosFiltrados);
        }
        setCategoriaSeleccionada(categoria);
    };
    return (
        <main className='catalogo-items'>
            <div>
                <div className='info-cata'>
                    <div className='catalogo-title'>
                        <h2><box-icon type='solid' name='box'></box-icon> EXPLORA NUESTRO CATALOGO</h2>
                    </div>
                </div>
                <div className='catalogo-content-items'>
                    <section>
                        <div className="store-wrapper">
                            <div className="category-list">
                                <a href="#" onClick={() => handleCategoriaChange('all')} category="all">Todo</a>
                                <a href="#" onClick={() => handleCategoriaChange('Auricular')} category="Auricular">Auriculares</a>
                                <a href="#" onClick={() => handleCategoriaChange('Mouse')} category="Mouse">Mouses</a>
                                <a href="#" onClick={() => handleCategoriaChange('Monitor')} category="Monitor">Monitores</a>
                                <a href="#" onClick={() => handleCategoriaChange('Laptop')} category="Laptop">Laptops</a>
                                <a href="#" onClick={() => handleCategoriaChange('Gabinete')} category="Gabinete">Gabinetes</a>
                                <a href="#" onClick={() => handleCategoriaChange('Placa Madre')} category="Placa Madre">Placas Madre</a>
                                <a href="#" onClick={() => handleCategoriaChange('Placa de Video')} category="Placa de Video">Placas de Video</a>
                                <a href="#" onClick={() => handleCategoriaChange('Parlante')} category="Parlante">Parlantes</a>
                                <a href="#" onClick={() => handleCategoriaChange('Disco')} category="Disco">Discos</a>
                                <a href="#" onClick={() => handleCategoriaChange('RAM')} category="RAM">RAM</a>
                                <a href="#" onClick={() => handleCategoriaChange('Fuente')} category="Fuente">Fuentes de Poder</a>
                            </div>
                        </div>
                    </section>
                    <section className='product-list'>
                        <div className="product-item">
                            {productosFiltrados.map((producto, index) => {
                                return (
                                    <div className='card' key={index}>
                                        <img className="imag-cards-productos" src={producto.image} alt="productoImagen" />
                                        <div>
                                            <p className='modelo-card'>{producto.model}</p>
                                            <p className='precio-card'>$ {producto.price}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </main >
    );
}

export default Catalogo;