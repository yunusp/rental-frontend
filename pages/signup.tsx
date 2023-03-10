import Head from "next/head";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import styles from "../styles/sign.module.css"
export default function SignUp() {
    const [pnumVal, setPNum] = useState('6000000000');
    function pnumChangeHandler(e: any) {
        setPNum(e.target.value)
    }
    return (
        <>
            <Head><title>Rental - Sign Up</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Sign up</div> <br />
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form action="/404" method="post" id={styles.form} className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input type="text" name="uname" id="uname" placeholder="User Name" className="h-8 p-4" /> <br />
                        <input type="email" name="email" id="email" placeholder="Email" className="h-8 p-4" /> <br />
                        <label htmlFor="pnum">Phone number: </label>
                        <input type="range" min={6000000000} max={9999999999} value={pnumVal} defaultValue={pnumVal} onChange={e => pnumChangeHandler(e)} name="pnum" id="pnum" placeholder="Phone number" className="h-8 p-4" />
                        <label htmlFor="pnum" onChange={e => pnumChangeHandler(e)}>{pnumVal}</label><br />
                        <input type="number" name="adhaar" id="adhaar" placeholder="Adhaar card number" className="h-8 p-4" /> <br />
                        <input type="password" name="passwd" id="passwd" placeholder="Password" className="h-8 p-4" /> <br />
                        <input type="password" name="cpasswd" id="cpasswd" placeholder="Confirm Password" className="h-8 p-4" /> <br />
                        <hr className="border-1 rounded-lg border-black w-full" />
                        <label htmlFor="pfp">Upload a profile photo:</label>
                        <input type="file" name="pfp" id="pfp" placeholder="pfp" /> <br />
                        <label htmlFor="bday">Birth Date:</label>
                        <input type="date" name="bday" id="bday" placeholder="Date of Birth" className="w-full" /> <br />
                        <input id={styles.sibutton} type="submit" value="Sign Up" className="bg-white p-4 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

    );
}