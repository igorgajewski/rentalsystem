export class Client {
    public id: number;
    public name: string;
    public phone: number;
    public taxNumber: number;

    constructor(
        id: number,
        name: string,
        phone: number,
        taxNumber: number
    ) {
        this.id = id;
        this.name = name,
        this.phone = phone,
        this.taxNumber = taxNumber
        
    }
}