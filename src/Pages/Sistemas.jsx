//Styles
import styles from "../Module/Sistemas.module.css"
//Imagenes
import img from "../assets/img/web.png"
import img2 from "../assets/img/app.png"
import img3 from "../assets/img/movile.png"

const Sistemas = () => { 
    return ( 
        <>
        <div className={styles.container}> 
          <section className={styles.tarjeta}> 
            <div className={styles.planes}>
              <img src={img} alt="Imagen" />
            <div className={styles.informacion}>
              <h3>Pagina Web</h3>
              <a target="_blanck" href="https://www.mercadolibre.com.ar/">Ver Mas</a>
            </div>
            </div>
              <div className={styles.planes}>
                <img src={img2} alt="Imagen" />
              <div className={styles.informacion}>
                <h3>Aplicacion Web</h3>
                <a target="_blanck" href="https://www.mercadolibre.com.ar/">Ver Mas</a>
              </div>
            </div>
            <div className={styles.planes}>
                <img src={img3} alt="Imagen" />
              <div className={styles.informacion}>
                <h3>Aplicacion Movil</h3>
                <a target="_blanck" href="https://www.mercadolibre.com.ar/">Ver Mas</a>
              </div>
            </div>
          </section>
           
          </div>
        </>
    )
}

export default Sistemas