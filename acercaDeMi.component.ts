import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { persona } from 'app/model/persona.model';
import { PersonaService } from 'app/service/persona.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html,
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit{
  persona: persona = new persona ("","","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
     this.personaService.getPersona().subscribe(data => {this.persona = data});
  }
