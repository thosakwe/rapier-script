import Symbol from '../symbol';
import RapierType from './type';
import * as Types from './types';

/**
 * @property {RapierType} type
 * @property {Array.<Symbol>} members
 */
export default class RapierObject {
    /**
     * @param {RapierType} type
     * @param {Array.<Symbol>} members
     */
    constructor(type, members = {}) {
        this.type = type;
        this.members = members;
    }

    /**
     * @param {Array.<RapierObject>} args
     * @returns {RapierObject}
     */
    call(args = []) {
        throw new Error(`${this.str()} is not a function.`);
    }

    /**
     * @returns {string}
     */
    str() {
        return `[Instance of ${this.type.name}]`;
    }
}

/**
 * @callback executor
 * @param {Array.<RapierObject>} args
 * @returns {RapierObject}
 */

/**
 * @property {executor} executor
 */
export class RapierFunction extends RapierObject {
    /**
     * @property {executor} executor
     */
    constructor(executor) {
        super(Types.FUNCTION);
        this.executor = executor;
    }

    call(args = []) {
        return this.executor(args);
    }
}