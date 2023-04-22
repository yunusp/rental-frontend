import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CarCardPropObject, CarCardProps } from "../../interfaces/carCardProps";

export default function Me(props: { cars: any; data: Array<CarCardProps>; }) {
    const router = useRouter();

    let [userCookie, setUserCookie] = useState("null");
    useEffect(() => {
        let cc = Cookies.get("user");
        if (!cc) router.replace("/signin");
        setUserCookie(cc ?? "");
    }, []);

    return (
        <div className="h-full min-h-screen pb-2">
            <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">
                Welcome, {userCookie}
            </div> <br />
            <div>
                Cars you own <br />
            {
                props.data
                    .filter(x => x.owner_id === userCookie)
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
