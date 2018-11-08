"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __importDefault(require("rxjs"));
var fs_1 = __importDefault(require("fs"));
var languageWording_json_1 = __importDefault(require("./toWorkOn/languageWording.json"));
var Transformer = /** @class */ (function () {
    function Transformer() {
    }
    Transformer.jsonToTxt = function (delimiter) {
        if (delimiter === void 0) { delimiter = '\t'; }
        var prop$ = rxjs_1.default.from(Object.entries(languageWording_json_1.default));
        var fileContent = '';
        prop$.subscribe(function (v) { return fileContent = fileContent + (v[0] + "\t" + v[1] + "\r"); });
        fs_1.default.writeFile('./result/languageWording.txt', fileContent, function (err) {
            if (err) {
                console.error(err);
                return;
            }
            ;
            console.log("File has been created");
        });
    };
    return Transformer;
}());
exports.Transformer = Transformer;
