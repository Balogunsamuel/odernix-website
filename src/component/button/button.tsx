import React from 'react';

interface Props{
    children: any;
    bgColor?: string;
    textColor: string;
    onClick?: () => void;
    shadow?: string;
    shadowSize?: string;
    extra?: string;
    border?: boolean;
    borderColor?: string;
}

const Button: React.FC<Props> = ({ children, bgColor, textColor, onClick, shadow, shadowSize, extra, border, borderColor }) => {
    const isBorder = border;
    return (
        <button className={`w-full text-base outline-none focus:outline-none ease-linear transition-all duration-150 rounded-lg 
        ${bgColor} ${shadow} ${textColor} ${shadowSize} ${extra} ${isBorder && `border-2`} ${borderColor}`}  onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;