# Lesson 2
## Noun Relationships
### Has-a
* A classroom has a teacher
* A classroom has students

### Is-a
* Math is a school class
* PE is a school class

## Is-a or Has-a
* My house is a condo
* My realtor has a condo
* My complex has condos

* My complex has 26 condos
* My condo belongs to 1 complexes

Ponds & Ducks
Pond has a duck
Duck has a pond

A pond can have infinity ducks
A duck can have infinity ponds

## UML (Unified Modeling Language)
### Has-a
```puml
Classroom "1" *-- "1..3" Teacher
Classroom "*" *-- "*" Student
```
![https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkBihFprLGCbHIqDBL1T9wUiPA2Y6fYSaPgKN82hJ02i1qS4bfIcfU2PT3QbuAq1W0](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBEIImkBihFprLGCbHIqDBL1T9wUiPA2Y6fYSaPgKN82hJ02i1qS4bfIcfU2PT3QbuAq1W0)

### Is-a
```puml
SchoolClass <|-- Math
SchoolClass <|-- PE
```
![https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGfEpiZFpt7EIImkLh2fqTLLy4qioS0K3N3bSaZDIm7g0000](https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuGfEpiZFpt7EIImkLh2fqTLLy4qioS0K3N3bSaZDIm7g0000)
