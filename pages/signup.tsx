import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, MutableRefObject, SetStateAction, useRef, useState } from "react";
import styles from "../styles/sign.module.css"
export default function SignUp() {
    const router = useRouter();
    const [pnumVal, setPNum] = useState('6000000000');
    function pnumChangeHandler(e: any) {
        setPNum(e.target.value)
    }
    const [formVal, setFormVal] = useState(0);
    const fileRef: MutableRefObject<any> = useRef(null);
    async function handleSubmit(e: any) {
        function _arrayBufferToBase64(buffer: ArrayBuffer) {
            var binary = '';
            var bytes = new Uint8Array(buffer);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }
        e.preventDefault();

        const endpoint = "http://localhost:8000/signup";

        const file_data: ArrayBuffer = await fileRef.current.files[0].arrayBuffer();
        const b64 = _arrayBufferToBase64(file_data);

        // handle same password validation here so that we do not send thing we dont need to.
        if (e.target.passwd.value !== e.target.cpasswd.value) {
            alert("Passwords do not match!");
            return;
        }

        const data = {
            uname: e.target.uname.value,
            email: e.target.email.value,
            phone_number: e.target.pnum.value,
            adhaar_number: e.target.adhaar.value,
            pass: e.target.passwd.value,
            photo: b64,
            birthday: e.target.bday.value,
        };
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        };
        const response = await fetch(endpoint, options);
        if (response.status == 201) {
            localStorage.setItem("username", e.target.uname.value);
            router.push("/signin");
        }
        setFormVal(response.status);
    }
    return (
        <>
            <Head><title>Rental - Sign Up</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Sign up</div> <br />
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form onSubmit={handleSubmit} id={styles.form} className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input required={true} type="text" name="uname" id="uname" placeholder="User Name" className="h-8 p-4" /> <br />
                        {formVal == 403 ? <div className="text-xl text-red-700 font-bold">user name already exists</div> : <div></div>}
                        <input required={true} type="email" name="email" id="email" placeholder="Email" className="h-8 p-4" /> <br />
                        <input required={true} maxLength={10} minLength={10} type="number"  name="pnum" id="pnum" placeholder="Phone number" className="h-8 p-4" />
                        <input required={true} type="number" minLength={12} maxLength={12} name="adhaar" id="adhaar" placeholder="Adhaar card number" className="h-8 p-4" /> <br />
                        <input required={true} minLength={8} type="password" name="passwd" id="passwd" placeholder="Password" className="h-8 p-4" /> <br />
                        <input required={true} type="password" name="cpasswd" id="cpasswd" placeholder="Confirm Password" className="h-8 p-4" /> <br />
                        <hr className="border-1 rounded-lg border-black w-full" />
                        <label htmlFor="pfp">Upload a profile photo:</label>
                        <input required={true} type="file" name="pfp" id="pfp" placeholder="pfp" ref={fileRef} accept="image/" /> <br />
                        <label htmlFor="bday">Birth Date:</label>
                        <input required={true} type="date" name="bday" id="bday" placeholder="Date of Birth" className="w-full" /> <br />
                        <input required={true} id={styles.sibutton} type="submit" value="Sign Up" className="bg-white p-4 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

    );
}
