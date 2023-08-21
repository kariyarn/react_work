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
  //상태값(state)관리하기
  state={
    count : 0
  };
  //버튼을 눌렀을 때 실행할 함수
  buttonClicked = ()=>{
    // this.state.count++;
    // console.log(this.state.count);

    //상태를 변화시켜야 UI가 update 된다.
    /*
      부모(React.Component)가 가지고 있는 setState()함수를 호출하면서
      새로운 Object의 참조값을 전달해야 상태가 변화되었다고 간주된다.
    */
    this.setState({
      count : this.state.count + 1
    });
  }

  //render() 메소드에서 리턴해주는 jsx를 활용해서 화면 구성이 된다.
  render(){
    return(
      <div className='container'>
        <h1>인덱스페이지입니다</h1>
        <button onClick={this.buttonClicked}>{this.state.count}</button>
      </div>
    )
  }
}

export default App;