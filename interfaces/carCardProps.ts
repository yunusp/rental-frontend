export interface CarCardProps {
    _id?: any,   /*Unique id. Filled in by the map index for now*/
    owner_id?: string,
    borrower_id?: string,
    name: string,   /*Name of car*/
    number: string, /*reg number */
    brand: string,
    price: number,  /*price of rent*/
    yop: number,  /*How old?*/
    dt: number,  /*For how long*/
    iat: string, /*Issued at */
    ito: string, /*Issued to */
    picture: string,   /*url to pic of car*/
    desc?: string,   /*misc descriptions*/
}

export interface CarCardPropObject {
    cars: Array<CarCardProps>
}
