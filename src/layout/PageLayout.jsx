import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { Navbar } from './Navbar';

const pageAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const PageAnimate = ({ children }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.div
        variants={pageAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3 }}
      >
        <Box
          px={10}
          pt={4}
          pb={7}
        >
          {children}
        </Box>
      </motion.div>
    </>
  )
}