// Generated from RapierScript.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RapierScriptParser.

function RapierScriptVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RapierScriptVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RapierScriptVisitor.prototype.constructor = RapierScriptVisitor;

// Visit a parse tree produced by RapierScriptParser#requestMethod.
RapierScriptVisitor.prototype.visitRequestMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#compilationUnit.
RapierScriptVisitor.prototype.visitCompilationUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#topLevel.
RapierScriptVisitor.prototype.visitTopLevel = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#block.
RapierScriptVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#functionDecl.
RapierScriptVisitor.prototype.visitFunctionDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#functionBody.
RapierScriptVisitor.prototype.visitFunctionBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#argSpec.
RapierScriptVisitor.prototype.visitArgSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#paramSpec.
RapierScriptVisitor.prototype.visitParamSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#type.
RapierScriptVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#stmt.
RapierScriptVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#assignStmt.
RapierScriptVisitor.prototype.visitAssignStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#exprStmt.
RapierScriptVisitor.prototype.visitExprStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#forStmt.
RapierScriptVisitor.prototype.visitForStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#foreachStmt.
RapierScriptVisitor.prototype.visitForeachStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#retStmt.
RapierScriptVisitor.prototype.visitRetStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#vardeclStmt.
RapierScriptVisitor.prototype.visitVardeclStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#dictionaryLiteral.
RapierScriptVisitor.prototype.visitDictionaryLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#dictionaryPair.
RapierScriptVisitor.prototype.visitDictionaryPair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#FunctionExpr.
RapierScriptVisitor.prototype.visitFunctionExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#IdExpr.
RapierScriptVisitor.prototype.visitIdExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#RegexLiteralExpr.
RapierScriptVisitor.prototype.visitRegexLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#DictionaryLiteralExpr.
RapierScriptVisitor.prototype.visitDictionaryLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#BinaryExpr.
RapierScriptVisitor.prototype.visitBinaryExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#StringLiteralExpr.
RapierScriptVisitor.prototype.visitStringLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#RequestExpr.
RapierScriptVisitor.prototype.visitRequestExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#TypeExpr.
RapierScriptVisitor.prototype.visitTypeExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#DoubleExpr.
RapierScriptVisitor.prototype.visitDoubleExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#IndexerExpr.
RapierScriptVisitor.prototype.visitIndexerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#IntegerExpr.
RapierScriptVisitor.prototype.visitIntegerExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#MemberExpr.
RapierScriptVisitor.prototype.visitMemberExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#ArrayLiteralExpr.
RapierScriptVisitor.prototype.visitArrayLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#NewExpr.
RapierScriptVisitor.prototype.visitNewExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#RawStringLiteralExpr.
RapierScriptVisitor.prototype.visitRawStringLiteralExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#NestedExpr.
RapierScriptVisitor.prototype.visitNestedExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RapierScriptParser#CallExpr.
RapierScriptVisitor.prototype.visitCallExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RapierScriptVisitor = RapierScriptVisitor;