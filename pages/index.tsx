import styles from "../styles/Index.module.css";
import NavBar from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import BaseLayout from "../components/Layouts/Base";
import Head from "next/head";
export default function Index() {
    return (
        <>
            <Head><title>Rental - Home</title></Head>
            <div className="bg-blue-500 grid justify-center content-center h-full">
                <div>
                    {/* <h2 className="text-7xl self-center text-center">🚓️🚓️🚓️🚓️</h2> */}
                    <h1 className="text-7xl self-center font-bold">Rent a car</h1>
                    <h2 className="text-7xl self-center text-center">🚓️🚓️🚓️🚓️</h2>
                </div>

            </div>
        </>

    );

}