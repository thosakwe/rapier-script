// Generated from src/grammar/RapierScript.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RapierScriptListener = require('./RapierScriptListener').RapierScriptListener;
var RapierScriptVisitor = require('./RapierScriptVisitor').RapierScriptVisitor;

var grammarFileName = "RapierScript.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003&\u00f7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003,\n\u0003\u0006",
    "\u0003.\n\u0003\r\u0003\u000e\u0003/\u0007\u00032\n\u0003\f\u0003\u000e",
    "\u00035\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    ":\n\u0004\u0007\u0004<\n\u0004\f\u0004\u000e\u0004?\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004D\n\u0004\u0005\u0004F\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0007\u0006P\n\u0006\f\u0006\u000e\u0006S\u000b",
    "\u0006\u0003\u0006\u0005\u0006V\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006[\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006`\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007e\n\u0007",
    "\f\u0007\u000e\u0007h\u000b\u0007\u0003\u0007\u0005\u0007k\n\u0007\u0003",
    "\b\u0003\b\u0003\b\u0005\bp\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\nz\n\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u008f\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u009c\n\u0010\u0003\u0010\u0005",
    "\u0010\u009f\n\u0010\u0003\u0010\u0005\u0010\u00a2\n\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0007\u0011\u00ac\n\u0011\f\u0011\u000e\u0011\u00af\u000b",
    "\u0011\u0003\u0011\u0005\u0011\u00b2\n\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ba\n",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u00c7\n\u0013\f\u0013\u000e\u0013\u00ca\u000b\u0013\u0003\u0013",
    "\u0005\u0013\u00cd\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00e0\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00f2\n\u0013\f\u0013\u000e\u0013",
    "\u00f5\u000b\u0013\u0003\u0013\u0002\u0003$\u0014\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002",
    "\u0006\u0005\u0002\u0016\u0016\u0019\u001a\u001d\u001f\u0004\u0002\u0015",
    "\u0015\u001b\u001b\u0004\u0002!!$%\u0004\u0002\u000b\u000b\u0012\u0014",
    "\u0111\u0002&\u0003\u0002\u0002\u0002\u00043\u0003\u0002\u0002\u0002",
    "\u0006E\u0003\u0002\u0002\u0002\bG\u0003\u0002\u0002\u0002\nK\u0003",
    "\u0002\u0002\u0002\fj\u0003\u0002\u0002\u0002\u000el\u0003\u0002\u0002",
    "\u0002\u0010q\u0003\u0002\u0002\u0002\u0012y\u0003\u0002\u0002\u0002",
    "\u0014{\u0003\u0002\u0002\u0002\u0016\u007f\u0003\u0002\u0002\u0002",
    "\u0018\u0081\u0003\u0002\u0002\u0002\u001a\u008b\u0003\u0002\u0002\u0002",
    "\u001c\u0096\u0003\u0002\u0002\u0002\u001e\u00a1\u0003\u0002\u0002\u0002",
    " \u00a7\u0003\u0002\u0002\u0002\"\u00b9\u0003\u0002\u0002\u0002$\u00df",
    "\u0003\u0002\u0002\u0002&\'\t\u0002\u0002\u0002\'\u0003\u0003\u0002",
    "\u0002\u0002(2\u0005\b\u0005\u0002)+\u0005\u0012\n\u0002*,\u0007\u000e",
    "\u0002\u0002+*\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003",
    "\u0002\u0002\u0002-)\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002",
    "/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000202\u0003\u0002\u0002",
    "\u00021(\u0003\u0002\u0002\u00021-\u0003\u0002\u0002\u000225\u0003\u0002",
    "\u0002\u000231\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u00024\u0005",
    "\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u00026=\u0007\u0007\u0002",
    "\u000279\u0005\u0012\n\u00028:\u0007\u000e\u0002\u000298\u0003\u0002",
    "\u0002\u00029:\u0003\u0002\u0002\u0002:<\u0003\u0002\u0002\u0002;7\u0003",
    "\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    "=>\u0003\u0002\u0002\u0002>@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002@F\u0007\b\u0002\u0002AC\u0005\u0012\n\u0002BD\u0007\u000e\u0002",
    "\u0002CB\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DF\u0003\u0002",
    "\u0002\u0002E6\u0003\u0002\u0002\u0002EA\u0003\u0002\u0002\u0002F\u0007",
    "\u0003\u0002\u0002\u0002GH\u0007\u0017\u0002\u0002HI\u0007!\u0002\u0002",
    "IJ\u0005\n\u0006\u0002J\t\u0003\u0002\u0002\u0002KU\u0007\f\u0002\u0002",
    "LM\u0005\u000e\b\u0002MN\u0007\u0006\u0002\u0002NP\u0003\u0002\u0002",
    "\u0002OL\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002\u0002\u0002SQ\u0003",
    "\u0002\u0002\u0002TV\u0005\u000e\b\u0002UQ\u0003\u0002\u0002\u0002U",
    "V\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WZ\u0007\r\u0002",
    "\u0002XY\u0007\u0005\u0002\u0002Y[\u0005\u0010\t\u0002ZX\u0003\u0002",
    "\u0002\u0002Z[\u0003\u0002\u0002\u0002[_\u0003\u0002\u0002\u0002\\`",
    "\u0005\u0006\u0004\u0002]^\u0007\u0011\u0002\u0002^`\u0005$\u0013\u0002",
    "_\\\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`\u000b\u0003\u0002",
    "\u0002\u0002ab\u0005$\u0013\u0002bc\u0007\u0006\u0002\u0002ce\u0003",
    "\u0002\u0002\u0002da\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002",
    "fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002",
    "\u0002hf\u0003\u0002\u0002\u0002ik\u0005$\u0013\u0002jf\u0003\u0002",
    "\u0002\u0002jk\u0003\u0002\u0002\u0002k\r\u0003\u0002\u0002\u0002lo",
    "\u0007!\u0002\u0002mn\u0007\u0005\u0002\u0002np\u0005\u0010\t\u0002",
    "om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u000f\u0003\u0002",
    "\u0002\u0002qr\u0007!\u0002\u0002r\u0011\u0003\u0002\u0002\u0002sz\u0005",
    "\u001e\u0010\u0002tz\u0005\u0014\u000b\u0002uz\u0005\u0016\f\u0002v",
    "z\u0005\u0018\r\u0002wz\u0005\u001a\u000e\u0002xz\u0005\u001c\u000f",
    "\u0002ys\u0003\u0002\u0002\u0002yt\u0003\u0002\u0002\u0002yu\u0003\u0002",
    "\u0002\u0002yv\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002\u0002yx\u0003",
    "\u0002\u0002\u0002z\u0013\u0003\u0002\u0002\u0002{|\u0005$\u0013\u0002",
    "|}\u0007\n\u0002\u0002}~\u0005$\u0013\u0002~\u0015\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0005$\u0013\u0002\u0080\u0017\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0007\u0018\u0002\u0002\u0082\u0083\u0007\f\u0002",
    "\u0002\u0083\u0084\u0005\u001e\u0010\u0002\u0084\u0085\u0007\u000e\u0002",
    "\u0002\u0085\u0086\u0005$\u0013\u0002\u0086\u0087\u0007\u000e\u0002",
    "\u0002\u0087\u0088\u0005\u0012\n\u0002\u0088\u0089\u0007\r\u0002\u0002",
    "\u0089\u008a\u0005\u0006\u0004\u0002\u008a\u0019\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0007\u0018\u0002\u0002\u008c\u008e\u0007\f\u0002\u0002",
    "\u008d\u008f\u0005\u0010\t\u0002\u008e\u008d\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0007!\u0002\u0002\u0091\u0092\u0007\u0005\u0002\u0002",
    "\u0092\u0093\u0005$\u0013\u0002\u0093\u0094\u0007\r\u0002\u0002\u0094",
    "\u0095\u0005\u0006\u0004\u0002\u0095\u001b\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0007 \u0002\u0002\u0097\u0098\u0005$\u0013\u0002\u0098\u001d",
    "\u0003\u0002\u0002\u0002\u0099\u009b\t\u0003\u0002\u0002\u009a\u009c",
    "\u0005\u0010\t\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u00a2\u0003\u0002\u0002\u0002\u009d\u009f",
    "\t\u0003\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2",
    "\u0005\u0010\t\u0002\u00a1\u0099\u0003\u0002\u0002\u0002\u00a1\u009e",
    "\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4",
    "\u0007!\u0002\u0002\u00a4\u00a5\u0007\n\u0002\u0002\u00a5\u00a6\u0005",
    "$\u0013\u0002\u00a6\u001f\u0003\u0002\u0002\u0002\u00a7\u00b1\u0007",
    "\u0007\u0002\u0002\u00a8\u00a9\u0005\"\u0012\u0002\u00a9\u00aa\u0007",
    "\u0006\u0002\u0002\u00aa\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a8\u0003",
    "\u0002\u0002\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003",
    "\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003",
    "\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b2\u0005",
    "\"\u0012\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003",
    "\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b4\u0007",
    "\b\u0002\u0002\u00b4!\u0003\u0002\u0002\u0002\u00b5\u00ba\u0007!\u0002",
    "\u0002\u00b6\u00b7\t\u0004\u0002\u0002\u00b7\u00b8\u0007\u0005\u0002",
    "\u0002\u00b8\u00ba\u0005$\u0013\u0002\u00b9\u00b5\u0003\u0002\u0002",
    "\u0002\u00b9\u00b6\u0003\u0002\u0002\u0002\u00ba#\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\b\u0013\u0001\u0002\u00bc\u00bd\u0005\u0002\u0002",
    "\u0002\u00bd\u00be\u0005$\u0013\u0013\u00be\u00e0\u0003\u0002\u0002",
    "\u0002\u00bf\u00e0\u0007!\u0002\u0002\u00c0\u00e0\u0007\"\u0002\u0002",
    "\u00c1\u00e0\u0007#\u0002\u0002\u00c2\u00cc\u0007\u000f\u0002\u0002",
    "\u00c3\u00c4\u0005$\u0013\u0002\u00c4\u00c5\u0007\u0006\u0002\u0002",
    "\u00c5\u00c7\u0003\u0002\u0002\u0002\u00c6\u00c3\u0003\u0002\u0002\u0002",
    "\u00c7\u00ca\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002",
    "\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00cd\u0005$\u0013\u0002",
    "\u00cc\u00c8\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002",
    "\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u00e0\u0007\u0010\u0002\u0002",
    "\u00cf\u00e0\u0007%\u0002\u0002\u00d0\u00e0\u0007$\u0002\u0002\u00d1",
    "\u00e0\u0007&\u0002\u0002\u00d2\u00e0\u0005 \u0011\u0002\u00d3\u00d4",
    "\u0007\u001c\u0002\u0002\u00d4\u00d5\u0005\u0010\t\u0002\u00d5\u00d6",
    "\u0007\f\u0002\u0002\u00d6\u00d7\u0005\f\u0007\u0002\u00d7\u00d8\u0007",
    "\r\u0002\u0002\u00d8\u00e0\u0003\u0002\u0002\u0002\u00d9\u00e0\u0005",
    "\u0010\t\u0002\u00da\u00e0\u0005\n\u0006\u0002\u00db\u00dc\u0007\f\u0002",
    "\u0002\u00dc\u00dd\u0005$\u0013\u0002\u00dd\u00de\u0007\r\u0002\u0002",
    "\u00de\u00e0\u0003\u0002\u0002\u0002\u00df\u00bb\u0003\u0002\u0002\u0002",
    "\u00df\u00bf\u0003\u0002\u0002\u0002\u00df\u00c0\u0003\u0002\u0002\u0002",
    "\u00df\u00c1\u0003\u0002\u0002\u0002\u00df\u00c2\u0003\u0002\u0002\u0002",
    "\u00df\u00cf\u0003\u0002\u0002\u0002\u00df\u00d0\u0003\u0002\u0002\u0002",
    "\u00df\u00d1\u0003\u0002\u0002\u0002\u00df\u00d2\u0003\u0002\u0002\u0002",
    "\u00df\u00d3\u0003\u0002\u0002\u0002\u00df\u00d9\u0003\u0002\u0002\u0002",
    "\u00df\u00da\u0003\u0002\u0002\u0002\u00df\u00db\u0003\u0002\u0002\u0002",
    "\u00e0\u00f3\u0003\u0002\u0002\u0002\u00e1\u00e2\f\b\u0002\u0002\u00e2",
    "\u00e3\t\u0005\u0002\u0002\u00e3\u00f2\u0005$\u0013\t\u00e4\u00e5\f",
    "\u000e\u0002\u0002\u00e5\u00e6\u0007\u000f\u0002\u0002\u00e6\u00e7\u0005",
    "$\u0013\u0002\u00e7\u00e8\u0007\u0010\u0002\u0002\u00e8\u00f2\u0003",
    "\u0002\u0002\u0002\u00e9\u00ea\f\t\u0002\u0002\u00ea\u00eb\u0007\f\u0002",
    "\u0002\u00eb\u00ec\u0005\f\u0007\u0002\u00ec\u00ed\u0007\r\u0002\u0002",
    "\u00ed\u00f2\u0003\u0002\u0002\u0002\u00ee\u00ef\f\u0005\u0002\u0002",
    "\u00ef\u00f0\u0007\t\u0002\u0002\u00f0\u00f2\u0007!\u0002\u0002\u00f1",
    "\u00e1\u0003\u0002\u0002\u0002\u00f1\u00e4\u0003\u0002\u0002\u0002\u00f1",
    "\u00e9\u0003\u0002\u0002\u0002\u00f1\u00ee\u0003\u0002\u0002\u0002\u00f2",
    "\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3",
    "\u00f4\u0003\u0002\u0002\u0002\u00f4%\u0003\u0002\u0002\u0002\u00f5",
    "\u00f3\u0003\u0002\u0002\u0002\u001e+/139=CEQUZ_fjoy\u008e\u009b\u009e",
    "\u00a1\u00ad\u00b1\u00b9\u00c8\u00cc\u00df\u00f1\u00f3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "':'", "','", "'{'", "'}'", "'.'", 
                     "'='", "'-'", "'('", "')'", "';'", "'['", "']'", "'=>'", 
                     "'+'", "'?'", "'*'", "'const'", "'delete'", "'fn'", 
                     "'for'", "'get'", "'head'", "'let'", "'new'", "'patch'", 
                     "'post'", "'put'", "'ret'" ];

