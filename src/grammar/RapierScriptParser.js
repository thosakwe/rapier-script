// Generated from RapierScript.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RapierScriptListener = require('./RapierScriptListener').RapierScriptListener;
var RapierScriptVisitor = require('./RapierScriptVisitor').RapierScriptVisitor;

var grammarFileName = "RapierScript.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003*\u0121\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0007\u0002,\n\u0002\f\u0002",
    "\u000e\u0002/\u000b\u0002\u0003\u0002\u0007\u00022\n\u0002\f\u0002\u000e",
    "\u00025\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003;\n\u0003\f\u0003\u000e\u0003>\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003G\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004M\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005R\n\u0005",
    "\u0006\u0005T\n\u0005\r\u0005\u000e\u0005U\u0005\u0005X\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006]\n\u0006\u0007\u0006_\n\u0006",
    "\f\u0006\u000e\u0006b\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006g\n\u0006\u0005\u0006i\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0007\bs\n\b\f\b",
    "\u000e\bv\u000b\b\u0003\b\u0005\by\n\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b~\n\b\u0003\b\u0003\b\u0003\b\u0005\b\u0083\n\b\u0003\t\u0003\t\u0003",
    "\t\u0007\t\u0088\n\t\f\t\u000e\t\u008b\u000b\t\u0003\t\u0005\t\u008e",
    "\n\t\u0003\n\u0003\n\u0003\n\u0005\n\u0093\n\n\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u009d\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005",
    "\u0010\u00b2\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u00bf\n\u0012\u0003\u0012\u0005\u0012\u00c2",
    "\n\u0012\u0003\u0012\u0005\u0012\u00c5\n\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0007\u0013\u00cf\n\u0013\f\u0013\u000e\u0013\u00d2\u000b\u0013\u0003",
    "\u0013\u0005\u0013\u00d5\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00dd\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00e8\n\u0015\f\u0015\u000e",
    "\u0015\u00eb\u000b\u0015\u0003\u0015\u0005\u0015\u00ee\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0101",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0007\u0015\u011c\n\u0015\f\u0015\u000e\u0015",
    "\u011f\u000b\u0015\u0003\u0015\u0002\u0003(\u0016\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(\u0002",
    "\u0005\u0003\u0002$%\u0004\u0002&&()\u0003\u0002\u0016\u001b\u013f\u0002",
    "-\u0003\u0002\u0002\u0002\u00046\u0003\u0002\u0002\u0002\u0006L\u0003",
    "\u0002\u0002\u0002\bW\u0003\u0002\u0002\u0002\nh\u0003\u0002\u0002\u0002",
    "\fj\u0003\u0002\u0002\u0002\u000en\u0003\u0002\u0002\u0002\u0010\u008d",
    "\u0003\u0002\u0002\u0002\u0012\u008f\u0003\u0002\u0002\u0002\u0014\u0094",
    "\u0003\u0002\u0002\u0002\u0016\u009c\u0003\u0002\u0002\u0002\u0018\u009e",
    "\u0003\u0002\u0002\u0002\u001a\u00a2\u0003\u0002\u0002\u0002\u001c\u00a4",
    "\u0003\u0002\u0002\u0002\u001e\u00ae\u0003\u0002\u0002\u0002 \u00b9",
    "\u0003\u0002\u0002\u0002\"\u00c4\u0003\u0002\u0002\u0002$\u00ca\u0003",
    "\u0002\u0002\u0002&\u00dc\u0003\u0002\u0002\u0002(\u0100\u0003\u0002",
    "\u0002\u0002*,\u0005\u0004\u0003\u0002+*\u0003\u0002\u0002\u0002,/\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    ".3\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000202\u0005\b\u0005",
    "\u000210\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u00024\u0003\u0003\u0002\u0002\u0002",
    "53\u0003\u0002\u0002\u000267\u0007\u0003\u0002\u00027<\u0007\u0004\u0002",
    "\u000289\u0007&\u0002\u00029;\u0007\u0005\u0002\u0002:8\u0003\u0002",
    "\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002",
    "?@\u0007&\u0002\u0002@A\u0007\u0006\u0002\u0002AB\u0007\u0007\u0002",
    "\u0002BC\u0003\u0002\u0002\u0002CF\u0005\u0006\u0004\u0002DE\u0007\b",
    "\u0002\u0002EG\u0007&\u0002\u0002FD\u0003\u0002\u0002\u0002FG\u0003",
    "\u0002\u0002\u0002G\u0005\u0003\u0002\u0002\u0002HM\u0007)\u0002\u0002",
    "IJ\u0007\t\u0002\u0002JK\u0007&\u0002\u0002KM\u0007\n\u0002\u0002LH",
    "\u0003\u0002\u0002\u0002LI\u0003\u0002\u0002\u0002M\u0007\u0003\u0002",
    "\u0002\u0002NX\u0005\f\u0007\u0002OQ\u0005\u0016\f\u0002PR\u0007\u000b",
    "\u0002\u0002QP\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003",
    "\u0002\u0002\u0002SO\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002",
    "\u0002WN\u0003\u0002\u0002\u0002WS\u0003\u0002\u0002\u0002X\t\u0003",
    "\u0002\u0002\u0002Y`\u0007\f\u0002\u0002Z\\\u0005\u0016\f\u0002[]\u0007",
    "\u000b\u0002\u0002\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002",
    "]_\u0003\u0002\u0002\u0002^Z\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0003\u0002",
    "\u0002\u0002b`\u0003\u0002\u0002\u0002ci\u0007\r\u0002\u0002df\u0005",
    "\u0016\f\u0002eg\u0007\u000b\u0002\u0002fe\u0003\u0002\u0002\u0002f",
    "g\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002hY\u0003\u0002\u0002",
    "\u0002hd\u0003\u0002\u0002\u0002i\u000b\u0003\u0002\u0002\u0002jk\u0007",
    "\u000e\u0002\u0002kl\u0007&\u0002\u0002lm\u0005\u000e\b\u0002m\r\u0003",
    "\u0002\u0002\u0002nx\u0007\u000f\u0002\u0002op\u0005\u0012\n\u0002p",
    "q\u0007\u0005\u0002\u0002qs\u0003\u0002\u0002\u0002ro\u0003\u0002\u0002",
    "\u0002sv\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002",
    "\u0002\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wy\u0005",
    "\u0012\n\u0002xt\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y",
    "z\u0003\u0002\u0002\u0002z}\u0007\u0010\u0002\u0002{|\u0007\u0011\u0002",
    "\u0002|~\u0005\u0014\u000b\u0002}{\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u0082\u0003\u0002\u0002\u0002\u007f\u0083\u0005\n\u0006",
    "\u0002\u0080\u0081\u0007\u0012\u0002\u0002\u0081\u0083\u0005(\u0015",
    "\u0002\u0082\u007f\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002",
    "\u0002\u0083\u000f\u0003\u0002\u0002\u0002\u0084\u0085\u0005(\u0015",
    "\u0002\u0085\u0086\u0007\u0005\u0002\u0002\u0086\u0088\u0003\u0002\u0002",
    "\u0002\u0087\u0084\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002",
    "\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008c\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002",
    "\u0002\u008c\u008e\u0005(\u0015\u0002\u008d\u0089\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0011\u0003\u0002\u0002",
    "\u0002\u008f\u0092\u0007&\u0002\u0002\u0090\u0091\u0007\u0011\u0002",
    "\u0002\u0091\u0093\u0005\u0014\u000b\u0002\u0092\u0090\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0013\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0007&\u0002\u0002\u0095\u0015\u0003\u0002\u0002",
    "\u0002\u0096\u009d\u0005\"\u0012\u0002\u0097\u009d\u0005\u0018\r\u0002",
    "\u0098\u009d\u0005\u001a\u000e\u0002\u0099\u009d\u0005\u001c\u000f\u0002",
    "\u009a\u009d\u0005\u001e\u0010\u0002\u009b\u009d\u0005 \u0011\u0002",
    "\u009c\u0096\u0003\u0002\u0002\u0002\u009c\u0097\u0003\u0002\u0002\u0002",
    "\u009c\u0098\u0003\u0002\u0002\u0002\u009c\u0099\u0003\u0002\u0002\u0002",
    "\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009b\u0003\u0002\u0002\u0002",
    "\u009d\u0017\u0003\u0002\u0002\u0002\u009e\u009f\u0005(\u0015\u0002",
    "\u009f\u00a0\u0007\u0013\u0002\u0002\u00a0\u00a1\u0005(\u0015\u0002",
    "\u00a1\u0019\u0003\u0002\u0002\u0002\u00a2\u00a3\u0005(\u0015\u0002",
    "\u00a3\u001b\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0014\u0002\u0002",
    "\u00a5\u00a6\u0007\u000f\u0002\u0002\u00a6\u00a7\u0005\"\u0012\u0002",
    "\u00a7\u00a8\u0007\u000b\u0002\u0002\u00a8\u00a9\u0005(\u0015\u0002",
    "\u00a9\u00aa\u0007\u000b\u0002\u0002\u00aa\u00ab\u0005\u0016\f\u0002",
    "\u00ab\u00ac\u0007\u0010\u0002\u0002\u00ac\u00ad\u0005\n\u0006\u0002",
    "\u00ad\u001d\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u0014\u0002\u0002",
    "\u00af\u00b1\u0007\u000f\u0002\u0002\u00b0\u00b2\u0005\u0014\u000b\u0002",
    "\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002",
    "\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007&\u0002\u0002",
    "\u00b4\u00b5\u0007\u0011\u0002\u0002\u00b5\u00b6\u0005(\u0015\u0002",
    "\u00b6\u00b7\u0007\u0010\u0002\u0002\u00b7\u00b8\u0005\n\u0006\u0002",
    "\u00b8\u001f\u0003\u0002\u0002\u0002\u00b9\u00ba\u0007\u0015\u0002\u0002",
    "\u00ba\u00bb\u0005(\u0015\u0002\u00bb!\u0003\u0002\u0002\u0002\u00bc",
    "\u00be\t\u0002\u0002\u0002\u00bd\u00bf\u0005\u0014\u000b\u0002\u00be",
    "\u00bd\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf",
    "\u00c5\u0003\u0002\u0002\u0002\u00c0\u00c2\t\u0002\u0002\u0002\u00c1",
    "\u00c0\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2",
    "\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5\u0005\u0014\u000b\u0002\u00c4",
    "\u00bc\u0003\u0002\u0002\u0002\u00c4\u00c1\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007&\u0002\u0002\u00c7",
    "\u00c8\u0007\u0013\u0002\u0002\u00c8\u00c9\u0005(\u0015\u0002\u00c9",
    "#\u0003\u0002\u0002\u0002\u00ca\u00d4\u0007\f\u0002\u0002\u00cb\u00cc",
    "\u0005&\u0014\u0002\u00cc\u00cd\u0007\u0005\u0002\u0002\u00cd\u00cf",
    "\u0003\u0002\u0002\u0002\u00ce\u00cb\u0003\u0002\u0002\u0002\u00cf\u00d2",
    "\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002\u0002\u0002\u00d2\u00d0",
    "\u0003\u0002\u0002\u0002\u00d3\u00d5\u0005&\u0014\u0002\u00d4\u00d0",
    "\u0003\u0002\u0002\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\r\u0002\u0002\u00d7%\u0003",
    "\u0002\u0002\u0002\u00d8\u00dd\u0007&\u0002\u0002\u00d9\u00da\t\u0003",
    "\u0002\u0002\u00da\u00db\u0007\u0011\u0002\u0002\u00db\u00dd\u0005(",
    "\u0015\u0002\u00dc\u00d8\u0003\u0002\u0002\u0002\u00dc\u00d9\u0003\u0002",
    "\u0002\u0002\u00dd\'\u0003\u0002\u0002\u0002\u00de\u00df\b\u0015\u0001",
    "\u0002\u00df\u00e0\t\u0004\u0002\u0002\u00e0\u0101\u0005(\u0015\u0015",
    "\u00e1\u0101\u0007&\u0002\u0002\u00e2\u0101\u0007\'\u0002\u0002\u00e3",
    "\u00ed\u0007\u0004\u0002\u0002\u00e4\u00e5\u0005(\u0015\u0002\u00e5",
    "\u00e6\u0007\u0005\u0002\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7",
    "\u00e4\u0003\u0002\u0002\u0002\u00e8\u00eb\u0003\u0002\u0002\u0002\u00e9",
    "\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea",
    "\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002\u0002\u0002\u00ec",
    "\u00ee\u0005(\u0015\u0002\u00ed\u00e9\u0003\u0002\u0002\u0002\u00ed",
    "\u00ee\u0003\u0002\u0002\u0002\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef",
    "\u0101\u0007\u0006\u0002\u0002\u00f0\u0101\u0007)\u0002\u0002\u00f1",
    "\u0101\u0007(\u0002\u0002\u00f2\u0101\u0007*\u0002\u0002\u00f3\u0101",
    "\u0005$\u0013\u0002\u00f4\u00f5\u0007 \u0002\u0002\u00f5\u00f6\u0005",
    "\u0014\u000b\u0002\u00f6\u00f7\u0007\u000f\u0002\u0002\u00f7\u00f8\u0005",
    "\u0010\t\u0002\u00f8\u00f9\u0007\u0010\u0002\u0002\u00f9\u0101\u0003",
    "\u0002\u0002\u0002\u00fa\u0101\u0005\u0014\u000b\u0002\u00fb\u0101\u0005",
    "\u000e\b\u0002\u00fc\u00fd\u0007\u000f\u0002\u0002\u00fd\u00fe\u0005",
    "(\u0015\u0002\u00fe\u00ff\u0007\u0010\u0002\u0002\u00ff\u0101\u0003",
    "\u0002\u0002\u0002\u0100\u00de\u0003\u0002\u0002\u0002\u0100\u00e1\u0003",
    "\u0002\u0002\u0002\u0100\u00e2\u0003\u0002\u0002\u0002\u0100\u00e3\u0003",
    "\u0002\u0002\u0002\u0100\u00f0\u0003\u0002\u0002\u0002\u0100\u00f1\u0003",
    "\u0002\u0002\u0002\u0100\u00f2\u0003\u0002\u0002\u0002\u0100\u00f3\u0003",
    "\u0002\u0002\u0002\u0100\u00f4\u0003\u0002\u0002\u0002\u0100\u00fa\u0003",
    "\u0002\u0002\u0002\u0100\u00fb\u0003\u0002\u0002\u0002\u0100\u00fc\u0003",
    "\u0002\u0002\u0002\u0101\u011d\u0003\u0002\u0002\u0002\u0102\u0103\f",
    "\u000b\u0002\u0002\u0103\u0104\u0007\u001c\u0002\u0002\u0104\u011c\u0005",
    "(\u0015\f\u0105\u0106\f\n\u0002\u0002\u0106\u0107\u0007\u001d\u0002",
    "\u0002\u0107\u011c\u0005(\u0015\u000b\u0108\u0109\f\t\u0002\u0002\u0109",
    "\u010a\u0007\u001e\u0002\u0002\u010a\u011c\u0005(\u0015\n\u010b\u010c",
    "\f\b\u0002\u0002\u010c\u010d\u0007\u001f\u0002\u0002\u010d\u011c\u0005",
    "(\u0015\t\u010e\u010f\f\u0011\u0002\u0002\u010f\u0110\u0007\u0004\u0002",
    "\u0002\u0110\u0111\u0005(\u0015\u0002\u0111\u0112\u0007\u0006\u0002",
    "\u0002\u0112\u011c\u0003\u0002\u0002\u0002\u0113\u0114\f\f\u0002\u0002",
    "\u0114\u0115\u0007\u000f\u0002\u0002\u0115\u0116\u0005\u0010\t\u0002",
    "\u0116\u0117\u0007\u0010\u0002\u0002\u0117\u011c\u0003\u0002\u0002\u0002",
    "\u0118\u0119\f\u0005\u0002\u0002\u0119\u011a\u0007!\u0002\u0002\u011a",
    "\u011c\u0007&\u0002\u0002\u011b\u0102\u0003\u0002\u0002\u0002\u011b",
    "\u0105\u0003\u0002\u0002\u0002\u011b\u0108\u0003\u0002\u0002\u0002\u011b",
    "\u010b\u0003\u0002\u0002\u0002\u011b\u010e\u0003\u0002\u0002\u0002\u011b",
    "\u0113\u0003\u0002\u0002\u0002\u011b\u0118\u0003\u0002\u0002\u0002\u011c",
    "\u011f\u0003\u0002\u0002\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011d",
    "\u011e\u0003\u0002\u0002\u0002\u011e)\u0003\u0002\u0002\u0002\u011f",
    "\u011d\u0003\u0002\u0002\u0002\"-3<FLQUW\\`fhtx}\u0082\u0089\u008d\u0092",
    "\u009c\u00b1\u00be\u00c1\u00c4\u00d0\u00d4\u00dc\u00e9\u00ed\u0100\u011b",
    "\u011d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'import'", "'['", "','", "']'", "'of'", "'as'", 
                     "'<'", "'>'", "';'", "'{'", "'}'", "'fn'", "'('", "')'", 
                     "':'", "'=>'", "'='", "'for'", "'ret'", "'head'", "'get'", 
                     "'post'", "'put'", "'patch'", "'delete'", "'*'", "'+'", 
                     "'-'", "'?'", "'new'", "'.'", null, null, "'const'", 
                     "'let'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "SL_CMT", "WS", "CONST", 
                      "LET", "ID", "NUM", "RAW_STRING", "STRING", "REGEX_LITERAL" ];

