export class Employee {
  public position: "Junior" | "Senior" | "Manager" | "CEO";
  protected salary: number;
  protected bonus: number;

  constructor(
    salary: number,
    bonus: number,
    position: "Junior" | "Senior" | "Manager" | "CEO"
  ) {
    this.position = position;
    this.salary = salary;
    this.bonus = bonus;
  }

  //getter
  getPosition(): string {
    return this.position;
  }

  getSalary() {
    return this.salary;
  }

  getBonus() {
    return this.bonus;
  }
}

export class CEO extends Employee {
  constructor(
    position: "Junior" | "Senior" | "Manager" | "CEO",
    salary: number,
    bonus: number
  ) {
    super(salary, bonus, position);
    this.salary = salary + 25000;
    this.bonus = this.salary * bonus;
  }

  getSalary() {
    return this.salary;
  }

  getBonus() {
    return this.bonus;
  }
}

export class Junior extends Employee {
  constructor(
    position: "Junior" | "Senior" | "Manager" | "CEO",
    salary: number,
    bonus: number
  ) {
    super(salary, bonus, position);
    this.salary = salary + 15000;
    this.bonus = this.salary * bonus;
  }

  getSalary() {
    return this.salary;
  }

  getBonus() {
    return this.bonus;
  }
}

export class Senior extends Employee {
  constructor(
    position: "Junior" | "Senior" | "Manager" | "CEO",
    salary: number,
    bonus: number
  ) {
    super(salary, bonus, position);
    this.salary = salary + 20000;
    this.bonus = this.salary * bonus;
  }

  getSalary() {
    return this.salary;
  }

  getBonus() {
    return this.bonus;
  }
}

export class Manager extends Employee {
  constructor(
    position: "Junior" | "Senior" | "Manager" | "CEO",
    salary: number,
    bonus: number
  ) {
    super(salary, bonus, position);
    this.salary = salary + 23000;
    this.bonus = this.salary * bonus;
  }

  getSalary() {
    return this.salary;
  }

  getBonus() {
    return this.bonus;
  }
}
