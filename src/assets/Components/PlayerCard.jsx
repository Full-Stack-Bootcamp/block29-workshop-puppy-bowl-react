import { Link } from "react-router-dom";
import { deletePlayer } from "../../Api/Index";

export default function PlayerCard({ player }) {
  const { name, imageUrl, id } = player;

  async function handleDelete(e) {
    e.preventDefault();
    const confirm = window.confirm(
      `You're aboout to delete ${name}. Click OK to confirm and delete this creature from existence.`
    );
    if (confirm) {
      await deletePlayer(id);
      window.location.reload();
    }
  }

  return (
    <div className="player-card">
      <h3>{name}</h3>
      <img src={imageUrl} alt="Player Name" />
      <div className="buttons">
        <Link
          to={{
            pathname: `/details/${id}`,
          }}
          state={{ player: { id } }}
        >
          <button>Details</button>
        </Link>

        <form onSubmit={handleDelete}>
          <button>Delete</button>
        </form>
      </div>
    </div>
  );
}
