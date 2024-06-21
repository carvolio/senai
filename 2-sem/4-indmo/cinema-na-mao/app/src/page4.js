import logo from './logo.svg';
import './App.css';

function App4({ isVisible }) {
  return (
    <div className="contato" style={{ display: isVisible ? 'flex' : 'none' }}>
      <p>Email: cinemanamao@gmail.com</p>
      <p>Redes Sociais: @cinemanamao</p>
      <div>
        <h3>Cinema na Mão: Seu Portal para um Mundo de Delírios Cinematográficos</h3>
        <p>Chamando todos os entusiastas de cinema! Cinema na Mão, seu destino único para recomendações de filmes personalizadas, tem o prazer de apresentar uma série de novos recursos empolgantes que elevarão sua experiência cinematográfica a novos patamares.</p>
      </div>
    </div>
  );
}

export default App4;
