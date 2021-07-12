import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
 player1turn = true ;
 player2turn = false ;
 player1winner = false ;
 player2winner = false ;
 tie = false ;
 public a;
tracker: String[] = new Array(9).fill(null);

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightpink'},
    {text: '', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: '', cols: 1, rows: 1, color: 'lightpink'},
    {text: '', cols: 1, rows: 1, color: 'ightgreen'},
    {text: '', cols: 1, rows: 1, color: 'lightpink'},
    {text: '', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: '', cols: 1, rows: 1, color: 'lightpink'},
    {text: '', cols: 1, rows: 1, color: 'lightgreen'},
  ];
  constructor() { }

  ngOnInit() {
  }
 setMove(index: number) {
   if (this.player1turn) {
     if (!this.player2winner) {
   if (this.tracker[index] === null && !this.player1winner && !this.player2winner && !this.tie) {
    this.tracker[index] = 'X';
    this.tiles[index].text = 'X';
    this.player1turn = false ;
    this.player2turn = true;
   this.player1winner = this.checkWinner();
    if ( this.tracker[0] != null &&  !this.player1winner && !this.player2winner &&
      this.tracker[1] != null && this.tracker[2] != null &&
      this.tracker[3] != null && this.tracker[4] != null &&
      this.tracker[5] != null && this.tracker[6] != null &&
      this.tracker[7] != null && this.tracker[8] != null
      ) {
       this.tie = true ;
    }
   }
  }
}
   if (this.player2turn) {
    if (!this.player1winner) {
      if (this.tracker[index] === null && !this.player1winner && !this.player2winner && !this.tie) {
        this.tracker[index] = 'O';
        this.tiles[index].text = 'O';
        this.player2turn = false ;
        this.player1turn = true ;
        this.player2winner = this.checkWinner();
        console.log(this.tracker);
        if ( this.tracker[0] != null &&  !this.player1winner && !this.player2winner &&
          this.tracker[1] != null && this.tracker[2] != null &&
          this.tracker[3] != null && this.tracker[4] != null &&
          this.tracker[5] != null && this.tracker[6] != null &&
          this.tracker[7] != null && this.tracker[8] != null
          ) {
           this.tie = true ;
        }
    }
  }
   }
  }
  checkWinner() {
    if ( this.tracker[0] === this.tracker[1] && this.tracker[0] === this.tracker[2] && (this.tracker[0] != null)
       || this.tracker[3] === this.tracker[4] && this.tracker[3] === this.tracker[5] && (this.tracker[3] != null)
       || this.tracker[6] === this.tracker[7] && this.tracker[6] === this.tracker[8] && (this.tracker[6] != null)
       || this.tracker[0] === this.tracker[3] && this.tracker[0] === this.tracker[6] && (this.tracker[0] != null)
       || this.tracker[1] === this.tracker[4] && this.tracker[1] === this.tracker[7] && (this.tracker[1] != null)
       || this.tracker[2] === this.tracker[5] && this.tracker[2] === this.tracker[8] && (this.tracker[2] != null)
       || this.tracker[0] === this.tracker[4] && this.tracker[0] === this.tracker[8] && (this.tracker[0] != null)
       || this.tracker[2] === this.tracker[4] && this.tracker[2] === this.tracker[6] && (this.tracker[2] != null)
      ) {
        return true ;
    }
    return false ;
  }
}
