export interface CarCardProps {
    id?: number,   /*Unique id. Filled in by the map index for now*/
    owner_id?: number,
    borrower_id?: number,
    name: string,   /*Name of car*/
    number: string, /*reg number */
    brand: string,
    price: number,  /*price of rent*/
    yop: number,  /*How old?*/
    dt: number,  /*For how long*/
    iat: String, /*Issued at */
    ito: String, /*Issued to */
    picture: string,   /*url to pic of car*/
    description?: string,   /*misc descriptions*/
}

export interface CarCardPropObject {
    cars: Array<CarCardProps>
}
