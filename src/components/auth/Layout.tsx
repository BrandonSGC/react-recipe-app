import { ReactNode } from "react";
import { Logo } from "../common";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="auth">
        <div className="auth__bg">
          <Logo />
          <div>
            <h2>Description</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              perspiciatis in doloremque unde, ad eos ullam facilis quaerat
              veritatis quidem? Explicabo inventore exercitationem maiores
              architecto voluptatem ad at dolor?
            </p>
          </div>
        </div>
        <div className="auth__form">{children}</div>
      </div>
    </>
  );
};
