import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";
import PlayerCard from "./PlayerCard";

interface IAvailableProps {
    players: Iplayer[];
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const AvailablePlayers = ({
    players,
    coin,
    setCoin,
    selectedPlayers,
    setSelectedPlayers,
}: IAvailableProps) => {
    // console.log(players, 'Players from Available Players!');
    // console.log(coin, setCoin, 'from Available Players');
    return (
        <div className="grid grid-cols-3 gap-10 mt-6">
            {players.map((player: Iplayer, idx: number) => {
                return (
                    <PlayerCard
                        key={idx}
                        player={player}
                        coin={coin}
                        setCoin={setCoin}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    ></PlayerCard>
                );
            })}
        </div>
    );
};

export default AvailablePlayers;
