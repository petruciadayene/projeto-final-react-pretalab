import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import minhaImg from '../assets/minha.jpeg'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
      <Header text="Sobre mim" image={sobreImg} />
      <img className={styles.img} src={minhaImg} />
      <div className={styles.sobreContainer}>
        <h1 className={styles.title}>Petrucia Dayene, muito prazer!</h1>
        <p className={styles.text}>
          Sou paulista, moro da zona leste, tenho 39 anos, sou formada em Letras Português/Espanhol e em Pedagogia.
          Estou estudando programação na Universidade Mais1Code e participei de Ciclo Formativo de Programação pela Pretalab. Nele tive contato com HTML5, CSS3, Javascript e React.
          Tenho interesse em fazer transição de carreira, por esse motivo venho me dedicando a esses estudos.
          Meu objetivo é atuar como desenvolvedora front-end.
        </p>

      </div>
    </>

  )
}
