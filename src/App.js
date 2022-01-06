import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Header from "./components/Header";
import { theme } from "./styles/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
