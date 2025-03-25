export interface Prevision {
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