import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";
declare var navigator: any;

@Injectable({ providedIn: 'root' })

export class preloadingService implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (this.checkConnection()) {
            return fn();
        }
        else return of(null);
    }


    checkConnection() {
        const conn = navigator.connection;
        const slowConnections = ['slow-2g','2g','3g'];
        if (conn) {
            if(slowConnections.includes(conn.effectiveType)){
                return false;
            }else{
                return true;
            }
        }
        return false;
    }

}