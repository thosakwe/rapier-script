import RapierObject, { RapierFunction } from './analysis/object';

import { RapierScriptVisitor } from './grammar/RapierScriptVisitor';
import Scope from './scope';

/**
 * @property {Scope} scope
 */
export default class RapierInterpreter extends RapierScriptVisitor {
    constructor() {
        this.scope = new Scope();
    }

    /**
     * @param {Array.<RapierObject>} args
     * @return {RapierObject}
     */
    run(ctx, args = []) {
        return this.visitCompilationUnit(ctx).then(() => {
            return this.scope.get('main').call(args);
        });
    }

    visitCompilationUnit(ctx) {
        // Todo: Imports
        const promises = [];

        for (const decl of ctx.topLevel()) {
            if (decl.functionDecl())
                promises.push(this.visitFunctionDecl(decl.functionDecl()));
            else if (decl.stmt())
                promises.push(this.visitStmt(decl.stmt()));
        }

        return Promise.all(promises).then(() => this.scope.getExports());
    }

    visitFunctionDecl(ctx) {
        return Promise.resolve((args) => {

        });
    }
}