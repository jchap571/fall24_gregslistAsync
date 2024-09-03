import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
export class HousesController {
  constructor() {
    console.log('houses controller is loaded')
    AppState.on('houses', this.drawHouses)
    this.getHouses()

  }


  drawHouses() {
    console.log('drawing houses')
    const houses = AppState.houses
    let houseHTML = ''
    houses.forEach(house => houseHTML += house.housesHTMLTemplate)
    setHTML('houses-listings', houseHTML)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }



  }
}