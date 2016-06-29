import {Component} from '@angular/core';
import {RADIO_GROUP_DIRECTIVES} from "ng2-radio-group";

console.log(RADIO_GROUP_DIRECTIVES);

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App updated</h1>

            <input type="checkbox" [(ngModel)]="isSomethingEnabled"/>

           <checkbox-group #orderByCheckboxGroup="ngForm" [(ngModel)]="orderBy" [required]="true">
            <checkbox-item value="rating">Rating</checkbox-item>
            <checkbox-item value="date">Date</checkbox-item>
            <checkbox-item value="watches">Watch count</checkbox-item>
            <checkbox-item value="comments">Comment count</checkbox-item>
        </checkbox-group>
    `,
    directives: [RADIO_GROUP_DIRECTIVES]
})
export class AppComponent {
    isSomethingEnabled: boolean = true;
    orderBy: string[] = ["rating", "comments"];
}
