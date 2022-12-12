import { useEffect, useState } from "react"
import { Header } from '../components/Header'
import portfolioImg from '../assets/portfolio.svg'
import Axios from 'axios'
import { ArrowURightUp, ArrowSquareOut } from "phosphor-react";

import styles from '../styles/pages/portfolio.module.css'

const projetos = [
  {
    id: 1,
    nome: 'Lista de tarefas',
    descricao: 'Projeto realizado durante Ciclo Formativo utilizando Javascript',
    link: 'https://lista-de-tarefa-petrucia.netlify.app/'
  },

  {
    id: 2,
    nome: 'Portfólio',
    descricao: 'Projeto realizado durante Ciclo Formativo utilizando HTML e CSS',
    link: 'https://portfolio-petrucia-dayene.netlify.app/'
  }
]

export function Portfolio() {
  const [repositorios, setRepositorios] = useState([])

  useEffect(() => {

    async function pegaRepositorios() {
      const repos = await Axios.get('https://api.github.com/users/petruciadayene/repos')
      setRepositorios(repos.data)
    }
    pegaRepositorios();
  }
  )

  return (
    <>
      <Header text="Meu portifólio" image={portfolioImg} />
      <div className={styles.projetosContainer}>
        <h1 className={styles.projetosTitle}>Projetos</h1>
        <div className={styles.cardContainer}>
          {projetos.map(repo => {

            return (
              <div className={styles.card} key={repo.id}>
                <p>{repo.nome}</p>
                <img className={styles.cardImg} src={repo.imagem} />
                <p className={styles.cardTexto}>{repo.descricao}</p>
                <a className={styles.cardLink} href={repo.link} target='_blank'>Clique e veja mais<ArrowSquareOut size={16} /></a>
              </div>
            )
          })}
        </div>
      </div>
   
<div className={styles.projetosContainer}>
  <h2 className={styles.projetosTitle}>Outros projetos</h2>
  <div className={styles.repoContainer}>
    <div className={styles.repoCardContainer}>
      {repositorios.map(repo =>
        <div className={styles.cardRepo}>
          <h3 className={styles.repoTitle} key={repo.id}>{repo.name}</h3>
          <p className={styles.repoTexto}>{repo.description}</p>
          <a className={styles.repoLink} href={repo.html_url} target='_blank'><ArrowURightUp size={35} weight='regular' color="#fff" /></a>
        </div>
      )}
    </div>
  </div>
</div>

</>
  )
}

      
    
