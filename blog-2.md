# OOP in TypeScript : Every Developer should know

## Why OOP Matters

In large TypeScript projects, code can become:

- Hard to manage
- Repetitive
- Confusing
- Difficult to debug

The 4 pillars of OOP help organize logic and reduce complexity.

---

# 1. Encapsulation
> Protect data and control access.

Instead of changing data directly, we use methods.

```ts
class User {
  private password = "1234";

  checkPassword(pass: string) {
    return this.password === pass;
  }
}
```

### Benefits
- Keeps data safe
- Prevents bugs
- Makes code more secure

---

# 2. Abstraction
> Hide complex logic and show only necessary parts.

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}

class StripePayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount}`);
  }
}
```

### Benefits
- Reduces complexity
- Cleaner code
- Easier to use systems

---

# 3. Inheritance
> Reuse common code.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```

### Benefits
- Less duplicate code
- Easier maintenance
- Better structure

---

# 4. Polymorphism
> Same method, different behavior.

```ts
class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

### Benefits
- Flexible systems
- Easy to extend features
- Cleaner logic

---

# How OOP Reduces Complexity

| Pillar | Helps With |
|---|---|
| Encapsulation | Protecting logic |
| Abstraction | Hiding complexity |
| Inheritance | Reusing code |
| Polymorphism | Flexible behavior |

---

# Final Thought

OOP helps developers build large TypeScript applications in a clean and organized way.

Instead of messy code, OOP creates:

- Reusable logic
- Better structure
- Easier debugging
- Scalable applications

That’s why OOP is important in real-world TypeScript projects.