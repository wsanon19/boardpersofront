export class Meteo {
    public date : Date;
    public temperatureC: number;
    public temperatureF: number;
    public summary: string;

    constructor() {
        this.date = new Date();
        this.temperatureC = 0;
        this.temperatureF = 0;
        this.summary = '';
    }
}
