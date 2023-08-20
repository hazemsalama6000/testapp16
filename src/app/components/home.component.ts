
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: [],
    standalone: true
})

export class HomeComponent implements OnInit {
    @Input({ required: true }) label: any;
    @Output() emitAge = new EventEmitter();

    ngOnInit(): void {

    }

    sendUpReference(span: HTMLSpanElement) {
        this.emitAge.emit(span);
    }
}