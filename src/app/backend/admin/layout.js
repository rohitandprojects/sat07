"use client";

import AuthContextProvider, { useAuth } from "@/app/lib/contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import { useAdmin } from "@/app/lib/firebase/admin/read";
//import { useAdmin } from "@/lib/firebase/admin/read";

export default function Layout({children}){
    return <AuthContextProvider>
        <InnerLayout>{children}</InnerLayout>
    </AuthContextProvider>
} 

function InnerLayout({ children }) {
    const { user, isLoading : authLoading } = useAuth();
    const { data, error, isLoading } = useAdmin({ uid: user?.uid });
    if(authLoading || isLoading){
        return <h2 className="w-100 vh-100 d-flex align-items-center justify-content-center">Loading...</h2>
    }
    if(error){
        return <p>{error}</p>
    }
    if(!data){
        return <div className="w-100 vh-100 d-flex align-items-center justify-content-center">
            <h1>You are not Admin</h1>
        </div>
    }
    return <main className="adminpage d-flex">
        {/* <AuthContextProvider> */}
            <Sidebar></Sidebar>
            <div className="admin-right">
                {children}
            </div>            
        {/* </AuthContextProvider> */}
    </main>
}