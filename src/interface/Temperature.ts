export interface Temperature{
    name: string;
    coord: {
        lat: number
        lon: number
    },
    main: {
        temp: number
        humadity: number
        temp_max: number
        temp_min: number
    },
    sys: {
        sunrise: number
        sunset: number
    },
    weather: {
        description: string
    }[]
}