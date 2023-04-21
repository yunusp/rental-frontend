import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/book.module.css";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { CarModel } from "../../interfaces/carmodel";
import { BookingProps } from "../../interfaces/bookingProps";

export default function Book(props: BookingProps) {
    const router = useRouter();

    let [carInfo, setCarInfo] = useState({} as CarModel);
    let [userCookie, setUserCookie] = useState("null");

    useEffect(() => {
        let cc = Cookies.get("user");
        setUserCookie(cc ?? "");
    }, []);


    if (userCookie === "") {
        router.push("/signin");
    }

    useEffect(() => {
        fetch(`http://localhost:8000/cars/${props.id}`).then((val) => {
            val.json().then(setCarInfo)
        });
    }, []);

    let content = <h1 className="text-5xl text-center">Done!</h1>
    if (userCookie === carInfo.owner_id) {
        content = <h1
            className="text-5xl
                    text-red-700
                    text-center
                    font-bold">
            You cannot book your own car. <br /> {"¯\\_(ツ)_/¯"} </h1>
    }

    return (
        <>
            <Head><title>Rental - Book - {carInfo.name}</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Book {carInfo.brand} {carInfo.name}</div> <br />
                {content}
            </div>
        </>
    );
}
export async function getServerSideProps(context: { params: { carid: any; }; }) {
    return {
        props: {
            id: context.params.carid,
        }
    };
}
