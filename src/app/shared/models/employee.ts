export enum Role{
    Cashier,
    Manager
}

export interface Employee {
    id: number;
    name: string;
    address: string;
    employmentDate: Date;
    phone:string;
    birthDate?: Date;
    role: Role;
    managerId?: number;
}
export function validateEmployee(employee: Employee): void {
    if (employee.role === Role.Cashier && (employee.managerId === undefined)){
        throw new Error('Cashier must have a managerId');
    }
    if (employee.role === Role.Manager && employee.managerId !== undefined){
        throw new Error('Manager cannot have a managerId');
    }
}