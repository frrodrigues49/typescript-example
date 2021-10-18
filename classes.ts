// abstract class UserAccount : Usada para classes modelos porem nao podem ser alteradas
class UserAccount {
  public name: string; // public: ja é implicito por padrao
  protected age: number; // protected: uso apenas interno da classe ou subclasse

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; // private: nao pode ler nem alterar fora da classe
  // readonly level: number; // readonly: pode ler mais nao pode alterar
  level: number; // readonly: pode ler mais nao pode alterar

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  // Assessors (GET E SET)
  get getLevel() {
    console.log("---------------GET-----------------");
    return this.level;
  }
  set setLevel(level: number) {
    this.level = level;
  }
}

const will = new UserAccount("Willian", 30);
console.log(will);
// console.log(will.age); protegino nao consigo chamar
will.logDetails();

const john = new CharAccount("John", 45, "jphnmaster", 80);
console.log(john);
john.logDetails();

john.setLevel = 499;

console.log(john.getLevel);
