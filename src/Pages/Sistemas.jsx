//Styles
import styles from "../Module/Sistemas.module.css"
//Imagenes
import img from "../assets/img/1.png"

const Sistemas = () => { 
    return (
        <>
         <div className={styles.container}> 
          <section className={styles.tarjeta}>
            <img src={img} alt="Foto" />
            <div className={styles.informacion}>
            <h3>Plan De Trabajo</h3>
            <p>Precio $</p>
            <span>
                Detalles del plan
            </span>
            <button>Ver Mas</button>
            </div>
          </section>
          <section className={styles.tarjeta}>
            <img src={img} alt="Foto" />
            <div className={styles.informacion}>
            <h3>Plan De Trabajo</h3>
            <p>Precio $</p>
            <span>
                Detalles del plan
            </span>
            <button>Ver Mas</button>
            </div>
          </section>
          <section className={styles.tarjeta}>
            <img src={img} alt="Foto" />
            <div className={styles.informacion}>
            <h3>Plan De Trabajo</h3>
            <p>Precio $</p>
            <span>
                Detalles del plan
            </span>
            <button>Ver Mas</button>
            </div>
          </section>
          </div>
        </>
    )
}

export default Sistemas