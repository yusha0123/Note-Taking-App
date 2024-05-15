import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService
      .getNotesObservable()
      .subscribe((notes) => (this.notes = notes));
  }

  editNote(note: Note): void {
    this.modalComponent.openModal();
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }
}