var symbolicNames = [ null, "SL_CMT", "WS", "COLON", "COMMA", "CURLY_L", 
                      "CURLY_R", "DOT", "EQUALS", "MINUS", "PAREN_L", "PAREN_R", 
                      "SEMI", "SQUARE_L", "SQUARE_R", "ARROW", "PLUS", "QUESTION", 
                      "TIMES", "CONST", "DELETE", "FN", "FOR", "GET", "HEAD", 
                      "LET", "NEW", "PATCH", "POST", "PUT", "RET", "ID", 
                      "INT", "DOUBLE", "RAW_STRING", "STRING", "REGEX_LITERAL" ];

var ruleNames =  [ "requestMethod", "compilationUnit", "block", "functionDecl", 
                   "functionBody", "argSpec", "paramSpec", "type", "stmt", 
                   "assignStmt", "exprStmt", "forStmt", "foreachStmt", "retStmt", 
                   "vardeclStmt", "dictionaryLiteral", "dictionaryPair", 
                   "expr" ];

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
RapierScriptParser.SL_CMT = 1;
RapierScriptParser.WS = 2;
RapierScriptParser.COLON = 3;
RapierScriptParser.COMMA = 4;
RapierScriptParser.CURLY_L = 5;
RapierScriptParser.CURLY_R = 6;
RapierScriptParser.DOT = 7;
RapierScriptParser.EQUALS = 8;
RapierScriptParser.MINUS = 9;
RapierScriptParser.PAREN_L = 10;
RapierScriptParser.PAREN_R = 11;
RapierScriptParser.SEMI = 12;
RapierScriptParser.SQUARE_L = 13;
RapierScriptParser.SQUARE_R = 14;
RapierScriptParser.ARROW = 15;
RapierScriptParser.PLUS = 16;
RapierScriptParser.QUESTION = 17;
RapierScriptParser.TIMES = 18;
RapierScriptParser.CONST = 19;
RapierScriptParser.DELETE = 20;
RapierScriptParser.FN = 21;
RapierScriptParser.FOR = 22;
RapierScriptParser.GET = 23;
RapierScriptParser.HEAD = 24;
RapierScriptParser.LET = 25;
RapierScriptParser.NEW = 26;
RapierScriptParser.PATCH = 27;
RapierScriptParser.POST = 28;
RapierScriptParser.PUT = 29;
RapierScriptParser.RET = 30;
RapierScriptParser.ID = 31;
RapierScriptParser.INT = 32;
RapierScriptParser.DOUBLE = 33;
RapierScriptParser.RAW_STRING = 34;
RapierScriptParser.STRING = 35;
RapierScriptParser.REGEX_LITERAL = 36;

