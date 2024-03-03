import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaApiConsumerService {
  recetas: Receta[] = [
    {
      id: 1,
      nombre: 'Spaghetti Carbonara',
      image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/61FCB2B2-DB84-4A68-ABB8-F9FBA800BCA3/Derivates/FCB48A53-86F0-4697-BE75-7B7CE9B49EBE.jpg',
      ingredientes: [
        "400g de spaghetti", "150g de panceta", "2 huevos grandes", 
        "100g de queso parmesano rallado", "2 dientes de ajo", "sal", 
        "pimienta"
      ]
    },
    {
      id: 2,
      nombre: 'Enchiladas Suizas',
      image: 'https://assets.unileversolutions.com/recipes-v2/179095.jpg',
      ingredientes: [
        "12 tortillas de maíz", "2 pechugas de pollo cocidas y deshebradas", 
        "1 taza de crema ácida", "2 tazas de salsa de tomate", 
        "1 taza de queso Chihuahua rallado", "1/2 cebolla picada", 
        "sal al gusto"
      ]
    },
    {
      id: 3,
      nombre: 'Tacos al Pastor',
      image: 'https://cdn7.kiwilimon.com/recetaimagen/13996/640x640/6330.jpg.webp',
      ingredientes: ["1 kg de carne de cerdo (pierna o lomo)", 
      "5 chiles guajillos", "3 chiles anchos", "1 taza de piña picada", 
      "1/4 taza de jugo de naranja", "1/4 taza de vinagre blanco", 
      "3 dientes de ajo", "1 cucharada de orégano", "1 cucharada de comino", 
      "sal al gusto", "tortillas de maíz", "cebolla picada", "cilantro picado"
      ]
    }
  ]

  constructor() { }

  getReceta(id: Number) {
    return {
      ...this.recetas.find(
        (receta: Receta) => {
          return receta.id === id
        }
      )
    };
  }

  getRecetas() {
    return [...this.recetas]
  }

}
