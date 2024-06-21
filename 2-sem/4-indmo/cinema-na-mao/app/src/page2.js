import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Text} from "react";
import axios from "axios";

function App2({ isVisible }) {

  // const [nameMovie, setnameMovie] = useState('');
  // const [results, setResults] = useState([]);

  // const fetchMovie = async (e) => {
  //       e.preventDefault();
  //       const send = await fetch(`http://www.omdbapi.com/?s=${nameMovie}&apikey=305e7b8e`);
  //       const data = await send.json();
  //       if (data.Search) {
  //           const moviePromises = data.Search.map(e =>
  //               fetch(`http://www.omdbapi.com/?i=${e.imdbID}&apikey=305e7b8e`).then(send => send.json())
  //           );
  //           const detailedMovies = await Promise.all(moviePromises);
  //           setResults(detailedMovies);
  //       } else {
  //           setResults([]);
  //       }
  //   };

  const [movie, setMovie] = useState('');
  const [dataMovie, setDataMovie] = React.useState([]);

  const fetchApi = async (movie) => {
    const result = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=91e41577`);
    console.log(result);
    return result;
  };

  const inputChange = (e) => {
    setMovie(e.target.value);
    console.log(movie);
  };

  React.useEffect(() => {
    fetchApi(movie).then(result => {
    setDataMovie(result.data.Search);
    console.log(dataMovie);
    })
  }, [movie]);

  const showCard = () => {
    const movieArry = [];
    for (let i in dataMovie) {
       console.log(dataMovie[i]);
       movieArry.push(
        <div class="card">
          <img src={`${dataMovie[i].Poster}`}/>
          <p class="name">{dataMovie[i].Title}</p>
          <p class="year">{dataMovie[i].Year}</p>
        </div>
      );
    };
    console.log(movieArry);
    return movieArry;
  };
  

  return (
    <div class="busca" style={{ display: isVisible ? 'flex' : 'none' }}>
      <label>
          Nome do Filme:
          <input value={movie} type="text" onChange={e => inputChange(e)} />
      </label>
      <div class="cards">
        {showCard()}
      </div>
    </div>
  );
}

export default App2;
