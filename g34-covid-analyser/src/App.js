import logo from './logo.svg';
import './App.css';
import { Label } from './Components/Label';
import { Grommet, Box, Button, Heading, dark } from "grommet";
import { grommet } from "grommet";
import React from 'react';


function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <Grommet full theme={grommet} themeMode={darkMode ? "dark" : "light"}>
      <Box pad="large">
        <Heading level="1"> Darkmode toggle</Heading>
        <Button
          label="Toggle Theme"
          primary
          alignSelf="center"
          margin="large"
          onClick={() => setDarkMode(!darkMode)}
        />
      </Box>t
    </Grommet>
  );
}

export default App;
