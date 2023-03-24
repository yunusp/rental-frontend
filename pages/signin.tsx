import Head from "next/head";
import styles from "../styles/sign.module.css"
export default function SignIn() {
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


    }
    return (
        <>
            <Head><title>Rental - Sign in</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Sign in</div> <br />
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form onSubmit={handleSubmit} id={styles.form} className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input type="text" name="uname" id="uname" placeholder="User Name" className="h-8 p-4" /> <br />
                        <input type="password" name="pass" id="passwd" placeholder="Password" className="h-8 p-4" /> <br />
                        <input id={styles.sibutton} type="submit" value="Sign in" className="bg-white p-4 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

    );
}
