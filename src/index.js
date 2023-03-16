import { createRoot } from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// 2. Add your color mode config

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const config = {
  initialColorMode: "light",
  useSystemColorMode: false
};

// 3. extend the theme
const theme = extendTheme({ config });
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
