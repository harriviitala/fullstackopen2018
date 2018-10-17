import React from 'react';

const Name = ({ persons }) => {
    let table = []
    persons.map(person => table.push(<tr key={person.name}><td key={person.name}>{person.name}</td><td key={person.number}>{person.number}</td></tr>))

    return (
        table
    )
}

export default Name