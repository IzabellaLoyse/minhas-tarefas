import React from "react"

import Todo from "./components/Todo"


function App(props) {
  return (
    <section className="App">
      <h1>Minhas tarefas</h1>
      <Todo title="Estudar React" />
      <Todo title="Ler livros e mangás" />
      <Todo title="Assistir as aulas da faculdade" />
    </section>
  )
}

export default App
