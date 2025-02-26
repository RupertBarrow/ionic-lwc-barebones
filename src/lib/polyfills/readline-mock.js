class Interface {
  constructor(options) {
    this.input = options.input;
    this.output = options.output;
    this.listeners = new Map();
  }

  question(query, callback) {
    // Mock implementation that immediately calls back
    callback("");
  }

  write(data) {
    // No-op in browser environment
  }

  close() {
    // Clean up
    this.listeners.clear();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(listener);
  }

  once(event, listener) {
    const onceListener = (...args) => {
      this.removeListener(event, onceListener);
      listener.apply(this, args);
    };
    this.on(event, onceListener);
  }

  removeListener(event, listener) {
    if (this.listeners.has(event)) {
      const listeners = this.listeners.get(event);
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
}

// Export both CommonJS and ES Module interfaces
const createInterface = (options) => new Interface(options);

// CommonJS exports
// module.exports = {
//   createInterface,
//   Interface,
// };

// ES Module exports
export { createInterface, Interface };
