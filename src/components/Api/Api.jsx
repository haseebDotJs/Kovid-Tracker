import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchGlobalData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch (error1) {
        console.log('Error Total Data', error1.message);
    }
}
export const fetchCountryData = async (country) => {
    // console.log('give me data of', country);
    if (!country) {
        return {}
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(`${url}/countries/${country}`)
        return { confirmed, recovered, deaths, lastUpdate }
    }
    catch (error) {
        console.log('Error found', error.message);
        return { confirmed: 'notfound', recovered: 'notfound', deaths: 'notfound', lastUpdate: 'notfound'}
    }
}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        return await data.map(dailyData => {
            return {
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }
        })
    }
    catch (error2) {
        console.log('Error Daily Data', error2.message);
    }
}
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        const modifiedData = countries.map(country => country.name)
        return modifiedData
    }
    catch (error3) {
        console.log('Error Fetching Countries', error3.message);
    }
}
