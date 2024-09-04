import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
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


  showHouseForm(){
    if (AppState.user == null) {return}

    const houseFormElem = document.getElementById('house-form')

    if (houseFormElem == null) {return}

    houseFormElem.classList.remove('d-none')
  }



  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }


  async createHouse(){
    try{
      event.preventDefault()
      const houseFormElem = event.target
      const houseFormData = getFormData(houseFormElem)
      await housesService.createHouse(houseFormData)
      Pop.toast('you created the house listing!')

      // @ts-ignore
      houseFormElem.reset() 
    }catch (error) {
      Pop.error(error)
      console.log(error)
    }
  }



}

