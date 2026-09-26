import type { Metadata } from 'next'; import './globals.css';
export const metadata:Metadata={title:'Logivanta | Vessel Tracking Lab',description:'Modular maritime vessel tracking and intelligence platform'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
