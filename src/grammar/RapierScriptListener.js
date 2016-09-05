// Generated from src/grammar/RapierScript.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RapierScriptParser.
function RapierScriptListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RapierScriptListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RapierScriptListener.prototype.constructor = RapierScriptListener;

// Enter a parse tree produced by RapierScriptParser#requestMethod.
RapierScriptListener.prototype.enterRequestMethod = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#requestMethod.
RapierScriptListener.prototype.exitRequestMethod = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#compilationUnit.
RapierScriptListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#compilationUnit.
RapierScriptListener.prototype.exitCompilationUnit = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#block.
RapierScriptListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#block.
RapierScriptListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#functionDecl.
RapierScriptListener.prototype.enterFunctionDecl = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#functionDecl.
RapierScriptListener.prototype.exitFunctionDecl = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#functionBody.
RapierScriptListener.prototype.enterFunctionBody = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#functionBody.
RapierScriptListener.prototype.exitFunctionBody = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#argSpec.
RapierScriptListener.prototype.enterArgSpec = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#argSpec.
RapierScriptListener.prototype.exitArgSpec = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#paramSpec.
RapierScriptListener.prototype.enterParamSpec = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#paramSpec.
RapierScriptListener.prototype.exitParamSpec = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#type.
RapierScriptListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#type.
RapierScriptListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#stmt.
RapierScriptListener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#stmt.
RapierScriptListener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#assignStmt.
RapierScriptListener.prototype.enterAssignStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#assignStmt.
RapierScriptListener.prototype.exitAssignStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#exprStmt.
RapierScriptListener.prototype.enterExprStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#exprStmt.
RapierScriptListener.prototype.exitExprStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#forStmt.
RapierScriptListener.prototype.enterForStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#forStmt.
RapierScriptListener.prototype.exitForStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#foreachStmt.
RapierScriptListener.prototype.enterForeachStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#foreachStmt.
RapierScriptListener.prototype.exitForeachStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#retStmt.
RapierScriptListener.prototype.enterRetStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#retStmt.
RapierScriptListener.prototype.exitRetStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#vardeclStmt.
RapierScriptListener.prototype.enterVardeclStmt = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#vardeclStmt.
RapierScriptListener.prototype.exitVardeclStmt = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#dictionaryLiteral.
RapierScriptListener.prototype.enterDictionaryLiteral = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#dictionaryLiteral.
RapierScriptListener.prototype.exitDictionaryLiteral = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#dictionaryPair.
RapierScriptListener.prototype.enterDictionaryPair = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#dictionaryPair.
RapierScriptListener.prototype.exitDictionaryPair = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#FunctionExpr.
RapierScriptListener.prototype.enterFunctionExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#FunctionExpr.
RapierScriptListener.prototype.exitFunctionExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#IdExpr.
RapierScriptListener.prototype.enterIdExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#IdExpr.
RapierScriptListener.prototype.exitIdExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#RegexLiteralExpr.
RapierScriptListener.prototype.enterRegexLiteralExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#RegexLiteralExpr.
RapierScriptListener.prototype.exitRegexLiteralExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#DictionaryLiteralExpr.
RapierScriptListener.prototype.enterDictionaryLiteralExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#DictionaryLiteralExpr.
RapierScriptListener.prototype.exitDictionaryLiteralExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#BinaryExpr.
RapierScriptListener.prototype.enterBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#BinaryExpr.
RapierScriptListener.prototype.exitBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#StringLiteralExpr.
RapierScriptListener.prototype.enterStringLiteralExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#StringLiteralExpr.
RapierScriptListener.prototype.exitStringLiteralExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#RequestExpr.
RapierScriptListener.prototype.enterRequestExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#RequestExpr.
RapierScriptListener.prototype.exitRequestExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#TypeExpr.
RapierScriptListener.prototype.enterTypeExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#TypeExpr.
RapierScriptListener.prototype.exitTypeExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#DoubleExpr.
RapierScriptListener.prototype.enterDoubleExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#DoubleExpr.
RapierScriptListener.prototype.exitDoubleExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#IndexerExpr.
RapierScriptListener.prototype.enterIndexerExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#IndexerExpr.
RapierScriptListener.prototype.exitIndexerExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#IntegerExpr.
RapierScriptListener.prototype.enterIntegerExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#IntegerExpr.
RapierScriptListener.prototype.exitIntegerExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#MemberExpr.
RapierScriptListener.prototype.enterMemberExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#MemberExpr.
RapierScriptListener.prototype.exitMemberExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#ArrayLiteralExpr.
RapierScriptListener.prototype.enterArrayLiteralExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#ArrayLiteralExpr.
RapierScriptListener.prototype.exitArrayLiteralExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#NewExpr.
RapierScriptListener.prototype.enterNewExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#NewExpr.
RapierScriptListener.prototype.exitNewExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#RawStringLiteralExpr.
RapierScriptListener.prototype.enterRawStringLiteralExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#RawStringLiteralExpr.
RapierScriptListener.prototype.exitRawStringLiteralExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#NestedExpr.
RapierScriptListener.prototype.enterNestedExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#NestedExpr.
RapierScriptListener.prototype.exitNestedExpr = function(ctx) {
};


// Enter a parse tree produced by RapierScriptParser#CallExpr.
RapierScriptListener.prototype.enterCallExpr = function(ctx) {
};

// Exit a parse tree produced by RapierScriptParser#CallExpr.
RapierScriptListener.prototype.exitCallExpr = function(ctx) {
};



exports.RapierScriptListener = RapierScriptListener;