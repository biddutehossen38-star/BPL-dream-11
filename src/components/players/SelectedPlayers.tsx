import type { Dispatch, SetStateAction } from 'react';
import type { IPlayerType } from '../../types/playerType';
import { TbTrash } from 'react-icons/tb';
import SelectedPlayerCard from './SelectedPlayerCard';

interface ISelectedPlayersProps {
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
}

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers, coin, setCoin
}: ISelectedPlayersProps) => {

  if (selectedPlayers.length === 0) {
    return (

      <h2 className='font-bold text-3xl my-10 text-red-500 text-center'>No selected players</h2>

    )

  }

  return (
    <div className='grid grid-cols-1 gap-4 my-6'>
      {selectedPlayers.map((player: IPlayerType, ind: number) => {
        return (<SelectedPlayerCard key={ind}
          coin={coin} setCoin={setCoin} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
        />
        );
      })}
    </div>
  );
};

export default SelectedPlayers;