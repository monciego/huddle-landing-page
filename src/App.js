import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Header from "./components/Header";
import { theme } from "./styles/Theme";
import { contents } from "./content";
import { Container } from "./styles/Container.styled";
import Card from "./components/Card";
import { StyledCards } from "./styles/Card.styled";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          <StyledCards>
            {contents.map((content) => {
              return <Card key={content.id} {...content} />;
            })}
          </StyledCards>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
