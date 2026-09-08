import { useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayerType } from '../../types/playerType';
import {
  FaUser,
  FaGlobe,
  FaBaseballBall,
  FaArrowRight
} from 'react-icons/fa';
import { toast } from 'react-toastify';

interface IPlayerCardProps {
  player: IPlayerType
  coin: number
  setCoin: Dispatch<SetStateAction<number>>
  selectedPlayers: IPlayerType[]
  setSelectedPlayers: Dispatch<SetStateAction<IPlayerType[]>>
}


const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerCardProps) => {


  const [isSelected, setIsSelected] = useState(false)


  const handleSelectPlayer = () => {
    const newCoinPrice = coin - player.price;

    if (newCoinPrice >= 0) {
      setCoin(newCoinPrice);

      setSelectedPlayers([
        ...selectedPlayers,
        player
      ]);

      setIsSelected(true);

      toast.success(`${player.playerName} is Purchased succesfully`)
    } else {
      toast.error('Coin is not enough to purchase')
    }

    //Selected palyers Logic
    // setSelectedPlayers([...selectedPlayers, player])

  }

  return (
    <div
      className="
        group card overflow-hidden
        rounded-2xl
        border border-base-300
        bg-bottom-right from-base-100 to-base-200
        shadow-xl
        transition-all duration-300
        hover:-translate-y-3
        hover:shadow-2xl
      "
    >

      {/* Image Section */}
      <figure className="relative h-64 overflow-hidden">

        <img
          src={player.playerImg}
          alt={player.playerName}
          className="
            h-full w-full 
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Player Type */}
        <div className="badge badge-primary absolute right-4 top-4 border-none px-4 py-3 font-bold shadow-lg">
          {player.PlayerType}
        </div>

        {/* Player Name on Image */}
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm opacity-80">
            Professional Player
          </p>

          <h2 className="text-2xl font-bold">
            {player.playerName}
          </h2>
        </div>

      </figure>


      {/* Card Body */}
      <div className="card-body gap-5">

        {/* Origin */}
        <div className="flex items-center gap-3 rounded-xl bg-base-200 p-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content">
            <FaGlobe />
          </div>

          <div>
            <p className="text-sm text-base-content/60">
              Country
            </p>

            <p className="font-bold">
              {player.origin}
            </p>
          </div>

        </div>


        {/* Player Info */}
        <div className="grid grid-cols-2 gap-3">

          {/* Batting */}
          <div className="rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm">

            <p className="mb-2 text-xs font-semibold text-base-content/50">
              BATTING
            </p>

            <div className="flex items-center gap-2">
              <FaUser className="text-primary" />

              <span className="text-sm font-bold">
                {player.battingStyle}
              </span>
            </div>

          </div>


          {/* Bowling */}
          <div className="rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm">

            <p className="mb-2 text-xs font-semibold text-base-content/50">
              BOWLING
            </p>

            <div className="flex items-center gap-2">
              <FaBaseballBall className="text-primary" />

              <span className="text-sm font-bold">
                {player.bowlingStyle}
              </span>
            </div>

          </div>

        </div>


        {/* Bottom Section */}
        <div className="flex items-center justify-between rounded-xl bg-primary p-4 text-primary-content">

          <div>
            <p className="text-xs opacity-80">
              Player Price
            </p>

            <h3 className="text-xl font-bold">
              ${player.price.toLocaleString()}
            </h3>
          </div>


          <button
            type="button"
            onClick={handleSelectPlayer}
            disabled={isSelected}
            className="
    btn btn-sm
    border-none
    bg-white
    text-primary
    hover:bg-base-200
    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:opacity-40
    disabled:bg-gray-300
  "
          >
            {isSelected ? "Selected" : "Choose Player"}
            <FaArrowRight />
          </button>

        </div>

      </div>
    </div>
  );
};

export default PlayerCard;