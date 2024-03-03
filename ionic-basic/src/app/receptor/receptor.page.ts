import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../class/character';
import { Subscription } from 'rxjs';
import { CharacterApiConsumerService } from '../service/character-api-consumer.service';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
})
export class ReceptorPage implements OnInit, OnDestroy {
  user: Character = {};
  list: Character[] = [];
  characters: Character[] = [];
  subscriptionInstance: Subscription = new Subscription;
  subscriptionList: Subscription = new Subscription;

  constructor(private characterAPIConsumer: CharacterApiConsumerService) { }

  ngOnDestroy(): void {
    if (this.subscriptionList != undefined || this.subscriptionList != null) {
      this.subscriptionList.unsubscribe();
    }
    if (
      this.subscriptionInstance != undefined || 
      this.subscriptionInstance != null
    ) {
      this.subscriptionInstance.unsubscribe();
    }
  }

  ngOnInit() {
    this.subscriptionInstance = this.characterAPIConsumer.$getObjectSource.subscribe(
      data => {
        console.log(data);
        this.user = data;
      }
    );

    this.subscriptionList = this.characterAPIConsumer.$getListSource.subscribe(
      data => {
        console.log(data);
        this.list = data;
      }
    );
    
    this.characterAPIConsumer.getCharacters().subscribe((response: any) => {
      this.characters = response.results;
    });
  }

}
