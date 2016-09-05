import antlr4 from "antlr4";
import {RapierScriptLexer} from "./grammar/RapierScriptLexer";
import {RapierScriptParser} from "./grammar/RapierScriptParser";
import {RapierScriptVisitor} from "./grammar/RapierScriptVisitor";

export default function (input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new RapierScriptLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new RapierScriptParser(tokens);
    const transformer = new AstTransformer();
    return transformer.visitCompilationUnit(parser.compilationUnit());
}

export class AstTransformer extends RapierScriptVisitor {
    visitBlock(ctx) {
        const block = {type: "Block", body: []};

        for (const stmt of block.stmt()) {
            block.body.push(this.visitStmt(stmt));
        }

        return block;
    }

    visitCompilationUnit(ctx) {
        const compilationUnit = {type: "CompilationUnit", functions: [], statements: []};

        for (const functionDecl of ctx.functionDecl()) {
            compilationUnit.functions.push(this.visitFunctionDecl(functionDecl));
        }

        for (const stmt of ctx.stmt()) {
            compilationUnit.statements.push(this.visitStmt(stmt));
        }

        return compilationUnit;
    }

    visitExpr(ctx) {

    }

    visitFunctionBody(ctx) {
        const functionBody = {type: "FunctionBody", params: [], body: null, expression: null};

        for (const paramSpec of ctx.paramSpec()) {
            functionBody.params.push(this.visitParamSpec(paramSpec));
        }

        if (ctx.expr()) {
            functionBody.expression = this.visitExpr(ctx.expr());
        } else if (ctx.block()) {
            functionBody.body = this.visitBlock(ctx.block());
        }

        return functionBody;
    }

    visitFunctionDecl(ctx) {
        return {
            type: "FunctionDeclaration",
            name: ctx.name.getText(),
            body: this.visitFunctionBody(ctx.functionBody())
        };
    }

    visitParamSpec(ctx) {
        var paramSpec = {type: "ParameterSpecifier", name: ctx.ID().getText(), typeAnnotation: null};

        if (ctx.type()) {
            paramSpec.typeAnnotation = this.visitType(ctx.type());
        }

        return paramSpec;
    }

    visitStmt(ctx) {
        if (ctx instanceof RapierScriptParser.VardeclStmtContext) {
            const varDeclStmt = {
                type: "VariableDeclarationStatement",
                constant: ctx.CONST() != null,
                name: ctx.ID().getText(),
                typeAnnotation: null,
                value: this.visitExpr(ctx.expr())
            };

            if (ctx.type())
                varDeclStmt.typeAnnotation = this.visitType(ctx.type());

            return varDeclStmt;
        } else if (ctx instanceof RapierScriptParser.AssignStmtContext) {
            return {type: "AssignmentStatement", left: this.visitExpr(ctx.left), right: this.visitExpr(ctx.right)};
        } else if (ctx instanceof RapierScriptParser.ExprStmtContext) {
            return {type: "ExpressionStatement", expression: this.visitExpr(ctx.expr())};
        } else if (ctx instanceof RapierScriptParser.RetStmtContext) {
            return {type: "ReturnStatement", value: this.visitExpr(ctx.expr())};
        } else if (ctx instanceof RapierScriptParser.ForStmtContext) {
            return {
                type: "ForStatement",
                declaration: this.visitStmt(ctx.varDeclStmt()),
                condition: this.visitExpr(ctx.expr()),
                action: this.visitStmt(ctx.stmt()),
                body: this.visitBlock(ctx.block())
            };
        } else if (ctx instanceof RapierScriptParser.ForeachStmtContext) {
            // Todo: Foreach...
        }
    }

    visitType(ctx) {
        return {type: "Type", name: ctx.name.getText()};
    }
}
