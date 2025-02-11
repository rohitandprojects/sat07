import { Inter } from "next/font/google";
import "./admin.css";
import AdminHeader from "./components/AdminHeader";
import AuthContextProvider from "../lib/contexts/AuthContext";
//import styles from './admin.css';

const inter = Inter({ subsets: ["latin"] });
const ProductsPage = ({children}) => {
  return (
    <section className={`${inter.className} admin-wrapper position-relative`}> 
    <AuthContextProvider>
      <AdminHeader></AdminHeader>     
      {children}
    </AuthContextProvider>
    </section>
  )
}

export default ProductsPage


