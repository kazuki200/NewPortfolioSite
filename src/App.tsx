import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./parts/header";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
