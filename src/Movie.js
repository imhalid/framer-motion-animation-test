import { motion } from "framer-motion";
const Movie = ({ populer }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout="position"
      className="items-center text-center mb-10"
    >
      <h5 className="mt-3">{populer.title}</h5>
      <img
        className="w-[250px] h-[400px] object-cover mx-4 rounded-xl"
        src={"https://image.tmdb.org/t/p/w500/" + populer.backdrop_path}
        alt="description"
      />
    </motion.div>
  );
};

export default Movie;
