import Head from "next/head";

export default function SignIn() {
    return (
        <>
            <Head><title>Rental - Sign in</title></Head>
            <div className="h-full min-h-screen pb-2">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Sign in</div> <br />
                <div className="flex justify-center items-center flex-col flex-wrap [&>*]:m-1">
                    <form action="/404" method="post" className=" flex justify-center items-center flex-col flex-wrap text-lg [&>*]:m-1">
                        <input type="text" name="uname" id="uname" placeholder="User Name" className="h-8 p-4 border-4"/> <br />
                        <input type="password" name="passwd" id="passwd" placeholder="Password" className="h-8 p-4 border-4"/> <br />
                        <input type="submit" value="Sign in" className="bg-white p-4 cursor-pointer"/>
                    </form>
                </div>
            </div>
        </>

    );
}