RapierScriptParser.RULE_requestMethod = 0;
RapierScriptParser.RULE_compilationUnit = 1;
RapierScriptParser.RULE_block = 2;
RapierScriptParser.RULE_functionDecl = 3;
RapierScriptParser.RULE_functionBody = 4;
RapierScriptParser.RULE_argSpec = 5;
RapierScriptParser.RULE_paramSpec = 6;
RapierScriptParser.RULE_type = 7;
RapierScriptParser.RULE_stmt = 8;
RapierScriptParser.RULE_assignStmt = 9;
RapierScriptParser.RULE_exprStmt = 10;
RapierScriptParser.RULE_forStmt = 11;
RapierScriptParser.RULE_foreachStmt = 12;
RapierScriptParser.RULE_retStmt = 13;
RapierScriptParser.RULE_vardeclStmt = 14;
RapierScriptParser.RULE_dictionaryLiteral = 15;
RapierScriptParser.RULE_dictionaryPair = 16;
RapierScriptParser.RULE_expr = 17;

function RequestMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RapierScriptParser.RULE_requestMethod;
    return this;
}

RequestMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RequestMethodContext.prototype.constructor = RequestMethodContext;

RequestMethodContext.prototype.HEAD = function() {
    return this.getToken(RapierScriptParser.HEAD, 0);
};

