import { Component, OnInit } from '@angular/core';
import { RecetaApiConsumerService } from '../service/receta-api-consumer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {
  id: number = 0;
  receta: any;
  private recetaApiConsumer: RecetaApiConsumerService;
  private router: Router;
  private activatedRoute: ActivatedRoute;

  constructor(
    recetaApiConsumer: RecetaApiConsumerService,
    router: Router, activatedRoute: ActivatedRoute
  ) {
    this.recetaApiConsumer = recetaApiConsumer;
    this.router = router;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: any) => {
      this.id = Number.parseInt(paramMap.get('id'));
      this.receta = this.recetaApiConsumer.getReceta(this.id);
    });
  }

}
