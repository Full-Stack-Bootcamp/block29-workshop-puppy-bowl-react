// Render new player form

import { useState } from "react";
import { addPlayer } from "../../Api/Index";

export default function NewPlayer() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
  );
  const [team, setTeam] = useState(undefined);

  async function handleSubmit(e) {
    e.preventDefault();
    const newPlayerInfo = {
      name: name,
      breed: breed,
      imageUrl: imageUrl,
      team: team,
    };

    await addPlayer(newPlayerInfo);
    window.location.reload();
  }

  return (
    <div id="new-player-form">
      <h1>Puppy Bowl</h1>
      <form onSubmit={handleSubmit}>
        <label>
          PLayer Name:
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Breed:
          <input
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </label>
        <label>
          Image URL:
          <input
            // value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </label>
        <label>
          Team:
          <select
            value={team}
            onChange={(e) => {
              setTeam(e.target.value);
            }}
          >
            <option value={undefined}>Free Agent</option>
            <option value={4}>Team Fluff</option>
            <option value={3}>Team Ruff</option>
          </select>
        </label>
        <button>Add Player</button>
      </form>
    </div>
  );
}
