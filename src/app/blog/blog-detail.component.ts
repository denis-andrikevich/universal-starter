import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-blog-detail',
    template: `
        <pre> {{ (post$ | async) | json }} </pre>
    `
})
export class BlogDetailComponent implements OnInit, OnDestroy {
    public message: string;
    public post$: any;
    private sub$: any;
    private id: number;

    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub$ = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.post$ = this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`);
        });
    }

    ngOnDestroy() {
        this.sub$.unsubscribe();
    }
}
