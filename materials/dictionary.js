// 清音
const kanaToRomajiClear = {
    "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
    "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
    "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
    "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko",
    "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
    "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so",
    "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
    "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to",
    "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
    "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no",
    "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
    "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho",
    "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
    "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo",
    "や": "ya", "ゆ": "yu", "よ": "yo", "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
    "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
    "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro",
    "わ": "wa", "を": "wo", "ん": "n",
    "ワ": "wa", "ヲ": "wo", "ン": "n"
};

// 浊音
const kanaToRomajiVoiced = {
    "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
    "ガ": "ga", "ギ": "gi", "グ": "gu", "ゲ": "ge", "ゴ": "go",
    "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
    "ザ": "za", "ジ": "ji", "ズ": "zu", "ゼ": "ze", "ゾ": "zo",
    "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
    "ダ": "da", "ヂ": "ji", "ヅ": "zu", "デ": "de", "ド": "do",
    "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
    "バ": "ba", "ビ": "bi", "ブ": "bu", "ベ": "be", "ボ": "bo",
    "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po",
    "パ": "pa", "ピ": "pi", "プ": "pu", "ペ": "pe", "ポ": "po"
};

// 拗音
const kanaToRomajiContracted = {
    "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo",
    "キャ": "kya", "キュ": "kyu", "キョ": "kyo",
    "しゃ": "sha", "しゅ": "shu", "しょ": "sho",
    "シャ": "sha", "シュ": "shu", "ショ": "sho",
    "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho",
    "チャ": "cha", "チュ": "chu", "チョ": "cho",
    "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo",
    "ニャ": "nya", "ニュ": "nyu", "ニョ": "nyo",
    "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo",
    "ヒャ": "hya", "ヒュ": "hyu", "ヒョ": "hyo",
    "みゃ": "mya", "みゅ": "myu", "みょ": "myo",
    "ミャ": "mya", "ミュ": "myu", "ミョ": "myo",
    "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo",
    "リャ": "rya", "リュ": "ryu", "リョ": "ryo",
    "ぎゃ": "gya", "ぎゅ": "gyu", "ぎょ": "gyo",
    "ギャ": "gya", "ギュ": "gyu", "ギョ": "gyo",
    "じゃ": "ja", "じゅ": "ju", "じょ": "jo",
    "ジャ": "ja", "ジュ": "ju", "ジョ": "jo",
    "びゃ": "bya", "びゅ": "byu", "びょ": "byo",
    "ビャ": "bya", "ビュ": "byu", "ビョ": "byo",
    "ぴゃ": "pya", "ぴゅ": "pyu", "ぴょ": "pyo",
    "ピャ": "pya", "ピュ": "pyu", "ピョ": "pyo"
};