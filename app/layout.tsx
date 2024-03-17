import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "./_component/navbar"
import { cn } from "@/lib/utils"

const poppins = Poppins({ 
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Lawn Mover App",
    description: "Website made by Maaz",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn(poppins.className, "bg-emerald-50/10")}>
                <Navbar />
                <main className="">
                    {children}
                </main>
            </body>
        </html>
    )
}
