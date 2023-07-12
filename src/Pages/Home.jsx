//Styles
import styles from "../Module/Slider.module.css"
//Imagenes
import img1 from '../assets/img/1.png';
import img2 from '../assets/img/2.png';
import img3 from '../assets/img/3.png';
import img4 from '../assets/img/4.png';
//Importes
import {Slideshow, Slide} from '../Components/Slider'  

const Home = () => {
    return (
        <>
         <div className={styles.container}> 
			<Slideshow controles={true} autoplay={true} velocidad="5000" intervalo="3000">
				<Slide>
					<a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img1} alt=""/>
					</a>
					 
				</Slide>
				<Slide>
        <a target="_blanck" href="https://www.youtube.com/watch?v=CM9TmrkvC6I">
						<img src={img2} alt=""/>
					</a>
					 
				</Slide>
        <Slide>
        <a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img3} alt=""/>
					</a>
					 
				</Slide>
        <Slide>
        <a target="_blanck" href="https://petzify-pag.vercel.app/">
						<img src={img4} alt=""/>
					</a>
					 
				</Slide>
			</Slideshow>
         </div>
        </>
    )
}

export default Home