class Exercise {
    id: string;
    name: string;
    highIntensityMinutes: number;
    highIntensitySeconds: number;
    lowIntensityMinutes: number;
    lowIntensitySeconds: number;
    reps: number;

    constructor(
        id: string,
        name: string,
        highIntensityMinutes: number,
        highIntensitySeconds: number,
        lowIntensityMinutes: number,
        lowIntensitySeconds: number,
        reps: number
    ) {
        this.id = id;
        this.name = name;
        this.highIntensityMinutes = highIntensityMinutes;
        this.highIntensitySeconds = highIntensitySeconds;
        this.lowIntensityMinutes = lowIntensityMinutes;
        this.lowIntensitySeconds = lowIntensitySeconds;
        this.reps = reps;
    }
}

export default Exercise;
