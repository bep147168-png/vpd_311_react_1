
import './App.css';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import Factorial from './Factorial';

function App() {
  return (
    <div className="App">
      <Header />
      <Factorial />
      <Article title="Процедурное программирование на языке С++" content = "Изучает базовые конструкции языка" />
      <Article title="ООП на С++" content = "Изучает объектно-ориентированное программирование" />
      <Footer />
    </div>
  );
}

export default App;


