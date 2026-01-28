/////   Index - 8 




/////////////// Omit 
//// Omit is a TypeScript utility type that allows you to create a new type by removing certain properties from an existing type.

// Omit<Type, Keys>
// Type: The original type you want to modify.

// Keys: The property or properties you want to remove from Type.

// example ( Omit )

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Create a type without the 'password' property
type UserWithoutPassword = Omit<User, 'password'>;

const user: UserWithoutPassword = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
  // password: "secret" // ❌ Error: password doesn't exist in UserWithoutPassword
};


// example --  Omit Multiple keys 

type UserPublicInfo = Omit<User, 'password' | 'email'>;

const publicUser: UserPublicInfo = {
  id: 1,
  name: "Alice"
  // email and password are removed
};