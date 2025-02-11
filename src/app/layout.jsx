import { Baloo_2, Baloo_Bhai_2 } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/satvam.scss';
import "../styles/responsive.css";
import Header from "./components/header";
import SmoothScrolling from "./components/SmoothScrolling";

const baloo_2 = Baloo_2({
  weight: ['600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--baloo'
})
const baloo_bhai_2 = Baloo_Bhai_2({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--balooBhai'
})

export const metadata = {
  title: "Blended and Ground Spices Manufacturer & Exporters in India - Satvam",
  description: "Fika Mana Hai"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baloo_2.variable} ${baloo_bhai_2.variable} ${styles.main}`} suppressHydrationWarning={true}>
        <Header></Header>
        <SmoothScrolling>{children}</SmoothScrolling>
        </body>
    </html>
  );
}