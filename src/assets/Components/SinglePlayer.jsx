// Display individual player card
import { Link, useLocation } from "react-router-dom";
import { getPlayer } from "../../Api/Index";
import { useEffect, useState } from "react";

export default function SinglePlayer() {
  let { state } = useLocation();
  const playerId = state.player.id;
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    async function getSinglePlayer() {
      try {
        const singlePlayer = await getPlayer(playerId);
        setPlayer(singlePlayer.data.player);
      } catch (error) {
        console.log(error);
      }
    }
    getSinglePlayer();
  }, []);
  const { name, imageUrl, breed, team } = player;
  let teamName = "Free Agent";
  {
    team?.name !== undefined
      ? (teamName = team?.name)
      : (teamName = "Free Agent");
  }
  console.log("TEAM NAME");
  console.log(teamName);

  return (
    <div className="player-card detail-card">
      <h3>{name}</h3>
      <img src={imageUrl} alt="Player Name" />
      <div className="details">
        <div>
          <p>Breed: {breed}</p>
          <p>Team Name: {teamName}</p>
        </div>
        <div id="buttons">
          <Link to="/">
            <button className="return-button">Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
