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
            temp_max: number;
            temp_min: number;
        };
        weather: {
            icon: string;
            description: string;
        }[];
    }[];
}