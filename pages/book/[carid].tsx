import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/book.module.css";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';

export default function Book() {
    const router = useRouter();
    const { carid } = router.query;

    let [userCookie, setUserCookie] = useState("null");
    useEffect(() => {
        let cc = Cookies.get("user");
        setUserCookie(cc ?? "");
    }, []);

    if (userCookie === "") {
        router.push("/signin");
    }

    return (
        <>
            <Head><title>Rental - {carid}</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Book car {carid}</div> <br />
                <div id={styles.blinker} className="text-center text-3xl font-bold font-body">This is not complete! <br /> Please do not assume , even if it were for a for a passing moment, that this is final.</div>
                <div className="flex justify-center flex-wrap [&>*]:m-1">
                </div>
            </div>
        </>
    );
}
