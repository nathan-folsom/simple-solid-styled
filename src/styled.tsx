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

type ClassAttribute = { class?: string };

type Classable = {
  [Tag in keyof JSX.IntrinsicElements as JSX.IntrinsicElements[Tag] extends ClassAttribute
    ? Tag
    : never]: JSX.IntrinsicElements[Tag];
};

export function classed<T extends Component<{ class?: string }>>(
  component: T, css: string
): T extends Component<infer P> ? Component<P> : never;
export function classed<T extends keyof Classable>(tag: T, css: string): Component<Classable[T]>;
export function classed(
  TagOrComponent: keyof Classable | Component<{ class?: string }>, css: string
): Component<{ class?: string }> {
  return props => {
    const [classProps, rest] = splitProps(props, ["class"]);
    return typeof TagOrComponent === "string"
      ? <Dynamic {...rest} class={cx(classProps.class, css)} component={TagOrComponent}/>
      : <TagOrComponent {...rest} class={cx(classProps.class, css)} />;
  };
}