import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className='container'>
//       <h1>인덱스페이지입니다</h1>
//     </div>
//   );
// }

//함수형 component에서 클래스형 component로 변경하기
class App extends Component{
  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    return(
      <div className='container'>
        <h1>인덱스페이지입니다</h1>
      </div>
    )
  }
}

export default App;