RequestMethodContext.prototype.GET = function() {
    return this.getToken(RapierScriptParser.GET, 0);
};

RequestMethodContext.prototype.POST = function() {
    return this.getToken(RapierScriptParser.POST, 0);
};

RequestMethodContext.prototype.PUT = function() {
    return this.getToken(RapierScriptParser.PUT, 0);
};

RequestMethodContext.prototype.PATCH = function() {
    return this.getToken(RapierScriptParser.PATCH, 0);
};

RequestMethodContext.prototype.DELETE = function() {
    return this.getToken(RapierScriptParser.DELETE, 0);
};

RequestMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterRequestMethod(this);
	}
};

RequestMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitRequestMethod(this);
	}
};

RequestMethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitRequestMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RapierScriptParser.RequestMethodContext = RequestMethodContext;

RapierScriptParser.prototype.requestMethod = function() {

    var localctx = new RequestMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RapierScriptParser.RULE_requestMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.DELETE) | (1 << RapierScriptParser.GET) | (1 << RapierScriptParser.HEAD) | (1 << RapierScriptParser.PATCH) | (1 << RapierScriptParser.POST) | (1 << RapierScriptParser.PUT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

CompilationUnitContext.prototype.functionDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionDeclContext);
    } else {
        return this.getTypedRuleContext(FunctionDeclContext,i);
    }
};

CompilationUnitContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

CompilationUnitContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.SEMI);
    } else {
        return this.getToken(RapierScriptParser.SEMI, i);
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
    this.enterRule(localctx, 2, RapierScriptParser.RULE_compilationUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (RapierScriptParser.CURLY_L - 5)) | (1 << (RapierScriptParser.PAREN_L - 5)) | (1 << (RapierScriptParser.SQUARE_L - 5)) | (1 << (RapierScriptParser.CONST - 5)) | (1 << (RapierScriptParser.DELETE - 5)) | (1 << (RapierScriptParser.FN - 5)) | (1 << (RapierScriptParser.FOR - 5)) | (1 << (RapierScriptParser.GET - 5)) | (1 << (RapierScriptParser.HEAD - 5)) | (1 << (RapierScriptParser.LET - 5)) | (1 << (RapierScriptParser.NEW - 5)) | (1 << (RapierScriptParser.PATCH - 5)) | (1 << (RapierScriptParser.POST - 5)) | (1 << (RapierScriptParser.PUT - 5)) | (1 << (RapierScriptParser.RET - 5)) | (1 << (RapierScriptParser.ID - 5)) | (1 << (RapierScriptParser.INT - 5)) | (1 << (RapierScriptParser.DOUBLE - 5)) | (1 << (RapierScriptParser.RAW_STRING - 5)) | (1 << (RapierScriptParser.STRING - 5)) | (1 << (RapierScriptParser.REGEX_LITERAL - 5)))) !== 0)) {
            this.state = 47;
            switch(this._input.LA(1)) {
            case RapierScriptParser.FN:
                this.state = 38;
                this.functionDecl();
                break;
            case RapierScriptParser.CURLY_L:
            case RapierScriptParser.PAREN_L:
            case RapierScriptParser.SQUARE_L:
            case RapierScriptParser.CONST:
            case RapierScriptParser.DELETE:
            case RapierScriptParser.FOR:
            case RapierScriptParser.GET:
            case RapierScriptParser.HEAD:
            case RapierScriptParser.LET:
            case RapierScriptParser.NEW:
            case RapierScriptParser.PATCH:
            case RapierScriptParser.POST:
            case RapierScriptParser.PUT:
            case RapierScriptParser.RET:
            case RapierScriptParser.ID:
            case RapierScriptParser.INT:
            case RapierScriptParser.DOUBLE:
            case RapierScriptParser.RAW_STRING:
            case RapierScriptParser.STRING:
            case RapierScriptParser.REGEX_LITERAL:
                this.state = 43; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 39;
                		this.stmt();
                		this.state = 41;
                		_la = this._input.LA(1);
                		if(_la===RapierScriptParser.SEMI) {
                		    this.state = 40;
                		    this.match(RapierScriptParser.SEMI);
                		}

                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 45; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
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

BlockContext.prototype.CURLY_L = function() {
    return this.getToken(RapierScriptParser.CURLY_L, 0);
};

BlockContext.prototype.CURLY_R = function() {
    return this.getToken(RapierScriptParser.CURLY_R, 0);
};

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

BlockContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.SEMI);
    } else {
        return this.getToken(RapierScriptParser.SEMI, i);
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
    this.enterRule(localctx, 4, RapierScriptParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.state = 67;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 52;
            this.match(RapierScriptParser.CURLY_L);
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (RapierScriptParser.CURLY_L - 5)) | (1 << (RapierScriptParser.PAREN_L - 5)) | (1 << (RapierScriptParser.SQUARE_L - 5)) | (1 << (RapierScriptParser.CONST - 5)) | (1 << (RapierScriptParser.DELETE - 5)) | (1 << (RapierScriptParser.FOR - 5)) | (1 << (RapierScriptParser.GET - 5)) | (1 << (RapierScriptParser.HEAD - 5)) | (1 << (RapierScriptParser.LET - 5)) | (1 << (RapierScriptParser.NEW - 5)) | (1 << (RapierScriptParser.PATCH - 5)) | (1 << (RapierScriptParser.POST - 5)) | (1 << (RapierScriptParser.PUT - 5)) | (1 << (RapierScriptParser.RET - 5)) | (1 << (RapierScriptParser.ID - 5)) | (1 << (RapierScriptParser.INT - 5)) | (1 << (RapierScriptParser.DOUBLE - 5)) | (1 << (RapierScriptParser.RAW_STRING - 5)) | (1 << (RapierScriptParser.STRING - 5)) | (1 << (RapierScriptParser.REGEX_LITERAL - 5)))) !== 0)) {
                this.state = 53;
                this.stmt();
                this.state = 55;
                _la = this._input.LA(1);
                if(_la===RapierScriptParser.SEMI) {
                    this.state = 54;
                    this.match(RapierScriptParser.SEMI);
                }

                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 62;
            this.match(RapierScriptParser.CURLY_R);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 63;
            this.stmt();
            this.state = 65;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 64;
                this.match(RapierScriptParser.SEMI);

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

FunctionDeclContext.prototype.FN = function() {
    return this.getToken(RapierScriptParser.FN, 0);
};

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
    this.enterRule(localctx, 6, RapierScriptParser.RULE_functionDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(RapierScriptParser.FN);
        this.state = 70;
        localctx.name = this.match(RapierScriptParser.ID);
        this.state = 71;
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

FunctionBodyContext.prototype.PAREN_L = function() {
    return this.getToken(RapierScriptParser.PAREN_L, 0);
};

FunctionBodyContext.prototype.PAREN_R = function() {
    return this.getToken(RapierScriptParser.PAREN_R, 0);
};

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

FunctionBodyContext.prototype.COLON = function() {
    return this.getToken(RapierScriptParser.COLON, 0);
};

FunctionBodyContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FunctionBodyContext.prototype.ARROW = function() {
    return this.getToken(RapierScriptParser.ARROW, 0);
};

FunctionBodyContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FunctionBodyContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.COMMA);
    } else {
        return this.getToken(RapierScriptParser.COMMA, i);
    }
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
    this.enterRule(localctx, 8, RapierScriptParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(RapierScriptParser.PAREN_L);
        this.state = 83;
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.ID) {
            this.state = 79;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 74;
                    this.paramSpec();
                    this.state = 75;
                    this.match(RapierScriptParser.COMMA); 
                }
                this.state = 81;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
            }

            this.state = 82;
            this.paramSpec();
        }

        this.state = 85;
        this.match(RapierScriptParser.PAREN_R);
        this.state = 88;
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.COLON) {
            this.state = 86;
            this.match(RapierScriptParser.COLON);
            this.state = 87;
            this.type();
        }

        this.state = 93;
        switch(this._input.LA(1)) {
        case RapierScriptParser.CURLY_L:
        case RapierScriptParser.PAREN_L:
        case RapierScriptParser.SQUARE_L:
        case RapierScriptParser.CONST:
        case RapierScriptParser.DELETE:
        case RapierScriptParser.FOR:
        case RapierScriptParser.GET:
        case RapierScriptParser.HEAD:
        case RapierScriptParser.LET:
        case RapierScriptParser.NEW:
        case RapierScriptParser.PATCH:
        case RapierScriptParser.POST:
        case RapierScriptParser.PUT:
        case RapierScriptParser.RET:
        case RapierScriptParser.ID:
        case RapierScriptParser.INT:
        case RapierScriptParser.DOUBLE:
        case RapierScriptParser.RAW_STRING:
        case RapierScriptParser.STRING:
        case RapierScriptParser.REGEX_LITERAL:
            this.state = 90;
            this.block();
            break;
        case RapierScriptParser.ARROW:
            this.state = 91;
            this.match(RapierScriptParser.ARROW);
            this.state = 92;
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

ArgSpecContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.COMMA);
    } else {
        return this.getToken(RapierScriptParser.COMMA, i);
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
    this.enterRule(localctx, 10, RapierScriptParser.RULE_argSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        _la = this._input.LA(1);
        if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (RapierScriptParser.CURLY_L - 5)) | (1 << (RapierScriptParser.PAREN_L - 5)) | (1 << (RapierScriptParser.SQUARE_L - 5)) | (1 << (RapierScriptParser.DELETE - 5)) | (1 << (RapierScriptParser.GET - 5)) | (1 << (RapierScriptParser.HEAD - 5)) | (1 << (RapierScriptParser.NEW - 5)) | (1 << (RapierScriptParser.PATCH - 5)) | (1 << (RapierScriptParser.POST - 5)) | (1 << (RapierScriptParser.PUT - 5)) | (1 << (RapierScriptParser.ID - 5)) | (1 << (RapierScriptParser.INT - 5)) | (1 << (RapierScriptParser.DOUBLE - 5)) | (1 << (RapierScriptParser.RAW_STRING - 5)) | (1 << (RapierScriptParser.STRING - 5)) | (1 << (RapierScriptParser.REGEX_LITERAL - 5)))) !== 0)) {
            this.state = 100;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 95;
                    this.expr(0);
                    this.state = 96;
                    this.match(RapierScriptParser.COMMA); 
                }
                this.state = 102;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
            }

            this.state = 103;
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

