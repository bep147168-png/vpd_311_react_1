import './App.css';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function Factorial() {  
    var result = 1;  
    for (var i = 2; i <= 5; i++) {  
        result *= i;  
    }  
    return (
    <div className="Factorial">
      <Header />
      <Article title="Факториал числа 5 равен" content={result} />
      <Footer />
    </div>
  );  
}  

export default Factorial;
