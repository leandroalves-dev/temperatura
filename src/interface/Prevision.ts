export interface Prevision {
    city: {
        country: string;
        name: string;
        population: number;
        timezone: number;
    }
    list: {
        dt_txt: string;
        
        main: {
            temp: number;
        };
        weather: {
            icon: string;
            description: string;
        }[];
    }[];
}