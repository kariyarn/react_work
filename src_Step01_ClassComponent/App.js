import logo from './logo.svg';
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
    //render() 함수 안에 지역변수 선언하고 문자열 저장
    let myName='김구라';

    //요소에 적용할 인라인 CSS를 Object로 정의하고 적용할 수 있다.
    const boxStyle={
      width:"100px",
      height:"100px",
      border:"1px solid red",
      backgroundColor:"yellow" //여러 단어로 구성된 속성은 camel case를 사용한다.
    }

    return(
      <div className='container'>
        {/*
          jsx 객체 안에서 작성하는 주석입니다.
          어쩌구...
          저쩌구...
        */}
        <h1>인덱스페이지입니다</h1>
        <p>내 이름은 <strong>{myName}</strong></p>
        <button onClick={()=>{
          alert("버튼을 눌렀네요");
        }}>눌러보셈</button>
        <div style={boxStyle}></div>
      </div>
    )
  }
}

export default App;