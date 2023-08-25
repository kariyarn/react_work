import './App.css';
import PostComponent from './components/PostComponent';
import PostComponent2 from './components/PostComponent2';

function App() {
  return (
    <div className='container'>
      <h1>인덱스페이지입니다</h1>
      <p>어쩌구 저쩌구...</p>

      <PostComponent2/>
    </div>
  );
}

export default App;