# Lesson 3
## Common Object Oriented Programming (OOP) Languages
* C++
* Java
* C#
* Python

We will use python in this class because of its ease of use.

## Classes
Programming languages represent nouns with classes. Each language has its own way of representing a class.

A few examples are:

### Python (what we will be using)
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

### Javascript
Though not originally OOP based, classes are possible with javascript.
```javascript
class Student {
}
```

## Converting UML to Classes in Pycharm
### Has-a
```plantuml
TicTacToe *-- Grid
```
![http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGh9J0v9J0x9JrNGqjLLS2_AJE5oICrB0Ke10000](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGh9J0v9J0x9JrNGqjLLS2_AJE5oICrB0Ke10000)

The has-a relationship can be programmed in Python like this:

```python
class TicTacToe:
    def __init__(self):
        self.grid = Grid()
```

When an object has more than one other object, you simply add a new line, like so:

```python
class TicTacToe:
    def __init__(self):
        self.grid = Grid()
        self.player = Player()
```

### Is-A
```plantuml
Game <|-- TicTacToe
```

The has-a relationship can be programmed in Python like this:

![http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN9Fp4rLiAdHrLK8oKmEIKmEoK_bSaZDIm7A0G00](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuN9Fp4rLiAdHrLK8oKmEIKmEoK_bSaZDIm7A0G00)

```python
class TicTacToe(Game):
    pass
```

It is possible for objects to *be* more than one thing. This can get complex, though, so more will be discussed later on.
For reference, it is done by adding the parent classes in the parenthesis:
```python
class Student(Human, Procrastinator):
    pass
```

## Pycharm
In this class, we will be using a program called Pycharm in order to edit our code.
The community version can be downloaded for free on any of the three major platforms here:
https://www.jetbrains.com/pycharm/download/#section=linux

It may be necessary to download a Python interpreter before running pycharm. That can be found at the official python website https://www.python.org/downloads/

**An important tip: When you notice a file is red, open it up in the editor.
Hit `F2` on the keyboard to move the cursor to the next error.
Use `alt + Enter` to view a list of suggested fixes for the error.
After scrolling through the suggestions with the arrow keys, hit enter to let pycharm fix the problem**

# Challenge for next week
How do we represent an object having multiple of another object, ie a
game with two players?
