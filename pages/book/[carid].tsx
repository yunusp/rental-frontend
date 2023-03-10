import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/book.module.css";

export default function Book() {
    const router = useRouter();
    const { carid } = router.query;
    return (
        <>
            <Head><title>Rental - #{carid}</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Book car #{carid}</div> <br />
                <div id={styles.blinker} className="text-center text-3xl font-bold font-body">This is not complete! <br /> Please do not assume , even if it were for a for a passing moment, that this is final.</div>
                <div className="flex justify-center flex-wrap [&>*]:m-1">
                    <p className="text-5xl text-center">Hark! This page is not for all eyes! <br />Please ensure that you have signed in before looking further.</p>
                    <p className="text-4xl">Unforseen consequences await those who do not!</p>
                </div>
            </div>
        </>
    );
}