import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayerType } from '../../types/playerType';
import { FaUser } from 'react-icons/fa';
import PlayerCard from './PlayerCard';

interface IAvailableProps {
  players: IPlayerType[]
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
  selectedPlayers: IPlayerType[]
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>
}


const AvailablePlayers = ({ players, coin, setCoin, selectedPlayers, setSelectedPlayers }: IAvailableProps) => {
  // console.log(players, 'AvailablePlayers')
  // console.log(coin, setCoin, 'from available')
  return (
    <div className='grid grid-cols-3 gap-4 my-6'>
      {players.map((player: IPlayerType, index: number) => {
        return (
          <PlayerCard key={index} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
        )

      })}
    </div>
  );
};

export default AvailablePlayers;