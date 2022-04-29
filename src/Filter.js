import { useEffect } from "react";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, movies }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filtered = movies.filter((populer) =>
      populer.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);
  return (
    <div>
      <button onClick={() => setActiveGenre(0)}>All</button>
      <button onClick={() => setActiveGenre(35)}>Action</button>
      <button onClick={() => setActiveGenre(28)}>Animate</button>
    </div>
  );
};

export default Filter;
