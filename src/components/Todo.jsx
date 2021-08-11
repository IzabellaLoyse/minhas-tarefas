import React from "react"
import { useState } from "react"

import Modal from "./Modal"
import Backdrop from "./Backdrop"

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const deleteHandler = () => {
    setModalIsOpen(true)
  }

  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Excluir
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo
