import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Child from './component/ChildComponent';
import Contact from './component/ContactComponent';
import MyName from './component/MyNameComponent';

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
        <h1>인덱스페이지입니다.</h1>
        <Child></Child>
        <Child></Child>
        <Child></Child>
        <Contact></Contact>
        <h3>MyNameComponent 사용해 보기</h3>
        <MyName name={"김구라"}></MyName>
        <MyName name={"해골"}></MyName>
      </div>
    )
  }
}

export default App;