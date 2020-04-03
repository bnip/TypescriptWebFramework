import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

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
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
}
