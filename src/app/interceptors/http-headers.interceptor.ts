import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(
        req:HttpRequest<any>,
        next:HttpHandler
    ):Observable<HttpEvent<any>>{
        req=req.clone({
            setHeaders:{
                'x-rapidapi-key':'06c7aa8d83msh6beb7a608290ecbp1c99fejsna730c333d4b6',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key:'e40e743af2c94b0c916a8aa618fb4473'
            }

        });
        return next.handle(req);
    }
}