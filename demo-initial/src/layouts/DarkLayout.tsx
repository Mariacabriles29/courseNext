import { ReactNode } from "react";

interface DarkLayoutProps {
  children: ReactNode;
}
export const DarkLayout = ({ children }: DarkLayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "darkgray",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Dark Layout </h3>
      <div>{children}</div>
    </div>
  );
};