var ruleNames =  [ "compilationUnit", "importDecl", "importSource", "topLevel", 
                   "block", "functionDecl", "functionBody", "argSpec", "paramSpec", 
                   "type", "stmt", "assignStmt", "exprStmt", "forStmt", 
                   "foreachStmt", "retStmt", "vardeclStmt", "dictionaryLiteral", 
                   "dictionaryPair", "expr" ];

function RapierScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RapierScriptParser.prototype = Object.create(antlr4.Parser.prototype);
RapierScriptParser.prototype.constructor = RapierScriptParser;

Object.defineProperty(RapierScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RapierScriptParser.EOF = antlr4.Token.EOF;
RapierScriptParser.T__0 = 1;
RapierScriptParser.T__1 = 2;
RapierScriptParser.T__2 = 3;
RapierScriptParser.T__3 = 4;
RapierScriptParser.T__4 = 5;
RapierScriptParser.T__5 = 6;
RapierScriptParser.T__6 = 7;
RapierScriptParser.T__7 = 8;
RapierScriptParser.T__8 = 9;
RapierScriptParser.T__9 = 10;
RapierScriptParser.T__10 = 11;
RapierScriptParser.T__11 = 12;
RapierScriptParser.T__12 = 13;
RapierScriptParser.T__13 = 14;
RapierScriptParser.T__14 = 15;
RapierScriptParser.T__15 = 16;
RapierScriptParser.T__16 = 17;
RapierScriptParser.T__17 = 18;
RapierScriptParser.T__18 = 19;
RapierScriptParser.T__19 = 20;
RapierScriptParser.T__20 = 21;
RapierScriptParser.T__21 = 22;
RapierScriptParser.T__22 = 23;
RapierScriptParser.T__23 = 24;
RapierScriptParser.T__24 = 25;
RapierScriptParser.T__25 = 26;
RapierScriptParser.T__26 = 27;
RapierScriptParser.T__27 = 28;
RapierScriptParser.T__28 = 29;
RapierScriptParser.T__29 = 30;
RapierScriptParser.T__30 = 31;
RapierScriptParser.SL_CMT = 32;
RapierScriptParser.WS = 33;
RapierScriptParser.CONST = 34;
RapierScriptParser.LET = 35;
RapierScriptParser.ID = 36;
RapierScriptParser.NUM = 37;
RapierScriptParser.RAW_STRING = 38;
RapierScriptParser.STRING = 39;
RapierScriptParser.REGEX_LITERAL = 40;

RapierScriptParser.RULE_compilationUnit = 0;
RapierScriptParser.RULE_importDecl = 1;
RapierScriptParser.RULE_importSource = 2;
RapierScriptParser.RULE_topLevel = 3;
RapierScriptParser.RULE_block = 4;
RapierScriptParser.RULE_functionDecl = 5;
RapierScriptParser.RULE_functionBody = 6;
RapierScriptParser.RULE_argSpec = 7;
RapierScriptParser.RULE_paramSpec = 8;
RapierScriptParser.RULE_type = 9;
RapierScriptParser.RULE_stmt = 10;
RapierScriptParser.RULE_assignStmt = 11;
RapierScriptParser.RULE_exprStmt = 12;
RapierScriptParser.RULE_forStmt = 13;
RapierScriptParser.RULE_foreachStmt = 14;
RapierScriptParser.RULE_retStmt = 15;
RapierScriptParser.RULE_vardeclStmt = 16;
RapierScriptParser.RULE_dictionaryLiteral = 17;
RapierScriptParser.RULE_dictionaryPair = 18;
RapierScriptParser.RULE_expr = 19;

function CompilationUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_compilationUnit;
    return this;
}

CompilationUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CompilationUnitContext.prototype.constructor = CompilationUnitContext;

CompilationUnitContext.prototype.importDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImportDeclContext);
    } else {
        return this.getTypedRuleContext(ImportDeclContext,i);
    }
};

CompilationUnitContext.prototype.topLevel = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TopLevelContext);
    } else {
        return this.getTypedRuleContext(TopLevelContext,i);
    }
};

CompilationUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitCompilationUnit(this);
	}
};

CompilationUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitCompilationUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.CompilationUnitContext = CompilationUnitContext;

RapierScriptParser.prototype.compilationUnit = function() {

    var localctx = new CompilationUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RapierScriptParser.RULE_compilationUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RapierScriptParser.T__0) {
            this.state = 40;
            this.importDecl();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.T__1) | (1 << RapierScriptParser.T__9) | (1 << RapierScriptParser.T__11) | (1 << RapierScriptParser.T__12) | (1 << RapierScriptParser.T__17) | (1 << RapierScriptParser.T__18) | (1 << RapierScriptParser.T__19) | (1 << RapierScriptParser.T__20) | (1 << RapierScriptParser.T__21) | (1 << RapierScriptParser.T__22) | (1 << RapierScriptParser.T__23) | (1 << RapierScriptParser.T__24) | (1 << RapierScriptParser.T__29))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (RapierScriptParser.CONST - 34)) | (1 << (RapierScriptParser.LET - 34)) | (1 << (RapierScriptParser.ID - 34)) | (1 << (RapierScriptParser.NUM - 34)) | (1 << (RapierScriptParser.RAW_STRING - 34)) | (1 << (RapierScriptParser.STRING - 34)) | (1 << (RapierScriptParser.REGEX_LITERAL - 34)))) !== 0)) {
            this.state = 46;
            this.topLevel();
            this.state = 51;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_importDecl;
    this._ID = null; // Token
    this.names = []; // of Tokens
    this.alias = null; // Token
    return this;
}

ImportDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclContext.prototype.constructor = ImportDeclContext;

ImportDeclContext.prototype.importSource = function() {
    return this.getTypedRuleContext(ImportSourceContext,0);
};

ImportDeclContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.ID);
    } else {
        return this.getToken(RapierScriptParser.ID, i);
    }
};


ImportDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterImportDecl(this);
	}
};

ImportDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitImportDecl(this);
	}
};

ImportDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitImportDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.ImportDeclContext = ImportDeclContext;

RapierScriptParser.prototype.importDecl = function() {

    var localctx = new ImportDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RapierScriptParser.RULE_importDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.match(RapierScriptParser.T__0);

        this.state = 53;
        this.match(RapierScriptParser.T__1);
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 54;
                localctx._ID = this.match(RapierScriptParser.ID);
                localctx.names.push(localctx._ID);
                this.state = 55;
                this.match(RapierScriptParser.T__2); 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

        this.state = 61;
        localctx._ID = this.match(RapierScriptParser.ID);
        localctx.names.push(localctx._ID);
        this.state = 62;
        this.match(RapierScriptParser.T__3);
        this.state = 63;
        this.match(RapierScriptParser.T__4);
        this.state = 65;
        this.importSource();
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.T__5) {
            this.state = 66;
            this.match(RapierScriptParser.T__5);
            this.state = 67;
            localctx.alias = this.match(RapierScriptParser.ID);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportSourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_importSource;
    return this;
}

ImportSourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportSourceContext.prototype.constructor = ImportSourceContext;


 
ImportSourceContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StringSourceContext(parser, ctx) {
	ImportSourceContext.call(this, parser);
    ImportSourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringSourceContext.prototype = Object.create(ImportSourceContext.prototype);
StringSourceContext.prototype.constructor = StringSourceContext;

RapierScriptParser.StringSourceContext = StringSourceContext;

StringSourceContext.prototype.STRING = function() {
    return this.getToken(RapierScriptParser.STRING, 0);
};
StringSourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterStringSource(this);
	}
};

StringSourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitStringSource(this);
	}
};

StringSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitStringSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GlobalSourceContext(parser, ctx) {
	ImportSourceContext.call(this, parser);
    this.source = null; // Token;
    ImportSourceContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GlobalSourceContext.prototype = Object.create(ImportSourceContext.prototype);
GlobalSourceContext.prototype.constructor = GlobalSourceContext;

RapierScriptParser.GlobalSourceContext = GlobalSourceContext;

GlobalSourceContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};
GlobalSourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterGlobalSource(this);
	}
};

GlobalSourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitGlobalSource(this);
	}
};

GlobalSourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitGlobalSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RapierScriptParser.ImportSourceContext = ImportSourceContext;

RapierScriptParser.prototype.importSource = function() {

    var localctx = new ImportSourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RapierScriptParser.RULE_importSource);
    try {
        this.state = 74;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RapierScriptParser.STRING:
            localctx = new StringSourceContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.match(RapierScriptParser.STRING);
            break;
        case RapierScriptParser.T__6:
            localctx = new GlobalSourceContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.match(RapierScriptParser.T__6);
            this.state = 72;
            localctx.source = this.match(RapierScriptParser.ID);
            this.state = 73;
            this.match(RapierScriptParser.T__7);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TopLevelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_topLevel;
    return this;
}

TopLevelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TopLevelContext.prototype.constructor = TopLevelContext;

TopLevelContext.prototype.functionDecl = function() {
    return this.getTypedRuleContext(FunctionDeclContext,0);
};

TopLevelContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

TopLevelContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterTopLevel(this);
	}
};

TopLevelContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitTopLevel(this);
	}
};

TopLevelContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitTopLevel(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.TopLevelContext = TopLevelContext;

RapierScriptParser.prototype.topLevel = function() {

    var localctx = new TopLevelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RapierScriptParser.RULE_topLevel);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RapierScriptParser.T__11:
            this.state = 76;
            this.functionDecl();
            break;
        case RapierScriptParser.T__1:
        case RapierScriptParser.T__9:
        case RapierScriptParser.T__12:
        case RapierScriptParser.T__17:
        case RapierScriptParser.T__18:
        case RapierScriptParser.T__19:
        case RapierScriptParser.T__20:
        case RapierScriptParser.T__21:
        case RapierScriptParser.T__22:
        case RapierScriptParser.T__23:
        case RapierScriptParser.T__24:
        case RapierScriptParser.T__29:
        case RapierScriptParser.CONST:
        case RapierScriptParser.LET:
        case RapierScriptParser.ID:
        case RapierScriptParser.NUM:
        case RapierScriptParser.RAW_STRING:
        case RapierScriptParser.STRING:
        case RapierScriptParser.REGEX_LITERAL:
            this.state = 81; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 77;
            		this.stmt();
            		this.state = 79;
            		this._errHandler.sync(this);
            		_la = this._input.LA(1);
            		if(_la===RapierScriptParser.T__8) {
            		    this.state = 78;
            		    this.match(RapierScriptParser.T__8);
            		}

            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 83; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.BlockContext = BlockContext;

RapierScriptParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RapierScriptParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.match(RapierScriptParser.T__9);
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.T__1) | (1 << RapierScriptParser.T__9) | (1 << RapierScriptParser.T__12) | (1 << RapierScriptParser.T__17) | (1 << RapierScriptParser.T__18) | (1 << RapierScriptParser.T__19) | (1 << RapierScriptParser.T__20) | (1 << RapierScriptParser.T__21) | (1 << RapierScriptParser.T__22) | (1 << RapierScriptParser.T__23) | (1 << RapierScriptParser.T__24) | (1 << RapierScriptParser.T__29))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (RapierScriptParser.CONST - 34)) | (1 << (RapierScriptParser.LET - 34)) | (1 << (RapierScriptParser.ID - 34)) | (1 << (RapierScriptParser.NUM - 34)) | (1 << (RapierScriptParser.RAW_STRING - 34)) | (1 << (RapierScriptParser.STRING - 34)) | (1 << (RapierScriptParser.REGEX_LITERAL - 34)))) !== 0)) {
                this.state = 88;
                this.stmt();
                this.state = 90;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===RapierScriptParser.T__8) {
                    this.state = 89;
                    this.match(RapierScriptParser.T__8);
                }

                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 97;
            this.match(RapierScriptParser.T__10);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.stmt();
            this.state = 100;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 99;
                this.match(RapierScriptParser.T__8);

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_functionDecl;
    this.name = null; // Token
    return this;
}

FunctionDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclContext.prototype.constructor = FunctionDeclContext;

FunctionDeclContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

FunctionDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitFunctionDecl(this);
	}
};

FunctionDeclContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitFunctionDecl(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.FunctionDeclContext = FunctionDeclContext;

RapierScriptParser.prototype.functionDecl = function() {

    var localctx = new FunctionDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RapierScriptParser.RULE_functionDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(RapierScriptParser.T__11);
        this.state = 105;
        localctx.name = this.match(RapierScriptParser.ID);
        this.state = 106;
        this.functionBody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionBodyContext.prototype.paramSpec = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamSpecContext);
    } else {
        return this.getTypedRuleContext(ParamSpecContext,i);
    }
};

FunctionBodyContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionBodyContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitFunctionBody(this);
	}
};

FunctionBodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitFunctionBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.FunctionBodyContext = FunctionBodyContext;

RapierScriptParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RapierScriptParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(RapierScriptParser.T__12);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.ID) {
            this.state = 114;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 109;
                    this.paramSpec();
                    this.state = 110;
                    this.match(RapierScriptParser.T__2); 
                }
                this.state = 116;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
            }

            this.state = 117;
            this.paramSpec();
        }

        this.state = 120;
        this.match(RapierScriptParser.T__13);
        this.state = 123;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.T__14) {
            this.state = 121;
            this.match(RapierScriptParser.T__14);
            this.state = 122;
            this.type();
        }

        this.state = 128;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RapierScriptParser.T__1:
        case RapierScriptParser.T__9:
        case RapierScriptParser.T__12:
        case RapierScriptParser.T__17:
        case RapierScriptParser.T__18:
        case RapierScriptParser.T__19:
        case RapierScriptParser.T__20:
        case RapierScriptParser.T__21:
        case RapierScriptParser.T__22:
        case RapierScriptParser.T__23:
        case RapierScriptParser.T__24:
        case RapierScriptParser.T__29:
        case RapierScriptParser.CONST:
        case RapierScriptParser.LET:
        case RapierScriptParser.ID:
        case RapierScriptParser.NUM:
        case RapierScriptParser.RAW_STRING:
        case RapierScriptParser.STRING:
        case RapierScriptParser.REGEX_LITERAL:
            this.state = 125;
            this.block();
            break;
        case RapierScriptParser.T__15:
            this.state = 126;
            this.match(RapierScriptParser.T__15);
            this.state = 127;
            this.expr(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_argSpec;
    return this;
}

ArgSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgSpecContext.prototype.constructor = ArgSpecContext;

ArgSpecContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ArgSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterArgSpec(this);
	}
};

ArgSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitArgSpec(this);
	}
};

ArgSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitArgSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.ArgSpecContext = ArgSpecContext;

RapierScriptParser.prototype.argSpec = function() {

    var localctx = new ArgSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RapierScriptParser.RULE_argSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.T__1) | (1 << RapierScriptParser.T__9) | (1 << RapierScriptParser.T__12) | (1 << RapierScriptParser.T__19) | (1 << RapierScriptParser.T__20) | (1 << RapierScriptParser.T__21) | (1 << RapierScriptParser.T__22) | (1 << RapierScriptParser.T__23) | (1 << RapierScriptParser.T__24) | (1 << RapierScriptParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (RapierScriptParser.ID - 36)) | (1 << (RapierScriptParser.NUM - 36)) | (1 << (RapierScriptParser.RAW_STRING - 36)) | (1 << (RapierScriptParser.STRING - 36)) | (1 << (RapierScriptParser.REGEX_LITERAL - 36)))) !== 0)) {
            this.state = 135;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 130;
                    this.expr(0);
                    this.state = 131;
                    this.match(RapierScriptParser.T__2); 
                }
                this.state = 137;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            this.state = 138;
            this.expr(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_paramSpec;
    return this;
}

ParamSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamSpecContext.prototype.constructor = ParamSpecContext;

ParamSpecContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

ParamSpecContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ParamSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterParamSpec(this);
	}
};

ParamSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitParamSpec(this);
	}
};

ParamSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitParamSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.ParamSpecContext = ParamSpecContext;

RapierScriptParser.prototype.paramSpec = function() {

    var localctx = new ParamSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RapierScriptParser.RULE_paramSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(RapierScriptParser.ID);
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.T__14) {
            this.state = 142;
            this.match(RapierScriptParser.T__14);
            this.state = 143;
            this.type();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_type;
    this.name = null; // Token
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.TypeContext = TypeContext;

RapierScriptParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RapierScriptParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        localctx.name = this.match(RapierScriptParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.vardeclStmt = function() {
    return this.getTypedRuleContext(VardeclStmtContext,0);
};

StmtContext.prototype.assignStmt = function() {
    return this.getTypedRuleContext(AssignStmtContext,0);
};

StmtContext.prototype.exprStmt = function() {
    return this.getTypedRuleContext(ExprStmtContext,0);
};

StmtContext.prototype.forStmt = function() {
    return this.getTypedRuleContext(ForStmtContext,0);
};

StmtContext.prototype.foreachStmt = function() {
    return this.getTypedRuleContext(ForeachStmtContext,0);
};

StmtContext.prototype.retStmt = function() {
    return this.getTypedRuleContext(RetStmtContext,0);
};

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.StmtContext = StmtContext;

RapierScriptParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RapierScriptParser.RULE_stmt);
    try {
        this.state = 154;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.vardeclStmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.assignStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 150;
            this.exprStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 151;
            this.forStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 152;
            this.foreachStmt();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 153;
            this.retStmt();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_assignStmt;
    this.left = null; // ExprContext
    this.right = null; // ExprContext
    return this;
}

AssignStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStmtContext.prototype.constructor = AssignStmtContext;

AssignStmtContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AssignStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterAssignStmt(this);
	}
};

AssignStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitAssignStmt(this);
	}
};

AssignStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitAssignStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.AssignStmtContext = AssignStmtContext;

RapierScriptParser.prototype.assignStmt = function() {

    var localctx = new AssignStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RapierScriptParser.RULE_assignStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        localctx.left = this.expr(0);
        this.state = 157;
        this.match(RapierScriptParser.T__16);
        this.state = 158;
        localctx.right = this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_exprStmt;
    return this;
}

ExprStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprStmtContext.prototype.constructor = ExprStmtContext;

ExprStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExprStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterExprStmt(this);
	}
};

ExprStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitExprStmt(this);
	}
};

ExprStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitExprStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.ExprStmtContext = ExprStmtContext;

RapierScriptParser.prototype.exprStmt = function() {

    var localctx = new ExprStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, RapierScriptParser.RULE_exprStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_forStmt;
    return this;
}

ForStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForStmtContext.prototype.constructor = ForStmtContext;

ForStmtContext.prototype.vardeclStmt = function() {
    return this.getTypedRuleContext(VardeclStmtContext,0);
};

ForStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ForStmtContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

ForStmtContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ForStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterForStmt(this);
	}
};

ForStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitForStmt(this);
	}
};

ForStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitForStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.ForStmtContext = ForStmtContext;

RapierScriptParser.prototype.forStmt = function() {

    var localctx = new ForStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, RapierScriptParser.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(RapierScriptParser.T__17);
        this.state = 163;
        this.match(RapierScriptParser.T__12);
        this.state = 164;
        this.vardeclStmt();
        this.state = 165;
        this.match(RapierScriptParser.T__8);
        this.state = 166;
        this.expr(0);
        this.state = 167;
        this.match(RapierScriptParser.T__8);
        this.state = 168;
        this.stmt();
        this.state = 169;
        this.match(RapierScriptParser.T__13);
        this.state = 170;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForeachStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_foreachStmt;
    return this;
}

ForeachStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForeachStmtContext.prototype.constructor = ForeachStmtContext;

ForeachStmtContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

ForeachStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ForeachStmtContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ForeachStmtContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ForeachStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterForeachStmt(this);
	}
};

ForeachStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitForeachStmt(this);
	}
};

ForeachStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitForeachStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.ForeachStmtContext = ForeachStmtContext;

RapierScriptParser.prototype.foreachStmt = function() {

    var localctx = new ForeachStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, RapierScriptParser.RULE_foreachStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(RapierScriptParser.T__17);
        this.state = 173;
        this.match(RapierScriptParser.T__12);
        this.state = 175;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        if(la_===1) {
            this.state = 174;
            this.type();

        }
        this.state = 177;
        this.match(RapierScriptParser.ID);
        this.state = 178;
        this.match(RapierScriptParser.T__14);
        this.state = 179;
        this.expr(0);
        this.state = 180;
        this.match(RapierScriptParser.T__13);
        this.state = 181;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RetStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_retStmt;
    return this;
}

RetStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetStmtContext.prototype.constructor = RetStmtContext;

RetStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

RetStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterRetStmt(this);
	}
};

RetStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitRetStmt(this);
	}
};

RetStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitRetStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.RetStmtContext = RetStmtContext;

RapierScriptParser.prototype.retStmt = function() {

    var localctx = new RetStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, RapierScriptParser.RULE_retStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(RapierScriptParser.T__18);
        this.state = 184;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VardeclStmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_vardeclStmt;
    return this;
}

VardeclStmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VardeclStmtContext.prototype.constructor = VardeclStmtContext;

VardeclStmtContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

VardeclStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

VardeclStmtContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VardeclStmtContext.prototype.CONST = function() {
    return this.getToken(RapierScriptParser.CONST, 0);
};

VardeclStmtContext.prototype.LET = function() {
    return this.getToken(RapierScriptParser.LET, 0);
};

VardeclStmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterVardeclStmt(this);
	}
};

VardeclStmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitVardeclStmt(this);
	}
};

VardeclStmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitVardeclStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.VardeclStmtContext = VardeclStmtContext;

RapierScriptParser.prototype.vardeclStmt = function() {

    var localctx = new VardeclStmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, RapierScriptParser.RULE_vardeclStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.state = 186;
            _la = this._input.LA(1);
            if(!(_la===RapierScriptParser.CONST || _la===RapierScriptParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 188;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
            if(la_===1) {
                this.state = 187;
                this.type();

            }
            break;

        case 2:
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RapierScriptParser.CONST || _la===RapierScriptParser.LET) {
                this.state = 190;
                _la = this._input.LA(1);
                if(!(_la===RapierScriptParser.CONST || _la===RapierScriptParser.LET)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 193;
            this.type();
            break;

        }
        this.state = 196;
        this.match(RapierScriptParser.ID);
        this.state = 197;
        this.match(RapierScriptParser.T__16);
        this.state = 198;
        this.expr(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DictionaryLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_dictionaryLiteral;
    return this;
}

DictionaryLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DictionaryLiteralContext.prototype.constructor = DictionaryLiteralContext;

DictionaryLiteralContext.prototype.dictionaryPair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DictionaryPairContext);
    } else {
        return this.getTypedRuleContext(DictionaryPairContext,i);
    }
};

DictionaryLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterDictionaryLiteral(this);
	}
};

DictionaryLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitDictionaryLiteral(this);
	}
};

DictionaryLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitDictionaryLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.DictionaryLiteralContext = DictionaryLiteralContext;

RapierScriptParser.prototype.dictionaryLiteral = function() {

    var localctx = new DictionaryLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, RapierScriptParser.RULE_dictionaryLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(RapierScriptParser.T__9);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (RapierScriptParser.ID - 36)) | (1 << (RapierScriptParser.RAW_STRING - 36)) | (1 << (RapierScriptParser.STRING - 36)))) !== 0)) {
            this.state = 206;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 201;
                    this.dictionaryPair();
                    this.state = 202;
                    this.match(RapierScriptParser.T__2); 
                }
                this.state = 208;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            this.state = 209;
            this.dictionaryPair();
        }

        this.state = 212;
        this.match(RapierScriptParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DictionaryPairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_dictionaryPair;
    return this;
}

DictionaryPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DictionaryPairContext.prototype.constructor = DictionaryPairContext;

DictionaryPairContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

DictionaryPairContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

DictionaryPairContext.prototype.STRING = function() {
    return this.getToken(RapierScriptParser.STRING, 0);
};

