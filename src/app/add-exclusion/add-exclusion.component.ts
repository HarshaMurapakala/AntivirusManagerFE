import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exclusion } from '../classes/exclusion';
import { HostServiceService } from '../services/host-service.service';

@Component({
  selector: 'app-add-exclusion',
  templateUrl: './add-exclusion.component.html',
  styleUrls: ['./add-exclusion.component.scss']
})
export class AddExclusionComponent implements OnInit {

  exclusion:Exclusion = new Exclusion();

  constructor(private router: Router, private hostService: HostServiceService) { }

  ngOnInit(): void {
  }

  
  createUser(): void {
    this.hostService.saveExclusion(this.exclusion)
        .subscribe( data => {
          alert("exclusion added successfully.");
        });

  };

}
