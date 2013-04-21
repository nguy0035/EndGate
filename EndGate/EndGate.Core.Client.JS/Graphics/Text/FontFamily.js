var EndGate;
(function (EndGate) {
    (function (Core) {
        (function (Graphics) {
            (function (Text) {
                (function (FontFamily) {
                    FontFamily._map = [];
                    FontFamily._map[0] = "Antiqua";
                    FontFamily.Antiqua = 0;
                    FontFamily._map[1] = "Arial";
                    FontFamily.Arial = 1;
                    FontFamily._map[2] = "Avqest";
                    FontFamily.Avqest = 2;
                    FontFamily._map[3] = "Blackletter";
                    FontFamily.Blackletter = 3;
                    FontFamily._map[4] = "Calibri";
                    FontFamily.Calibri = 4;
                    FontFamily._map[5] = "ComicSans";
                    FontFamily.ComicSans = 5;
                    FontFamily._map[6] = "Courier";
                    FontFamily.Courier = 6;
                    FontFamily._map[7] = "Decorative";
                    FontFamily.Decorative = 7;
                    FontFamily._map[8] = "Fraktur";
                    FontFamily.Fraktur = 8;
                    FontFamily._map[9] = "Frosty";
                    FontFamily.Frosty = 9;
                    FontFamily._map[10] = "Garamond";
                    FontFamily.Garamond = 10;
                    FontFamily._map[11] = "Georgia";
                    FontFamily.Georgia = 11;
                    FontFamily._map[12] = "Helvetica";
                    FontFamily.Helvetica = 12;
                    FontFamily._map[13] = "Impact";
                    FontFamily.Impact = 13;
                    FontFamily._map[14] = "Minion";
                    FontFamily.Minion = 14;
                    FontFamily._map[15] = "Modern";
                    FontFamily.Modern = 15;
                    FontFamily._map[16] = "Monospace";
                    FontFamily.Monospace = 16;
                    FontFamily._map[17] = "Palatino";
                    FontFamily.Palatino = 17;
                    FontFamily._map[18] = "Roman";
                    FontFamily.Roman = 18;
                    FontFamily._map[19] = "Script";
                    FontFamily.Script = 19;
                    FontFamily._map[20] = "Swiss";
                    FontFamily.Swiss = 20;
                    FontFamily._map[21] = "TimesNewRoman";
                    FontFamily.TimesNewRoman = 21;
                    FontFamily._map[22] = "Verdana";
                    FontFamily.Verdana = 22;
                })(Text.FontFamily || (Text.FontFamily = {}));
                var FontFamily = Text.FontFamily;
                ;
                var FontFamilyHelper = (function () {
                    function FontFamilyHelper() { }
                    FontFamilyHelper._Initialize = function _Initialize() {
                        FontFamilyHelper._families = ({
                        });
                        for(var family in FontFamily) {
                            if(family !== "_map") {
                                FontFamilyHelper._families[FontFamily[family]] = family;
                            }
                        }
                        FontFamilyHelper._families[FontFamily["TimesNewRoman"]] = "Times New Roman";
                    };
                    FontFamilyHelper.Get = function Get(family) {
                        return FontFamilyHelper._families[family];
                    };
                    return FontFamilyHelper;
                })();
                Text.FontFamilyHelper = FontFamilyHelper;                
                FontFamilyHelper._Initialize();
            })(Graphics.Text || (Graphics.Text = {}));
            var Text = Graphics.Text;
        })(Core.Graphics || (Core.Graphics = {}));
        var Graphics = Core.Graphics;
    })(EndGate.Core || (EndGate.Core = {}));
    var Core = EndGate.Core;
})(EndGate || (EndGate = {}));
//@ sourceMappingURL=FontFamily.js.map
