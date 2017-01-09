import RapierObject from './analysis/object';
import Symbol from './symbol';

/**
 * @property {Scope} parent
 * @property {Array.<Symbol>} symbols
 */
export default class Scope {
    /**
     * @param {Scope} parent
     * @property {Array.<Symbol>} symbols
     */
    constructor(parent, symbols = []) {
        this.parent = parent;
        this.symbols = [].concat(symbols || []);
    }

    /**
     * @param {string} key
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
     * @param {string} key
     * @returns {object}
     */
    get(key) {
        const resolved = this.getSymbol(key);

        if (resolved)
            return resolved.value;
        throw new Error(`Undefined symbol '${key}'.`);
    }

    /**
     * @param {string} key
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
     * @param {string} key
     * @param {RapierObject} value
     * @returns {Scope}
     */
    set(key, value) {
        this.setSymbol(key, value);
        return this;
    }

    /**
     * @param {string} key
     * @param {RapierObject} value
     * @returns {Symbol}
     */
    setSymbol(key, value) {
        const symbol = this.findOrCreate(key);
        symbol.setValue(value);
        return symbol;
    }
}