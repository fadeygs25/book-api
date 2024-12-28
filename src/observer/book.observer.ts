class BookObserver {
    private observers: Array<(data: any) => void> = [];

    public subscribe(callback: (data: any) => void) {
        this.observers.push(callback);
    }

    public notify(data: any) {
        this.observers.forEach(callback => callback(data));
    }
}

export const bookObserver = new BookObserver();
