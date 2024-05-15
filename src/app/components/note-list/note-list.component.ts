import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  selectedNote: Note | null = null;
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService
      .getNotesObservable()
      .subscribe((notes) => (this.notes = notes));
  }

  editNote(note: Note): void {
    this.modalComponent.openModal();
    this.selectedNote = note;
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id);
  }

  updateNote(note: Note): void {
    const index = this.notes.findIndex((n) => n.id === note.id);
    if (index !== -1) {
      this.notes[index] = { ...note };
    }
    this.selectedNote = null;
  }
}
