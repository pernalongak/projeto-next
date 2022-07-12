import { useEffect, useState } from "react"

export default function Home() {

  const [repositories, setRepositories] = useState([])
  const [nomeUsuario, setNomeUsuario] = useState([])

  

  const handleSubmit = (event) => {
    event.preventDefault()

      fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }

  return (
    <div>
    <p>Perfil do GitHub</p>
    <form onSubmit={handleSubmit}>
    <input
    value={nomeUsuario}
    onChange={(e) => setNomeUsuario(e.target.value)}
    placeholder="nome de usuário"/>
    <button>Enviar</button>
    </form>

    <ul onClick={onClick}>
      {repositories.map(repository => {
        return ( 
          <ul>
            <li>
            {repository.name}
            </li>
          </ul>
        )
      })}
    </ul> 
    </div>

  )
}
