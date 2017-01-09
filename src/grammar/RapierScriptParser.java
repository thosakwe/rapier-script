// Generated from RapierScript.g4 by ANTLR 4.6
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RapierScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.6", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SL_CMT=1, WS=2, COLON=3, COMMA=4, CURLY_L=5, CURLY_R=6, DOT=7, EQUALS=8, 
		MINUS=9, PAREN_L=10, PAREN_R=11, SEMI=12, SQUARE_L=13, SQUARE_R=14, ARROW=15, 
		PLUS=16, QUESTION=17, TIMES=18, CONST=19, DELETE=20, FN=21, FOR=22, GET=23, 
		HEAD=24, LET=25, NEW=26, PATCH=27, POST=28, PUT=29, RET=30, ID=31, INT=32, 
		DOUBLE=33, RAW_STRING=34, STRING=35, REGEX_LITERAL=36;
	public static final int
		RULE_requestMethod = 0, RULE_compilationUnit = 1, RULE_topLevel = 2, RULE_block = 3, 
		RULE_functionDecl = 4, RULE_functionBody = 5, RULE_argSpec = 6, RULE_paramSpec = 7, 
		RULE_type = 8, RULE_stmt = 9, RULE_assignStmt = 10, RULE_exprStmt = 11, 
		RULE_forStmt = 12, RULE_foreachStmt = 13, RULE_retStmt = 14, RULE_vardeclStmt = 15, 
		RULE_dictionaryLiteral = 16, RULE_dictionaryPair = 17, RULE_expr = 18;
	public static final String[] ruleNames = {
		"requestMethod", "compilationUnit", "topLevel", "block", "functionDecl", 
		"functionBody", "argSpec", "paramSpec", "type", "stmt", "assignStmt", 
		"exprStmt", "forStmt", "foreachStmt", "retStmt", "vardeclStmt", "dictionaryLiteral", 
		"dictionaryPair", "expr"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, "':'", "','", "'{'", "'}'", "'.'", "'='", "'-'", "'('", 
		"')'", "';'", "'['", "']'", "'=>'", "'+'", "'?'", "'*'", "'const'", "'delete'", 
		"'fn'", "'for'", "'get'", "'head'", "'let'", "'new'", "'patch'", "'post'", 
		"'put'", "'ret'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "SL_CMT", "WS", "COLON", "COMMA", "CURLY_L", "CURLY_R", "DOT", "EQUALS", 
		"MINUS", "PAREN_L", "PAREN_R", "SEMI", "SQUARE_L", "SQUARE_R", "ARROW", 
		"PLUS", "QUESTION", "TIMES", "CONST", "DELETE", "FN", "FOR", "GET", "HEAD", 
		"LET", "NEW", "PATCH", "POST", "PUT", "RET", "ID", "INT", "DOUBLE", "RAW_STRING", 
		"STRING", "REGEX_LITERAL"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "RapierScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RapierScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RequestMethodContext extends ParserRuleContext {
		public TerminalNode HEAD() { return getToken(RapierScriptParser.HEAD, 0); }
		public TerminalNode GET() { return getToken(RapierScriptParser.GET, 0); }
		public TerminalNode POST() { return getToken(RapierScriptParser.POST, 0); }
		public TerminalNode PUT() { return getToken(RapierScriptParser.PUT, 0); }
		public TerminalNode PATCH() { return getToken(RapierScriptParser.PATCH, 0); }
		public TerminalNode DELETE() { return getToken(RapierScriptParser.DELETE, 0); }
		public RequestMethodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_requestMethod; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterRequestMethod(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitRequestMethod(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitRequestMethod(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RequestMethodContext requestMethod() throws RecognitionException {
		RequestMethodContext _localctx = new RequestMethodContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_requestMethod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DELETE) | (1L << GET) | (1L << HEAD) | (1L << PATCH) | (1L << POST) | (1L << PUT))) != 0)) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilationUnitContext extends ParserRuleContext {
		public List<TopLevelContext> topLevel() {
			return getRuleContexts(TopLevelContext.class);
		}
		public TopLevelContext topLevel(int i) {
			return getRuleContext(TopLevelContext.class,i);
		}
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterCompilationUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitCompilationUnit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitCompilationUnit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_compilationUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CURLY_L) | (1L << PAREN_L) | (1L << SQUARE_L) | (1L << CONST) | (1L << DELETE) | (1L << FN) | (1L << FOR) | (1L << GET) | (1L << HEAD) | (1L << LET) | (1L << NEW) | (1L << PATCH) | (1L << POST) | (1L << PUT) | (1L << RET) | (1L << ID) | (1L << INT) | (1L << DOUBLE) | (1L << RAW_STRING) | (1L << STRING) | (1L << REGEX_LITERAL))) != 0)) {
				{
				{
				setState(40);
				topLevel();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TopLevelContext extends ParserRuleContext {
		public FunctionDeclContext functionDecl() {
			return getRuleContext(FunctionDeclContext.class,0);
		}
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(RapierScriptParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(RapierScriptParser.SEMI, i);
		}
		public TopLevelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_topLevel; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterTopLevel(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitTopLevel(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitTopLevel(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TopLevelContext topLevel() throws RecognitionException {
		TopLevelContext _localctx = new TopLevelContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_topLevel);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FN:
				{
				setState(46);
				functionDecl();
				}
				break;
			case CURLY_L:
			case PAREN_L:
			case SQUARE_L:
			case CONST:
			case DELETE:
			case FOR:
			case GET:
			case HEAD:
			case LET:
			case NEW:
			case PATCH:
			case POST:
			case PUT:
			case RET:
			case ID:
			case INT:
			case DOUBLE:
			case RAW_STRING:
			case STRING:
			case REGEX_LITERAL:
				{
				{
				setState(51); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(47);
						stmt();
						setState(49);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SEMI) {
							{
							setState(48);
							match(SEMI);
							}
						}

						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(53); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode CURLY_L() { return getToken(RapierScriptParser.CURLY_L, 0); }
		public TerminalNode CURLY_R() { return getToken(RapierScriptParser.CURLY_R, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(RapierScriptParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(RapierScriptParser.SEMI, i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		int _la;
		try {
			setState(72);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(57);
				match(CURLY_L);
				setState(64);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CURLY_L) | (1L << PAREN_L) | (1L << SQUARE_L) | (1L << CONST) | (1L << DELETE) | (1L << FOR) | (1L << GET) | (1L << HEAD) | (1L << LET) | (1L << NEW) | (1L << PATCH) | (1L << POST) | (1L << PUT) | (1L << RET) | (1L << ID) | (1L << INT) | (1L << DOUBLE) | (1L << RAW_STRING) | (1L << STRING) | (1L << REGEX_LITERAL))) != 0)) {
					{
					{
					setState(58);
					stmt();
					setState(60);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SEMI) {
						{
						setState(59);
						match(SEMI);
						}
					}

					}
					}
					setState(66);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(67);
				match(CURLY_R);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(68);
				stmt();
				setState(70);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(69);
					match(SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclContext extends ParserRuleContext {
		public Token name;
		public TerminalNode FN() { return getToken(RapierScriptParser.FN, 0); }
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public FunctionDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDecl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterFunctionDecl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitFunctionDecl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitFunctionDecl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionDeclContext functionDecl() throws RecognitionException {
		FunctionDeclContext _localctx = new FunctionDeclContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_functionDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(FN);
			setState(75);
			((FunctionDeclContext)_localctx).name = match(ID);
			setState(76);
			functionBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionBodyContext extends ParserRuleContext {
		public TerminalNode PAREN_L() { return getToken(RapierScriptParser.PAREN_L, 0); }
		public TerminalNode PAREN_R() { return getToken(RapierScriptParser.PAREN_R, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<ParamSpecContext> paramSpec() {
			return getRuleContexts(ParamSpecContext.class);
		}
		public ParamSpecContext paramSpec(int i) {
			return getRuleContext(ParamSpecContext.class,i);
		}
		public TerminalNode COLON() { return getToken(RapierScriptParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ARROW() { return getToken(RapierScriptParser.ARROW, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(RapierScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(RapierScriptParser.COMMA, i);
		}
		public FunctionBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterFunctionBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitFunctionBody(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitFunctionBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionBodyContext functionBody() throws RecognitionException {
		FunctionBodyContext _localctx = new FunctionBodyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_functionBody);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(PAREN_L);
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(84);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(79);
						paramSpec();
						setState(80);
						match(COMMA);
						}
						} 
					}
					setState(86);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
				}
				setState(87);
				paramSpec();
				}
			}

			setState(90);
			match(PAREN_R);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(91);
				match(COLON);
				setState(92);
				type();
				}
			}

			setState(98);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CURLY_L:
			case PAREN_L:
			case SQUARE_L:
			case CONST:
			case DELETE:
			case FOR:
			case GET:
			case HEAD:
			case LET:
			case NEW:
			case PATCH:
			case POST:
			case PUT:
			case RET:
			case ID:
			case INT:
			case DOUBLE:
			case RAW_STRING:
			case STRING:
			case REGEX_LITERAL:
				{
				setState(95);
				block();
				}
				break;
			case ARROW:
				{
				{
				setState(96);
				match(ARROW);
				setState(97);
				expr(0);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgSpecContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(RapierScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(RapierScriptParser.COMMA, i);
		}
		public ArgSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argSpec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterArgSpec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitArgSpec(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitArgSpec(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgSpecContext argSpec() throws RecognitionException {
		ArgSpecContext _localctx = new ArgSpecContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_argSpec);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CURLY_L) | (1L << PAREN_L) | (1L << SQUARE_L) | (1L << DELETE) | (1L << GET) | (1L << HEAD) | (1L << NEW) | (1L << PATCH) | (1L << POST) | (1L << PUT) | (1L << ID) | (1L << INT) | (1L << DOUBLE) | (1L << RAW_STRING) | (1L << STRING) | (1L << REGEX_LITERAL))) != 0)) {
				{
				setState(105);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(100);
						expr(0);
						setState(101);
						match(COMMA);
						}
						} 
					}
					setState(107);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				}
				setState(108);
				expr(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamSpecContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public TerminalNode COLON() { return getToken(RapierScriptParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ParamSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paramSpec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterParamSpec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitParamSpec(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitParamSpec(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParamSpecContext paramSpec() throws RecognitionException {
		ParamSpecContext _localctx = new ParamSpecContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_paramSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(ID);
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(112);
				match(COLON);
				setState(113);
				type();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public Token name;
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_type);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			((TypeContext)_localctx).name = match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StmtContext extends ParserRuleContext {
		public VardeclStmtContext vardeclStmt() {
			return getRuleContext(VardeclStmtContext.class,0);
		}
		public AssignStmtContext assignStmt() {
			return getRuleContext(AssignStmtContext.class,0);
		}
		public ExprStmtContext exprStmt() {
			return getRuleContext(ExprStmtContext.class,0);
		}
		public ForStmtContext forStmt() {
			return getRuleContext(ForStmtContext.class,0);
		}
		public ForeachStmtContext foreachStmt() {
			return getRuleContext(ForeachStmtContext.class,0);
		}
		public RetStmtContext retStmt() {
			return getRuleContext(RetStmtContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_stmt);
		try {
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				vardeclStmt();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(119);
				assignStmt();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(120);
				exprStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(121);
				forStmt();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(122);
				foreachStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(123);
				retStmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignStmtContext extends ParserRuleContext {
		public ExprContext left;
		public ExprContext right;
		public TerminalNode EQUALS() { return getToken(RapierScriptParser.EQUALS, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public AssignStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterAssignStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitAssignStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitAssignStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AssignStmtContext assignStmt() throws RecognitionException {
		AssignStmtContext _localctx = new AssignStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_assignStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			((AssignStmtContext)_localctx).left = expr(0);
			setState(127);
			match(EQUALS);
			setState(128);
			((AssignStmtContext)_localctx).right = expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprStmtContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ExprStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterExprStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitExprStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitExprStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprStmtContext exprStmt() throws RecognitionException {
		ExprStmtContext _localctx = new ExprStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_exprStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStmtContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(RapierScriptParser.FOR, 0); }
		public TerminalNode PAREN_L() { return getToken(RapierScriptParser.PAREN_L, 0); }
		public VardeclStmtContext vardeclStmt() {
			return getRuleContext(VardeclStmtContext.class,0);
		}
		public List<TerminalNode> SEMI() { return getTokens(RapierScriptParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(RapierScriptParser.SEMI, i);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StmtContext stmt() {
			return getRuleContext(StmtContext.class,0);
		}
		public TerminalNode PAREN_R() { return getToken(RapierScriptParser.PAREN_R, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterForStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitForStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitForStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_forStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(FOR);
			setState(133);
			match(PAREN_L);
			setState(134);
			vardeclStmt();
			setState(135);
			match(SEMI);
			setState(136);
			expr(0);
			setState(137);
			match(SEMI);
			setState(138);
			stmt();
			setState(139);
			match(PAREN_R);
			setState(140);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForeachStmtContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(RapierScriptParser.FOR, 0); }
		public TerminalNode PAREN_L() { return getToken(RapierScriptParser.PAREN_L, 0); }
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public TerminalNode COLON() { return getToken(RapierScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PAREN_R() { return getToken(RapierScriptParser.PAREN_R, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public ForeachStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_foreachStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterForeachStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitForeachStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitForeachStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForeachStmtContext foreachStmt() throws RecognitionException {
		ForeachStmtContext _localctx = new ForeachStmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_foreachStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			match(FOR);
			setState(143);
			match(PAREN_L);
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(144);
				type();
				}
				break;
			}
			setState(147);
			match(ID);
			setState(148);
			match(COLON);
			setState(149);
			expr(0);
			setState(150);
			match(PAREN_R);
			setState(151);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RetStmtContext extends ParserRuleContext {
		public TerminalNode RET() { return getToken(RapierScriptParser.RET, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public RetStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterRetStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitRetStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitRetStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RetStmtContext retStmt() throws RecognitionException {
		RetStmtContext _localctx = new RetStmtContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_retStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(RET);
			setState(154);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VardeclStmtContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public TerminalNode EQUALS() { return getToken(RapierScriptParser.EQUALS, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode CONST() { return getToken(RapierScriptParser.CONST, 0); }
		public TerminalNode LET() { return getToken(RapierScriptParser.LET, 0); }
		public VardeclStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vardeclStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterVardeclStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitVardeclStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitVardeclStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VardeclStmtContext vardeclStmt() throws RecognitionException {
		VardeclStmtContext _localctx = new VardeclStmtContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_vardeclStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				{
				setState(156);
				_la = _input.LA(1);
				if ( !(_la==CONST || _la==LET) ) {
				_errHandler.recoverInline(this);
				} else {
					consume();
				}
				setState(158);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(157);
					type();
					}
					break;
				}
				}
				}
				break;
			case 2:
				{
				{
				setState(161);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==CONST || _la==LET) {
					{
					setState(160);
					_la = _input.LA(1);
					if ( !(_la==CONST || _la==LET) ) {
					_errHandler.recoverInline(this);
					} else {
						consume();
					}
					}
				}

				setState(163);
				type();
				}
				}
				break;
			}
			setState(166);
			match(ID);
			setState(167);
			match(EQUALS);
			setState(168);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryLiteralContext extends ParserRuleContext {
		public TerminalNode CURLY_L() { return getToken(RapierScriptParser.CURLY_L, 0); }
		public TerminalNode CURLY_R() { return getToken(RapierScriptParser.CURLY_R, 0); }
		public List<DictionaryPairContext> dictionaryPair() {
			return getRuleContexts(DictionaryPairContext.class);
		}
		public DictionaryPairContext dictionaryPair(int i) {
			return getRuleContext(DictionaryPairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(RapierScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(RapierScriptParser.COMMA, i);
		}
		public DictionaryLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionaryLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterDictionaryLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitDictionaryLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitDictionaryLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DictionaryLiteralContext dictionaryLiteral() throws RecognitionException {
		DictionaryLiteralContext _localctx = new DictionaryLiteralContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_dictionaryLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			match(CURLY_L);
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << RAW_STRING) | (1L << STRING))) != 0)) {
				{
				setState(176);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(171);
						dictionaryPair();
						setState(172);
						match(COMMA);
						}
						} 
					}
					setState(178);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				}
				setState(179);
				dictionaryPair();
				}
			}

			setState(182);
			match(CURLY_R);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DictionaryPairContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public TerminalNode COLON() { return getToken(RapierScriptParser.COLON, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode STRING() { return getToken(RapierScriptParser.STRING, 0); }
		public TerminalNode RAW_STRING() { return getToken(RapierScriptParser.RAW_STRING, 0); }
		public DictionaryPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dictionaryPair; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterDictionaryPair(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitDictionaryPair(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitDictionaryPair(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DictionaryPairContext dictionaryPair() throws RecognitionException {
		DictionaryPairContext _localctx = new DictionaryPairContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_dictionaryPair);
		int _la;
		try {
			setState(188);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(184);
				match(ID);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(185);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << RAW_STRING) | (1L << STRING))) != 0)) ) {
				_errHandler.recoverInline(this);
				} else {
					consume();
				}
				setState(186);
				match(COLON);
				setState(187);
				expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FunctionExprContext extends ExprContext {
		public FunctionBodyContext functionBody() {
			return getRuleContext(FunctionBodyContext.class,0);
		}
		public FunctionExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterFunctionExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitFunctionExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitFunctionExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class IdExprContext extends ExprContext {
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public IdExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterIdExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitIdExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitIdExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class RegexLiteralExprContext extends ExprContext {
		public TerminalNode REGEX_LITERAL() { return getToken(RapierScriptParser.REGEX_LITERAL, 0); }
		public RegexLiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterRegexLiteralExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitRegexLiteralExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitRegexLiteralExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class DictionaryLiteralExprContext extends ExprContext {
		public DictionaryLiteralContext dictionaryLiteral() {
			return getRuleContext(DictionaryLiteralContext.class,0);
		}
		public DictionaryLiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterDictionaryLiteralExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitDictionaryLiteralExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitDictionaryLiteralExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BinaryExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode TIMES() { return getToken(RapierScriptParser.TIMES, 0); }
		public TerminalNode PLUS() { return getToken(RapierScriptParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(RapierScriptParser.MINUS, 0); }
		public TerminalNode QUESTION() { return getToken(RapierScriptParser.QUESTION, 0); }
		public BinaryExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterBinaryExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitBinaryExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitBinaryExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class StringLiteralExprContext extends ExprContext {
		public TerminalNode STRING() { return getToken(RapierScriptParser.STRING, 0); }
		public StringLiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterStringLiteralExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitStringLiteralExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitStringLiteralExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class RequestExprContext extends ExprContext {
		public RequestMethodContext requestMethod() {
			return getRuleContext(RequestMethodContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public RequestExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterRequestExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitRequestExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitRequestExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class TypeExprContext extends ExprContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TypeExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterTypeExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitTypeExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitTypeExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class DoubleExprContext extends ExprContext {
		public TerminalNode DOUBLE() { return getToken(RapierScriptParser.DOUBLE, 0); }
		public DoubleExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterDoubleExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitDoubleExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitDoubleExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class IndexerExprContext extends ExprContext {
		public ExprContext target;
		public ExprContext indexer;
		public TerminalNode SQUARE_L() { return getToken(RapierScriptParser.SQUARE_L, 0); }
		public TerminalNode SQUARE_R() { return getToken(RapierScriptParser.SQUARE_R, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public IndexerExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterIndexerExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitIndexerExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitIndexerExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class IntegerExprContext extends ExprContext {
		public TerminalNode INT() { return getToken(RapierScriptParser.INT, 0); }
		public IntegerExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterIntegerExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitIntegerExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitIntegerExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class MemberExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode DOT() { return getToken(RapierScriptParser.DOT, 0); }
		public TerminalNode ID() { return getToken(RapierScriptParser.ID, 0); }
		public MemberExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterMemberExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitMemberExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitMemberExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ArrayLiteralExprContext extends ExprContext {
		public TerminalNode SQUARE_L() { return getToken(RapierScriptParser.SQUARE_L, 0); }
		public TerminalNode SQUARE_R() { return getToken(RapierScriptParser.SQUARE_R, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(RapierScriptParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(RapierScriptParser.COMMA, i);
		}
		public ArrayLiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterArrayLiteralExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitArrayLiteralExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitArrayLiteralExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NewExprContext extends ExprContext {
		public TerminalNode NEW() { return getToken(RapierScriptParser.NEW, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode PAREN_L() { return getToken(RapierScriptParser.PAREN_L, 0); }
		public ArgSpecContext argSpec() {
			return getRuleContext(ArgSpecContext.class,0);
		}
		public TerminalNode PAREN_R() { return getToken(RapierScriptParser.PAREN_R, 0); }
		public NewExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterNewExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitNewExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitNewExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class RawStringLiteralExprContext extends ExprContext {
		public TerminalNode RAW_STRING() { return getToken(RapierScriptParser.RAW_STRING, 0); }
		public RawStringLiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterRawStringLiteralExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitRawStringLiteralExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitRawStringLiteralExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NestedExprContext extends ExprContext {
		public TerminalNode PAREN_L() { return getToken(RapierScriptParser.PAREN_L, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PAREN_R() { return getToken(RapierScriptParser.PAREN_R, 0); }
		public NestedExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterNestedExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitNestedExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitNestedExpr(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class CallExprContext extends ExprContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PAREN_L() { return getToken(RapierScriptParser.PAREN_L, 0); }
		public ArgSpecContext argSpec() {
			return getRuleContext(ArgSpecContext.class,0);
		}
		public TerminalNode PAREN_R() { return getToken(RapierScriptParser.PAREN_R, 0); }
		public CallExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).enterCallExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof RapierScriptListener ) ((RapierScriptListener)listener).exitCallExpr(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof RapierScriptVisitor ) return ((RapierScriptVisitor<? extends T>)visitor).visitCallExpr(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 36;
		enterRecursionRule(_localctx, 36, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				{
				_localctx = new RequestExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(191);
				requestMethod();
				setState(192);
				expr(17);
				}
				break;
			case 2:
				{
				_localctx = new IdExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(194);
				match(ID);
				}
				break;
			case 3:
				{
				_localctx = new IntegerExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(195);
				match(INT);
				}
				break;
			case 4:
				{
				_localctx = new DoubleExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(196);
				match(DOUBLE);
				}
				break;
			case 5:
				{
				_localctx = new ArrayLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(197);
				match(SQUARE_L);
				setState(207);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CURLY_L) | (1L << PAREN_L) | (1L << SQUARE_L) | (1L << DELETE) | (1L << GET) | (1L << HEAD) | (1L << NEW) | (1L << PATCH) | (1L << POST) | (1L << PUT) | (1L << ID) | (1L << INT) | (1L << DOUBLE) | (1L << RAW_STRING) | (1L << STRING) | (1L << REGEX_LITERAL))) != 0)) {
					{
					setState(203);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
					while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
						if ( _alt==1 ) {
							{
							{
							setState(198);
							expr(0);
							setState(199);
							match(COMMA);
							}
							} 
						}
						setState(205);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
					}
					setState(206);
					expr(0);
					}
				}

				setState(209);
				match(SQUARE_R);
				}
				break;
			case 6:
				{
				_localctx = new StringLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(210);
				match(STRING);
				}
				break;
			case 7:
				{
				_localctx = new RawStringLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(211);
				match(RAW_STRING);
				}
				break;
			case 8:
				{
				_localctx = new RegexLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(212);
				match(REGEX_LITERAL);
				}
				break;
			case 9:
				{
				_localctx = new DictionaryLiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(213);
				dictionaryLiteral();
				}
				break;
			case 10:
				{
				_localctx = new NewExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(214);
				match(NEW);
				setState(215);
				type();
				setState(216);
				match(PAREN_L);
				setState(217);
				argSpec();
				setState(218);
				match(PAREN_R);
				}
				break;
			case 11:
				{
				_localctx = new TypeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(220);
				type();
				}
				break;
			case 12:
				{
				_localctx = new FunctionExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(221);
				functionBody();
				}
				break;
			case 13:
				{
				_localctx = new NestedExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(222);
				match(PAREN_L);
				setState(223);
				expr(0);
				setState(224);
				match(PAREN_R);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(246);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(244);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
					case 1:
						{
						_localctx = new BinaryExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(228);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(229);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MINUS) | (1L << PLUS) | (1L << QUESTION) | (1L << TIMES))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(230);
						expr(7);
						}
						break;
					case 2:
						{
						_localctx = new IndexerExprContext(new ExprContext(_parentctx, _parentState));
						((IndexerExprContext)_localctx).target = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(231);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(232);
						match(SQUARE_L);
						setState(233);
						((IndexerExprContext)_localctx).indexer = expr(0);
						setState(234);
						match(SQUARE_R);
						}
						break;
					case 3:
						{
						_localctx = new CallExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(236);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(237);
						match(PAREN_L);
						setState(238);
						argSpec();
						setState(239);
						match(PAREN_R);
						}
						break;
					case 4:
						{
						_localctx = new MemberExprContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(241);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(242);
						match(DOT);
						setState(243);
						match(ID);
						}
						break;
					}
					} 
				}
				setState(248);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 18:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 6);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3&\u00fc\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\3\2\3\2\3\3\7\3,\n\3\f\3\16\3/\13\3\3\4\3\4\3\4\5"+
		"\4\64\n\4\6\4\66\n\4\r\4\16\4\67\5\4:\n\4\3\5\3\5\3\5\5\5?\n\5\7\5A\n"+
		"\5\f\5\16\5D\13\5\3\5\3\5\3\5\5\5I\n\5\5\5K\n\5\3\6\3\6\3\6\3\6\3\7\3"+
		"\7\3\7\3\7\7\7U\n\7\f\7\16\7X\13\7\3\7\5\7[\n\7\3\7\3\7\3\7\5\7`\n\7\3"+
		"\7\3\7\3\7\5\7e\n\7\3\b\3\b\3\b\7\bj\n\b\f\b\16\bm\13\b\3\b\5\bp\n\b\3"+
		"\t\3\t\3\t\5\tu\n\t\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\5\13\177\n\13"+
		"\3\f\3\f\3\f\3\f\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\17\3\17\3\17\5\17\u0094\n\17\3\17\3\17\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\21\3\21\5\21\u00a1\n\21\3\21\5\21\u00a4\n\21\3\21\5\21\u00a7"+
		"\n\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\7\22\u00b1\n\22\f\22\16"+
		"\22\u00b4\13\22\3\22\5\22\u00b7\n\22\3\22\3\22\3\23\3\23\3\23\3\23\5\23"+
		"\u00bf\n\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\7\24"+
		"\u00cc\n\24\f\24\16\24\u00cf\13\24\3\24\5\24\u00d2\n\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\5\24\u00e5\n\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\24\3\24\3\24\3\24\7\24\u00f7\n\24\f\24\16\24\u00fa\13\24\3\24"+
		"\2\3&\25\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&\2\6\5\2\26\26\31"+
		"\32\35\37\4\2\25\25\33\33\4\2!!$%\4\2\13\13\22\24\u0115\2(\3\2\2\2\4-"+
		"\3\2\2\2\69\3\2\2\2\bJ\3\2\2\2\nL\3\2\2\2\fP\3\2\2\2\16o\3\2\2\2\20q\3"+
		"\2\2\2\22v\3\2\2\2\24~\3\2\2\2\26\u0080\3\2\2\2\30\u0084\3\2\2\2\32\u0086"+
		"\3\2\2\2\34\u0090\3\2\2\2\36\u009b\3\2\2\2 \u00a6\3\2\2\2\"\u00ac\3\2"+
		"\2\2$\u00be\3\2\2\2&\u00e4\3\2\2\2()\t\2\2\2)\3\3\2\2\2*,\5\6\4\2+*\3"+
		"\2\2\2,/\3\2\2\2-+\3\2\2\2-.\3\2\2\2.\5\3\2\2\2/-\3\2\2\2\60:\5\n\6\2"+
		"\61\63\5\24\13\2\62\64\7\16\2\2\63\62\3\2\2\2\63\64\3\2\2\2\64\66\3\2"+
		"\2\2\65\61\3\2\2\2\66\67\3\2\2\2\67\65\3\2\2\2\678\3\2\2\28:\3\2\2\29"+
		"\60\3\2\2\29\65\3\2\2\2:\7\3\2\2\2;B\7\7\2\2<>\5\24\13\2=?\7\16\2\2>="+
		"\3\2\2\2>?\3\2\2\2?A\3\2\2\2@<\3\2\2\2AD\3\2\2\2B@\3\2\2\2BC\3\2\2\2C"+
		"E\3\2\2\2DB\3\2\2\2EK\7\b\2\2FH\5\24\13\2GI\7\16\2\2HG\3\2\2\2HI\3\2\2"+
		"\2IK\3\2\2\2J;\3\2\2\2JF\3\2\2\2K\t\3\2\2\2LM\7\27\2\2MN\7!\2\2NO\5\f"+
		"\7\2O\13\3\2\2\2PZ\7\f\2\2QR\5\20\t\2RS\7\6\2\2SU\3\2\2\2TQ\3\2\2\2UX"+
		"\3\2\2\2VT\3\2\2\2VW\3\2\2\2WY\3\2\2\2XV\3\2\2\2Y[\5\20\t\2ZV\3\2\2\2"+
		"Z[\3\2\2\2[\\\3\2\2\2\\_\7\r\2\2]^\7\5\2\2^`\5\22\n\2_]\3\2\2\2_`\3\2"+
		"\2\2`d\3\2\2\2ae\5\b\5\2bc\7\21\2\2ce\5&\24\2da\3\2\2\2db\3\2\2\2e\r\3"+
		"\2\2\2fg\5&\24\2gh\7\6\2\2hj\3\2\2\2if\3\2\2\2jm\3\2\2\2ki\3\2\2\2kl\3"+
		"\2\2\2ln\3\2\2\2mk\3\2\2\2np\5&\24\2ok\3\2\2\2op\3\2\2\2p\17\3\2\2\2q"+
		"t\7!\2\2rs\7\5\2\2su\5\22\n\2tr\3\2\2\2tu\3\2\2\2u\21\3\2\2\2vw\7!\2\2"+
		"w\23\3\2\2\2x\177\5 \21\2y\177\5\26\f\2z\177\5\30\r\2{\177\5\32\16\2|"+
		"\177\5\34\17\2}\177\5\36\20\2~x\3\2\2\2~y\3\2\2\2~z\3\2\2\2~{\3\2\2\2"+
		"~|\3\2\2\2~}\3\2\2\2\177\25\3\2\2\2\u0080\u0081\5&\24\2\u0081\u0082\7"+
		"\n\2\2\u0082\u0083\5&\24\2\u0083\27\3\2\2\2\u0084\u0085\5&\24\2\u0085"+
		"\31\3\2\2\2\u0086\u0087\7\30\2\2\u0087\u0088\7\f\2\2\u0088\u0089\5 \21"+
		"\2\u0089\u008a\7\16\2\2\u008a\u008b\5&\24\2\u008b\u008c\7\16\2\2\u008c"+
		"\u008d\5\24\13\2\u008d\u008e\7\r\2\2\u008e\u008f\5\b\5\2\u008f\33\3\2"+
		"\2\2\u0090\u0091\7\30\2\2\u0091\u0093\7\f\2\2\u0092\u0094\5\22\n\2\u0093"+
		"\u0092\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096\7!"+
		"\2\2\u0096\u0097\7\5\2\2\u0097\u0098\5&\24\2\u0098\u0099\7\r\2\2\u0099"+
		"\u009a\5\b\5\2\u009a\35\3\2\2\2\u009b\u009c\7 \2\2\u009c\u009d\5&\24\2"+
		"\u009d\37\3\2\2\2\u009e\u00a0\t\3\2\2\u009f\u00a1\5\22\n\2\u00a0\u009f"+
		"\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a7\3\2\2\2\u00a2\u00a4\t\3\2\2\u00a3"+
		"\u00a2\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a7\5\22"+
		"\n\2\u00a6\u009e\3\2\2\2\u00a6\u00a3\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8"+
		"\u00a9\7!\2\2\u00a9\u00aa\7\n\2\2\u00aa\u00ab\5&\24\2\u00ab!\3\2\2\2\u00ac"+
		"\u00b6\7\7\2\2\u00ad\u00ae\5$\23\2\u00ae\u00af\7\6\2\2\u00af\u00b1\3\2"+
		"\2\2\u00b0\u00ad\3\2\2\2\u00b1\u00b4\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2"+
		"\u00b3\3\2\2\2\u00b3\u00b5\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b5\u00b7\5$"+
		"\23\2\u00b6\u00b2\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8"+
		"\u00b9\7\b\2\2\u00b9#\3\2\2\2\u00ba\u00bf\7!\2\2\u00bb\u00bc\t\4\2\2\u00bc"+
		"\u00bd\7\5\2\2\u00bd\u00bf\5&\24\2\u00be\u00ba\3\2\2\2\u00be\u00bb\3\2"+
		"\2\2\u00bf%\3\2\2\2\u00c0\u00c1\b\24\1\2\u00c1\u00c2\5\2\2\2\u00c2\u00c3"+
		"\5&\24\23\u00c3\u00e5\3\2\2\2\u00c4\u00e5\7!\2\2\u00c5\u00e5\7\"\2\2\u00c6"+
		"\u00e5\7#\2\2\u00c7\u00d1\7\17\2\2\u00c8\u00c9\5&\24\2\u00c9\u00ca\7\6"+
		"\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00c8\3\2\2\2\u00cc\u00cf\3\2\2\2\u00cd"+
		"\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0\3\2\2\2\u00cf\u00cd\3\2"+
		"\2\2\u00d0\u00d2\5&\24\2\u00d1\u00cd\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2"+
		"\u00d3\3\2\2\2\u00d3\u00e5\7\20\2\2\u00d4\u00e5\7%\2\2\u00d5\u00e5\7$"+
		"\2\2\u00d6\u00e5\7&\2\2\u00d7\u00e5\5\"\22\2\u00d8\u00d9\7\34\2\2\u00d9"+
		"\u00da\5\22\n\2\u00da\u00db\7\f\2\2\u00db\u00dc\5\16\b\2\u00dc\u00dd\7"+
		"\r\2\2\u00dd\u00e5\3\2\2\2\u00de\u00e5\5\22\n\2\u00df\u00e5\5\f\7\2\u00e0"+
		"\u00e1\7\f\2\2\u00e1\u00e2\5&\24\2\u00e2\u00e3\7\r\2\2\u00e3\u00e5\3\2"+
		"\2\2\u00e4\u00c0\3\2\2\2\u00e4\u00c4\3\2\2\2\u00e4\u00c5\3\2\2\2\u00e4"+
		"\u00c6\3\2\2\2\u00e4\u00c7\3\2\2\2\u00e4\u00d4\3\2\2\2\u00e4\u00d5\3\2"+
		"\2\2\u00e4\u00d6\3\2\2\2\u00e4\u00d7\3\2\2\2\u00e4\u00d8\3\2\2\2\u00e4"+
		"\u00de\3\2\2\2\u00e4\u00df\3\2\2\2\u00e4\u00e0\3\2\2\2\u00e5\u00f8\3\2"+
		"\2\2\u00e6\u00e7\f\b\2\2\u00e7\u00e8\t\5\2\2\u00e8\u00f7\5&\24\t\u00e9"+
		"\u00ea\f\16\2\2\u00ea\u00eb\7\17\2\2\u00eb\u00ec\5&\24\2\u00ec\u00ed\7"+
		"\20\2\2\u00ed\u00f7\3\2\2\2\u00ee\u00ef\f\t\2\2\u00ef\u00f0\7\f\2\2\u00f0"+
		"\u00f1\5\16\b\2\u00f1\u00f2\7\r\2\2\u00f2\u00f7\3\2\2\2\u00f3\u00f4\f"+
		"\5\2\2\u00f4\u00f5\7\t\2\2\u00f5\u00f7\7!\2\2\u00f6\u00e6\3\2\2\2\u00f6"+
		"\u00e9\3\2\2\2\u00f6\u00ee\3\2\2\2\u00f6\u00f3\3\2\2\2\u00f7\u00fa\3\2"+
		"\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\'\3\2\2\2\u00fa\u00f8"+
		"\3\2\2\2\36-\63\679>BHJVZ_dkot~\u0093\u00a0\u00a3\u00a6\u00b2\u00b6\u00be"+
		"\u00cd\u00d1\u00e4\u00f6\u00f8";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}