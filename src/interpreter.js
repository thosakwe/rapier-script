import { RapierScriptVisitor } from './grammar/RapierScriptVisitor';
import Scope from './scope';

/**
 * @property scope {Scope}
 */
export default class RapierInterpreter extends RapierScriptVisitor {
    constructor() {
        this.scope = new Scope();
    }

    visitCompilationUnit(ctx) {
        for (const decl of ctx.topLevel()) {
            if (decl.functionDecl())
                this.visitFunctionDecl(decl.functionDecl());
            else if (decl.stmt())
                this.visitStmt(decl.stmt());
        }
    }
}