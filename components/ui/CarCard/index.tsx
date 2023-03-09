import { CarCardProps } from "../../../interfaces/carCardProps"
import styles from "./CarCard.module.css";

export default function CarCard(props: CarCardProps) {
    const carImgUrl: string = props.picture ?? "/favicon.ico";
    const carYear: string = (props.year ?? "???").toString();
    const carDesc: string = props.description ?? "No description given";
    return (
        <a href="https://www.google.com" draggable={false} id={styles.card} className=" p-1 border border-black rounded-lg drop-shadow w-64 h-64 flex flex-col content-between justify-start items-center">
            <img src={carImgUrl} alt={carDesc} className="h-1/2" draggable={false} />
            <p className="text-2xl text-center truncate w-60">{props.name}</p>
            <p className="text-center truncate w-60">{props.dt}</p>
            <p className="text-xl">₹{props.price}</p>
            <p className="text-center">{carDesc}</p>
        </a>
    );
}