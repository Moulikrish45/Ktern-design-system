import React from 'react';

interface TernHeroButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

export const TernHeroButton = ({
    children = 'Get Started',
    onClick
}: TernHeroButtonProps) => {
    return (
        <button
            className="group relative inline-block focus:outline-none rounded-tl-[2rem] rounded-br-[2rem]"
            onClick={onClick}
        >
            {/* Background Gradient Layer */}
            <div className="absolute inset-0 transition-transform duration-300 ease-out transform group-hover:scale-105 group-hover:shadow-lg rounded-tl-[2rem] rounded-br-[2rem] bg-gradient-to-br from-[#9b1c2c] via-[#d94e28] to-[#ff8f00]"></div>

            {/* Foreground Layer */}
            <div className="relative m-[2px] flex items-center justify-center gap-2 bg-white dark:bg-[#1a1a1a] px-8 py-3.5 rounded-tl-[calc(2rem-2px)] rounded-br-[calc(2rem-2px)] transition-all duration-300 group-hover:bg-opacity-90">
                <span className="text-lg font-bold animated-gradient-text">{children}</span>
            </div>
        </button>
    );
};

export default TernHeroButton;
