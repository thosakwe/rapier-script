import RapierObject from './analysis/object';

/**
 * @export
 * @class Symbol
 * @property {string} name
 * @property {RapierObject} value
 * @property {boolean} final
 */
export default class Symbol {
    /**
     * @param {string} name
     * @param {RapierObject} value
     * @param {boolean} [final=false]
     */
    constructor(name, value, final = false) {
        this.name = name;
        this.value = value;
        this.final = final;
    }

    markAsFinal() {
        this.final = true;
    }

    /**
     * @param {object} value
     */
    setValue(value) {
        if (this.final)
            throw new Error(`Cannot overwrite constant symbol '${this.name}'.`);
        this.value = value;
    }
}