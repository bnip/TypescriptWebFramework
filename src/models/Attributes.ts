export class Attributes<T> {
  constructor(private data: T) {}

  // get<K extends keyof T> Sets up the generic contraint.
  // A constraint limits the types that K (in this case) can be.
  // K can only ever be one of the different keys of T.
  // K can only be name, age or id as strings
  // T[K] is a normal object lookup
  // const colors = {red: 'red'}
  // colors['red'] returns 'red'
  get = <K extends keyof T>(key: K): T[K] => {
    // since this is an arrow function this is always bound to the instance of attribute
    return this.data[key];
  };

  set(update: T): void {
    // Overwrites this.data with the passed in data of type UserProps
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
