import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
// import swal from 'sweetalert';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {
  categories = [
    {
      "title":"",
      "description":""
    }
  ];

  constructor(private _category: CategoryService) {}

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        //css
        this.categories = data;
        console.log(this.categories);
      },

      (error) => {
        //
        console.log(error);
        //swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }
}
