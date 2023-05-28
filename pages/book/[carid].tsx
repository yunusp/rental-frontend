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
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cars/${props.id}`).then((val) => {
            val.json().then(setCarInfo)
        });
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();

        const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars/${props.id}`;

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

    let content = (
        <div className="flex flex-row items-center justify-around [&>*]:p-4">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/public/car-${carInfo.number}`} alt={carInfo.desc} className="w-1/2" />
            <div className="flex flex-col items-center">
                <table className="[&>tbody>tr>td]:p-4 [&>tbody>tr>td]:text-xl w-full">
                    <tbody>
                        <tr>
                            <td className="border-r-2 border-black">Name of owner</td>
                            <td>{carInfo.owner_id}</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">Car number</td>
                            <td>{carInfo.number?.toUpperCase()}</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">Year of purchase</td>
                            <td>{carInfo.yop}</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">Price</td>
                            <td>₹{carInfo.price}</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">Leased from</td>
                            <td>{carInfo.iat}</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">Leased until</td>
                            <td>{carInfo.ito}</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">#Days to be leased</td>
                            <td>{Math.round((Date.parse(carInfo.ito) -  Date.parse(carInfo.iat)) / (1000 * 60 * 60 * 24))} days</td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black">#Days until lease expires</td>
                            <td>{Math.round((Date.parse(carInfo.ito) -  Date.parse(new Date().toUTCString())) / (1000 * 60 * 60 * 24))} days</td>
                        </tr>
                    </tbody>
                </table>
                <span className="text-xl max-w-prose text-justify text-gray-700">By clicking confirm, you promise to not do anything bad to the car
                    <span className="font-bold">. Please, we do not want a lawsuit on our hands</span>.
                    You also consent to letting us   send you emails about our service whenever
                    we deem  it be necessary</span>
                <input id={styles.button}
                    onClick={handleSubmit}
                    type="submit"
                    value="Confirm"
                    className="bg-white text-3xl p-8 mt-16 cursor-pointer" />
            </div>
        </div>
    );


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
