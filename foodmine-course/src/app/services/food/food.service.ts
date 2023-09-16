import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor() { }

  getFoodById(id:number): Food {
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      {name: 'All', count: 5},
      {name: 'Potatoes', count: 1},
      {name: 'Soup', count: 1},
      {name: 'Pastry', count: 1},
      {name: 'Meal', count: 2},
    ]
  }

  getAllFoodsByTag(tag:string):Food[]{
    //statement?dojob1:dojob2
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'Fry Potatoes',
        price: 25,
        cookTime:'15-20',
        favourite:false,
        origins:['croatia'],
        stars: 4.0,
        imageUrl:'/assets/images/1.jpg',
        tags:['Fast Food', 'Potatoes', 'Lunch'],
      },
      {
        id:2,
        name:'Lentil Soup',
        price: 15,
        cookTime:'12-22',
        favourite:false,
        origins:['lithunia'],
        stars: 3.6,
        imageUrl:'/assets/images/2.jpg',
        tags:['Soup', 'Lentil', 'Lunch'],
      },
      {
        id:3,
        name:'Cacao Pastry',
        price: 35,
        cookTime:'35-40',
        favourite:false,
        origins:['italy'],
        stars: 4.2,
        imageUrl:'/assets/images/3.jpg',
        tags:['Fast Food', 'Cacao', 'Pastry'],
      },
      {
        id:4,
        name:'Bean',
        price: 15,
        cookTime:'20-23',
        favourite:false,
        origins:['turkiye'],
        stars: 4.6,
        imageUrl:'/assets/images/4.jpg',
        tags:['Bean', 'Meal', 'Lunch'],
      },
      {
        id:5,
        name:'Eggplant',
        price: 45,
        cookTime:'25-30',
        favourite:true,
        origins:['greek'],
        stars: 3.2,
        imageUrl:'/assets/images/5.jpg',
        tags:['Eggplant', 'Lunch'],
      }
    ]
  }
}
