import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoPerrosService } from 'src/app/services/info-perros.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;

  constructor(private router: ActivatedRoute, public _servicioPerros: InfoPerrosService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params;
      console.log('id: ', this.id);
    })
  }

}
