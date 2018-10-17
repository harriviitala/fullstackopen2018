import React from 'react'

//komponentti persoona listaa henkilöt
  const Persoona = ({persons}) => {  	
  return (
       persons.map(person =>
			  <li key={person.id}>
			    {person.nimi}, {person.numero}
			  </li>
			)
  )
}

export default Persoona