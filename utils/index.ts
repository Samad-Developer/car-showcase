
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'b86e7f63c8msh864db39ec01e3a1p14a217jsn9fb4fa388e93',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })
 
    const result = await response.json();
    return result;
}