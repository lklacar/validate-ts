### Example usage

```typescript
import {Email, MaxLength, MinLength, Required, validate} from "validate-ts-decorator";

class User {

    @Required()
    @MinLength(3)
    @MaxLength(20)
    firstName: string;

    @Required()
    @Email()
    email: string;

    constructor(firstName: string, email: string) {
        this.firstName = firstName;
        this.email = email;
    }
}


const user = new User("Luka", 'example@example.com');
const validationResult = validate(user);
console.log(validationResult);
```
