import Head from "next/head";
export default function Index() {
    return (
        <>
            <Head><title>Rental - Home</title></Head>
            <div className="grid justify-center content-center h-screen">
                <div>
                    {/* <h2 className="text-7xl self-center text-center">🚓️🚓️🚓️🚓️</h2> */}
                    <h1 className="text-7xl self-center font-bold font-body">Rent a car</h1>
                    <h2 className="text-7xl self-center text-center">🚓️🚓️🚓️🚓️</h2>
                </div>

            </div>
        </>

    );

}