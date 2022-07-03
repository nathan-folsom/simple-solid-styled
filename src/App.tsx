import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { cx, styled } from "./styled";

const AppContainer = styled("div", styles.App);

const Header = styled("header", styles.header);

const Logo = styled("img", styles.logo);

const Link = styled("a", cx(styles.link, "bg-blue"));

const Description = styled("p", "bg-blue");

const App: Component = () => {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <Description>
          Edit <code>src/App.tsx</code> and save to reload.
        </Description>
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
