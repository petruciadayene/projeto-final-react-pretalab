import styles from '../styles/components/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>Feito por Petrucia Dayene, durante o módulo de ReactJS da Pretalab ♡</p>
      <div class="container">
        <ul className={styles.listaFooter}>
          <li >
            <i class="fas fa-envelope-square"></i>
            <a href="mailto:petruciadayene.psb@gmail.com" target="_blank" className={styles.links}> petruciadayene.psb@gmail.com</a>
          </li>

          <li>
            <i class="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/petrucia-dayene-ab6314234/" target="_blank" className={styles.links}> Petrucia Dayene</a>
          </li>

          <li>
            <i class="fab fa-github-square"></i>
            <a href="https://github.com/petruciadayene" target="_blank" className={styles.links}> /petruciadayene</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}