import React from 'react'
import Persoona from './Persoona'

console.log('Persoonat init')

const Persoonat = ({ persons }) => {
    const viewPersoonat = persons.filter(person => person.name)
    return (
        <Persoona persons={viewPersoonat}/>
    )
}

export default Persoonat