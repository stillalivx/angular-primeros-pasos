import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    { name: 'Trunk', power: 10 }
  ];

  onDeleteCharacter(id?: string) {
    if (!id) return;

    this.onDeleteId.emit(id);
  }

}
