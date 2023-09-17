import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    standalone: true
})

export class NotFoundComponent implements OnInit {

    constructor(private route:ActivatedRoute){
    }
    ngOnInit(): void {
        console.log(this.route.snapshot.data['data']);
    }

}