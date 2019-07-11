import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})



export class FibonacciComponent{
  
  constructor(
    
  ) { }
  
   fibonacci(pnum){
    var a = 1, b = 0, temp;
  
    while (pnum >= 0){
      temp = a;
      a = a + b;
      b = temp;
      pnum--;
    }
  
    return b;
  }

  ngOnInit() {
  }

}
