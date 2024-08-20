var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var array = [
    [
        [
            [
                [
                    [1, 2, 3, 4, 5],
                    [6, 7, 8, 9, 10]
                ],
                [
                    [11, 12, 13, 14, 15],
                    [16, 17, 18, 19, 20]
                ]
            ],
            [
                [
                    [21, 22, 23, 24, 25],
                    [26, 27, 28, 29, 30]
                ],
                [
                    [31, 32, 33, 34, 35],
                    [36, 37, 38, 39, 40]
                ]
            ]
        ],
        [
            [
                [
                    [41, 42, 43, 44, 45],
                    [46, 47, 48, 49, 50]
                ],
                [
                    [51, 52, 53, 54, 55],
                    [56, 57, 58, 59, 60]
                ]
            ],
            [
                [
                    [61, 62, 63, 64, 65],
                    [66, 67, 68, 69, 70]
                ],
                [
                    [71, 72, 73, 74, 75],
                    [76, 77, 78, 79, 80]
                ]
            ]
        ]
    ],
    [
        [
            [
                [
                    [81, 82, 83, 84, 85],
                    [86, 87, 88, 89, 90]
                ],
                [
                    [91, 92, 93, 94, 95],
                    [96, 97, 98, 99, 100]
                ]
            ],
            [
                [
                    [101, 102, 103, 104, 105],
                    [106, 107, 108, 109, 110]
                ],
                [
                    [111, 112, 113, 114, 115],
                    [116, 117, 118, 119, 120]
                ]
            ]
        ],
        [
            [
                [
                    [121, 122, 123, 124, 125],
                    [126, 127, 128, 129, 130]
                ],
                [
                    [131, 132, 133, 134, 135],
                    [136, 137, 138, 139, 140]
                ]
            ],
            [
                [
                    [141, 142, 143, 144, 145],
                    [146, 147, 148, 149, 150]
                ],
                [
                    [151, 152, 153, 154, 155],
                    [156, 157, 158, 159, 160]
                ]
            ]
        ]
    ]
];
var ArrayProblems = /** @class */ (function () {
    function ArrayProblems() {
    }
    ArrayProblems.prototype.flatten_array = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var flatten_arr, i, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        flatten_arr = [];
                        i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(i < arr.length)) return [3 /*break*/, 5];
                        if (!Array.isArray(arr[i])) return [3 /*break*/, 3];
                        _b = (_a = flatten_arr).concat;
                        return [4 /*yield*/, this.flatten_array(arr[i])];
                    case 2:
                        flatten_arr = _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        flatten_arr.push(arr[i]);
                        _c.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, flatten_arr];
                }
            });
        });
    };
    return ArrayProblems;
}());
var array_problems = new ArrayProblems();
Promise.all(([array_problems.flatten_array(array)]))
    .then(function (flatten_array) { return console.log(flatten_array); })
    .catch(function (err) { return console.error(err); });
