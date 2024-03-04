// use this file to keep the fonts that will be used throughout your application.

// Import the Inter font from the next/font/google module - this will be your primary font. 
// Then, specify what subset you'd like to load. In this case, 'latin':

import { Inter } from 'next/font/google';
// import a secondary font lusitana,
import { Lusitana } from 'next/font/google';


export const inter = Inter({
    subsets: ['latin'],
    // variable: '--font-inter',
})

// specify a subset, and font weight

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
})
