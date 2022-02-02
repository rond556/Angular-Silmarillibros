import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModalComponent } from '../character-modal/character-modal.component';
import { Character } from '../interfaces/character';
import { Race } from '../interfaces/race';
import { CharacterModalService } from '../services/character-modal.service';



@Component({
  selector: 'app-character-table',
  templateUrl: './app-character-table.component.html',
  styleUrls: ['./app-character-table.component.css']
})
export class AppCharacterTableComponent implements OnInit {
  pageTitle: string = "Character List";
  showImage: boolean = false;
  nameSorted: boolean = false;
  raceSorted: boolean = false;

  private _listFilter: string = "";
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
  
  filteredCharacters: Character[] = [];
  races: Race[] = [
  {
    id: 1,
    name: "Elf",
    otherNames:[],
    description: ""
  },
  {
    id: 2,
    name: "Human",
    otherNames:[],
    description: ""
  },
  {
    id: 3,
    name: "Ainu",
    otherNames:[],
    description: ""
  },
  {
    id: 4,
    name: "Dwarf",
    otherNames:[],
    description: ""
  },
  {
    id: 5,
    name: "Dragon",
    otherNames:[],
    description: ""
  }

  ]
  characters: Character[] = [
    {
      id: 1,
      name: "Fingolfin",
      race: "Elf",
      otherNames: [],
      imagePath: "assets/display-portraits/fingolfin.jpg",
      quote: "Then Fingolfin beheld... the utter ruin of the Noldor, and the defeat beyond redress of all their houses; and filled with wrath and despair he mounted upon Rochallor his great horse and rode forth alone, and none might restrain him. He passed over Dor-nu-Fauglith like a wind amid the dust, and all that beheld his onset fled in amaze, thinking that Oromë himself was come: for a great madness of rage was upon him, so that his eyes shone like the eyes of the Valar. Thus he came alone to Angband's gates, and he sounded his horn, and smote once more upon the brazen doors, and challenged Morgoth to come forth to single combat. And Morgoth came."
    },
    {
      id: 2,
      name: "Manwë",
      race: "Ainu",
      otherNames: ["Súlimo", "Mânawenûz", "Valahiru"],
      imagePath: "assets/display-portraits/manwe.jpg",
      quote:""
    },
    {
      id: 3,
      name: "Fëanor",
      race: "Elf",
      otherNames: ["Curufinwë"],
      imagePath: "assets/display-portraits/feanor.jpg",
      quote: ""
    },
    {
      id: 4,
      name: "Túrin Turambar",
      race: "Human",
      otherNames: ["Neithan", "Gorthol", "Agarwaen", "Adanedhel", "Thurin", "Mormegil", "Turambar", "Dagnir Glaurunga"],
      imagePath: "assets/display-portraits/turin.jpg",
      quote: ""
    },
    {
      id: 5,
      name: "Mîm",
      race: "Dwarf",
      otherNames: [],
      imagePath: "assets/display-portraits/mim.jpg",
      quote:"",
    },
    {
      id: 6,
      name: "Morgoth",
      race: "Ainu",
      otherNames: ["Melkor"],
      imagePath: "assets/display-portraits/morgoth.jpg",
      quote: ""
    },
    {
      id: 7,
      name: "Olórin",
      race: "Maia",
      otherNames: ["Gandalf", "Mithrandir", "Incánus", "Tharkûn"],
      imagePath: "assets/display-portraits/olorin.jpg",
      quote:""
    },
    {
      id: 8,
      name: "Ulmo",
      race: "Ainu",
      otherNames: [],
      imagePath: "assets/display-portraits/ulmo.jpg",
      quote:""
    },
    {
      id: 9,
      name: "Tulkas",
      race: "Ainu",
      otherNames: ["Astaldo", "Tulukastāz"],
      imagePath: "assets/display-portraits/tulkas.jpg",
      quote:""
    },
    {
      id: 11,
      name: "Nienna",
      race: "Ainu",
      otherNames: [],
      imagePath: "assets/display-portraits/nienna.jpg",
      quote:""
    },
    {
      id: 12,
      name: "Sauron",
      race: "Maia",
      otherNames: ["Annatar","Gorthaur","Mairon","Annatar"],
      imagePath: "assets/display-portraits/sauron.jpg",
      quote:""
    }

  ]

  constructor(private modalService: NgbModal,
    private characterModalService: CharacterModalService) {

  }

  ngOnInit(): void {
    this.filteredCharacters = this.characters;
    this.sortByName();
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

  open(characterId: number) {
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
