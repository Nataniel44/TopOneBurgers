import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
import { NavbarProvider } from "./components/NavbarContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Level Web",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <NavbarProvider>
          <div className="bg-yellow-500">
            <div className=" ">{children}</div>
          </div>
        </NavbarProvider>
        
      </body>
      
    </html>
  );
}
