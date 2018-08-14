import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  // const-määrittelyt  
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  const Otsikko = (props) => {  
  return (
    <div>
    <h1>
    {props.kurssi}
    </h1>
    </div>
  )
	}

	const Sisalto = (props) => {
  return (
    <div>
    <h2>
    {props.osa1}
    {props.osa2}
    {props.osa3}
    </h2>
    </div>
  )
	}

	const Tehtavia = (props) => {
  return (
    <div>
    <p>
    {props.tehtavia1}
    {props.tehtavia2}
    {props.tehtavia3}
    </p>
    </div>
  )
	}

  return (
    <div>
      <Otsikko kurssi={kurssi} />      
      <Sisalto osa1={osa1} />  
      <Tehtavia tehtavia1={tehtavia1} />  
      <Sisalto osa2={osa2} />  
      <Tehtavia tehtavia2={tehtavia2} />  
      <Sisalto osa3={osa3} />  
      <Tehtavia tehtavia3={tehtavia3} />  
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)