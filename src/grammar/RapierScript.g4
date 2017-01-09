grammar RapierScript;

SL_CMT: '//' ~('\n')* -> channel(HIDDEN);
WS: (' ' | '\n' | '\r' | '\r\n') -> skip;

// Keywords
CONST: 'const';
LET: 'let';

ID: ('$' | [A-Za-z_]) ('$' | [A-Za-z0-9_])*;

// Expression literals
NUM: '-'? [0-9]+ ('.' [0-9]+)?;
fragment ESCAPED: '\\"' | '\\r' | '\\n';
RAW_STRING: 'r"' (ESCAPED | ~('\n'|'\r'))*? '"';
STRING: '"' (ESCAPED | ~('\n'|'\r'))*? '"';
fragment REGEX_FLAGS: 'g' | 'i' | 'm' | 'u' | 'y';
REGEX_LITERAL: '/' ~'/'+ '/' REGEX_FLAGS*;

compilationUnit: importDecl* topLevel*;

importDecl: 'import' ('[' (names+=ID ',')* names+=ID ']' 'of') importSource ('as' alias=ID)?;
importSource:
    STRING #StringSource
    | '<' source=ID '>' #GlobalSource
;

topLevel: (functionDecl | ((stmt ';'?)+));

block:
    '{' (stmt ';'?)* '}'
    | stmt ';'?
;

functionDecl: 'fn' name=ID functionBody;
functionBody: '(' ((paramSpec ',')* paramSpec)? ')' (':' type)? (block | ('=>' expr));
argSpec: ((expr ',')* expr)?;
paramSpec: ID (':' type)?;

type: name=ID;

stmt:
    vardeclStmt
    | assignStmt
    | exprStmt
    | forStmt
    | foreachStmt
    | retStmt
;

// TODO: More assignment operators
assignStmt: left=expr '=' right=expr;
exprStmt: expr;
forStmt: 'for' '(' vardeclStmt ';' expr ';' stmt ')' block;
foreachStmt: 'for' '(' type? ID ':' expr ')' block;
retStmt: 'ret' expr;
vardeclStmt: (((CONST | LET) type?)|((CONST|LET)? type)) ID '=' expr;

dictionaryLiteral: '{' ((dictionaryPair ',')* dictionaryPair)? '}';
dictionaryPair:
    ID
    | (ID|STRING|RAW_STRING) ':' expr
;

expr:
    requestMethod=('head' | 'get' | 'post' | 'put' | 'patch' | 'delete') expr #RequestExpr
    | ID #IdExpr
    | NUM #NumExpr
    | '[' ((expr ',')* expr)? ']' #ArrayLiteralExpr
    | target=expr '[' indexer=expr ']' #IndexerExpr
    | STRING #StringLiteralExpr
    | RAW_STRING #RawStringLiteralExpr
    | REGEX_LITERAL #RegexLiteralExpr
    | dictionaryLiteral #DictionaryLiteralExpr
    | expr '(' argSpec ')' #CallExpr
    | expr '*' expr #TimesExpr
    | expr '+' expr #ConcatExpr
    | expr '-' expr #SubtractExpr
    | expr '?' expr #QueryExpr
    | 'new' type '(' argSpec ')' #NewExpr
    | type #TypeExpr
    | expr '.' ID #MemberExpr
    | functionBody #FunctionExpr
    | '(' expr ')' #NestedExpr
;
