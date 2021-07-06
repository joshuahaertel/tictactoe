# Lesson 3
## Tic-Tac-Toe Nouns and Verbs

* Player
	- Choose (Symbol)
	- Play (Game)
	- Put (Symbol, Grid)
	- Win (Not any player, but the one who reaches 3 in a row)
* Symbol
	- Go
* X (Symbol)
* O (Symbol)
* Grid
	- Check 3 in a row/diagonally (Symbol)
* Game
	- Reset (Grid)

https://plantuml.com/

```plantuml
Game "1" *-- "1" Grid
Player "2" *-- "1" Grid
Player "1" *-- "1" Symbol
Player "1" *-- "1" Game
Symbol <|-- X
Symbol <|-- O
Grid "1" *-- "9" Symbol

class Player {
 +Choose()
 +Play()
}
```

Homework assignment: Finish adding the verbs to the nouns in plantUML, following the `Player class` example.

Hint: There are 5 more verbs to add that belong to `Player`s and 3 other nouns.
