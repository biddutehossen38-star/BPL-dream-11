import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Players from "./components/players/Players";
import type { IPlayerType } from "./types/playerType";
import { ToastContainer } from "react-toastify";


const playersFetch = async (): Promise<IPlayerType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
}


function App() {
  // const playersPromise = playersFetch();
  const [playersPromise] = useState(() => playersFetch());
  const [coin, setCoin] = useState(2000);

  return (
    <>
      <ToastContainer />
      <Nav coin={coin} />
      <Banner />
      <Suspense fallback={<h2>Loading......</h2>}> <Players playersPromise={playersPromise} coin={coin} setCoin={setCoin} /></Suspense>

    </>
  )
}

export default App
