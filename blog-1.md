
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

`unknown` means **we don’t know the type yet**, but we must check it before using.

```ts
let value: unknown = "Hello";

// value.toUpperCase(); ❌ Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
```

---

## Why `unknown` is Better than `any`

`any` removes all safety, but `unknown` forces you to be careful.

### With `any` (dangerous)

```ts
let data: any = 10;
data.toUpperCase(); // ❌ runtime crash
```

👉 Bug: You treated a number like a string, but TypeScript didn’t stop you.

---

### With `unknown` (safe)

```ts
let data: unknown = 10;

if (typeof data === "string") {
  data.toUpperCase();
}
```

👉 No bug, because you checked the type first.

---

## What Bugs Can Happen with `any`?

Using `any` can cause:

* Calling wrong methods (string vs number)
* Accessing properties that don’t exist
* Silent runtime crashes

Example:

```ts
let user: any = { name: "Asif" };

console.log(user.age.toFixed()); // ❌ crash (age is undefined)
```

---

## Final Takeaway

* `any` = no safety ❌
* `unknown` = safe + controlled ✅

👉 Always prefer `unknown` when working with uncertain data.
