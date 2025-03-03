import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";



const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative mt-40 h-[300px] w-[300px]  md:h-[450px] md:w-[450px] rounded-xl overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform rounded-lg duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end rounded-lg justify-center">
        <p className="bg-gradient-to-br text-center rounded-lg from-white/20 to-white/0 p-8 text-xl  md:text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [

    {
      url: "/colombo.jpg",
      title: "colombo view ",
      id: 2,
    },
    {
      url: "/galle.jpg",
      title: "galle",
      id: 3,
    },
    {
      url: "/galle2.jpg",
      title: "galle port",
      id: 4,
    },
    {
      url: "/colombo3.jpg",
      title: "colombo mosque",
      id: 5,
    },
    {
      url: "/colombo2.jpg",
      title: "beach view",
      id: 6,
    },
    {
      url: "/galle3.jpg",
      title: "galle fort view",
      id: 7,
    },
    {
      url: "/sigiriya.jpg",
      title: "Sigiriya View",
      id: 8,
    },
    {
      url: "/kandy.jpg",
      title: "sri  dalada maligawa",
      id: 9,
    },
    {
      url: "/trinco.jpg",
      title: "koneshwarn kovil",
      id: 10,
    },
   
    {
      url: "/kandy2.jpg",
      title: "maligawa view",
      id: 11,
    },
    {
      url: "/ella.jpg",
      title: "nine arch ",
      id: 12,
    },
    {
      url: "/ella4.jpg",
      title: " arch with sunset",
      id: 13,
    },
    {
      url: "/tea.jpg",
      title: "tea leave",
      id: 14,
    },
    {
      url: "/kandy3.jpg",
      title: "kandy culture",
      id: 15,
    },
    {
      url: "/mountan.jpg",
      title: "high mountain view",
      id: 16,
    },
  
  ];