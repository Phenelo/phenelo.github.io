// packages
import { useState } from 'react';
import { motion } from 'framer-motion';

import './App.css';

function App() {
  const [hovered, setHovered] = useState();

  return (
    <div className="home">
      <motion.div
        animate={{
          opacity: [0, 1],
          scale: hovered ? 1.5 : 1,
          cursor: "pointer",
        }}
        whileTap={{
          x: ["2px", "-2px", "5px", "3px", "-5px", "0px"],
          y: ["2px", "-1px", "0px", "-1px", "-2px", "0px"]
        }}
        transition={{
          scale: {
            duration: .5,
            ease: "easeInOut",
          },
          opacity: {
            duration: 1,
            ease: "easeInOut",
          },
          x: {
            duration: .2,
          }
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          animate={{
            scale: [1, 1.1],
            opacity: [1, .8],
          }}
          transition={{
            delay: 1,
            repeat: Infinity,
            repeatDelay: .1,
            repeatType: "mirror",
            duration: 1.4,
            ease: "easeInOut"
          }}
        >
          Composing...
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
