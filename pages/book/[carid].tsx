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
        router.replace("/signin");
    }

    useEffect(() => {
        fetch(`http://localhost:8000/cars/${props.id}`).then((val) => {
            val.json().then(setCarInfo)
        });
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();

        const endpoint = `http://localhost:8000/cars/${props.id}`;

        const data = {
            b_id: userCookie,
        };
        const options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        };
        const response = await fetch(endpoint, options);

        if (response.status === 200) {
            router.push("/");
        }
    }

    let content = <input id={styles.button} onClick={handleSubmit} type="submit" value="Confirm" className="bg-white p-4 cursor-pointer" />
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
                <div className="flex flex-row justify-center">
                {content}
                </div>
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
