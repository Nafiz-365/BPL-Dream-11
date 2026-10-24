import type { Dispatch, SetStateAction } from "react";
import type { Iplayer } from "../../types/player";

import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayerProps {
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
    coin,
    setCoin,
}: ISelectedPlayerProps) => {
    // console.log(selectedPlayers, setSelectedPlayers, 'Selected Players');
    if (selectedPlayers.length === 0) {
        return (
            <h2 className="font-bold text-3xl my-10 text-center text-red-500">
                No Selected Players
            </h2>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-8 mt-6">
            {selectedPlayers.map((player: Iplayer) => {
                return (
                    <SelectedPlayerCard
                        coin={coin}
                        setCoin={setCoin}
                        player={player}
                        selectedPlayers={selectedPlayers}
                        setSelectedPlayers={setSelectedPlayers}
                    ></SelectedPlayerCard>
                );
            })}
        </div>
    );
};

export default SelectedPlayers;
