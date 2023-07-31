import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _value$ = new BehaviorSubject<boolean>(false);
  public readonly value$ = this._value$.asObservable();

  public start() {
    this._value$.next(true);
  }

  public stop() {
    this._value$.next(false);
  }

}
