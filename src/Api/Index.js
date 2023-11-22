// Write fetch and other API AJAX helper functions
const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchPlayers() {
  try {
    const resp = await fetch(APIURL);
    const players = await resp.json();
    return players;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlayer(playerId) {
  try {
    const resp = await fetch(`${APIURL}/${playerId}`);
    const singlePlayer = await resp.json();
    console.log(singlePlayer);
    return singlePlayer;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}

export async function addPlayer(playerInfo) {
  console.log("Player info coming thru like:");
  console.log(playerInfo.name);
  console.log(playerInfo);

  try {
    const response = await fetch(`${APIURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerInfo),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function deletePlayer(playerId) {
  console.log("PLAYER ID:");
  console.log(playerId);

  try {
    const resp = await fetch(`${APIURL}/${playerId}`, { method: "DELETE" });
    const result = await resp.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
