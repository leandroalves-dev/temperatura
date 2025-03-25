export const formatTimestamp = (timestamp: number) => {

    const date = new Date(timestamp * 1000);
    const resultDate = date.toLocaleDateString();
    const resultTime = date.toLocaleTimeString();

    const [day, month] = resultDate.split('/');
    const [hour, seconds] = resultTime.split(':');

    return{
        formattedDay: `${day}`,
        formattedMonth: `${month}`,
        formattedTime: `${hour}:${seconds}`
    }
}