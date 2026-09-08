import { use, useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayerType } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
  playersPromise: Promise<IPlayerType[]>
  coin: number
  setCoin: Dispatch<SetStateAction<number>>


}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {

  const [selectedPlayers, setSelectedPlayers] = useState<IPlayerType[]>([]);

  const players = use(playersPromise)

  const [buttonType, setButtonType] = useState("available") //available or selected

  // console.log(buttonType, 'test usestate')
  const handleClickButton = (type: "available" | "selected") => {
    setButtonType(type);
  };


  return (
    <div className='container mx-auto'>
      <div className='flex justify-between'>
        <h2 className='font-bold text-xl'>{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
        <div className=''>
          <button
            onClick={() => handleClickButton("available")} //rapp f
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none `}>Available</button>
          <button
            onClick={() => handleClickButton("selected")}
            className={`btn  ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
        </div>
      </div>
      {buttonType === "available" ? (<AvailablePlayers players={players} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />) : (<SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin} />
      )}
    </div>
  );
};

export default Players;