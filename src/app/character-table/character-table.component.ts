import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModalComponent } from '../character-modal/character-modal.component';
import { Character } from '../interfaces/character';
import { Race } from '../interfaces/race';
import { CharacterTableService } from './character-table.service';



@Component({
  selector: 'character-table',
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.css']
})
export class CharacterTableComponent implements OnInit {
  pageTitle: string = "Character List";
  showImage: boolean = false;
  nameSorted: boolean = false;
  raceSorted: boolean = false;
  filteredCharacters: Character[] = [];
  races: Race[] = [];
  characters: Character[] = [];

  private _listFilter: string = "";
  errorMessage: string = "";
  characterSub: any;
  racesSub: any;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(listFilter: string){
    this._listFilter = listFilter;
    this.filteredCharacters = this.performNameFilter(listFilter);
  }

  private _raceListFilter: string = "";
  get raceListFilter(): string {
    return this._raceListFilter;
  }
  set raceListFilter(raceListFilter: string){
    this._raceListFilter = raceListFilter;
    this.filteredCharacters = this.performRaceFilter(raceListFilter);
  }
  
  

  constructor(private modalService: NgbModal,
    private characterTableService: CharacterTableService) {
  }

  ngOnInit(): void {
    /*this.characterSub = this.characterTableService.getCharacters().subscribe({
      next: characters => this.characters = characters,
      error: err => this.errorMessage = err
    });
    this.racesSub = this.characterTableService.getRaces().subscribe({
      next: races => this.races = races,
      error: err => this.errorMessage = err
    });*/
    this.characters = this.characterTableService.getCharacters();
    this.races = this.characterTableService.getRaces();
    this.filteredCharacters = this.characters;
    this.sortByName();
  }

  ngOnDestroy(): void{
    this.characterSub.unsubscribe();
    this.racesSub.unsubscribe();
  }

  sortByName(): void {
    if (!this.nameSorted) {
      this.filteredCharacters.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else {
      this.filteredCharacters.sort((a, b) => (b.name > a.name) ? 1 : -1);
    }
    this.nameSorted = !this.nameSorted;
    this.raceSorted = false;
  }

  sortByRace(): void {
    if (!this.raceSorted) {
      this.filteredCharacters.sort((a, b) => (a.race > b.race) ? 1 : -1);
    } else {
      this.filteredCharacters.sort((a, b) => (b.race > a.race) ? 1 : -1);
    }
    this.raceSorted = !this.raceSorted;
    this.nameSorted = false;
  }

  openModal(characterId: number) {
    const modalRef = this.modalService.open(CharacterModalComponent, {size: 'lg', windowClass: 'modal-xl'});
    modalRef.componentInstance.character = this.characters.find(i => i.id ==  characterId);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

resetFilters(): void{
this.filteredCharacters = this.characters;
}

performNameFilter(listFilter: string): Character[]{
  listFilter = listFilter.toLocaleLowerCase();
  return this.characters.filter((character:Character) =>
     character.name.toLocaleLowerCase().includes(listFilter));
}

performRaceFilter(race: string): Character[]{
  this.filteredCharacters = this.characters;
  race = race.toLocaleLowerCase();
  return this.characters.filter((character:Character) =>
     character.race.toLocaleLowerCase().includes(race));
}

}
