import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";

export function cx(...classes: (string | null | undefined | false)[]) {
  return classes.filter((x) => !!x).join(" ");
}

type Stylable = {
  [Tag in keyof JSX.IntrinsicElements as JSX.IntrinsicElements[Tag] extends { class?: string }
    ? Tag
    : never]: JSX.IntrinsicElements[Tag];
};

export function styled<T extends keyof Stylable>(tag: T, className: string): Component<Stylable[T]> {
  return (props) => <Dynamic class={cx(className, props.class)} component={tag} {...props} />;
}

