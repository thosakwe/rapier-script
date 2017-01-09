// Generated from RapierScript.g4 by ANTLR 4.6
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link RapierScriptParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface RapierScriptVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#requestMethod}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRequestMethod(RapierScriptParser.RequestMethodContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#compilationUnit}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCompilationUnit(RapierScriptParser.CompilationUnitContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#topLevel}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopLevel(RapierScriptParser.TopLevelContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(RapierScriptParser.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#functionDecl}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDecl(RapierScriptParser.FunctionDeclContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#functionBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionBody(RapierScriptParser.FunctionBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#argSpec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgSpec(RapierScriptParser.ArgSpecContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#paramSpec}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParamSpec(RapierScriptParser.ParamSpecContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType(RapierScriptParser.TypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#stmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStmt(RapierScriptParser.StmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#assignStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignStmt(RapierScriptParser.AssignStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#exprStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExprStmt(RapierScriptParser.ExprStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#forStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForStmt(RapierScriptParser.ForStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#foreachStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForeachStmt(RapierScriptParser.ForeachStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#retStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRetStmt(RapierScriptParser.RetStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#vardeclStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVardeclStmt(RapierScriptParser.VardeclStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#dictionaryLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDictionaryLiteral(RapierScriptParser.DictionaryLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link RapierScriptParser#dictionaryPair}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDictionaryPair(RapierScriptParser.DictionaryPairContext ctx);
	/**
	 * Visit a parse tree produced by the {@code FunctionExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionExpr(RapierScriptParser.FunctionExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code IdExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdExpr(RapierScriptParser.IdExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RegexLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRegexLiteralExpr(RapierScriptParser.RegexLiteralExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code DictionaryLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDictionaryLiteralExpr(RapierScriptParser.DictionaryLiteralExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code BinaryExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBinaryExpr(RapierScriptParser.BinaryExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code StringLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringLiteralExpr(RapierScriptParser.StringLiteralExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RequestExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRequestExpr(RapierScriptParser.RequestExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code TypeExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeExpr(RapierScriptParser.TypeExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code DoubleExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDoubleExpr(RapierScriptParser.DoubleExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code IndexerExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndexerExpr(RapierScriptParser.IndexerExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code IntegerExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntegerExpr(RapierScriptParser.IntegerExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code MemberExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMemberExpr(RapierScriptParser.MemberExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code ArrayLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayLiteralExpr(RapierScriptParser.ArrayLiteralExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code NewExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNewExpr(RapierScriptParser.NewExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code RawStringLiteralExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawStringLiteralExpr(RapierScriptParser.RawStringLiteralExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code NestedExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNestedExpr(RapierScriptParser.NestedExprContext ctx);
	/**
	 * Visit a parse tree produced by the {@code CallExpr}
	 * labeled alternative in {@link RapierScriptParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCallExpr(RapierScriptParser.CallExprContext ctx);
}