import type { Dispatch, SetStateAction } from 'react';
import type { IPlayerType } from '../../types/playerType';
import { TbTrash } from 'react-icons/tb';

interface SelectedPlayerCardProps {
  player: IPlayerType;
  selectedPlayers: IPlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}: SelectedPlayerCardProps) => {

  const handleRemovePlayer = () => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) =>
        selectedPlayer.playerName !== player.playerName
    );

    setSelectedPlayers(restPlayers);

    const newCoinPrice = coin + player.price;
    setCoin(newCoinPrice);
  };

  return (
    <div
      className='flex items-center justify-between gap-2 rounded-2xl border-2 border-gray-200 px-4 py-2'
    >
      <div className='flex gap-4'>
        <img
          src={player.playerImg}
          alt={player.playerName}
          className='h-15 w-15 rounded-full object-cover'
        />

        <div>
          <h2 className='text-2xl font-bold'>
            {player.playerName}
          </h2>

          <p>{player.PlayerType}</p>
        </div>
      </div>

      <button
        onClick={handleRemovePlayer}
        className='cursor-pointer text-2xl text-red-500'
      >
        <TbTrash />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;