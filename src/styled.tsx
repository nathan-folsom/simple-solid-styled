import { Component, JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export function cx(...classes: (string | null | undefined | false)[]) {
  return classes.filter((x) => !!x).join(" ");
}

type StyleAttribute = { style?: JSX.CSSProperties | string };

type Stylable = {
  [Tag in keyof JSX.IntrinsicElements as JSX.IntrinsicElements[Tag] extends StyleAttribute
    ? Tag
    : never]: JSX.IntrinsicElements[Tag];
};

export function styled<T extends Component<{ style?: string }>>(
  component: T, css: string
): T extends Component<infer P> ? Component<P> : never;
export function styled<T extends keyof Stylable>(tag: T, css: string): Component<Stylable[T]>;
export function styled(
  TagOrComponent: keyof Stylable | Component<{ style?: string }>, css: string
): Component<{ style?: string }> {
  return props => {
    const [styleProps, rest] = splitProps(props, ["style"]);
    return typeof TagOrComponent === "string"
      ? <Dynamic {...rest} style={cx(styleProps.style, css)} component={TagOrComponent}/>
      : <TagOrComponent {...rest} style={cx(styleProps.style, css)} />;
  };
}
