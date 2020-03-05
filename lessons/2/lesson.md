# Lesson 2
## Noun Relationships
### Has-a
* A classroom has a teacher
* A classroom has students

### Is-a
* Math is a school class
* PE is a school class

## UML (Unified Modeling Language)
### Has-a
```puml
Classroom "1" *-- "1..3" Teacher
Classroom "*" *-- "*" Student
```
![http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkBihFprLGCbHIqDBL1T9wUiPA2Y6fYSaPgKN82hJ02i1qS4bfIcfU2PT3QbuAq1W0](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkBihFprLGCbHIqDBL1T9wUiPA2Y6fYSaPgKN82hJ02i1qS4bfIcfU2PT3QbuAq1W0)

### Is-a
```puml
SchoolClass <|-- Math
SchoolClass <|-- PE
```
![http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGfEpiZFpt7EIImkLh2fqTLLy4qioS0K3N3bSaZDIm7g0000](http://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGfEpiZFpt7EIImkLh2fqTLLy4qioS0K3N3bSaZDIm7g0000)
