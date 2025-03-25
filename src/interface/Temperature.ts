export interface Temperature{
    name: string;
    coord: {
        lat: number
        lon: number
    },
    clouds:{
        all: number
    },
    main: {
        temp: number
        humidity: number
        temp_max: number
        temp_min: number
    },
    sys: {
        sunrise: number
        sunset: number
    },
    wind: {
        deg: number
        speed: number
    },
    weather: {
        description: string
    }[]
}