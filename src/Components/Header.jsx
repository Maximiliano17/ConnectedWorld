//Styles
import styles from "../Module/Header.module.css"
//Img
import img from "../assets/img/logo.png"
import icon from "../assets/icons/soleado.png"
//Components
import Home from "../Pages/Home"

function Header() {

    return (
      <>
        <header className={styles.header}>
            <div  className={styles.logo}>
                <img src={img} />
                <p>Connected World</p>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li>Planes</li>
                    <li>Premios</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <section className={styles.opciones}>
               <img src={icon} />
            </section>
        </header>
        <Home />
      </>
    )
  }
  
  export default Header
  