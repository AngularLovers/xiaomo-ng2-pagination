import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ng2-pagination',
    templateUrl: 'ng2-pagination.html'
})
export class PaginationComponent implements OnInit {

    @Input() pageSize = 10; // 每页默认10条
    @Input() pageIndex = 1; // 首页
    @Input() totalSize = 0; // 总页码

    constructor() {
    }

    ngOnInit() {
    }


}