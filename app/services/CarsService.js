import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";



class CarsService {
  async createCar(carData) {
    // NOTE post is for creating a resource
    // NOTE first argument passed to the post method is the endpoint we are sending the request to. This string will be appended to the baseURL that the api object uses (assigned in the env.js)
    // NOTE the second argument passed to post is the request payload, or the request body. This is data that we are sending to the API, that it can then take and store in a database. The request payload must adhere to the schema validation that the API enforces
    const response = await api.post('api/cars', carData)
    // NOTE after a successful post request, the API will respond with the newly created resource with all additional properties that the API/database assign (the data should have an id, createdAt and updatedAt timestamps, creator info, etc...)
    console.log('✨🚗📡', response.data);

    // convert POJO from API into our Car model
    const newCar = new Car(response.data)

    // store in AppState, this should trigger our listener
    AppState.cars.push(newCar)
  }
  async getCars() {
    // console.time('timer')
    // const response = await fetch('https://sandbox.codeworksacademy.com/api/cars') // Jeremy, Get me coffee
    // // We wait for jeremy to return
    // console.log('response', response); // Mick enjoy's his PSL (Pumpkin Spice latte)
    // const data = await response.json()
    // console.log('data', data);
    // console.timeEnd('timer')

    // const response = await axios.get("https://sandbox.codeworksacademy.com/api/cars")
    // NOTE get is for reading a resource
    const response = await api.get('api/cars')
    console.log('🚗📡', response.data);

    // NOTE map returns a new array of converted data
    // response.data: [Object, Object]
    // cars: [Car, Car]
    const cars = response.data.map(carData => new Car(carData))
    console.log('✨🚗✨🚗', cars);

    AppState.cars = cars

    // const responseHousesExample = await api.get('api/houses')
    // console.log('🚗📡', responseHousesExample.data);

  }

}

export const carsService = new CarsService()