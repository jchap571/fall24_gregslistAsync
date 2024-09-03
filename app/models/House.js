

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || 'no description provided'
    this.createdAt = new Date(data.createdAt)

    this.creatorId = data.creatorId
    this.creator = data.creator
  }



  get housesHTMLTemplate() {
    return /*html*/`
     <div class="col-md-4 card p-1">
          <img
            src="${this.imgUrl}">
        </div>
        <div class="col-md-8">
          <button class="bg-danger">Delete</button>
          <p>${this.bedrooms} | ${this.bathrooms} | ${this.levels}</p>
          <p>${this.year}</p>
          <h3>${this.price}</h3>
          <p>${this.description}</p>
          <p>Listing created on: ${this.createdAt}</p>
          <button class="bg-primary">Contact Seller</button>
        </div>
    `
  }




}



// "house": {
//     "bedrooms": {
//       "type": "Number",
//       "required": true
//     },
//     "bathrooms": {
//       "type": "Number",
//       "required": true
//     },
//     "levels": {
//       "type": "Number",
//       "required": true
//     },
//     "imgUrl": {
//       "type": "String",
//       "maxLength": 500
//     },
//     "year": {
//       "type": "Number",
//       "required": true
//     },
//     "price": {
//       "type": "Number",
//       "required": true
//     },
//     "description": {
//       "type": "String",
//       "maxLength": 5000
//     },
//     "creatorId": {
//       "type": "SchemaObjectId",
//       "required": true,
//       "ref": "Account"
//     }
//   }