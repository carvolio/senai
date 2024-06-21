import logo from './logo.svg';
import React, {useState, useEffect, Text} from "react";
import './App.css';
import axios from "axios";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { SvgIcon } from '@mui/material';

function App() {
  const [item, setItem] = React.useState([]);
  
  const [num, setNum] = useState('');
  let numN = 20;

  const fetchApi = async (numN) => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numN}&offset=0`);
    return result;
  };

  const inputChange = (e) => {
    setNum(e.target.value);
    console.log(numN);
  };
  numN = Number(num);
  
  React.useEffect(() => {
    fetchApi(numN).then(res => {
    setItem(res.data.results);
    // window.location.reload(true)
    })
  }, [numN]);

   const pokeArry = () => {
    const pokemon = [];
    for (let i = 0; i < item.length; i++) {
       console.log(item[i].name)
       pokemon.push(
        <div class="card">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
          <p>{item[i].name}</p>
          <SvgIcon component={CatchingPokemonIcon}></SvgIcon>
        </div>
      );
    };
    return pokemon;
  };

  return (
    <div class="App">
      <header>
        <title>POKECODE</title>
        {/* <img src={`https://www.flaticon.com/free-icon/instinct_189010?related_id=189010`}/> */}
        <SvgIcon component={CatchingPokemonIcon} fontSize='large' fontWeight={10}></SvgIcon>
        <p>POKECODE</p>
      </header>
      <div class="divInput">
        <form class="form">
          <label>
            Quantidade de Pokemon:
            <input value={num} type='number' onChange={inputChange} />
          </label>
        </form>
      </div>
      <div>
        <pre>
          <code>{pokeArry()}</code>
        </pre>
      </div>
    </div>
  );
  
};

export default App;
