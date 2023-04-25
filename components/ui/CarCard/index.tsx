import Link from "next/link";
import { CarCardProps } from "../../../interfaces/carCardProps"
import styles from "./CarCard.module.css";

export default function CarCard(props: CarCardProps) {


    const carImgUrl: string = `http://localhost:8000/public/car-${props.number}`;
    const carYear: string = (props.yop ?? "???").toString();
    const carDesc: string = props.desc ?? "No description given";
    const link: string = (props._id["$oid"] ?? "/404").toString();
    return props.borrower_id ? (<></>) :
        (<Link href={`/book/${link}`} data-aos-duration="2000" data-aos="fade-left" draggable={false} id={styles.card} className=" p-1 border border-black rounded-lg drop-shadow w-64 h-64 flex flex-col content-between justify-start items-center">
            <img src={carImgUrl} alt={carDesc} className="h-1/2 w-full" draggable={false} />
            <p className="text-2xl text-center truncate w-60">{props.name}</p>
            <p className="text-center truncate w-60">{Math.round((Date.parse(props.ito) -  Date.parse(props.iat)) / (1000 * 60 * 60 * 24))} days</p>
            <p className="text-xl">₹{props.price}</p>
            <p className="text-center">{carDesc}</p>
        </Link>)

}
