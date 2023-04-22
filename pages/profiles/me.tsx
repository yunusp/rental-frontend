import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CarCardPropObject, CarCardProps } from "../../interfaces/carCardProps";
import styles from "../../styles/book.module.css";
import { useCookies } from "react-cookie";


export default function Me(props: { cars: any; data: Array<CarCardProps>; }) {
    const router = useRouter();

    let [userCookie, setUserCookie] = useState("null");
    const [cookie, setCookie] = useCookies(["user"]);
    useEffect(() => {
        let cc = Cookies.get("user");
        if (!cc) router.replace("/signin");
        setUserCookie(cc ?? "");
    }, []);

    function signoutHandler() {
        setCookie("user", "", { expires: new Date(0) });
    }

    return (
        <div className="h-full min-h-screen pb-2">
            <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">
                Welcome, {userCookie}
            </div> <br />

            <a href="/"><button id={styles.button} onClick={signoutHandler} className="bg-white text-3xl p-4 m-16 cursor-pointer">Log out!</button></a>

            <div>
                Cars you own <br />
                {
                    props.data
                        .filter(x => x.owner_id === userCookie)
                        .map(x => <>{x.brand} <br /></>)
                }
            </div>
            <br />
            <div>
                Cars you owe <br />
                {
                    props.data
                        .filter(x => x.borrower_id === userCookie)
                        .map(x => <>{x.brand} <br /></>)
                }
            </div>
        </div>
    );
}
export async function getServerSideProps(_: any) {
    const jsonData = await fetch("http://localhost:8000/cars", { method: "get" });
    const data: CarCardPropObject = await jsonData.json();
    return {
        props: { data: data }
    };
}
