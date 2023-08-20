import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";


@Component({
    selector: 'base-comp',
    templateUrl: './base.component.html',
    standalone: true,
    imports: [RouterOutlet]
})

export class BaseComponent {


}