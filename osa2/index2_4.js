import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {  
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]



return (
    <div>
    
      {kurssit.map((kurssi, index) =>
          <div key={index}>
              <h1>{kurssi.nimi}</h1>
              <ul>
            {/* Because kurssit is an Object - not array */}
                  {Object.values(kurssi.osat).map((osa, index) =>
                  <li key={index}>{osa.nimi} - {osa.tehtavia}</li>
                  )}
              </ul>
              <p>Yhteensä: {kurssi.osat.reduce((sum, osa) => sum + osa.tehtavia,0)}</p>
          </div>
      )}
    
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)