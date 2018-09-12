import React from 'react'
import Kurssi from './components/Kurssi'


const App = ({kurssit}) => {  
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

export default App