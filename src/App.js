import './App.css';
import { useState } from 'react';
import FoodComponent from './components/FoodComponent';
import FoodComponent2 from './components/FoodComponent2';
import FoodComponent3 from './components/FoodComponent3.js';

function App() {
  console.log("App 함수가 실행됩니다.")

  //object를 이용해서 상태관리 하기
  const [state, setState] = useState({
    name : "김구라",
    age : 20
  })

  return (
    <div className='container'>
      <h1>인덱스페이지입니다</h1>
      <input type="text" value={state.name} onChange={(e)=>{
        setState({
          ...state,
          name : e.target.value
        })
      }}/>
      <input type="text" value={state.age} onChange={(e)=>{
        setState({
          ...state,
          age : e.target.value
        })
      }}/>
      <p>{`이름은 ${state.name}`}</p>
      <p>{`이름은 ${state.age}`}</p>

      <FoodComponent/>
      <FoodComponent2/>
      <FoodComponent3/>
    </div>
  );
}

export default App;