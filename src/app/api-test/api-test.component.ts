import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent implements OnInit {

const user ="user";
const mdp ="user";
  

  ngOnInit(): void {
    const autho= btoa(`${this.user}`);
console.log(autho);
return http.get<any>('http://localhost:8080/');
'authorisatuin':'basic'
.subsribe(response => this.log(response))
}
    
  }



}
