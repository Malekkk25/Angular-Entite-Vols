import { Router } from '@angular/router';
import { VolService } from './../vol.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { Aeroport } from '../model/aeroport.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {
newVol= new Vol();
 aeroports!: Aeroport[];
newIdAir!: number;
newAeroport!:Aeroport;
  constructor(private volService: VolService,private router:Router) { }

  //addVol(){
/*this.newAeroport=this.VolService.consulterAeroport(this.newIdAir);
this.newVol.aeroport=this.newAeroport;
this.VolService.ajouterVol(this.newVol);
this.router.navigate(['vols']);*/
//}

/*addVol(){
  this.volService.ajouterVol(this.newVol)
  .subscribe(v => {
  console.log(v);
  this.router.navigate(['vols']);
  });
  }*/
  addVol(){
    this.newVol.aeroport = this.aeroports.find(air => air.idAir == this.newIdAir)!;
    this.volService.ajouterVol(this.newVol)
    .subscribe(v => {
    console.log(v);
    this.router.navigate(['vols']);
    });
    }
    
  
 /* ngOnInit(): void {
   /* this.aeroports=this.VolService.listeAeroports();*/
  //}
  /*ngOnInit(): void {
    this.volService.listeAeroports().
    subscribe(airs => {this.aeroports = airs;
    console.log(airs);
    });
    }*/
    ngOnInit(): void {
      this.volService.listeAeroports().
      subscribe(airs => {console.log(airs);
      this.aeroports = airs._embedded.aeroports;
      }
      );
      }
}
