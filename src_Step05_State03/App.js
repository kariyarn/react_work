import './App.css';
import { Component } from 'react';
import MenuComponent from './components/MenuComponent';

// function App() {
//   return (
//     <div className='container'>
//       <h1>인덱스페이지입니다</h1>
//     </div>
//   );
// }

//함수형 component에서 클래스형 component로 변경하기
class App extends Component{
  //생성자
  constructor(){
    super()
    //생성자 안에서 상태값을 정의하고 초기값을 부여할 수도 있다.
    this.state={
      isWait:true
    };
  }

  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    return(
      <div className='container'>
        <h1>조건부 렌더링</h1>
        <h2>아래가 달려요 인지 아닌지 확인</h2>
        { true ? <p>달려요</p> : <p>달리지 않아요</p> }
        <h2>아래가 달려요 인지 아닌지 확인</h2>
        { false ? <p>달려요</p> : <p>달리지 않아요</p> }
        <h2>null은 렌더링하지 않는다.</h2>
        { false ? <p>달려요</p> : null }

        <h2>&& 연산자 활용</h2>
        { true && <p>출력됨</p>}

        <h2>true, false는 렌더링하지 않음</h2>
        {true} vs {false}

        <h2>true, false는 렌더링하지 않는 것을 이용해서</h2>
        { false && <p>출력되지 않음</p>}

        <label>
          기다릴지 여부 <input type="checkbox" checked={this.state.isWait}
            onChange={(e)=>{
              //이벤트가 일어난 체크박스의 체크여부를 state에 반영한다.
              this.setState({
                isWait:e.target.checked
              });
            }}/>
        </label>
        { this.state.isWait ? <p>기다려요</p> : <p>기다리지 않아요</p>}
        { this.state.isWait && <p>난 기다릴거야</p>}

        <MenuComponent />
      </div>
    )
  }
}

export default App;