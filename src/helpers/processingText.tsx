import React, { type ReactNode } from "react";

type RuleFn = (content: ReactNode[], key: number) => ReactNode;

const rules: Record<string, RuleFn> = {
  strong: (content, key) => React.createElement("strong", { key }, content),
  em: (content, key) => React.createElement("em", { key }, content),
  i: (content, key) => React.createElement("i", { key }, content),
  span: (content, key) =>
    React.createElement("span", { key }, content),
  code: (content, key) => React.createElement("code", { key }, content),
  cite: (content, key) => React.createElement("cite", { key }, content),
  sub: (content, key) => React.createElement("sub", { key }, content),
  sup: (content, key) => React.createElement("sup", { key }, content),
  abbr: (content, key) => React.createElement("abbr", { key }, content),
  time: (content, key) => React.createElement("time", { key }, content),
};

export function richText(text: string): ReactNode[] {
  const regex = /\[(\/?)(\w+)\]/g;
  const stack: { tag: string; children: ReactNode[] }[] = [];
  const result: ReactNode[] = [];

  let lastIndex = 0;
  let key = 0;

  text.replace(
    regex,
    (match: string, closing: string, tag: string, offset: number) => {
      if (offset > lastIndex) {
        const plainText = text.slice(lastIndex, offset);
        if (stack.length > 0) {
          stack[stack.length - 1].children.push(plainText);
        } else {
          result.push(plainText);
        }
      }
      lastIndex = offset + match.length;

      if (!closing) {
        stack.push({ tag, children: [] });
      } else {
        const node = stack.pop();
        if (node && rules[node.tag]) {
          const element = rules[node.tag](node.children, key++);
          if (stack.length > 0) {
            stack[stack.length - 1].children.push(element);
          } else {
            result.push(element);
          }
        }
      }

      return "";
    }
  );

  if (lastIndex < text.length) {
    const plainText = text.slice(lastIndex);
    if (stack.length > 0) {
      stack[stack.length - 1].children.push(plainText);
    } else {
      result.push(plainText);
    }
  }

  return result;
}
