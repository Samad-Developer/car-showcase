import { manufacturers } from './../constants/index';
import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filter: FilterProps) {
    const { manufacturer, year, model, limit, fuel} = filter
    const headers = {
        'X-RapidAPI-Key': 'b86e7f63c8msh864db39ec01e3a1p14a217jsn9fb4fa388e93',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    })
 
    const result = await response.json();
    return result;
}

// Calculate car rent based on city_mpg, and year
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear()- year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, model, year } = car
    url.searchParams.append("customer", 'hrjavascript-mastery');
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(' ')[0]);
    url.searchParams.append("zoomType", 'fullscreen');
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);
    return `${url}`
}

export const updateSearchParams = (type:string, value:string) => {
    const serchParams = new URLSearchParams(window.location.search)
    serchParams.set(type, value)
    const newPathname = `${window.location.pathname}?${serchParams.toString()}`
    return newPathname;
}

