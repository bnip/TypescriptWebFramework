// Type Alias
// Empty function, function that has no arguments or return values
type Callback = () => void;

export class Eventing {
  // We don't know the names of the events being passed in
  // So we use [key: string] to tell typescript that the keys are strings
  // And the keys will point to values that are an array of Callback functions
  events: { [key: string]: Callback[] } = {};
  // () => void as a prop tells typescript that the passed in parameter is a function
  on(eventName: string, callback: Callback) {
    // This will fall back on [] if we get undefined
    // This guarantees handlers will be an array
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    // Assign array back to event in events
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}
