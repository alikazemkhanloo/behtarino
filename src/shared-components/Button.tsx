import clsx from "clsx";
import { Component, PropsWithChildren } from "react";

interface Props {
  onClick?(): void;
  href?: string;
  component?: any;
  className?: string;
  icon: any;
}

const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  href,
  children,
  component: Component = "a",
  className,
  icon,
}) => {
  return (
    <Component
      className={clsx(className, "button")}
      onClick={onClick}
      href={href}
    >
      <div className="mr-2">{icon}</div>
      {children}
    </Component>
  );
};
export default Button;