ParamSpecContext.prototype.COLON = function() {
    return this.getToken(RapierScriptParser.COLON, 0);
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
    this.enterRule(localctx, 12, RapierScriptParser.RULE_paramSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(RapierScriptParser.ID);
        this.state = 109;
        _la = this._input.LA(1);
        if(_la===RapierScriptParser.COLON) {
            this.state = 107;
            this.match(RapierScriptParser.COLON);
            this.state = 108;
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
    this.enterRule(localctx, 14, RapierScriptParser.RULE_type);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
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
    this.enterRule(localctx, 16, RapierScriptParser.RULE_stmt);
    try {
        this.state = 119;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 113;
            this.vardeclStmt();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 114;
            this.assignStmt();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 115;
            this.exprStmt();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 116;
            this.forStmt();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 117;
            this.foreachStmt();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 118;
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

AssignStmtContext.prototype.EQUALS = function() {
    return this.getToken(RapierScriptParser.EQUALS, 0);
};

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
    this.enterRule(localctx, 18, RapierScriptParser.RULE_assignStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        localctx.left = this.expr(0);
        this.state = 122;
        this.match(RapierScriptParser.EQUALS);
        this.state = 123;
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
    this.enterRule(localctx, 20, RapierScriptParser.RULE_exprStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
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

ForStmtContext.prototype.FOR = function() {
    return this.getToken(RapierScriptParser.FOR, 0);
};

ForStmtContext.prototype.PAREN_L = function() {
    return this.getToken(RapierScriptParser.PAREN_L, 0);
};

ForStmtContext.prototype.vardeclStmt = function() {
    return this.getTypedRuleContext(VardeclStmtContext,0);
};

ForStmtContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.SEMI);
    } else {
        return this.getToken(RapierScriptParser.SEMI, i);
    }
};


ForStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ForStmtContext.prototype.stmt = function() {
    return this.getTypedRuleContext(StmtContext,0);
};

ForStmtContext.prototype.PAREN_R = function() {
    return this.getToken(RapierScriptParser.PAREN_R, 0);
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
    this.enterRule(localctx, 22, RapierScriptParser.RULE_forStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(RapierScriptParser.FOR);
        this.state = 128;
        this.match(RapierScriptParser.PAREN_L);
        this.state = 129;
        this.vardeclStmt();
        this.state = 130;
        this.match(RapierScriptParser.SEMI);
        this.state = 131;
        this.expr(0);
        this.state = 132;
        this.match(RapierScriptParser.SEMI);
        this.state = 133;
        this.stmt();
        this.state = 134;
        this.match(RapierScriptParser.PAREN_R);
        this.state = 135;
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

ForeachStmtContext.prototype.FOR = function() {
    return this.getToken(RapierScriptParser.FOR, 0);
};

ForeachStmtContext.prototype.PAREN_L = function() {
    return this.getToken(RapierScriptParser.PAREN_L, 0);
};

ForeachStmtContext.prototype.ID = function() {
    return this.getToken(RapierScriptParser.ID, 0);
};

ForeachStmtContext.prototype.COLON = function() {
    return this.getToken(RapierScriptParser.COLON, 0);
};

ForeachStmtContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ForeachStmtContext.prototype.PAREN_R = function() {
    return this.getToken(RapierScriptParser.PAREN_R, 0);
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
    this.enterRule(localctx, 24, RapierScriptParser.RULE_foreachStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(RapierScriptParser.FOR);
        this.state = 138;
        this.match(RapierScriptParser.PAREN_L);
        this.state = 140;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        if(la_===1) {
            this.state = 139;
            this.type();

        }
        this.state = 142;
        this.match(RapierScriptParser.ID);
        this.state = 143;
        this.match(RapierScriptParser.COLON);
        this.state = 144;
        this.expr(0);
        this.state = 145;
        this.match(RapierScriptParser.PAREN_R);
        this.state = 146;
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

RetStmtContext.prototype.RET = function() {
    return this.getToken(RapierScriptParser.RET, 0);
};

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
    this.enterRule(localctx, 26, RapierScriptParser.RULE_retStmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(RapierScriptParser.RET);
        this.state = 149;
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

VardeclStmtContext.prototype.EQUALS = function() {
    return this.getToken(RapierScriptParser.EQUALS, 0);
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
    this.enterRule(localctx, 28, RapierScriptParser.RULE_vardeclStmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.state = 151;
            _la = this._input.LA(1);
            if(!(_la===RapierScriptParser.CONST || _la===RapierScriptParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 153;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 152;
                this.type();

            }
            break;

        case 2:
            this.state = 156;
            _la = this._input.LA(1);
            if(_la===RapierScriptParser.CONST || _la===RapierScriptParser.LET) {
                this.state = 155;
                _la = this._input.LA(1);
                if(!(_la===RapierScriptParser.CONST || _la===RapierScriptParser.LET)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this.consume();
                }
            }

            this.state = 158;
            this.type();
            break;

        }
        this.state = 161;
        this.match(RapierScriptParser.ID);
        this.state = 162;
        this.match(RapierScriptParser.EQUALS);
        this.state = 163;
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

DictionaryLiteralContext.prototype.CURLY_L = function() {
    return this.getToken(RapierScriptParser.CURLY_L, 0);
};

DictionaryLiteralContext.prototype.CURLY_R = function() {
    return this.getToken(RapierScriptParser.CURLY_R, 0);
};

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

DictionaryLiteralContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.COMMA);
    } else {
        return this.getToken(RapierScriptParser.COMMA, i);
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
    this.enterRule(localctx, 30, RapierScriptParser.RULE_dictionaryLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(RapierScriptParser.CURLY_L);
        this.state = 175;
        _la = this._input.LA(1);
        if(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (RapierScriptParser.ID - 31)) | (1 << (RapierScriptParser.RAW_STRING - 31)) | (1 << (RapierScriptParser.STRING - 31)))) !== 0)) {
            this.state = 171;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 166;
                    this.dictionaryPair();
                    this.state = 167;
                    this.match(RapierScriptParser.COMMA); 
                }
                this.state = 173;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
            }

            this.state = 174;
            this.dictionaryPair();
        }

        this.state = 177;
        this.match(RapierScriptParser.CURLY_R);
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

DictionaryPairContext.prototype.COLON = function() {
    return this.getToken(RapierScriptParser.COLON, 0);
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
    this.enterRule(localctx, 32, RapierScriptParser.RULE_dictionaryPair);
    var _la = 0; // Token type
    try {
        this.state = 183;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.match(RapierScriptParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            _la = this._input.LA(1);
            if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (RapierScriptParser.ID - 31)) | (1 << (RapierScriptParser.RAW_STRING - 31)) | (1 << (RapierScriptParser.STRING - 31)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 181;
            this.match(RapierScriptParser.COLON);
            this.state = 182;
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


function BinaryExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryExprContext.prototype = Object.create(ExprContext.prototype);
BinaryExprContext.prototype.constructor = BinaryExprContext;

RapierScriptParser.BinaryExprContext = BinaryExprContext;

BinaryExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

BinaryExprContext.prototype.TIMES = function() {
    return this.getToken(RapierScriptParser.TIMES, 0);
};

BinaryExprContext.prototype.PLUS = function() {
    return this.getToken(RapierScriptParser.PLUS, 0);
};

BinaryExprContext.prototype.MINUS = function() {
    return this.getToken(RapierScriptParser.MINUS, 0);
};

BinaryExprContext.prototype.QUESTION = function() {
    return this.getToken(RapierScriptParser.QUESTION, 0);
};
BinaryExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterBinaryExpr(this);
	}
};

BinaryExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitBinaryExpr(this);
	}
};

BinaryExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitBinaryExpr(this);
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
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RequestExprContext.prototype = Object.create(ExprContext.prototype);
RequestExprContext.prototype.constructor = RequestExprContext;

RapierScriptParser.RequestExprContext = RequestExprContext;

RequestExprContext.prototype.requestMethod = function() {
    return this.getTypedRuleContext(RequestMethodContext,0);
};

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


function DoubleExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DoubleExprContext.prototype = Object.create(ExprContext.prototype);
DoubleExprContext.prototype.constructor = DoubleExprContext;

RapierScriptParser.DoubleExprContext = DoubleExprContext;

DoubleExprContext.prototype.DOUBLE = function() {
    return this.getToken(RapierScriptParser.DOUBLE, 0);
};
DoubleExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterDoubleExpr(this);
	}
};

DoubleExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitDoubleExpr(this);
	}
};

DoubleExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitDoubleExpr(this);
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

IndexerExprContext.prototype.SQUARE_L = function() {
    return this.getToken(RapierScriptParser.SQUARE_L, 0);
};

IndexerExprContext.prototype.SQUARE_R = function() {
    return this.getToken(RapierScriptParser.SQUARE_R, 0);
};

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


function IntegerExprContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerExprContext.prototype = Object.create(ExprContext.prototype);
IntegerExprContext.prototype.constructor = IntegerExprContext;

RapierScriptParser.IntegerExprContext = IntegerExprContext;

IntegerExprContext.prototype.INT = function() {
    return this.getToken(RapierScriptParser.INT, 0);
};
IntegerExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.enterIntegerExpr(this);
	}
};

IntegerExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RapierScriptListener ) {
        listener.exitIntegerExpr(this);
	}
};

IntegerExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RapierScriptVisitor ) {
        return visitor.visitIntegerExpr(this);
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

MemberExprContext.prototype.DOT = function() {
    return this.getToken(RapierScriptParser.DOT, 0);
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

ArrayLiteralExprContext.prototype.SQUARE_L = function() {
    return this.getToken(RapierScriptParser.SQUARE_L, 0);
};

ArrayLiteralExprContext.prototype.SQUARE_R = function() {
    return this.getToken(RapierScriptParser.SQUARE_R, 0);
};

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

ArrayLiteralExprContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RapierScriptParser.COMMA);
    } else {
        return this.getToken(RapierScriptParser.COMMA, i);
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

NewExprContext.prototype.NEW = function() {
    return this.getToken(RapierScriptParser.NEW, 0);
};

NewExprContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

NewExprContext.prototype.PAREN_L = function() {
    return this.getToken(RapierScriptParser.PAREN_L, 0);
};

NewExprContext.prototype.argSpec = function() {
    return this.getTypedRuleContext(ArgSpecContext,0);
};

NewExprContext.prototype.PAREN_R = function() {
    return this.getToken(RapierScriptParser.PAREN_R, 0);
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

NestedExprContext.prototype.PAREN_L = function() {
    return this.getToken(RapierScriptParser.PAREN_L, 0);
};

NestedExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

NestedExprContext.prototype.PAREN_R = function() {
    return this.getToken(RapierScriptParser.PAREN_R, 0);
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

CallExprContext.prototype.PAREN_L = function() {
    return this.getToken(RapierScriptParser.PAREN_L, 0);
};

CallExprContext.prototype.argSpec = function() {
    return this.getTypedRuleContext(ArgSpecContext,0);
};

CallExprContext.prototype.PAREN_R = function() {
    return this.getToken(RapierScriptParser.PAREN_R, 0);
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



RapierScriptParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, RapierScriptParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            localctx = new RequestExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 186;
            this.requestMethod();
            this.state = 187;
            this.expr(17);
            break;

        case 2:
            localctx = new IdExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 189;
            this.match(RapierScriptParser.ID);
            break;

        case 3:
            localctx = new IntegerExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 190;
            this.match(RapierScriptParser.INT);
            break;

        case 4:
            localctx = new DoubleExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 191;
            this.match(RapierScriptParser.DOUBLE);
            break;

        case 5:
            localctx = new ArrayLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 192;
            this.match(RapierScriptParser.SQUARE_L);
            this.state = 202;
            _la = this._input.LA(1);
            if(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & ((1 << (RapierScriptParser.CURLY_L - 5)) | (1 << (RapierScriptParser.PAREN_L - 5)) | (1 << (RapierScriptParser.SQUARE_L - 5)) | (1 << (RapierScriptParser.DELETE - 5)) | (1 << (RapierScriptParser.GET - 5)) | (1 << (RapierScriptParser.HEAD - 5)) | (1 << (RapierScriptParser.NEW - 5)) | (1 << (RapierScriptParser.PATCH - 5)) | (1 << (RapierScriptParser.POST - 5)) | (1 << (RapierScriptParser.PUT - 5)) | (1 << (RapierScriptParser.ID - 5)) | (1 << (RapierScriptParser.INT - 5)) | (1 << (RapierScriptParser.DOUBLE - 5)) | (1 << (RapierScriptParser.RAW_STRING - 5)) | (1 << (RapierScriptParser.STRING - 5)) | (1 << (RapierScriptParser.REGEX_LITERAL - 5)))) !== 0)) {
                this.state = 198;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 193;
                        this.expr(0);
                        this.state = 194;
                        this.match(RapierScriptParser.COMMA); 
                    }
                    this.state = 200;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
                }

                this.state = 201;
                this.expr(0);
            }

            this.state = 204;
            this.match(RapierScriptParser.SQUARE_R);
            break;

        case 6:
            localctx = new StringLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 205;
            this.match(RapierScriptParser.STRING);
            break;

        case 7:
            localctx = new RawStringLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 206;
            this.match(RapierScriptParser.RAW_STRING);
            break;

        case 8:
            localctx = new RegexLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 207;
            this.match(RapierScriptParser.REGEX_LITERAL);
            break;

        case 9:
            localctx = new DictionaryLiteralExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 208;
            this.dictionaryLiteral();
            break;

        case 10:
            localctx = new NewExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 209;
            this.match(RapierScriptParser.NEW);
            this.state = 210;
            this.type();
            this.state = 211;
            this.match(RapierScriptParser.PAREN_L);
            this.state = 212;
            this.argSpec();
            this.state = 213;
            this.match(RapierScriptParser.PAREN_R);
            break;

        case 11:
            localctx = new TypeExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 215;
            this.type();
            break;

        case 12:
            localctx = new FunctionExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 216;
            this.functionBody();
            break;

        case 13:
            localctx = new NestedExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 217;
            this.match(RapierScriptParser.PAREN_L);
            this.state = 218;
            this.expr(0);
            this.state = 219;
            this.match(RapierScriptParser.PAREN_R);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 241;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 239;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BinaryExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 224;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RapierScriptParser.MINUS) | (1 << RapierScriptParser.PLUS) | (1 << RapierScriptParser.QUESTION) | (1 << RapierScriptParser.TIMES))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 225;
                    this.expr(7);
                    break;

                case 2:
                    localctx = new IndexerExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    localctx.target = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 227;
                    this.match(RapierScriptParser.SQUARE_L);
                    this.state = 228;
                    localctx.indexer = this.expr(0);
                    this.state = 229;
                    this.match(RapierScriptParser.SQUARE_R);
                    break;

                case 3:
                    localctx = new CallExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 232;
                    this.match(RapierScriptParser.PAREN_L);
                    this.state = 233;
                    this.argSpec();
                    this.state = 234;
                    this.match(RapierScriptParser.PAREN_R);
                    break;

                case 4:
                    localctx = new MemberExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, RapierScriptParser.RULE_expr);
                    this.state = 236;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 237;
                    this.match(RapierScriptParser.DOT);
                    this.state = 238;
                    this.match(RapierScriptParser.ID);
                    break;

                } 
            }
            this.state = 243;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
	case 17:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RapierScriptParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RapierScriptParser = RapierScriptParser;
