import { Component, OnInit } from '@angular/core';
import { Character } from '../class/character';
import { Router } from '@angular/router';
import { CharacterApiConsumerService } from '../service/character-api-consumer.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
})
export class InicioPage implements OnInit {
  user: Character = {
    name: 'Anakin Skywalker',
    uuid: "4382147873242381",
    email: 'example@host.com',
  }

  list: Character[] = [
    {
      name: 'Luke Skywalker',
      uuid: '1234567891234567',
      email: 'luke@jeditemple.com',
    },
    {
      name: 'Leia Organa',
      uuid: '9876543210987654',
      email: 'leia@rebellion.com',
    },
    {
      name: 'Han Solo',
      uuid: '9876123456789456',
      email: 'han@millenniumfalcon.com',
    }
  ]

  constructor(
    private router: Router, 
    private characterApiConsumer: CharacterApiConsumerService
  ) { }

  ngOnInit() { ; }

  redirectReceptor() {
    this.characterApiConsumer.sendObjectSource(this.user);
    this.characterApiConsumer.sendListSource(this.list);

    this.router.navigate(['/receptor']);
  }
}
