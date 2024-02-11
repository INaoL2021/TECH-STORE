import './Ayuda.css'
import lockpng from '../../assets/lock-alt-solid-24.png'
import questionpng from '../../assets/question-mark-regular-24.png'
import backpng from '../../assets/arrow-back-regular-24.png'
import arrowRight from '../../assets/arrow-right.png'
import offersvg from '../../assets/offer-png.svg'

function Ayuda() {
    return (
        <>
            <div className='page-help'>
                <div>
                    <div className='container-ayuda'>
                        <h2>¿Con qué podemos ayudarte?</h2>
                        <div className='search-help-bar'>
                            <input className='help-input' type="text" placeholder='Busca en ayuda' />
                            <button className='bar-ntn-help'>Buscar</button>
                        </div>
                    </div>
                    <div className='helping-opt-3'>
                        <div>
                            <h2 className='help-options-h'>COMPRAS</h2>
                            <div className='a-opt-1'>
                                <ul className='help-ul-opt'>
                                    <li className='a-options-buy'>
                                        <a href="" className='a-h1'>
                                            <div className='a-content-help'>
                                                <div className='a-info'>
                                                    <div className='a-img-icon'>
                                                        <img src={lockpng} alt="" />
                                                    </div>
                                                </div>
                                                <div className='a-opt-items-info'>
                                                    <span className='item-primary'>Administrar y cancelar compras</span><br />
                                                    <span className='item-secondary'>Pagar, seguir envíos, modificar, reclamar o cancelar compras.</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className='arrow-options-right'>
                                            <img src={arrowRight} alt="" />
                                        </div>
                                    </li>
                                    <li className='a-options-buy'>
                                        <a href="" className='a-h1'>
                                            <div className='a-content-help'>
                                                <div className='a-info'>
                                                    <div className='a-img-icon'>
                                                        <img src={backpng} alt="" />
                                                    </div>
                                                </div>
                                                <div className='a-opt-items-info'>
                                                    <span className='item-primary'>Devoluciones y reembolsos</span><br />
                                                    <span className='item-secondary'>Devolver un producto o consultar por reintegros de dinero de una compra.</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className='arrow-options-right'>
                                            <img src={arrowRight} alt="" />
                                        </div>
                                    </li>
                                    <li className='a-options-buy'>
                                        <a href="" className='a-h1'>
                                            <div className='a-content-help'>
                                                <div className='a-info'>
                                                    <div className='a-img-icon'>
                                                        <img src={questionpng} alt="" />
                                                    </div>
                                                </div>
                                                <div className='a-opt-items-info'>
                                                    <span className='item-primary'>Preguntas frecuentes sobre compras</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className='arrow-options-right'>
                                            <img src={arrowRight} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className='help-options-h'>VENTAS</h2>
                            <div className='a-opt-1'>
                                <ul className='help-ul-opt'>
                                    <li className='a-options-buy'>
                                        <a href="" className='a-h1'>
                                            <div className='a-content-help'>
                                                <div className='a-info'>
                                                    <div className='a-img-icon'>
                                                        <img src={offersvg} alt="" />
                                                    </div>
                                                </div>
                                                <div className='a-opt-items-info'>
                                                    <span className='item-primary'>Gestión de ventas y publicaciones</span><br />
                                                    <span className='item-secondary'>Ventas, cobros, envíos, reclamos, devoluciones, publicaciones y reputación.</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className='arrow-options-right'>
                                            <img src={arrowRight} alt="" />
                                        </div>
                                    </li>
                                    <li className='a-options-buy'>
                                        <a href="" className='a-h1'>
                                            <div className='a-content-help'>
                                                <div className='a-info'>
                                                    <div className='a-img-icon'>
                                                        <img src={questionpng} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className='item-primary'>Preguntas frecuentes sobre los productos</span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className='arrow-options-right'>
                                            <img src={arrowRight} alt="" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ayuda