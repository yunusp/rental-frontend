import Head from "next/head";
import styles from "../styles/sign.module.css"
export default function Lend() {
    return (
        <>
            <Head><title>Rental - Lend</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Lend a car</div> <br />
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form action="/404" method="post" id={styles.form} className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input required={true} type="text" name="name" id="cname" placeholder="Car name" />
                        <input required={true} type="text" name="brand" id="cbrand" placeholder="Car brand" />
                        <input required={true} type="text" name="numplate" id="cnum" placeholder="Registration number" />
                        <input required={true} type="number" name="year" id="cbyear" placeholder="Year of purchase" />
                        <p>How long would you like to give your car?</p>
                        <span id={styles['form-span']} className="flex flex-row flex-wrap items-center justify-center [&>*]:p-2"> {/*make this responsive*/}
                            <span><label htmlFor="fromDate">From</label>
                                <input required={true} type="date" name="fromDate" id="fromDate" /></span>
                            <span><label htmlFor="toDate">To</label>
                                <input required={true} type="date" name="toDate" id="toDate" /></span>
                        </span>
                        <label htmlFor="carPhoto">Please upload a picture of your car:</label>
                        <input required={true} type="file" name="carPhoto" id="cphoto" placeholder="Car photo" /> <br />
                        <input id={styles.sibutton} type="submit" value="Lend" className="bg-white p-4 cursor-pointer" />
                    </form>
                </div>
            </div>
        </>

    );
}