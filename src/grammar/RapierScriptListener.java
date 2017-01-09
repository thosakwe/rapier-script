// Generated from RapierScript.g4 by ANTLR 4.6
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RapierScriptParser}.
 */
public interface RapierScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#requestMethod}.
	 * @param ctx the parse tree
	 */
	void enterRequestMethod(RapierScriptParser.RequestMethodContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#requestMethod}.
	 * @param ctx the parse tree
	 */
	void exitRequestMethod(RapierScriptParser.RequestMethodContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompilationUnit(RapierScriptParser.CompilationUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompilationUnit(RapierScriptParser.CompilationUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#topLevel}.
	 * @param ctx the parse tree
	 */
	void enterTopLevel(RapierScriptParser.TopLevelContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#topLevel}.
	 * @param ctx the parse tree
	 */
	void exitTopLevel(RapierScriptParser.TopLevelContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(RapierScriptParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(RapierScriptParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#functionDecl}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDecl(RapierScriptParser.FunctionDeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#functionDecl}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDecl(RapierScriptParser.FunctionDeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void enterFunctionBody(RapierScriptParser.FunctionBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#functionBody}.
	 * @param ctx the parse tree
	 */
	void exitFunctionBody(RapierScriptParser.FunctionBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#argSpec}.
	 * @param ctx the parse tree
	 */
	void enterArgSpec(RapierScriptParser.ArgSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#argSpec}.
	 * @param ctx the parse tree
	 */
	void exitArgSpec(RapierScriptParser.ArgSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#paramSpec}.
	 * @param ctx the parse tree
	 */
	void enterParamSpec(RapierScriptParser.ParamSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#paramSpec}.
	 * @param ctx the parse tree
	 */
	void exitParamSpec(RapierScriptParser.ParamSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(RapierScriptParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(RapierScriptParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterStmt(RapierScriptParser.StmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitStmt(RapierScriptParser.StmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#assignStmt}.
	 * @param ctx the parse tree
	 */
	void enterAssignStmt(RapierScriptParser.AssignStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#assignStmt}.
	 * @param ctx the parse tree
	 */
	void exitAssignStmt(RapierScriptParser.AssignStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#exprStmt}.
	 * @param ctx the parse tree
	 */
	void enterExprStmt(RapierScriptParser.ExprStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#exprStmt}.
	 * @param ctx the parse tree
	 */
	void exitExprStmt(RapierScriptParser.ExprStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void enterForStmt(RapierScriptParser.ForStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void exitForStmt(RapierScriptParser.ForStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#foreachStmt}.
	 * @param ctx the parse tree
	 */
	void enterForeachStmt(RapierScriptParser.ForeachStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#foreachStmt}.
	 * @param ctx the parse tree
	 */
	void exitForeachStmt(RapierScriptParser.ForeachStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#retStmt}.
	 * @param ctx the parse tree
	 */
	void enterRetStmt(RapierScriptParser.RetStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#retStmt}.
	 * @param ctx the parse tree
	 */
	void exitRetStmt(RapierScriptParser.RetStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#vardeclStmt}.
	 * @param ctx the parse tree
	 */
	void enterVardeclStmt(RapierScriptParser.VardeclStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#vardeclStmt}.
	 * @param ctx the parse tree
	 */
	void exitVardeclStmt(RapierScriptParser.VardeclStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#dictionaryLiteral}.
	 * @param ctx the parse tree
	 */
	void enterDictionaryLiteral(RapierScriptParser.DictionaryLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#dictionaryLiteral}.
	 * @param ctx the parse tree
	 */
	void exitDictionaryLiteral(RapierScriptParser.DictionaryLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link RapierScriptParser#dictionaryPair}.
	 * @param ctx the parse tree
	 */
	void enterDictionaryPair(RapierScriptParser.DictionaryPairContext ctx);
	/**
	 * Exit a parse tree produced by {@link RapierScriptParser#dictionaryPair}.
	 * @param ctx the parse tree
	 */
	void exitDictionaryPair(RapierScriptParser.DictionaryPairContext ctx);
	/**
	 * Enter a parse tree produced by the {@code FunctionExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterFunctionExpr(RapierScriptParser.FunctionExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code FunctionExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitFunctionExpr(RapierScriptParser.FunctionExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIdExpr(RapierScriptParser.IdExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIdExpr(RapierScriptParser.IdExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RegexLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterRegexLiteralExpr(RapierScriptParser.RegexLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RegexLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitRegexLiteralExpr(RapierScriptParser.RegexLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DictionaryLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterDictionaryLiteralExpr(RapierScriptParser.DictionaryLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DictionaryLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitDictionaryLiteralExpr(RapierScriptParser.DictionaryLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code BinaryExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterBinaryExpr(RapierScriptParser.BinaryExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code BinaryExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitBinaryExpr(RapierScriptParser.BinaryExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code StringLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteralExpr(RapierScriptParser.StringLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code StringLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteralExpr(RapierScriptParser.StringLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RequestExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterRequestExpr(RapierScriptParser.RequestExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RequestExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitRequestExpr(RapierScriptParser.RequestExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code TypeExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterTypeExpr(RapierScriptParser.TypeExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code TypeExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitTypeExpr(RapierScriptParser.TypeExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DoubleExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterDoubleExpr(RapierScriptParser.DoubleExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DoubleExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitDoubleExpr(RapierScriptParser.DoubleExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IndexerExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIndexerExpr(RapierScriptParser.IndexerExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IndexerExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIndexerExpr(RapierScriptParser.IndexerExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code IntegerExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIntegerExpr(RapierScriptParser.IntegerExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code IntegerExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIntegerExpr(RapierScriptParser.IntegerExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MemberExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMemberExpr(RapierScriptParser.MemberExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MemberExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMemberExpr(RapierScriptParser.MemberExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ArrayLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterArrayLiteralExpr(RapierScriptParser.ArrayLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ArrayLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitArrayLiteralExpr(RapierScriptParser.ArrayLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NewExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNewExpr(RapierScriptParser.NewExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NewExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNewExpr(RapierScriptParser.NewExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code RawStringLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterRawStringLiteralExpr(RapierScriptParser.RawStringLiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code RawStringLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitRawStringLiteralExpr(RapierScriptParser.RawStringLiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code NestedExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNestedExpr(RapierScriptParser.NestedExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code NestedExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNestedExpr(RapierScriptParser.NestedExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code CallExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterCallExpr(RapierScriptParser.CallExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code CallExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitCallExpr(RapierScriptParser.CallExprContext ctx);
}