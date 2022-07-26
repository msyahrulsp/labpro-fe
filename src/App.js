import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { routes } from './util/route';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoute = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              exact
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Flex
        direction="column"
        bg="cyan"
        minH='100vh'
      >
        <AnimatedRoute />
      </Flex>
    </Router>
  );
}

export default App;
