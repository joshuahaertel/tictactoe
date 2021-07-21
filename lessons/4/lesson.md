# Lesson 4
## Common Object Oriented Programming (OOP) Languages
* C++
* Java
* C#
* Python

We will use typescript in this class because of its ease of use.

## Classes
Programming languages represent nouns with classes. Each language has its own way of representing a class.

A few examples are:

### Python
```python
class Student:
    pass
```

### C++
```cpp
class Student {
}
```

or possibly:

```cpp
struct Student {
}
```

### Java
```java
public class Student {
}
```

### C#
```csharp
public class Student {
}
```

### Javascript/Typescript (What we will be using)
Though not originally OOP based, classes are possible with javascript. As Typescript is a superset of javascript, it supports classes out of the box.
```javascript
class Student {
}
```

## Converting UML to Classes in VSCode
### Has-a
```plantuml
TicTacToe *-- Grid
```
![https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGh9J0v9J0x9JrNGqjLLS2_AJE5oICrB0Ke10000](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGh9J0v9J0x9JrNGqjLLS2_AJE5oICrB0Ke10000)

The has-a relationship can be programmed in Typescript like this:

```typescript
class TicTacToe {
    grid: Grid = Grid()
}
```

When an object has another object, you simply add a new line, like so:

```typescript
class TicTacToe {}
    grid: Grid = new Grid()
    player: Player = new Player()
}
```

When an object can have multiple of another object, you can either explicitly name each one, like so:
```typescript
class TicTacToe {
    player1: Player = new Player()
    player2: Player = new Player()
}
```

or you can use an array:
```typescript
class TicTacToe {
    rounds: Round[] = []
}
```

As a rule of thumb, if the cardinality is low (there are very few objects), you will typically want to name them explicitly, as was the case with player 1 and player 2. For everything else, you will typically want to use arrays. Even if a game can have between 1 and 100 players, arrays simplify things, though you will want to code things in a way that you can enforce the bounds of no less than 1 player and no more than 100.

### Is-A
```plantuml
Game <|-- TicTacToe
```

![https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN9Fp4rLiAdHrLK8oKmEIKmEoK_bSaZDIm7A0G00](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN9Fp4rLiAdHrLK8oKmEIKmEoK_bSaZDIm7A0G00)

The is-a relationship can be programmed in Typescript like this:

```typescript
class TicTacToe extends Game{

}
```

In some programming languages, it is possible for objects to *be* more than one thing. This can get complex, though, so more will be discussed later on.
For reference, in Python it is done by adding the parent classes in the parenthesis:
```python
class Student(Human, Procrastinator):
    pass
```
