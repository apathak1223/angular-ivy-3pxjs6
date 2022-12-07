import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  constructor() {}

  private count = 0;

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }

  public get(): number {
    return this.count;
  }
}
