import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { classed, styled } from "./styled";

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

const Text = classed("p", "bg-blue");

const Link = styled(classed("a", "bg-blue"), `color: white;`);

const FancyDescription = styled(Text, `
  color: deeppink;
  font-style: italic;
`);

const SubDescription = classed("p", styles.subtext);

const App: Component = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <Text>
          Edit <code>src/App.tsx</code> and save to reload.
        </Text>
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
