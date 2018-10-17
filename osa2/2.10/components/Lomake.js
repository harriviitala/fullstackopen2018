import React from 'react'

const Lomake = ({ onSubmit, onNameChange, onNumberChange, nimi, numero }) => (

<form onSubmit={onSubmit}>
  nimi: 
  <input
    nimi={nimi}
    onChange={onNameChange}
  />
  numero: 
  <input
    numero={numero}
    onChange={onNumberChange}
  />
  <button type="submit">lisää</button>
</form>

)

export default Lomake