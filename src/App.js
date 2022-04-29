import { useState, useEffect } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [movies, setMovie] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const getData = async () => {
    const response = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c757a5f5cb8f4e809768da63141fd41c&language=en-US&page=1"
      );
      const data = await response.json();
      setMovie(data.results);
      setFiltered(data.results);
    };
    response();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[90%] mt-14 flex flex-col mx-auto items-center">
      <Filter
        className="inline"
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        movies={movies}
      />
      <motion.div className="flex flex-wrap justify-center">
        <AnimatePresence>
          {filtered.map((populer) => {
            return <Movie key={populer.id} populer={populer} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
