import './App.css';
import ChildComponent from './components/ChildComponent';
import './css/custom.css';

function App() {
  return (
    <div className='container'>
      <h1>인덱스페이지입니다</h1>
      <div className='box'></div>
      <p className='bg-yellow'>ff</p>

      <ChildComponent></ChildComponent>
    </div>
  );
}


export default App;