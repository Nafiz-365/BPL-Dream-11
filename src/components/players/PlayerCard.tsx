import {
    FaFlag,
    FaUserCircle,
    FaBaseballBall,
    FaBolt,
    FaShoppingCart,
} from "react-icons/fa";

import type { Iplayer } from "../../types/player";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast, Zoom } from "react-toastify";

interface IPlayerCardProps {
    player: Iplayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
    player,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: IPlayerCardProps) => {
    const [isSelected, setIsSelected] = useState(false);
    // console.log(isSelected, setIsSelected);
    // console.log(coin, setCoin, "From PlayerCard");
    const handleSelectPlayer = () => {
        setIsSelected(true);
        const newCoinPrice = coin - player.price;
        if (newCoinPrice >= 0) {
            setCoin(newCoinPrice);

            toast(`${player.playerName} Has been Purchased Successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        } else {
            toast.error(`Not enough Coin to Purchase Player`);
        }

        //Selected Player Logic
        setSelectedPlayers([...selectedPlayers, player]);
    };
    return (
        <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Player Image */}
            <figure className="relative h-72 overflow-hidden bg-base-200">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 to-transparent" />

                {/* Player Type */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-content shadow-lg">
                        {player.playerType}
                    </span>
                </div>

                {/* Player Name */}
                <div className="absolute bottom-4 left-5 text-white">
                    <h2 className="text-2xl font-bold drop-shadow-md">
                        {player.playerName}
                    </h2>
                </div>
            </figure>

            {/* Card Content */}
            <div className="card-body p-5">
                {/* Country + Role */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-base-content/70">
                        <FaFlag className="text-primary" />
                        <span>{player.origin}</span>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg bg-base-200 px-3 py-1.5 text-xs font-semibold">
                        <FaUserCircle />
                        <span>{player.playerType}</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-1"></div>

                {/* Playing Style */}
                <div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-base-content/60">
                        Playing Style
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {/* Batting */}
                        <div className="rounded-xl border border-base-300 bg-base-200/50 p-3">
                            <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-base-content/60">
                                <FaBaseballBall className="text-primary" />
                                Batting
                            </div>

                            <p className="text-sm font-bold">
                                {player.battingStyle}
                            </p>
                        </div>

                        {/* Bowling */}
                        <div className="rounded-xl border border-base-300 bg-base-200/50 p-3">
                            <div className="mb-1 flex items-center gap-2 text-xs font-semibold text-base-content/60">
                                <FaBolt className="text-secondary" />
                                Bowling
                            </div>

                            <p className="text-sm font-bold">
                                {player.bowlingStyle}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider my-1"></div>

                {/* Price + Buy */}
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Auction Price
                        </p>

                        <h2 className="text-2xl font-extrabold text-primary">
                            ${player.price.toLocaleString()}
                        </h2>
                    </div>

                    <button
                        onClick={() => handleSelectPlayer()}
                        className="btn btn-primary gap-2 rounded-xl px-5 transition-all duration-300 hover:scale-105"
                        // disabled={isSelected === true ? true : false}
                        disabled={isSelected ? true : false}
                        // disabled={isSelected}
                    >
                        <FaShoppingCart />
                        {isSelected === true ? "Select" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
