import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CarCardPropObject, CarCardProps } from "../../interfaces/carCardProps";
import b_styles from "../../styles/book.module.css";
import styles from "../../styles/me.module.css"

import { useCookies } from "react-cookie";
import { UserModel } from "../../interfaces/userModel";
import Head from "next/head";


export default function Me(props: { cars: any; data: Array<CarCardProps>; }) {

    let [onceState, setOnceState] = useState(false);
    let [userCookie, setUserCookie] = useState("null");
    const [cookie, setCookie] = useCookies(["user"]);
    useEffect(() => {
        let cc = Cookies.get("user");
        if (!cc) router.replace("/signin");
        setUserCookie(cc ?? "");
        let expCars = props.data
            .filter(carInfo => (Math.round((Date.parse(carInfo.ito)
                - Date.parse(new Date().toUTCString()))) < 0))
            .filter(carInfo => (carInfo.borrower_id == cookie.user)
                || (carInfo.owner_id == cookie.user))
            .length > 0
        if (expCars && !onceState && props.data.length) {
            setOnceState(true);
            alert("Some of your cars have expired. Please give them attention");
        }
    }, []);

    async function borrowNuller(e: any, num: string = "1") {
        e.preventDefault();

        if (!confirm("Are you sure you want to forfeit this car?")) return;

        const endpoint = `http://localhost:8000/cars/${num}`;

        const data = {
            b_id: "super secret password",
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
            router.reload();
        }
    }

    async function deleteCar(e: any, id: string = "1") {
        e.preventDefault();

        if (!confirm("Are you sure you want to delete this car?")) return;
        if (!confirm("This will really delete the car. Are you sure you want to go ahead?")) return;

        const endpoint = `http://localhost:8000/cars/${id}`;

        const options = {
            method: "DELETE",
        };
        const response = await fetch(endpoint, options);

        if (response.status === 200) {
            router.reload();
        }
    }

    const router = useRouter();



    let [userData, setUserData] = useState({} as UserModel)
    useEffect(() => {
        (async () => {
            if (!!(userCookie !== "null")) { // javascript has forced my hand. Matthew 4:7t
                let data: UserModel = await ((await fetch(`http://localhost:8000/user/${userCookie}`)).json())
                setUserData(data);
            }
        })();
    }, [userCookie])

    function signoutHandler() {
        setCookie("user", "", { expires: new Date(0) });
        window.location.href = "/";
    }

    return (<>
        <Head><title>Rental - {userData.uname as string}</title></Head>
        <div className="mb-2 pb-2 h-full min-h-screen overflow-auto">
            <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">
                Welcome, {userCookie}
            </div> <br />

            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center">
                    <img className=" rounded-xl w-64 h-64" src={`http://localhost:8000/public/image-${userCookie}`} alt="Your profile photo" />
                    <div className="flex flex-col pl-4 [&>*]:text-xl">
                        <table className="[&>tbody>tr>td]:p-4">
                            <tbody>
                                <tr>
                                    <td className="border-r-2 border-black">Email</td>
                                    <td>{userData.email}</td>
                                </tr>
                                <tr>
                                    <td className="border-r-2 border-black">Phone number</td>
                                    <td>{userData.phone_number}</td>
                                </tr>
                                <tr>
                                    <td className="border-r-2 border-black">Birth Date</td>
                                    <td>{userData.birthday}</td>
                                </tr>
                                <tr>
                                    <td className="border-r-2 border-black">Adhaar number</td>
                                    <td>{userData.adhaar_number}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button id={b_styles.button} onClick={signoutHandler} className="bg-white text-3xl p-4 m-16 cursor-pointer">Log out!</button>
            </div>

            <div className="flex flex-row justify-around p-4  [&>*]:m-1 [&>*]:p-1 [&>*]:text-center">
                <div className="flex flex-col max-h-80">
                    <span className="text-3xl pb-4">Cars you own</span>
                    <div className="flex flex-col [&>*]:m-1">
                        {
                            props.data
                                .filter(x => x.owner_id === userCookie)
                                .map(x => {
                                    const cond = new Date(x.ito) > new Date()
                                    return <span
                                        onClick={e => deleteCar(e, x._id["$oid"])}
                                        id={cond ? styles["car-fine"]
                                            : styles["car-bad"]}
                                        className={cond ? styles.fine
                                            : styles.expired}>
                                        {x.brand} {x.name}

                                        <hr className="w-full m-1 border border-black" />
                                        {x.borrower_id ?? "To let"}
                                    </span>
                                })
                        }
                    </div>
                </div>
                <div className="flex flex-col max-h-80">
                    <span className="text-3xl pb-4">Cars you owe</span>
                    <div className="flex flex-col [&>*]:m-1">
                        {
                            props.data
                                .filter(x => x.borrower_id === userCookie)
                                .map(x => {
                                    const cond = new Date(x.ito) > new Date()
                                    return <span id={cond ? styles["car-fine"] : styles["car-bad"]}
                                        className={cond ? styles.fine : styles.expired}
                                        onClick={e => borrowNuller(e, x._id["$oid"])}>
                                        {x.brand} {x.name}
                                        <hr className="w-full m-1 border border-black" />
                                        {x.number.toUpperCase()}
                                    </span>
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export async function getServerSideProps(context: any) {
    const jsonData = await fetch("http://localhost:8000/cars", { method: "get" });
    const data: CarCardPropObject = await jsonData.json();
    return {
        props: { data: data }
    };
}
