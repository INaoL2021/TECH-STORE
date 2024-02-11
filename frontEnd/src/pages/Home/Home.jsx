import './Home.css'
import Carousel_banners from '../../components/carousel/Carousel_banners'
import MultiCarousel from '../../components/multi-arousel/MultiCarousel'
import iconWhatsapp from '../../assets/icon-whatsapp-green.png'
import SliderProducts from '../../components/slider_products/Slider_Products'

function Home() {
    return (
        <>
            <main>
                <div className='home-container'>
                    <div>
                        <section>
                            <div className='carousel-home'><Carousel_banners /></div>
                            <p className='p-alert'><b>ATENCIÓN: </b>LOS PEDIDOS SE HACEN EXCLUSIVAMENTE A TRAVÉS DE <img src={iconWhatsapp} alt="" /><span className='span-alert'>WHATSAPP</span></p>
                        </section>
                    </div>
                </div>
            </main>
            <div className='multi'>
                <div className='mul-carousel-title'>
                    <h1>ÚLTIMAS TENDECIAS DEL DÍA DE HOY</h1>
                </div>
            </div>
            <SliderProducts/>
        </>
    )
}

export default Home