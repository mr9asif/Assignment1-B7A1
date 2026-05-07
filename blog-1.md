# `any` vs `unknown`: What Every TypeScript Developer Should Know

## What is `any`?

`any` means **no type checking**.

TypeScript will allow you to do anything with that variable.

```ts
let value: any = "Hello";
value.toFixed(); // ❌ No error, but will crash at runtime
```

---

## What is `unknown`?

`unknown` means **we don't know the type yet**, but we must check it before using.

```ts
let value: unknown = "Hello";

// value.toUpperCase(); ❌ Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
```

---

## Why `any` is a "Type Safety Hole"

TypeScript's entire purpose is to catch bugs *before* your code runs. When you use `any`, you're telling TypeScript: **"Don't check this. Trust me."**

That's the hole. TypeScript stops protecting you. It won't warn you when you call `.toUpperCase()` on a number, access a property that doesn't exist, or pass the wrong shape of data to a function. The compiler steps aside — and bugs that TypeScript was designed to prevent slip straight through to runtime.

```ts
function process(data: any) {
  return data.user.name.toUpperCase(); // ❌ No error — but crashes if data is null
}
```

Every `any` in your codebase is a location where TypeScript's guarantee breaks down. It's not just "less safe" — it's an explicit opt-out of safety.

---

## Why `unknown` is the Safer Choice

`unknown` says the same thing as `any` in terms of what you receive — you genuinely don't know the type. But `unknown` keeps TypeScript's protection active. You **cannot** use the value until you prove what it is.

```ts
function process(data: unknown) {
  return data.user.name.toUpperCase(); // ❌ TypeScript error — cannot use until narrowed
}
```

The compiler refuses to let you make assumptions. You are forced to check first, which means the bug gets caught at compile time, not in production.

---

## What is Type Narrowing?

**Type narrowing** is the process of moving from a broad, uncertain type (like `unknown`) to a specific, usable type (like `string` or `number`) by writing a **type guard** — a condition TypeScript understands.

When TypeScript sees your check, it "narrows" the type inside that branch. Think of it like a funnel: you start with "could be anything" and progressively rule out possibilities until only one type remains.

```ts
let value: unknown = getData();

// At this point, TypeScript sees value as: unknown
// You cannot call any methods on it

if (typeof value === "string") {
  // ✅ Inside here, TypeScript has narrowed value to: string
  console.log(value.toUpperCase());
}

// Outside the if, value is still: unknown
```

TypeScript tracks these checks through your code flow — this is called **control flow analysis**.

---

## How to Narrow `unknown` — The Three Main Guards

### 1. `typeof` — for primitives

Use this for `string`, `number`, `boolean`, `bigint`, `symbol`, `function`, and `undefined`.

```ts
function formatValue(val: unknown): string {
  if (typeof val === "number") {
    return val.toFixed(2); // ✅ val is number here
  }
  if (typeof val === "string") {
    return val.trim();     // ✅ val is string here
  }
  return "unsupported";
}
```

### 2. `instanceof` — for class instances

Use this when you expect an object created from a specific class.

```ts
function handleError(err: unknown) {
  if (err instanceof Error) {
    console.log(err.message); // ✅ err is Error here
  }
}
```

This is especially useful in `catch` blocks — since TypeScript 4.0, caught errors are `unknown` by default (when `useUnknownInCatchVariables` is enabled), making `instanceof Error` the correct way to handle them safely.

```ts
try {
  riskyOperation();
} catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message); // ✅ safe
  }
}
```

### 3. `in` operator — for object shapes

Use this when you need to check whether a property exists on an object.

```ts
function greet(user: unknown) {
  if (typeof user === "object" && user !== null && "name" in user) {
    console.log((user as { name: string }).name); // ✅ safe
  }
}
```

---

## Narrowing vs. Type Assertion — Know the Difference

A common mistake is reaching for `as` (type assertion) instead of narrowing:

```ts
// ❌ Type assertion — you're forcing TypeScript to trust you
const name = (user as any).name; // Unsafe, no runtime check

// ✅ Type narrowing — TypeScript verifies your logic
if (typeof user === "object" && user !== null && "name" in user) {
  const name = (user as { name: string }).name; // Checked first, then cast
}
```

Assertion silences the compiler. Narrowing *informs* the compiler. Narrowing is almost always the right choice.

---

## What Bugs Can Happen with `any`?

Using `any` can cause:

- Calling wrong methods (string vs number)
- Accessing properties that don't exist
- Silent runtime crashes

```ts
let user: any = { name: "Asif" };

console.log(user.age.toFixed()); // ❌ crash (age is undefined)
```

With `unknown` and narrowing, TypeScript would have stopped this before it ran.

---

## Final Takeaway

- `any` = no safety, a deliberate hole in the type system ❌
- `unknown` = safe + controlled ✅
- **Type narrowing** = the technique that makes `unknown` usable — prove the type with `typeof`, `instanceof`, or `in`, then TypeScript unlocks it

> Always prefer `unknown` when working with uncertain data. Narrow it to what you expect, and you get both flexibility *and* safety.
