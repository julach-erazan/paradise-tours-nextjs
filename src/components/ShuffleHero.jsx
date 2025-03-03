import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
   
      <div className=" ">
         
      <ShuffleGrid />
      </div>
   
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1569670380606-fd47201d42da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3JpJTIwbGFua2ElMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D",
  },
 {
  id:2,
  src:"https://images.unsplash.com/photo-1660295649234-47356c90fda2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3JpJTIwbGFua2ElMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"
 },
 {
  id:3,
  src:"https://images.unsplash.com/photo-1569670380596-2af563dc1980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3JpJTIwbGFua2ElMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"
 },
 {
  id:4,
  src:"https://images.unsplash.com/photo-1624963144891-812fd18ecda8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:5,
  src:"https://images.unsplash.com/photo-1569668443968-115e0e981bad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3JpJTIwbGFua2ElMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"
 },
 {
  id:6,
  src:"https://images.unsplash.com/photo-1569670380685-4582bf29a24a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:7,
  src:"https://images.unsplash.com/photo-1568918223333-3ee02fb116c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:8,
  src:"https://images.unsplash.com/photo-1568918223182-5ab2f1d87ec5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:9,
  src:"https://images.unsplash.com/photo-1568919018698-238e215f2b15?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:10,
  src:"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:11,
  src:"https://plus.unsplash.com/premium_photo-1709440655728-295d8c1cb722?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:12,
  src:"https://plus.unsplash.com/premium_photo-1711255562146-0acdc7d5c659?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:13,
  src:"https://images.unsplash.com/photo-1693761669828-b0117c7a82ff?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:14,
  src:"https://plus.unsplash.com/premium_photo-1712736395839-997c8c9dbd06?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:15,
  src:"https://images.unsplash.com/photo-1569670380685-169d7737183d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },
 {
  id:16,
  src:"https://images.unsplash.com/photo-1569668444080-c3cd3fd2a259?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNyaSUyMGxhbmthJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
 },

];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;