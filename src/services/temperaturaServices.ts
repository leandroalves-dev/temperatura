import Api from './axios';

const APIKEY = import.meta.env.VITE_API_KEY

export const getTemperatura = async(city: string) => {
    try {
  
        //const response = await Api.get(`/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
        const response = await Api.get(`/weather?q=${city}&appid=${APIKEY}&units=metric&lang=pt_br`)
        const prevision = await Api.get(`/forecast?q=${city}&appid=${APIKEY}&units=metric&lang=pt_br`)

        console.log('response', response.data);
        console.log('prevision', prevision.data);

        return {
            response: response.data, 
            prevision: prevision.data  // Previsão para os próximos dias
        };
        
    } catch (error) {
        console.log('Erro ao buscar a temperatura', error);
        throw error;
    }
}