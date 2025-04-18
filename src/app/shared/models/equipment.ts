export interface Equipment {
    id: string; // Unique identifier for each equipment piece
    name: string;
    producer: string;
    rentPerDay: number;
    types: Array<'mountain' | 'water'>; // Equipment can be both mountain and water
    usageType: 'professional' | 'amateur';
    quantity: number; // Quantity of equipment available
    repairHistory: Array<{
        date: string; // Date of the repair in ISO format
        description: string; // Description of the repair
        price: number; // Cost of the repair
    }>;
}