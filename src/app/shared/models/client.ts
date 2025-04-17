export class Client {
    public id: number;
    public name: string;
    public phone: string;
    public taxNumber: string;

    constructor(
        id: number,
        name: string,
        phone: string,
        taxNumber: string
    ) {
        this.id = id;
        this.name = name,
        this.phone = phone,
        this.taxNumber = taxNumber
        
    }
}