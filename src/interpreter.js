import RapierObject, { RapierFunction } from './analysis/object';
import * as Types from './analysis/types';

import { RapierScriptVisitor } from './grammar/RapierScriptVisitor';
import parse from './parse';
import Scope from './scope';
import Symbol from './symbol';
import fs from 'fs';
import path from 'path';

/**
 * @property {Scope} scope
 * @property {Object.<string, Array.<Symbol>>}
 */
export default class RapierInterpreter extends RapierScriptVisitor {
    constructor() {
        this.scope = new Scope();
        this.libraries = {};
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
        const promises = [];

        for (const decl of ctx.importDecl()) {
            promises.push(this.visitImportDecl(ctx).then(loaded => {
                if (ctx.alias) {
                    const lib = new RapierObject(Types.LIBRARY);
                    lib.members = lib.members.concat(loaded);
                    this.scope.symbols.push(lib);
                } else {
                    for (const symbol of loaded) {
                        if (this.scope.getSymbol(symbol.name))
                            throw new Error(`Cannot import symbol '${symbol.name}' when it already exists in this scope.`);
                        else this.scope.symbols.push(symbol.name);
                    }
                }
            }));
        }

        for (const decl of ctx.topLevel()) {
            if (decl.functionDecl())
                promises.push(this.visitFunctionDecl(decl.functionDecl()));
            else if (decl.stmt())
                promises.push(this.visitStmt(decl.stmt()));
        }

        return Promise.all(promises).then(() => this.scope.getExports());
    }

    visitFunctionDecl(ctx) {
        return Promise.resolve(new RapierFunction(args => {
            // Todo: Inject params
            // Todo: new scope
            // Todo: Drop scope
        }));
    }

    visitImportDecl(ctx) {
        return new Promise((resolve, reject) => {
            // Load exports from library
            const loaded = [];

            if (ctx.source)
                return reject(new Error(`Cannot yet import global sources, such as ${ctx.getText()}.`));
            else {
                var absolute = path.resolve(this.getStringText(ctx.STRING())) + '.rpr';
                fs.readFile(absolute, 'utf8', (err, data) => {
                    if (err) return reject(err);
                    this.visitCompilationUnit(parse(data)).then(exports => {
                        const names = ctx.names ? ctx.names.map(name => name.text) : [];

                        for (const symbol of exports) {
                            if (!names.length || names.indexOf(symbol.name) !== -1)
                                loaded.push(symbol);
                        }

                        return resolve(loaded);
                    });
                });
            }
        });
    }
}