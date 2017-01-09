/**
 * @export
 * @class Symbol
 * @property name {string}
 * @property value {object}
 * @property final {boolean}
 */
export default class Symbol {
    constructor(name, value, final = false) {
        this.name = name;
        this.value = value;
        this.final = final;
    }

    markAsFinal() {
        this.final = true;
    }

    /**
     * @param value {object}
     */
    setValue(value) {
        if (this.final)
            throw new Error(`Cannot overwrite constant symbol '${this.name}'.`);
        this.value = value;
    }
}