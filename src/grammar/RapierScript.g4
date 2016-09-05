grammar RapierScript;

SL_CMT: '//' ~('\n')* -> channel(HIDDEN);
WS: (' ' | '\n' | '\r' | '\r\n') -> skip;

// Symbols
COLON: ':';
COMMA: ',';
CURLY_L: '{';
CURLY_R: '}';
DOT: '.';
EQUALS: '=';
MINUS: '-';
PAREN_L: '(';
PAREN_R: ')';
SEMI: ';';
SQUARE_L: '[';
SQUARE_R: ']';

// Operators
ARROW: '=>';
PLUS: '+';
QUESTION: '?';
TIMES: '*';

// Keywords
CONST: 'const';
DELETE: 'delete';
FN: 'fn';
FOR: 'for';
GET: 'get';
HEAD: 'head';
LET: 'let';
NEW: 'new';
PATCH: 'patch';
POST: 'post';
PUT: 'put';
RET: 'ret';

ID: ('$' | [A-Za-z_]) ('$' | [A-Za-z0-9_])*;

requestMethod: HEAD | GET | POST | PUT | PATCH | DELETE;

// Expression literals
fragment NUM: [0-9]+;
INT: MINUS? NUM;
DOUBLE: MINUS? NUM DOT NUM;
fragment ESCAPED: '\\"' | '\\r' | '\\n';
RAW_STRING: 'r"' (ESCAPED | ~('\n'|'\r'))*? '"';
STRING: '"' (ESCAPED | ~('\n'|'\r'))*? '"';
fragment REGEX_FLAGS: 'g' | 'i' | 'm' | 'u' | 'y';
REGEX_LITERAL: '/' ~'/'+ '/' REGEX_FLAGS*;

compilationUnit: (functionDecl | (stmt SEMI?)+)*;

block:
    CURLY_L (stmt SEMI?)* CURLY_R
    | stmt SEMI?
;

functionDecl: FN name=ID functionBody;
functionBody: PAREN_L ((paramSpec COMMA)* paramSpec)? PAREN_R (COLON type)? (block | (ARROW expr));
argSpec: ((expr COMMA)* expr)?;
paramSpec: ID (COLON type)?;

type: name=ID;

stmt:
    vardeclStmt
    | assignStmt
    | exprStmt
    | forStmt
    | foreachStmt
    | retStmt
;

assignStmt: left=expr EQUALS right=expr;
exprStmt: expr;
forStmt: FOR PAREN_L vardeclStmt SEMI expr SEMI stmt PAREN_R block;
foreachStmt: FOR PAREN_L type? ID COLON expr PAREN_R block;
retStmt: RET expr;
vardeclStmt: (((CONST | LET) type?)|((CONST|LET)? type)) ID EQUALS expr;

dictionaryLiteral: CURLY_L ((dictionaryPair COMMA)* dictionaryPair)? CURLY_R;
dictionaryPair:
    ID
    | (ID|STRING|RAW_STRING) COLON expr
;

expr:
    requestMethod expr #RequestExpr
    | ID #IdExpr
    | INT #IntegerExpr
    | DOUBLE #DoubleExpr
    | SQUARE_L ((expr COMMA)* expr)? SQUARE_R #ArrayLiteralExpr
    | target=expr SQUARE_L indexer=expr SQUARE_R #IndexerExpr
    | STRING #StringLiteralExpr
    | RAW_STRING #RawStringLiteralExpr
    | REGEX_LITERAL #RegexLiteralExpr
    | dictionaryLiteral #DictionaryLiteralExpr
    | expr PAREN_L argSpec PAREN_R #CallExpr
    | expr (TIMES | PLUS | MINUS | QUESTION) expr #BinaryExpr
    | NEW type PAREN_L argSpec PAREN_R #NewExpr
    | type #TypeExpr
    | expr DOT ID #MemberExpr
    | functionBody #FunctionExpr
    | PAREN_L expr PAREN_R #NestedExpr
;
