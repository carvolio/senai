import logo from './logo.svg';
import './App.css';

function App3({ isVisible }) {
  return (
      <div className="cards" style={{ display: isVisible ? 'flex' : 'none' }}>
        <div class="card"> 
          <img src="https://m.media-amazon.com/images/M/MV5BYTYyODhlODktYjUzNC00NjUyLWI1MzYtNmI0MTY3YTUxYjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" />
          <p class="name">Civil War</p>
          <p class="score">3.5/5</p>
        </div>
        <div class="card"> 
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Challengers_2024_poster.jpeg" />
          <p class="name">Challengers</p>
          <p class="score">5/5</p>
        </div>
        <div class="card"> 
          <img src="https://images.squarespace-cdn.com/content/v1/63bb3e8a824d7e2f7eedf0d3/13df2ce5-d719-48df-b1e4-bb27c6d60602/The+idea+of+You+2.jpeg?format=1500w" />
          <p class="name">The Idea of You</p>
          <p class="score">4/5</p>
        </div>
        <div class="card"> 
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/169405b8-9b86-4d5f-bd58-4505c022d930/dgvkyfp-316ca89e-05d5-49c9-b91e-2cadf85292ef.jpg/v1/fill/w_800,h_999,q_70,strp/deadpool_and_wolverine_poster_by_artoftimetravel_by_tytorthebarbarian_dgvkyfp-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzE2OTQwNWI4LTliODYtNGQ1Zi1iZDU4LTQ1MDVjMDIyZDkzMFwvZGd2a3lmcC0zMTZjYTg5ZS0wNWQ1LTQ5YzktYjkxZS0yY2FkZjg1MjkyZWYuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.egeCC1s0Z-JaJhcGJPkpQvFEsAuoOTOJFUkQowADQKo" />
          <p class="name">Deadpool e Wolverine</p>
          <p class="score">3.9/5</p>
        </div>
        <div class="card"> 
          <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/godzilla-minus-one-movie-poster.jpg" />
          <p class="name">Godzilla Minus One</p>
          <p class="score">5/5</p>
        </div>
      </div>
  );
}

export default App3;

