import * as React from "react";
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    label: any;
    onClick?: any;
};
declare const Button: ({ label, onClick }: ButtonProps) => React.JSX.Element;
export default Button;
