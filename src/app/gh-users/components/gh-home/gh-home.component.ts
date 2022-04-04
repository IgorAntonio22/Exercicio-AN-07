import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GhDialogComponent } from '../gh-dialog/gh-dialog.component';

@Component({
  selector: 'app-gh-home',
  templateUrl: './gh-home.component.html',
  styleUrls: ['./gh-home.component.css']
})
export class GhHomeComponent implements OnInit {

  usernameToFind: FormControl = new FormControl('', [Validators.required] )

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showDialog(): void {
    let ref = this.dialog.open(GhDialogComponent)

    ref.componentInstance.username = this.usernameToFind.value /* acessa o ts do componente gh-dialog, 
    pega a variável referência (username) e transfere o valor para o usernameToFind desse componente. Utiliza-se o component.
    Instance para acessar aquela variável do outro componente. */
  }

}
