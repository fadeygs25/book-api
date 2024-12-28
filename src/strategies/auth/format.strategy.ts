// src/strategies/formatStrategy.ts
export interface FormatStrategy {
    format(data: any): any;
}

export class JSONFormat implements FormatStrategy {
    format(data: any): any {
        return JSON.stringify(data);
    }
}

export class XMLFormat implements FormatStrategy {
    format(data: any): any {
        // Mock XML format for demonstration
        return `<data>${JSON.stringify(data)}</data>`;
    }
}
