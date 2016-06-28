import {Component} from '@angular/core';
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group";

console.log(RADIO_GROUP_DIRECTIVES);

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><input type="checkbox" [(ngModel)]="isSomethingEnabled"/>',
    directives: [RADIO_GROUP_DIRECTIVES]
})
export class AppComponent { }
