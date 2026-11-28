# Week 2 · Day 3 — TypeScript G–J Written Answers

Scheduled November 25, 2026; guided study November 26–28. Consolidated from learner submissions and reviewed corrections. Assistant completed the outstanding official last function, readonly reference, assertion demonstration, organized separate exercise files and added response validation. These are reviewed answers, not an independent assessment.

## G — Generics

- G1: last<T> returns items[items.length - 1], preserving the element type or undefined for an empty array. Optional chaining permits safe access to the last user's name. The learner independently practiced second<T>; the official last example was added during authorized closeout.
- G2: Box<T> ties its value property to T; Box<string>, Box<Product> and Array<Box<string>> preserve that relationship.
- G3: User is a single object, User[] an array; Promise<User> and Promise<User[]> describe eventual fulfilled values, not immediate data or guaranteed success. Array<User> and User[] are equivalent. No promise is created here.
- G-K: T preserves the element type between input and output; an unconstrained T need not have a name. A constraint such as T extends { name: string } permits access. Generics do not validate JSON.

## H — Utility types

- H1: Pick keeps ID/name, Omit excludes ID, Partial<Pick<...>> makes name and price optional. The initial reversed Omit was corrected by the learner.
- H2: Record requires numeric open and done counts. A Readonly<Product> reference shares the original object; writing through that reference is rejected, while writing through product is allowed and visible through the view.
- H3: Omit changes the static contract, not runtime properties. The initial prediction was incorrect; actual output exposed the synthetic password. Constructing a fresh public object from user.id and user.name excludes it.
- H-K: Partial and Readonly are shallow; a missing finite Record key fails checking; Readonly does not freeze objects.

## I — Practical TypeScript

- I1: parseProduct accepts unknown, checks non-null object, property presence/type, positive integer ID, nonblank name and nonnegative integer price; constructs a fresh result containing only validated fields and trims the name. The learner corrected the zero boundaries.
- I2: Seven assigned cases plus zero ID, zero price and extra-field/trim case. The learner supplied correct observed outputs; the closeout adds explicit expected-outcome comparisons.
- I3: An assertion can convince the checker but leaves a numeric name unchanged; uppercase then fails at runtime. The parser rejects the malformed input before that call. description?: string allows absence (present undefined is rejected under exactOptionalPropertyTypes); description: string | null requires the key and permits null. The executable try/catch correction was assistant-completed.
- I-K: JSON.parse establishes JSON syntax only; number does not encode business rules. Runtime guards such as typeof, in, instanceof and equality checks establish evidence for narrowing.

## J — React preparation

- J1: Product-list props contain products and an onSelect numeric-ID callback with no usable return. Calling the callback directly avoids printing its undefined result.
- J2: A discriminated union has one status and requires products on success or a message on error. Three separate booleans can all be true. A number | null selected ID represents selection or no selection.
- J3: Passing onSelect gives React a callback to call when clicked; invoking onSelect() executes during rendering and supplies its result instead. TSX uses .tsx and requires React runtime/types, JSX configuration and a transforming toolchain. The Node practice project does not provide that setup.
- J-K: Props are component inputs, including data and callbacks. Type annotations do not prevent mutation of shared references; treat props as read-only. A loading object describes a state, not an asynchronous operation.

## RequestResult preparation

The assistant added classifyParsedResponse to the existing synthetic model. It receives an HTTP status, already-parsed unknown body and expected endpoint shape; validates and reconstructs known success/business bodies, leaves HTTP error bodies unknown, and identifies invalid shapes as validation-error (distinct from malformed JSON and network/abort). No live requests or JSON decoding occur here. The known shapes were checked against the curriculum network lab server/client. Actual HTTP execution, integration, timeout/abort and retry tests are later work.
