## Simple, Solid, Styled
A minimalist styled components implementation for Solid, using only solid apis. Solid provides two main tools that allow us to create styled  components: CSS modules and the special `style` prop. Styled components are basically just components that are given a class that is scoped to a css module, while writing the actual css in our js/ts file. This is not quite possible without an extra step in the build process, however we can get almost the same functionality by breaking that up into two functions.

### `styled`
This utility allows us to write css in our js/ts file, which will then be applied as an inline style to the component we are styling, thanks to Solid's special `style` prop:
```
import { styled } from "./styled.ts";

const AppContainer = styled("div", `text-align: center;`);

function App() {
  return <AppContainer>Hello Styled!</AppContainer>;
}
```

### `classed`
This utility on the other hand lets us get scoped classnames from our css module classes that we declared in a `.module.css` file:
```
import { classed } from "./styled";
import { styles } from "./.module.css";

const Logo = classed("img", styles.logo);

function App() {
  return <Logo src="./logo.svg" />;
}
```

Both utilities also accept a component instead of an intrinsic element tag:
```
const FancyText = styled(Text, `color: pink`);
// or
const FancyText = classed(Text, styles.fancy);
```

And can also be composed together:
```
const Text = classed("p", styles.text);
const FancyText = styled(Text, `color: pink;`);
```

See `/src/App.tsx` for more usage examples, and `styled.tsx` for implementations.