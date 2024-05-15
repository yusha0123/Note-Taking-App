import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('editModal') editModal!: ElementRef<HTMLElement>;

  openModal() {
    (this.editModal.nativeElement as HTMLDialogElement).showModal();
  }

  closeModal() {
    (this.editModal.nativeElement as HTMLDialogElement).close();
  }
}
