import {RapierScriptLexer} from "./grammar/RapierScriptLexer";
import {RapierScriptParser} from "./grammar/RapierScriptParser";
import {RapierScriptVisitor} from "./grammar/RapierScriptVisitor";
import antlr4 from "antlr4";

export default function (input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new RapierScriptLexer(inputStream);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new RapierScriptParser(tokens);
    return parser.compilationUnit();
}