DictionaryPairContext.prototype.RAW_STRING = function() {
    return this.getToken(RapierScriptParser.RAW_STRING, 0);
};

DictionaryPairContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterDictionaryPair(this);
	}
};

DictionaryPairContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitDictionaryPair(this);
	}
};

DictionaryPairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitDictionaryPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.DictionaryPairContext = DictionaryPairContext;

RapierScriptParser.prototype.dictionaryPair = function() {

    var localctx = new DictionaryPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, RapierScriptParser.RULE_dictionaryPair);
    var _la = 0; // Token type
    try {
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 214;
            this.match(RapierScriptParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 215;
            _la = this._input.LA(1);
            if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (RapierScriptParser.ID - 36)) | (1 << (RapierScriptParser.RAW_STRING - 36)) | (1 << (RapierScriptParser.STRING - 36)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 216;
            this.match(RapierScriptParser.T__14);
            this.state = 217;
            this.expr(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function FunctionExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionExprContext.prototype = Object.create(ExprContext.prototype);
FunctionExprContext.prototype.constructor = FunctionExprContext;

RapierScriptParser.FunctionExprContext = FunctionExprContext;

FunctionExprContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};
FunctionExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterFunctionExpr(this);
	}
};

FunctionExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitFunctionExpr(this);
	}
};

FunctionExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitFunctionExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdExprContext.prototype = Object.create(ExprContext.prototype);
IdExprContext.prototype.constructor = IdExprContext;

RapierScriptParser.IdExprContext = IdExprContext;

IdExprContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};
IdExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterIdExpr(this);
	}
};

IdExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitIdExpr(this);
	}
};

IdExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitIdExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function QueryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QueryExprContext.prototype = Object.create(ExprContext.prototype);
QueryExprContext.prototype.constructor = QueryExprContext;

RapierScriptParser.QueryExprContext = QueryExprContext;

QueryExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
QueryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterQueryExpr(this);
	}
};

QueryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitQueryExpr(this);
	}
};

QueryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitQueryExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RegexLiteralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RegexLiteralExprContext.prototype = Object.create(ExprContext.prototype);
RegexLiteralExprContext.prototype.constructor = RegexLiteralExprContext;

RapierScriptParser.RegexLiteralExprContext = RegexLiteralExprContext;

RegexLiteralExprContext.prototype.REGEX_LITERAL = function() {
    return this.getToken(RapierScriptParser.REGEX_LITERAL, 0);
};
RegexLiteralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterRegexLiteralExpr(this);
	}
};

RegexLiteralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitRegexLiteralExpr(this);
	}
};

RegexLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitRegexLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DictionaryLiteralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DictionaryLiteralExprContext.prototype = Object.create(ExprContext.prototype);
DictionaryLiteralExprContext.prototype.constructor = DictionaryLiteralExprContext;

RapierScriptParser.DictionaryLiteralExprContext = DictionaryLiteralExprContext;

DictionaryLiteralExprContext.prototype.dictionaryLiteral = function() {
    return this.getTypedRuleContext(DictionaryLiteralContext,0);
};
DictionaryLiteralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterDictionaryLiteralExpr(this);
	}
};

DictionaryLiteralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitDictionaryLiteralExpr(this);
	}
};

DictionaryLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitDictionaryLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringLiteralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringLiteralExprContext.prototype = Object.create(ExprContext.prototype);
StringLiteralExprContext.prototype.constructor = StringLiteralExprContext;

RapierScriptParser.StringLiteralExprContext = StringLiteralExprContext;

StringLiteralExprContext.prototype.STRING = function() {
    return this.getToken(RapierScriptParser.STRING, 0);
};
StringLiteralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterStringLiteralExpr(this);
	}
};

StringLiteralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitStringLiteralExpr(this);
	}
};

StringLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitStringLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RequestExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.requestMethod = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RequestExprContext.prototype = Object.create(ExprContext.prototype);
RequestExprContext.prototype.constructor = RequestExprContext;

RapierScriptParser.RequestExprContext = RequestExprContext;

RequestExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
RequestExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterRequestExpr(this);
	}
};

RequestExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitRequestExpr(this);
	}
};

RequestExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitRequestExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeExprContext.prototype = Object.create(ExprContext.prototype);
TypeExprContext.prototype.constructor = TypeExprContext;

RapierScriptParser.TypeExprContext = TypeExprContext;

TypeExprContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};
TypeExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterTypeExpr(this);
	}
};

TypeExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitTypeExpr(this);
	}
};

TypeExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitTypeExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IndexerExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.target = null; // ExprContext;
    this.indexer = null; // ExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexerExprContext.prototype = Object.create(ExprContext.prototype);
IndexerExprContext.prototype.constructor = IndexerExprContext;

RapierScriptParser.IndexerExprContext = IndexerExprContext;

IndexerExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
IndexerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterIndexerExpr(this);
	}
};

IndexerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitIndexerExpr(this);
	}
};

IndexerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitIndexerExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ConcatExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConcatExprContext.prototype = Object.create(ExprContext.prototype);
ConcatExprContext.prototype.constructor = ConcatExprContext;

RapierScriptParser.ConcatExprContext = ConcatExprContext;

ConcatExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ConcatExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterConcatExpr(this);
	}
};

ConcatExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitConcatExpr(this);
	}
};

ConcatExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitConcatExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumExprContext.prototype = Object.create(ExprContext.prototype);
NumExprContext.prototype.constructor = NumExprContext;

RapierScriptParser.NumExprContext = NumExprContext;

NumExprContext.prototype.NUM = function() {
    return this.getToken(RapierScriptParser.NUM, 0);
};
NumExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterNumExpr(this);
	}
};

NumExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitNumExpr(this);
	}
};

NumExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitNumExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MemberExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemberExprContext.prototype = Object.create(ExprContext.prototype);
MemberExprContext.prototype.constructor = MemberExprContext;

RapierScriptParser.MemberExprContext = MemberExprContext;

MemberExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

MemberExprContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};
MemberExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterMemberExpr(this);
	}
};

MemberExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitMemberExpr(this);
	}
};

MemberExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitMemberExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArrayLiteralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayLiteralExprContext.prototype = Object.create(ExprContext.prototype);
ArrayLiteralExprContext.prototype.constructor = ArrayLiteralExprContext;

RapierScriptParser.ArrayLiteralExprContext = ArrayLiteralExprContext;

ArrayLiteralExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
ArrayLiteralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterArrayLiteralExpr(this);
	}
};

ArrayLiteralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitArrayLiteralExpr(this);
	}
};

ArrayLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitArrayLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewExprContext.prototype = Object.create(ExprContext.prototype);
NewExprContext.prototype.constructor = NewExprContext;

RapierScriptParser.NewExprContext = NewExprContext;

NewExprContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

NewExprContext.prototype.argSpec = function() {
    return this.getTypedRuleContext(ArgSpecContext,0);
};
NewExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterNewExpr(this);
	}
};

NewExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitNewExpr(this);
	}
};

NewExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitNewExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RawStringLiteralExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RawStringLiteralExprContext.prototype = Object.create(ExprContext.prototype);
RawStringLiteralExprContext.prototype.constructor = RawStringLiteralExprContext;

RapierScriptParser.RawStringLiteralExprContext = RawStringLiteralExprContext;

RawStringLiteralExprContext.prototype.RAW_STRING = function() {
    return this.getToken(RapierScriptParser.RAW_STRING, 0);
};
RawStringLiteralExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterRawStringLiteralExpr(this);
	}
};

RawStringLiteralExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitRawStringLiteralExpr(this);
	}
};

RawStringLiteralExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitRawStringLiteralExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NestedExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NestedExprContext.prototype = Object.create(ExprContext.prototype);
NestedExprContext.prototype.constructor = NestedExprContext;

RapierScriptParser.NestedExprContext = NestedExprContext;

NestedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
NestedExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterNestedExpr(this);
	}
};

NestedExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitNestedExpr(this);
	}
};

NestedExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitNestedExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SubtractExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SubtractExprContext.prototype = Object.create(ExprContext.prototype);
SubtractExprContext.prototype.constructor = SubtractExprContext;

RapierScriptParser.SubtractExprContext = SubtractExprContext;

SubtractExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
SubtractExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterSubtractExpr(this);
	}
};

SubtractExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitSubtractExpr(this);
	}
};

SubtractExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitSubtractExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CallExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallExprContext.prototype = Object.create(ExprContext.prototype);
CallExprContext.prototype.constructor = CallExprContext;

RapierScriptParser.CallExprContext = CallExprContext;

CallExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

CallExprContext.prototype.argSpec = function() {
    return this.getTypedRuleContext(ArgSpecContext,0);
};
CallExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterCallExpr(this);
	}
};

CallExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitCallExpr(this);
	}
};

CallExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitCallExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TimesExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TimesExprContext.prototype = Object.create(ExprContext.prototype);
TimesExprContext.prototype.constructor = TimesExprContext;

RapierScriptParser.TimesExprContext = TimesExprContext;

TimesExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
TimesExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterTimesExpr(this);
	}
};

TimesExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitTimesExpr(this);
	}
};

TimesExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitTimesExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RapierScriptParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 38;
    this.enterRecursionRule(localctx, 38, RapierScriptParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            localctx = new RequestExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 221;
            localctx.requestMethod = this._input.LT(1);
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.T__19) | (1 << RapierScriptParser.T__20) | (1 << RapierScriptParser.T__21) | (1 << RapierScriptParser.T__22) | (1 << RapierScriptParser.T__23) | (1 << RapierScriptParser.T__24))) !== 0))) {
                localctx.requestMethod = this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 222;
            this.expr(19);
            break;

        case 2:
            localctx = new IdExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 223;
            this.match(RapierScriptParser.ID);
            break;

        case 3:
            localctx = new NumExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 224;
            this.match(RapierScriptParser.NUM);
            break;

        case 4:
            localctx = new ArrayLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 225;
            this.match(RapierScriptParser.T__1);
            this.state = 235;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.T__1) | (1 << RapierScriptParser.T__9) | (1 << RapierScriptParser.T__12) | (1 << RapierScriptParser.T__19) | (1 << RapierScriptParser.T__20) | (1 << RapierScriptParser.T__21) | (1 << RapierScriptParser.T__22) | (1 << RapierScriptParser.T__23) | (1 << RapierScriptParser.T__24) | (1 << RapierScriptParser.T__29))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (RapierScriptParser.ID - 36)) | (1 << (RapierScriptParser.NUM - 36)) | (1 << (RapierScriptParser.RAW_STRING - 36)) | (1 << (RapierScriptParser.STRING - 36)) | (1 << (RapierScriptParser.REGEX_LITERAL - 36)))) !== 0)) {
                this.state = 231;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 226;
                        this.expr(0);
                        this.state = 227;
                        this.match(RapierScriptParser.T__2); 
                    }
                    this.state = 233;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
                }

                this.state = 234;
                this.expr(0);
            }

            this.state = 237;
            this.match(RapierScriptParser.T__3);
            break;

        case 5:
            localctx = new StringLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 238;
            this.match(RapierScriptParser.STRING);
            break;

        case 6:
            localctx = new RawStringLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 239;
            this.match(RapierScriptParser.RAW_STRING);
            break;

        case 7:
            localctx = new RegexLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 240;
            this.match(RapierScriptParser.REGEX_LITERAL);
            break;

        case 8:
            localctx = new DictionaryLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 241;
            this.dictionaryLiteral();
            break;

        case 9:
            localctx = new NewExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 242;
            this.match(RapierScriptParser.T__29);
            this.state = 243;
            this.type();
            this.state = 244;
            this.match(RapierScriptParser.T__12);
            this.state = 245;
            this.argSpec();
            this.state = 246;
            this.match(RapierScriptParser.T__13);
            break;

        case 10:
            localctx = new TypeExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 248;
            this.type();
            break;

        case 11:
            localctx = new FunctionExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 249;
            this.functionBody();
            break;

        case 12:
            localctx = new NestedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 250;
            this.match(RapierScriptParser.T__12);
            this.state = 251;
            this.expr(0);
            this.state = 252;
            this.match(RapierScriptParser.T__13);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 283;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 281;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new TimesExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 256;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 257;
                    this.match(RapierScriptParser.T__25);
                    this.state = 258;
                    this.expr(10);
                    break;

                case 2:
                    localctx = new ConcatExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 259;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 260;
                    this.match(RapierScriptParser.T__26);
                    this.state = 261;
                    this.expr(9);
                    break;

                case 3:
                    localctx = new SubtractExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 262;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 263;
                    this.match(RapierScriptParser.T__27);
                    this.state = 264;
                    this.expr(8);
                    break;

                case 4:
                    localctx = new QueryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 265;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 266;
                    this.match(RapierScriptParser.T__28);
                    this.state = 267;
                    this.expr(7);
                    break;

                case 5:
                    localctx = new IndexerExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.target = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 268;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 269;
                    this.match(RapierScriptParser.T__1);
                    this.state = 270;
                    localctx.indexer = this.expr(0);
                    this.state = 271;
                    this.match(RapierScriptParser.T__3);
                    break;

                case 6:
                    localctx = new CallExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 273;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 274;
                    this.match(RapierScriptParser.T__12);
                    this.state = 275;
                    this.argSpec();
                    this.state = 276;
                    this.match(RapierScriptParser.T__13);
                    break;

                case 7:
                    localctx = new MemberExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 278;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 279;
                    this.match(RapierScriptParser.T__30);
                    this.state = 280;
                    this.match(RapierScriptParser.ID);
                    break;

                } 
            }
            this.state = 285;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


RapierScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 19:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RapierScriptParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 15);
		case 5:
			return this.precpred(this._ctx, 10);
		case 6:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RapierScriptParser = RapierScriptParser;
