import React, { useReducer } from 'react';
import './App.css';
import reduser from './Components/reduser'
import KalkItems from './Components/KalkItems';


function App() {
  const [state, dispatch] = useReducer(reduser, '')

  const hendelClick = (e) => {
    dispatch({
      type: 'add',
      payload: state.concat(e.target.name)
    })

  }

  const back = () => {
    dispatch({
      type: 'back',
      payload: state.slice(0, state.length - 1)
    })
  }

  const resultat = () => {
    dispatch({
      type: 'result',
      payload: eval(state).toString()
    })
  }




  return (

    <div className="contener">

      <input type='text' value={state} />


      <KalkItems hendelClick={hendelClick} back={back} resultat={resultat} />
    </div>
  );
}

export default App;
