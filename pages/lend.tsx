import Head from "next/head";
import router from "next/router";
import styles from "../styles/sign.module.css"
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
export default function Lend() {

    let [userCookie, setUserCookie] = useState("null");
    const fileRef: MutableRefObject<any> = useRef(null);
    useEffect(() => {
        let cc = Cookies.get("user");
        setUserCookie(cc ?? "");
    }, []);

    if (userCookie === "") {
        router.push("/signin");
    }

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

        const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cars`;

        const file_data: ArrayBuffer = await fileRef.current.files[0].arrayBuffer();
        const b64 = _arrayBufferToBase64(file_data);

        const data = {
            name: e.target.name.value,
            brand: e.target.brand.value,
            number: e.target.number.value.toLowerCase(),
            price: e.target.price.value,
            yop: e.target.yop.value,
            iat: e.target.iat.value,
            ito: e.target.ito.value,
            picture: b64,
            desc: e.target.desc.value,
            owner_id: Cookies.get("user") ?? "",
        };
        if ((new Date(e.target.iat.value) < new Date()
            || Date.parse(e.target.ito.value) < Date.parse(e.target.iat.value))) {
            alert("There is something wrong with your dates.");
            return;
        }
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        };
        const response = await fetch(endpoint, options);
        if (response.status == 201) {
            router.push("/");
        }
    }
    return (
        <>
            <Head><title>Rental - Lend</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Lend a car</div> <br />
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form onSubmit={handleSubmit} id={styles.form} className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input required={true} type="text" name="name" id="cname" placeholder="Car name" />
                        <input required={true} type="text" name="brand" id="cbrand" placeholder="Car brand" />
                        <input required={true} type="text" name="number" pattern="^\w{2}\d{2}\w{2}\d{1,4}$" id="cnum" placeholder="Car number (XXyyXXyyyy)" />
                        <input required={true} type="number" name="yop" id="cbyear" placeholder="Year of purchase" />
                        <input required={true} type="number" name="price" id="cprice" placeholder="Price at which to lend" />
                        <input required={true} type="text" name="desc" id="desc" placeholder="A short description" />
                        <p>How long would you like to give your car?</p>
                        <span id={styles['form-span']} className="flex flex-row flex-wrap items-center justify-center [&>*]:p-2"> {/*make this responsive*/}
                            <span><label htmlFor="iat">From</label>
                                <input required={true} type="date" name="iat" id="fromDate" /></span>
                            <span><label htmlFor="ito">To</label>
                                <input required={true} type="date" name="ito" id="toDate" /></span>
                        </span>
                        <label htmlFor="carPhoto">Please upload a picture of your car:</label>
                        <input required={true} ref={fileRef} type="file" name="carPhoto" id="cphoto" placeholder="Car photo" /> <br />
                        <input id={styles.sibutton} type="submit" value="Lend" className="bg-white p-4 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

    );
}
