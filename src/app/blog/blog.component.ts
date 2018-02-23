import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-blog',
    template: `
    <ul *ngFor="let post of posts$ | async">
        <li>
            <a [routerLink]="['/blog', post.id]">{{ post.title }} </a>
        </li>
    </ul>
    `
})
export class BlogComponent implements OnInit {
    public message: string;
    public posts$: Observable<any>;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.message = 'Blog component';
        this.posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
