import logo from './logo.svg';
import './App.css';

function Text() {
  return (
    <>
    <h1>привет, странник!</h1>
    </>
  );
}

function Button() {
  return(
  <button>узнать свой ip</button>
  )
}


export default function App() {
  return(
    <>
    <Text/>
    <Button/>
    </>


  );
};
