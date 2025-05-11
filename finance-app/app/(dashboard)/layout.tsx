import React from "react";
import { Header } from "@/components/header";

type Props = {
    children : React.ReactNode;
}

//this layout page is a dynamic page implementation in nextjs like using context from react router
const DashboardLayout = ({children} : Props) => {
    return (
        <>
            <Header></Header>
            <main className="px-3 lg:px-14">
                {children}
            </main>
        </>
    )
}

export default DashboardLayout;