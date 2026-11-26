type Contact = {email: string} | {phone: string};
function contactLabel(contact: Contact): string {
    if("email" in contact) return contact.email;
    return contact.phone;
}

function describeFailure(failure: unknown): string {
  if (failure instanceof Error) return failure.message;
  return "Unknown failure";
}

console.log(contactLabel({ email: "ali@example.com" }));
console.log(contactLabel({ phone: "123" }));
console.log(describeFailure(new Error("Invalid title")));


console.log(describeFailure(123));
console.log(describeFailure(null));
