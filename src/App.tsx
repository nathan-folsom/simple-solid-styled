import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { cx, styled } from "./styled";

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

const Logo = styled("img", `
  animation: ${styles["logo-spin"]} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`);

const bgBlue = `background: cornflowerblue;`

const Link = styled("a", cx(`color: white;`, bgBlue));

const Description = styled("p", bgBlue);

const FancyDescription = styled(Description, `
  color: deeppink;
  font-style: italic;
`);

const App: Component = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <Description>
          Edit <code>src/App.tsx</code> and save to reload.
        </Description>
        <FancyDescription>Simple, Solid, Styled</FancyDescription>
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
