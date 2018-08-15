import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
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
    <p>{props.osa}, {props.tehtava} tehtävää </p>
    </div>
  )
}

const Yhteensa = (props) => {
   return (
    <div>
      <p>{props.tehtavat}</p>
    </div>
  )
}


return (
    <div>
      <Kurssi kurssinNimi={kurssi} />
      <Sisalto osa={osa1.nimi} tehtava={osa1.tehtavia}  />
      <Sisalto osa={osa2.nimi} tehtava={osa2.tehtavia}  />
      <Sisalto osa={osa3.nimi} tehtava={osa3.tehtavia}  />
      <Yhteensa tehtavat={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
