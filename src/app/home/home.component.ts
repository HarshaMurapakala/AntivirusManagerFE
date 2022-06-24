import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Exclusion } from '../classes/exclusion';
import { Host } from '../classes/host';
import { HostServiceService } from '../services/host-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  panelOpenState = false;
  search : String ="";

  hosts:Host[]=[];

  exclusion:Exclusion = new Exclusion();

  constructor(private router: Router,private hostService: HostServiceService) { 

  }

  ngOnInit(): void {
    this.hostService.findAll().subscribe(data => {
      this.hosts = data;
    });

    
    
  }

    saveExclusion(): void {
      this.hostService.saveExclusion(this.exclusion)
          .subscribe( data => {
            alert("exclusion added successfully.");
          });
  
    };

    columns = [
      {
        columnDef: 'hostName',
        header: 'No.',
        cell: (element: Host) => `${element.hostName}`,
      },
      {
        columnDef: 'antispywareEnabled',
        header: 'Name',
        cell: (element: Host) => `${element.antispywareEnabled}`,
      },
      {
        columnDef: 'behaviorMonitorEnabled',
        header: 'Weight',
        cell: (element: Host) => `${element.behaviorMonitorEnabled}`,
      },
      {
        columnDef: 'antivirusSignatureLastUpdated',
        header: 'Symbol',
        cell: (element: Host) => `${element.antivirusSignatureLastUpdated}`,
      },
    ];
    dataSource = this.hosts;
    displayedColumns = this.columns.map(c => c.columnDef);
  

  
  

  saleData = [
    { name: "Server 2022", value: 1000 },
    { name: "Server 2019", value: 15000 },
    { name: "Server 2016", value: 33500 },
    { name: "Server 2012", value: 5000 },
    { name: "Server 2008", value: 600 }
  ];

}


