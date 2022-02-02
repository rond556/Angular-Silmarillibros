import { Component, Input, OnInit } from '@angular/core';
import { CharacterModalService } from '../services/character-modal.service';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.css']
})
export class CharacterModalComponent implements OnInit {
  @Input() character: any;

  constructor(private characterModalService: CharacterModalService) {
    

  }

  ngOnInit(): void {
  }

}
