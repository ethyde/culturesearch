import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    // templateUrl: 'app/hero-list.component.html',
    template: `
        <h1>Choose your Cultural Domain of Search</h1>
        <p>You search about a {{ values }}</p>
        <input (keyup)="onKey($event)">
        
        <my-searchbox></my-searchbox>
        <my-list></my-list>
    `,
    // styleUrls: ['app/hero-details.component.css'],
    styles: [`
        h1 {
            color: blue;
        }
    `],
    directives:  [],
    providers:   []
})

export class AppComponent {
    values = 'Movie';

    /*
    // without strong typing
    onKey(event:any) {
        this.values += event.target.value + ' | ';
    }
    */

    // with strong typing
    onKey(event: KeyboardEvent) {
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
}