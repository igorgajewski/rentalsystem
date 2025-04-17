import { Role } from "./role";

export class Employee {
    public id: number;
    public name: string;
    public address: string;
    public employmentDate: Date;
    public phone: string;
    public role: Role;

    constructor(
        id: number,
        name: string,
        address: string,
        employmentDate: Date,
        phone: string,
        role: Role
    ) {
        this.id = id;
        this.name = name,
        this.address = address,
        this.employmentDate = employmentDate,
        this.phone = phone,
        this.role = role
    }
}