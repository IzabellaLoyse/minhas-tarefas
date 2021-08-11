import React from "react"

import "../index.css"

function Modal(props) {
  const cancelHandler = () => {
    props.onCancel()
  }

  const confirmHandler = () => {
    props.onConfirm()
  }

  return (
    <article className="modal">
      <p className="modal-text">Você tem certeza ?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancelar
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirmar
      </button>
    </article>
  )
}

export default Modal
