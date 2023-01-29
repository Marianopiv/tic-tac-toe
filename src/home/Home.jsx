import React, { useEffect, useState } from "react";
import SquareItem from "../components/SquareItem";
import { squares, score } from "../config/squares";
import ScoreItem from "../components/ScoreItem";
import { whoWins, random } from "../helper/helper";
import Winner from "../components/Winner";
import NavBar from "../components/NavBar";

const Home = () => {
  const [squareChange, setSquareChange] = useState(squares);
  const [jugadas, setJugadas] = useState([]);
  const [change, setChange] = useState(false);
  const [winner, setWinner] = useState(false);
  const [UserCount, setUserCount] = useState(0);
  const [pcCount, setPcCount] = useState(0);
  const [gametie, setGameTie] = useState(0);

  const handleCPU = () => {
    const numero = random(squareChange);

    if (squareChange.some((item) => item != 2 || item != 3)) {
      if (jugadas.includes(numero)) {
        handleCPU();
      } else {
        setJugadas([...jugadas, numero]);
        setSquareChange(
          squareChange.map((item, index) =>
            index === numero ? (item = 3) : item
          )
        );
      }
    }
  };

  const handleConsole = (position, item) => {
    if (item === 1) {
      setSquareChange(
        squareChange.map((item, index) =>
          index === position ? (item = 2) : item
        )
      );
      setJugadas([...jugadas, position]);

      setChange(!change);
    }
  };

  const reset = () => {
    setJugadas([]);
    setSquareChange(squares);
    setWinner(false);
    setUserCount(0);
    setPcCount(0);
    setGameTie(0);
  };

  const nextRound = () => {
    setJugadas([]);
    setSquareChange(squares);
    setWinner(false);
  };

  const tie = () => {
    if (squareChange.every((item) => item != 1)) {
      setWinner(true);
      setGameTie(gametie + 1);
    }
  };

  const counter = () => {
    if (
      whoWins(squareChange) === "You Win" ||
      whoWins(squareChange) === "PC Wins"
    ) {
      setWinner(true);
      whoWins(squareChange) === "You Win"
        ? setUserCount(UserCount + 1)
        : setPcCount(pcCount + 1);
    } else {
      tie();
    }
  };

  useEffect(() => {
    if (squareChange.every((item) => item != 1)) {
      null;
    } else {
      handleCPU();
    }
  }, [change]);

  useEffect(() => {
    whoWins(squareChange);
    counter();
  }, [squareChange]);

  return (
    <>
      {winner && (
        <div className="w-full h-screen absolute">
          <div className="">
            <Winner
              nextRound={nextRound}
              reset={reset}
              text={whoWins(squareChange)}
            />
          </div>
        </div>
      )}
      <div className="p-4 h-screen flex flex-col bg-black-950  gap-10 ">
        <NavBar reset={reset} />
        <div className="flex justify-center flex-col mx-4">
          <div className="flex flex-wrap justify-center items-center w-96 gap-4">
            {squareChange.map((item, index) => (
              <div
                key={index}
                onClick={() => handleConsole(index, item)}
                className=""
                onChange={() => setDisable(true)}
              >
                <SquareItem item={item} key={index} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mx-8">
          {score.map((item, index) => (
            <ScoreItem
              key={index}
              color={item.color}
              name={item.name}
              value={
                item.name === "X (YOU)"
                  ? (item.value = UserCount)
                  : item.name === "O (CPU)"
                  ? (item.value = pcCount)
                  : (item.value = gametie)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

//Deberia lograr yo, SquareChange 1 neutral, 2 "x" y 3 es "O". En principio que todo arranque en 1.
//Mapear y generar cuadraditos por cada item que hay en square change.
//Cada cuadradito es un componente, pasar al component el index de cada uno de ellos, que cuando clickeo me imprima el numero de posicion.
//Desarrollar una funcion que coloque una X o numero correspondiente en el Square Change en el index enviado
//Una vez agregado deberia agregar esa posicion en el state jugadas tambien. (Aparte del state squareChange)
//Desarrollar otra funcion que genere un numero random que no haya en el array jugadas y coloque un cero en la posición generada.
//Mapear el square Change y colocar un cero en la posición que generó el numero random y ahi tendria un cero.
//Tercera parte del flujo que es proxima clase, entender si ganaste, empataste o perdes.
