import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Me() {
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

        </div>
    );
}
