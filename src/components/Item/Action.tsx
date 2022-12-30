import React, { CSSProperties } from "react";

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties["cursor"];
}

export function Action({ active, className, cursor, style, ...props }: Props) {
  return (
    <button
      {...props}
      tabIndex={0}
      style={
        {
          ...style,
          cursor,
          "--fill": active?.fill,
          "--background": active?.background
        } as CSSProperties
      }
    />
  );
}

export type { Props as ActionProps };
