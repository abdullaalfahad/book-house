import './App.css';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Shop></Shop>
      </div>
      <Question></Question>
    </div>
  );
}

export default App;
