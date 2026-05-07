# `any` vs `unknown` in TypeScript : What every typescript developer should know

## Why This Matters

When we work with unpredictable data in TypeScript, we usually see two types:

- `any`
- `unknown`

At first, they may look similar.

But in real projects, they behave very differently.

One removes safety.  
The other keeps our code protected.

---

# What is `any`?

`any` means TypeScript stops checking the type completely.

```ts
let value: any = "Hello";

value.toFixed(); // ❌ No TypeScript error
```

The problem is:

`toFixed()` only works on numbers, not strings.

But because we used `any`, TypeScript trusted us and allowed it.

This can cause runtime crashes.

---

# Why `any` is Called a "Type Safety Hole"

TypeScript exists to catch mistakes before our code runs.

But when we use `any`, we basically tell TypeScript:

> "Don't check this value."

That creates a hole in TypeScript’s safety system.

```ts
function process(data: any) {
  return data.user.name.toUpperCase();
}
```

If `data.user` is missing, the app crashes.

TypeScript cannot help us because `any` disables checking.

---

# What is `unknown`?

`unknown` also means we don't know the type yet.

But unlike `any`, TypeScript still protects us.

```ts
let value: unknown = "Hello";

// value.toUpperCase(); ❌ Error
```

We must check the type first before using it.

---

# Why `unknown` is Safer

`unknown` forces us to verify data before using it.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
```

This prevents many common bugs in large applications.

---

# What is Type Narrowing?

Type narrowing means reducing a broad type like `unknown`
into a specific type like `string` or `number`.

We do this by checking the type first.

```ts
let value: unknown = "TypeScript";

if (typeof value === "string") {
  // TypeScript now knows value is a string
  console.log(value.toUpperCase());
}
```

Inside the `if` block, TypeScript narrows the type from:

```ts
unknown → string
```

That process is called **type narrowing**.

---

# Common Ways to Narrow Types

## 1. `typeof`

Used for primitive types.

```ts
if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```

---

## 2. `instanceof`

Used for class objects.

```ts
if (error instanceof Error) {
  console.log(error.message);
}
```

---

## 3. `in` Operator

Used to check properties inside objects.

```ts
if ("name" in user) {
  console.log(user.name);
}
```

---

# Final Thoughts

In real-world TypeScript projects, using `any` too much can slowly remove the benefits of TypeScript itself.

That’s why `unknown` is usually the better choice.

- `any` = no safety ❌
- `unknown` = safe and controlled ✅

And type narrowing is what makes `unknown` useful.

It helps us safely work with unpredictable data while still keeping TypeScript’s protection active.

The more we work on larger applications, the more important these small type safety decisions become.