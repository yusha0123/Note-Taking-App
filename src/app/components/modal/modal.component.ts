import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { Note } from 'src/app/interfaces/note';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() note: Note | null = null;
  @Output() noteUpdated = new EventEmitter<Note>();
  @ViewChild('editModal') editModal!: ElementRef<HTMLElement>;

  editedNote: Note | null = null;

  ngOnChanges() {
    // Make a copy of the note object for editing
    this.editedNote = this.note ? { ...this.note } : null;
  }

  openModal() {
    (this.editModal.nativeElement as HTMLDialogElement).showModal();
  }

  closeModal() {
    (this.editModal.nativeElement as HTMLDialogElement).close();
  }

  saveChanges() {
    if (this.editedNote) {
      this.noteUpdated.emit(this.editedNote);
    }
    this.closeModal();
  }
}
