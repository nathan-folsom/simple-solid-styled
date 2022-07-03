import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { classed, cx, styled } from "./styled";

const AppContainer = styled("div", `text-align: center;`);

const Header = styled("header", `
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`);

const Logo = classed("img", styles.logo);

const bgBlue = `background: cornflowerblue;`

const Link = styled("a", cx(`color: white;`, bgBlue));

const Description = styled("p", bgBlue);

const FancyDescription = styled(Description, `
  color: deeppink;
  font-style: italic;
`);

const SubDescription = classed(Description, styles.subtext);

const App: Component = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <Description>
          Edit <code>src/App.tsx</code> and save to reload.
        </Description>
        <FancyDescription>Simple, Solid, Styled</FancyDescription>
        <SubDescription>A minimalist styled components implementation for Solid</SubDescription>
        <Link
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </Link>
      </Header>
    </AppContainer>
  );
};

export default App;
