import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { routes } from './util/route';
import { AnimatePresence } from 'framer-motion';
import { UserContext } from './context/UserContext';

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
  const [user, setUser] = useState(null);
  const [listRek, setListRek] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, listRek, setListRek }}>
      <Router>
        <Flex
          direction="column"
          bg="cyan"
          minH='100vh'
        >
          <AnimatedRoute />
        </Flex>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
