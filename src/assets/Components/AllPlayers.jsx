// Display all players, use state
import "../../App.css";
import PlayerCard from "./PlayerCard";
import { fetchPlayers } from "../../Api/Index";
import { useEffect, useState } from "react";
import Search from "./Search";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function declareNewPlayers() {
      try {
        const newPlayers = await fetchPlayers();
        setPlayers(newPlayers.data.players);
      } catch (error) {
        console.log(error);
      }
    }
    declareNewPlayers();
  }, []);

  return (
    <>
      <Search playerArray={players} />
      <div id="all-players-containers">
        {players.map((player, index) => {
          console.log(player);
          return <PlayerCard key={index} player={player} />;
        })}
      </div>
    </>
  );
}
