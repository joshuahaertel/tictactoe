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
![http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGh9J0v9J0x9JrLGCbHIqDBL1TFkHPafN2028Mgff11Sa9YSYYPieAUdfQGGdb-KmWKY56ngWABXcNb8F9UYn78kR1OPAIa4v2HMfXPnGIY8SWZR48kO4IvJWYjpa_9pk20KH4S42Y-I2sQSaZrKcprS6zH253-PAW5DWDgA8c6Y13JC8JKl1HXu0000](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGh9J0v9J0x9JrLGCbHIqDBL1TFkHPafN2028Mgff11Sa9YSYYPieAUdfQGGdb-KmWKY56ngWABXcNb8F9UYn78kR1OPAIa4v2HMfXPnGIY8SWZR48kO4IvJWYjpa_9pk20KH4S42Y-I2sQSaZrKcprS6zH253-PAW5DWDgA8c6Y13JC8JKl1HXu0000)
