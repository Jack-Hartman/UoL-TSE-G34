import React from 'react';
import { Grommet, Box, Button, Heading, dark } from "grommet";

function DarkModeToggle() {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <Box pad="large">
        <Heading level="1"> Darkmode toggle</Heading>
        <Button
          label="Toggle Theme"
          primar
          alignSelf="center"
          margin="large"
          onClick={() => setDarkMode(!darkMode)}
        />
      </Box>
    );
}