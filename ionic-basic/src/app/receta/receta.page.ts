import { Component, OnInit } from '@angular/core';
import { Receta } from '../interface/receta';
import { RecetaApiConsumerService } from '../service/receta-api-consumer.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
})
export class RecetaPage implements OnInit {
  public recetas: Receta[] = [];
  public recetaApiConsumer: RecetaApiConsumerService;

  constructor(recetaApiConsumer: RecetaApiConsumerService) {
    this.recetaApiConsumer = recetaApiConsumer;
  }

  ngOnInit() {
    this.recetas = this.recetaApiConsumer.getRecetas();
  }

}
