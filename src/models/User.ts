import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  // By adding question marks we make the properties optional.
  // This gives us the flexiblity to update only one property if we wanted to
  id?: number;
  name?: string;
  age?: number;
}

const rooturl = 'http://localhost:3000/users';

export class User {
  public eventing: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rooturl);

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // Overwrites this.data with the passed in data of type UserProps
    Object.assign(this.data, update);
  }
}
