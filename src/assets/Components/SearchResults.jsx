export default function SearchResults({ player }) {
  console.log(player);
  const { name, breed, status, teamId, id } = player;
  let team = "";
  teamId === 4
    ? (team = "Team Fluff")
    : teamId === 3
    ? (team = "Team Ruff")
    : (team = "Free Agent");
  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>{breed}</td>
      <td>{team}</td>
      <td>{status}</td>
    </tr>
  );
}
