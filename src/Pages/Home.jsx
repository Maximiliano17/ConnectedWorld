import styles from "../Module/Slider.module.css"
import img1 from '../assets/img/1.png';
import img2 from '../assets/img/2.png';
import img3 from '../assets/img/3.png';
import img4 from '../assets/img/4.png';
import {Slideshow, Slide, TextoSlide} from '../Components/Slider'  

const Home = () => {
    return (
        <>
         <div className={styles.container}> 
			<Slideshow controles={true} autoplay={true} velocidad="5000" intervalo="3000">
				<Slide>
					<a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img1} alt=""/>
					</a>
					<TextoSlide>
						<p>!Petzify En Las Regionales¡</p>
					</TextoSlide>
				</Slide>
				<Slide>
        <a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img2} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
        <Slide>
        <a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img3} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
        <Slide>
        <a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img4} alt=""/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
         </div>
        </>
    )
}

export default Home