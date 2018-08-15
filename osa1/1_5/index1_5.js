import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
   const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

const Kurssi = (props) => {
  return (
    <div>
    <h1>{props.kurssinNimi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>    
    <p>{props.osaset[0].nimi}, {props.osaset[0].tehtavia} tehtävää </p>
    <p>{props.osaset[1].nimi}, {props.osaset[1].tehtavia} tehtävää </p>
    <p>{props.osaset[2].nimi}, {props.osaset[2].tehtavia} tehtävää </p>
    </div>
  )
}

const Yhteensa = (props) => {
   return (
    <div>
      <p>{props.summa[0].tehtavia + props.summa[1].tehtavia + props.summa[2].tehtavia}</p>
    </div>
  )
}


return (
    <div>
      <Kurssi kurssinNimi={kurssi.nimi} />
      <Sisalto osaset={kurssi.osat} />
      <Yhteensa summa={kurssi.osat} />     
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)