import { Aeroport } from './../model/aeroport.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { VolService } from 'src/app/vol.service';
import { Vol } from '../model/vol.model';
@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',
  styleUrls: ['./update-vol.component.css']
})
export class UpdateVolComponent implements OnInit {
  currentVol = new Vol();
  aeroports!:Aeroport[];
  updatedAirId!:number;
  constructor(private activatedRoute: ActivatedRoute,private router :Router,private volService: VolService){}
  //ngOnInit():void{
    /*this.aeroports = this.volService.listeAeroports();
this.currentVol =
this.volService.consulterVol(this.activatedRoute.snapshot.params['id']);
this.updatedAirId=this.currentVol.aeroport.idAir;*/
  //}
  /*ngOnInit() {
    this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
     subscribe( v =>{ this.currentVol = v; } ) ;
    }*/

    /*ngOnInit(): void {
      this.volService.listeAeroports().
      subscribe(airs => {this.aeroports = airs;
      console.log(airs);
      });
      this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
      subscribe( v =>{ this.currentVol = v; 
      this.updatedAirId = this.currentVol.aeroport.idAir;
      } ) ;
      }*/
      ngOnInit(): void {
        this.volService.listeAeroports().
        subscribe(cats => {console.log(cats);
        this.aeroports = cats._embedded.aeroports;
        }
        );
        this.volService.consulterVol(this.activatedRoute.snapshot.params['id']).
        subscribe( prod =>{ this.currentVol = prod; 
        this.updatedAirId = this.currentVol.aeroport.idAir;
        } ) ;}
      
    
  //updateVol(){ 
    /*
    this.currentVol.aeroport=this.volService.consulterAeroport(this.updatedAirId);
    this.volService.updateVol(this.currentVol);
    this.router.navigate(['vols']);*/
  //}
  /*updateVol() {
    this.volService.updateVol(this.currentVol).subscribe(v => {
    this.router.navigate(['vols']); }
    );
    }*/
    updateVol() {
      this.currentVol.aeroport = this.aeroports.
       find(air => air.idAir == this.updatedAirId)!;
      this.volService.updateVol(this.currentVol).subscribe(v => {
      this.router.navigate(['vols']); }
      );
      }
      
}
