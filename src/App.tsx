import Nav from "./components/Nav";
import Banner from "./components/Banner";
import { Suspense, useState } from "react";
import type { Iplayer } from "./types/player";
import Players from "./components/players/Players";
import { ToastContainer } from "react-toastify";

const fetchPlayers = async (): Promise<Iplayer[]> => {
    const res = await fetch("/public/data.json");
    const data = await res.json();
    return data;
};
function App() {
    const [playersPromise] = useState(() => fetchPlayers());
    // console.log(playersPromise);
    const [coin, setCoin] = useState(5000);
    return (
        <>
            <Nav coin={coin}></Nav>
            <Banner></Banner>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Players
                    playersPromise={playersPromise}
                    coin={coin}
                    setCoin={setCoin}
                ></Players>
            </Suspense>
            <ToastContainer />
        </>
    );
}

export default App;
