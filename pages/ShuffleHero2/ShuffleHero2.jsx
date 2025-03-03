import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero2 = () => {
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
    src: "https://images.unsplash.com/photo-1704797390559-d5534351a319?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id:2,
    src:"https://plus.unsplash.com/premium_photo-1676788477630-035a416b8afa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:3,
    src:"https://images.unsplash.com/photo-1716864963557-f671917abc9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:4,
    src:"https://images.unsplash.com/photo-1720351207551-da2822f1a654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:5,
    src:"https://plus.unsplash.com/premium_photo-1721405381360-c37d5a3ef161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:6,
    src:"https://images.unsplash.com/photo-1586846124959-3ea1bdea98e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:7,
    src:"https://plus.unsplash.com/premium_photo-1676468382123-d2e54cf8b62b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:8,
    src:"https://plus.unsplash.com/premium_photo-1676179691830-5bd6c9749088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:9,
    src:"https://images.unsplash.com/photo-1527039257570-2d493710cdae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:10,
    src:"https://images.unsplash.com/photo-1580635849262-3161a7c99dac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNyaSUyMGxhbmthJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
  },
//   {
//     id:11,
//     src:"https://plus.unsplash.com/premium_photo-1678257846202-c3f744d02be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3JpJTIwbGFua2ElMjBjdWx0dXJlfGVufDB8fDB8fHww"
//   },
//   {
//     id:12,
//     src:"https://plus.unsplash.com/premium_photo-1678257846202-c3f744d02be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3JpJTIwbGFua2ElMjBjdWx0dXJlfGVufDB8fDB8fHww"
//   },
  {
    id:13,
    src:"https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3JpJTIwbGFua2ElMjBjdWx0dXJlfGVufDB8fDB8fHww"
  },
  {
    id:14,
    src:"https://plus.unsplash.com/premium_photo-1661957683219-f1656e9a46fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3JpJTIwbGFua2ElMjBjdWx0dXJlfGVufDB8fDB8fHww"
  },
  {
    id:15,
    src:"https://plus.unsplash.com/premium_photo-1661957683219-f1656e9a46fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3JpJTIwbGFua2ElMjBjdWx0dXJlfGVufDB8fDB8fHww"
  },
  {
    id:16,
    src:"https://plus.unsplash.com/premium_photo-1718570262726-fb764ebc89c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3JpJTIwbGFua2ElMjBjdWx0dXJlfGVufDB8fDB8fHww"
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

export default ShuffleHero2;