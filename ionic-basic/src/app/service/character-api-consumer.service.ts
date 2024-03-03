import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterApiConsumerService {
  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any[]>([]);

  $getObjectSource = this.objectSource.asObservable();
  $getListSource = this.listSource.asObservable();

  constructor(private http: HttpClient) { }

  sendObjectSource(data: any) {
    this.objectSource.next(data);
  }

  sendListSource(data: any[]) {
    this.listSource.next(data);
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>('http://swapi.dev/api/people/', {});
  }

  getCharacter(id: string): Observable<any> {
    return this.http.get<any>(`http://swapi.dev/api/people/${id}`, {});
  }
}
