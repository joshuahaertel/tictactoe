# Tic-Tac-Toe UML

```puml
TicTacToe "1" *-- "1" Grid
Grid "1" *-- "9" Space
Grid "1" *-- "0..*" Word
Word <|-- Win
Word <|-- Draw

TicTacToe "1" *-- "2" Player
Player <|-- Player1
Player <|-- Player2

TicTacToe "1" *-- "2" Symbol
Symbol <|-- X
Symbol <|-- Y

Player "?" *-- "?" Symbol
Player1 "1" *-- "0..5" X
Player2 "1" *-- "0..4" Y  
```
