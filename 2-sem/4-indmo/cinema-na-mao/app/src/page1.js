import logo from './logo.svg';
import './App.css';

function App1({ isVisible }) {
  return (
      <div className="cards" style={{ display: isVisible ? 'flex' : 'none' }}>
        <div class="card"> 
          <img src="https://nerdtatuado.com.br/wp-content/uploads/2021/10/duna-2020-dune-quadro-decorativo-a3-filme-duna-2020.jpg" />
          <p class="name">Duna</p>
          <p class="score">4.5/5</p>
        </div>
        <div class="card"> 
          <img src="https://media-cache.cinematerial.com/p/500x/7dc6ang2/the-vast-of-night-movie-poster.jpg?v=1569095535" />
          <p class="name">Vast Night</p>
          <p class="score">5/5</p>
        </div>
        <div class="card"> 
          <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/furiosa-a-mad-max-saga-poster-showing-anya-taylor-joy-as-furiosa-and-chris-hemsworth-standing-in-front-of-a-motorcycle-gang.jpeg" />
          <p class="name">Furiosa</p>
          <p class="score">4/5</p>
        </div>
      </div>
  );
}

export default App1;
