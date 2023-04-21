import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/book.module.css";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import { CarModel } from "../../interfaces/carmodel";

export default function Book() {

    const router = useRouter();
    let [carid, setCarid] = useState("");
    useEffect(() => {
        if (router.isReady) {
            const {carid} = router.query;
            //@ts-ignore
            setCarid(carid);
        }
    }, [router.isReady]);

    let [carInfo, setCarInfo] = useState({} as CarModel);
    let [userCookie, setUserCookie] = useState("null");
    useEffect(() => {
        let cc = Cookies.get("user");
        setUserCookie(cc ?? "");
    }, []);


    if (userCookie === "") {
        router.push("/signin");
    }

    console.log(carid);
    useEffect(() => {
        fetch(`http://localhost:8000/cars/${carid}`).then((val) => {
            val.json().then(setCarInfo)
        });
    }, []);



    return (
        <>

            <Head><title>Rental - {carid
            }</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Book car {carInfo.name}</div> <br />
                <div id={styles.blinker} className="text-center text-3xl font-bold font-body">This is not complete! <br /> Please do not assume , even if it were for a for a passing moment, that this is final.</div>
                <div className="flex justify-center flex-wrap [&>*]:m-1">
                </div>
            </div>
        </>
    );
}
