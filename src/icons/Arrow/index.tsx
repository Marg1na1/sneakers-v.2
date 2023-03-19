import { FC } from 'react';

export const Arrow: FC = () => {
    return (
        <svg fill='none' viewBox='0 0 16 14' xmlns='http://www.w3.org/2000/svg' width={16} height={14}>
            <path d='m1 7h13.714' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
            <path d='m8.7144 1 6 6-6 6' stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
        </svg>
    );
}