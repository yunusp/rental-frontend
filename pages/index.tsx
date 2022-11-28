import styles from "../styles/Index.module.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import BaseLayout from "../components/Layouts/Base";
import Head from "next/head";
export default function Index() {
    return (
        <BaseLayout>
            <Head><title>Rental - Home</title></Head>
            <Header></Header>
            <div className="bg-blue-500 grid justify-center content-center">
                <div className="-translate-y-80">
                    {/* <h2 className="text-7xl self-center text-center">🚓️🚓️🚓️🚓️</h2> */}
                    <h1 className="text-7xl self-center font-bold">Rent a car</h1>
                    <h2 className="text-7xl self-center text-center">🚓️🚓️🚓️🚓️</h2>
                </div>
                {/* <p>
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
                hehe <br />
            </p> */}
            </div>
            <Footer></Footer>
        </BaseLayout>
    );

}