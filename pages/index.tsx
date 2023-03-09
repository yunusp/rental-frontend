import Head from "next/head";
import CarCard from "../components/ui/CarCard";
import { CarCardPropObject, CarCardProps } from "../interfaces/carCardProps";
export default function Index(props: CarCardPropObject) {
    const prop = props.cars;
    return (
        <>
            <Head><title>Rental - Home</title></Head>
            <div className="h-full min-h-screen">
                <div className="text-center text-5xl font-title pt-4 font-bold drop-shadow-lg">Browse our selection of cars</div> <br />
                <div className="flex justify-center flex-wrap [&>*]:m-1">
                    {prop.map(data => <CarCard name={data.name} dt={data.dt} price={data.price} />)}
                </div>
            </div>
        </>

    );

}

export async function getStaticProps() {
    const jsonData = await fetch("http://localhost:3000/info.json", { method: "get" });
    const data: CarCardPropObject = await jsonData.json();
    return {
        props: data
    };
}