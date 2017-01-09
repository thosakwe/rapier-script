import Symbol from './symbol';

/**
 * @property parent {Scope}
 * @property symbols {Array<Symbol>}
 */
export default class Scope {
    /**
     * @param parent {Scope}
     */
    constructor(parent, symbols = []) {
        this.parent = parent;
        this.symbols = [].concat(symbols || []);
    }

    /**
     * @param key {string}
     * @returns {Symbol}
     */
    findOrCreate(key) {
        const resolved = this.getSymbol(key);

        if (resolved)
            return resolved.value;
        else {
            const symbol = new Symbol(key);
            this.symbols.push(symbol);
            return symbol;
        }
    }

    /**
     * @returns {Scope}
     */
    fork() {
        return new Scope(this, symbols);
    }

    /**
     * @param key {string}
     * @returns {object}
     */
    get(key) {
        const resolved = this.getSymbol(key);

        if (resolved)
            return resolved.value;
        throw new Error(`Undefined symbol '${key}'.`);
    }

    /**
     * @param key {string}
     * @returns {Symbol}
     */
    getSymbol(key) {
        for (const symbol of this.symbols) {
            if (symbol.name === key)
                return symbol;
        }

        return this.parent ? this.parent.getSymbol(key) : null;
    }

    /**
     * @param key {string}
     * @param value {string}
     * @returns {Scope}
     */
    set(key, value) {
        this.setSymbol(key, value);
        return this;
    }

    /**
     * @param key {string}
     * @param value {string}
     * @returns {Symbol}
     */
    setSymbol(key, value) {
        const symbol = this.findOrCreate(key);
        symbol.setValue(value);
        return symbol;
    }
}