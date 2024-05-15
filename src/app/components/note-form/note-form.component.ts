import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;

  constructor(
    private noteService: NoteService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      id: new Date().getTime(),
      title: ['', Validators.required],
      content: '',
    });
  }

  onSubmit(): void {
    if (this.noteForm.invalid) return;

    const note: Note = this.noteForm.value;
    this.noteService.createNote(note);

    this.noteForm.reset();
  }
}
