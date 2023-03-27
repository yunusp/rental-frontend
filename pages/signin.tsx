import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "../styles/sign.module.css"

export default function SignIn() {
    let [pUname, setPUname] = useState(undefined) as
        [string | undefined, Dispatch<SetStateAction<string | undefined>>];
    // let router = useRouter();
    // setPUname(() => router.query.uname?.[0]);

    useEffect(() => {
        const uname = localStorage.getItem("username") ?? undefined;
        setPUname(uname)
        console.log("Provided username", pUname);
        // return () => localStorage.removeItem("username");
    }, []);

    const [formVal, setFormVal] = useState(0);
    async function handleSubmit(e: any) {
        e.preventDefault();

        const endpoint = "http://localhost:8000/signin";

        const data = {
            uname: e.target.uname.value,
            pass: e.target.pass.value
        };
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        };
        const response = await fetch(endpoint, options);

        setFormVal(response.status);
    }
    let status = undefined;
    switch (formVal) {
        case 200:   // all good. allow sign in
            status = (<div className="text-green-800 text-center text-2xl">
                Sign in successful. <br /> This does nothing for now. <br /> Please be patient.
            </div>);
            break;
        //! perhaps the next two should be the same.
        case 403:   // no such user
            status = (<div className="text-red-800 font-bold text-center text-2xl">
                User name not found! Perhaps you wish to <Link className="text-blue-600" href={"/signup"}>Sign up</Link>?
            </div>);
            break;
        case 401:   //incorrect password
            status = (<div className="text-red-600 font-bold text-center text-2xl">
                Incorrect user name or password!
            </div>);
        default:
            break;
    }

    return (
        <>
            <Head><title>Rental - Sign in</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Sign in</div> <br />
                {status}
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form onSubmit={handleSubmit} id={styles.form} className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input type="text" defaultValue={pUname} name="uname" id="uname" placeholder="User Name" className="h-8 p-4" /> <br />
                        <input type="password" name="pass" id="passwd" placeholder="Password" className="h-8 p-4" /> <br />
                        <input id={styles.sibutton} type="submit" value="Sign in" className="bg-white p-4 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

    );
}
