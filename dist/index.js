'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
}

var defaultSendMessage = function (data) { return console.log('no SendMessage'); };
var defaultUIManagment = function (uiManagmentEvent, data) { return console.log('no UIManagment'); };
var defaultNotifications = function (notificationsEvent, data) {
    return console.log('no Notifications');
};
var defaultModules = function (notificationsEvent, data) { return console.log('no modules'); };

var eventList = {
    '00b2fcbe-f27f-437b-a0d5-91072d840ed3': 'ready',
    '29e75851-6cae-44f4-8a9c-f6489c4dca88': 'inactive',
    '11d10788-4789-11e3-9b0b-080027ab4d7b': 'rate',
    'bffaa961-9ad3-4ecd-9254-f9e2fc06f28c': 'notification',
    '7330d8fc-4c64-11e3-af49-080027ab4d7b': 'context',
    'd825476d-bc08-4038-9ecf-e6b2b267c7b8': 'click',
    '6819087d-a7d0-4c67-acd4-47d40b233cc9': 'mouse',
    '2bbff8e2-3c75-4f4b-bd61-c29017257c00': 'cardReady',
    '4e729f9a-0aa2-4d37-87d2-bed2b2b39c00': 'operatorStatus',
    'c189c2f1-43b6-424b-866b-03e562ba9d33': 'chatState',
    '409b58e1-595b-4c02-81be-3f31dfe4639d': 'geolocationTimeout',
    'b92e3bcc-44b5-4019-9594-54b69afdaf77': 'geolocationDenied',
};
var postFetch = function (body, url) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResponse, fetchResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(body),
                    })];
            case 1:
                fetchResponse = _a.sent();
                return [4 /*yield*/, fetchResponse.json()];
            case 2:
                fetchResult = _a.sent();
                return [2 /*return*/, fetchResult.result];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var postFetchWithHeaders = function (body, url) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResponse, fetchResult, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url, {
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        body: JSON.stringify(body),
                    })];
            case 1:
                fetchResponse = _a.sent();
                return [4 /*yield*/, fetchResponse.json()];
            case 2:
                fetchResult = _a.sent();
                return [2 /*return*/, fetchResult];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var eventsParser = function (activeEvents) {
    var events = {};
    activeEvents.forEach(function (activeEvent) {
        var eventName = eventList[activeEvent];
        events[eventName] = activeEvent;
    });
    return events;
};
var isDevice = function () { return window && window.innerWidth && window.innerWidth < 1025; };

var msgRegExpReplace = {
    links: {
        regexp: /href="event:/gim,
        replace: 'data-type="outbound" rel="noopener noreferrer" href="',
    },
    userLinks: {
        regexp: /<userlink([^>]*(?!data-request))?(data-request="([^"]+)?")?>(.*?)<\/userlink>/gim,
        replace: "<a class='request-userlink'$1 data-type='userlink' href='#'>$4</a>",
    },
    newPara: {
        regexp: / \(NEW_PARA\)|\(NEW_PARA\)/gim,
        replace: '',
    },
    newParaButtons: {
        regexp: / \(NEW_PARA\)(.*)|\(NEW_PARA\)(.*)/gim,
        replace: "<span class='para_as_buttons'>$1$2</span>",
    },
    userLinksAsButtons: {
        regexp: /<userlink([^>]*(?!data-request))?(data-request="([^"]+)?")?>(.*?)<\/userlink>/gim,
        replace: "<a class='request-userlink request-userlink_as_button'$1 data-type='userlink' href='#'>$4</a>",
    },
};
var links = msgRegExpReplace.links;
var userLinks = msgRegExpReplace.userLinks;
var userLinksAsButtons = msgRegExpReplace.userLinksAsButtons;
var newPara = msgRegExpReplace.newPara;
var newParaButtons = msgRegExpReplace.newParaButtons;
var msgPrepare = function (text, context) {
    if (/UserLinkAsButton/gim.test(context === null || context === void 0 ? void 0 : context.wcmd_show_mode)) {
        if (/\(NEW_PARA\)/gim.test(context === null || context === void 0 ? void 0 : context.wcmd_show_mode)) {
            return text
                .replace(links === null || links === void 0 ? void 0 : links.regexp, links === null || links === void 0 ? void 0 : links.replace)
                .replace(newParaButtons === null || newParaButtons === void 0 ? void 0 : newParaButtons.regexp, newParaButtons === null || newParaButtons === void 0 ? void 0 : newParaButtons.replace)
                .replace(userLinks === null || userLinks === void 0 ? void 0 : userLinks.regexp, userLinks === null || userLinks === void 0 ? void 0 : userLinks.replace);
        }
        else {
            return text
                .replace(links === null || links === void 0 ? void 0 : links.regexp, links === null || links === void 0 ? void 0 : links.replace)
                .replace(newPara === null || newPara === void 0 ? void 0 : newPara.regexp, newPara === null || newPara === void 0 ? void 0 : newPara.replace)
                .replace(userLinksAsButtons === null || userLinksAsButtons === void 0 ? void 0 : userLinksAsButtons.regexp, userLinksAsButtons === null || userLinksAsButtons === void 0 ? void 0 : userLinksAsButtons.replace);
        }
    }
    return text
        .replace(links === null || links === void 0 ? void 0 : links.regexp, links === null || links === void 0 ? void 0 : links.replace)
        .replace(newPara === null || newPara === void 0 ? void 0 : newPara.regexp, newPara === null || newPara === void 0 ? void 0 : newPara.replace)
        .replace(userLinks === null || userLinks === void 0 ? void 0 : userLinks.regexp, userLinks === null || userLinks === void 0 ? void 0 : userLinks.replace);
};

var resultControl = function (module, result) { return __awaiter(void 0, void 0, void 0, function () {
    var text, data, wflagHideReply, _a, data;
    var _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                if (!(((_b = result === null || result === void 0 ? void 0 : result.text) === null || _b === void 0 ? void 0 : _b.value) && (result === null || result === void 0 ? void 0 : result.context))) return [3 /*break*/, 3];
                text = msgPrepare(result.text.value, result.context);
                data = {
                    text: text,
                    sender: 'request',
                    showRate: (_c = result === null || result === void 0 ? void 0 : result.text) === null || _c === void 0 ? void 0 : _c.showRate,
                    module: module.name,
                };
                wflagHideReply = ((_d = result.context) === null || _d === void 0 ? void 0 : _d.wflag_hide_reply) !== '1';
                _a = wflagHideReply && text;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, module.uiDispatcher('sendMessage', data)];
            case 1:
                _a = (_f.sent());
                _f.label = 2;
            case 2:
                _f.label = 3;
            case 3:
                if (!((_e = result === null || result === void 0 ? void 0 : result.text) === null || _e === void 0 ? void 0 : _e.showRate)) return [3 /*break*/, 5];
                data = {
                    uiManagmentEvent: 'showRate',
                    data: true,
                };
                return [4 /*yield*/, module.uiDispatcher('uiManagment', data)];
            case 4:
                _f.sent();
                _f.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };

var announcements = function (module, announcements) {
    if (announcements.length > 0)
        return;
    announcements.forEach(function (message) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, resultControl(module, message.result)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); });
};

var notifications = function (module, notificationsRequestResult) {
    var randomMsg = notificationsRequestResult.randomMsg, notificationsSettings = __rest(notificationsRequestResult, ["randomMsg"]);
    module.uiDispatcher('notifications', { notificationEvent: 'addMessages', data: randomMsg });
    module.uiDispatcher('notifications', { notificationEvent: 'addSettings', data: notificationsSettings });
};

var setInfo = function (module, data) {
    var cuid = data.cuid, events = data.events;
    module.info.cuid = cuid;
    if (!events)
        return;
    module.info.events = eventsParser(Object.keys(events));
};
var reset = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, module.moduleDispatcher('chatInit', data)];
            case 1:
                _a.sent();
                module.uiDispatcher('modules', {
                    modulesEvent: 'updateModule',
                    data: { moduleName: module.name, config: { info: module.info, api: module.api } },
                });
                return [2 /*return*/];
        }
    });
}); };
var chatInit = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var uuid, cuid, events, infApiUrl, clientConfig, url, body, result, info;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                uuid = module.info.uuid;
                cuid = (_a = data === null || data === void 0 ? void 0 : data.moduleInfo) === null || _a === void 0 ? void 0 : _a.cuid;
                events = (_b = data === null || data === void 0 ? void 0 : data.moduleInfo) === null || _b === void 0 ? void 0 : _b.events;
                infApiUrl = module.api.infApiUrl;
                clientConfig = data.clientConfig;
                url = infApiUrl + "/Chat.init";
                body = {
                    uuid: uuid,
                    cuid: cuid || '',
                    context: __assign(__assign({}, clientConfig), { isDevice: isDevice() }),
                };
                return [4 /*yield*/, postFetch(body, url)];
            case 1:
                result = _c.sent();
                info = (result === null || result === void 0 ? void 0 : result.cuid) === cuid
                    ? {
                        cuid: cuid || '',
                        events: events,
                    }
                    : {
                        cuid: result.cuid,
                        events: result.events,
                    };
                module.moduleDispatcher('setInfo', info);
                !((result === null || result === void 0 ? void 0 : result.cuid) === cuid) && module.moduleDispatcher('chatEvent', { eventName: 'ready', context: {} });
                return [2 /*return*/, resultControl(module, result)];
        }
    });
}); };
var chatRequest = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var cuid, infApiUrl, text, context, url, body, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cuid = module.info.cuid;
                infApiUrl = module.api.infApiUrl;
                text = data.text, context = data.context;
                url = infApiUrl + "/Chat.request";
                body = {
                    cuid: cuid,
                    text: text,
                    context: __assign(__assign({}, context), { isDevice: isDevice() }),
                };
                return [4 /*yield*/, postFetch(body, url)];
            case 1:
                result = _a.sent();
                resultControl(module, result);
                return [2 /*return*/];
        }
    });
}); };
var chatEvent = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, cuid, events, infApiUrl, text, eventName, context, url, body, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = module.info, cuid = _a.cuid, events = _a.events;
                infApiUrl = module.api.infApiUrl;
                text = '';
                eventName = data.eventName, context = data.context;
                if (eventName === 'geolocationDenied')
                    text = 'LOCATION DENIED';
                if (eventName === 'geolocationTimeout')
                    text = 'REQUEST TIMEOUT ERROR';
                url = infApiUrl + "/Chat.event";
                body = {
                    cuid: cuid,
                    euid: events[eventName] || '00b2fcbe-f27f-437b-a0d5-91072d840ed3',
                    text: text,
                    context: __assign(__assign({}, context), { isDevice: isDevice() }),
                };
                return [4 /*yield*/, postFetch(body, url)];
            case 1:
                result = _b.sent();
                console.log(result);
                resultControl(module, result);
                return [2 /*return*/];
        }
    });
}); };
var chatRate = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var cuid, infApiUrl, rating, url, body, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cuid = module.info.cuid;
                infApiUrl = module.api.infApiUrl;
                rating = data.rating;
                url = infApiUrl + "/Chat.rate";
                body = {
                    cuid: cuid,
                    rating: rating,
                    context: {
                        isDevice: isDevice(),
                    },
                };
                return [4 /*yield*/, postFetchWithHeaders(body, url)];
            case 1:
                result = (_a.sent()).result;
                return [2 /*return*/, resultControl(module, result)];
        }
    });
}); };
var chatTrack = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var cuid, infApiUrl, url, args, action, body, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cuid = module.info.cuid;
                infApiUrl = module.api.infApiUrl;
                url = infApiUrl + "/Chat.track";
                args = data.args, action = data.action;
                body = {
                    cuid: cuid,
                    arguments: args,
                    action: action,
                };
                return [4 /*yield*/, postFetch(body, url)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, resultControl(module, result)];
        }
    });
}); };
var geoLocationRequest = function (module) { return __awaiter(void 0, void 0, void 0, function () {
    var geoLocationApiUrl, request, content, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                geoLocationApiUrl = module.api.geoLocationApiUrl;
                return [4 /*yield*/, fetch(geoLocationApiUrl)];
            case 1:
                request = _a.sent();
                return [4 /*yield*/, request.json()];
            case 2:
                content = _a.sent();
                return [2 /*return*/, content];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var liveChatOperatorsCheckRequest = function (module) { return __awaiter(void 0, void 0, void 0, function () {
    var liveChatOperatorsApiUrl, request, content, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                liveChatOperatorsApiUrl = module.api.liveChatOperatorsApiUrl;
                return [4 /*yield*/, fetch(liveChatOperatorsApiUrl)];
            case 1:
                request = _a.sent();
                return [4 /*yield*/, request.json()];
            case 2:
                content = _a.sent();
                return [2 /*return*/, content];
            case 3:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var notificationRequest = function (module) { return __awaiter(void 0, void 0, void 0, function () {
    var notificationsApiUrl, request, content, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                notificationsApiUrl = module.api.notificationsApiUrl;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(notificationsApiUrl)];
            case 2:
                request = _a.sent();
                return [4 /*yield*/, request.json()];
            case 3:
                content = _a.sent();
                return [2 /*return*/, notifications(module, content)];
            case 4:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var notificationDisplay = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var notificationsApiUrl, messageId, url, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                notificationsApiUrl = module.api.notificationsApiUrl;
                messageId = data.messageId;
                url = notificationsApiUrl + "?a=show&id=" + messageId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, fetch(url)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var chatUpdate = function (module) { return __awaiter(void 0, void 0, void 0, function () {
    var cuid, chatUpdateApiUrl, url, body, answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cuid = module.info.cuid;
                chatUpdateApiUrl = module.api.chatUpdateApiUrl;
                url = chatUpdateApiUrl + "/Chat.update";
                body = {
                    cuid: cuid,
                };
                return [4 /*yield*/, postFetch(body, url)];
            case 1:
                answers = (_a.sent()).answers;
                return [2 /*return*/, answers];
        }
    });
}); };
var chatTimerAnnouncementsRequest = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var cuid, chatTimerAnnouncementsApiUrl, userActive, body, answers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cuid = module.info.cuid;
                chatTimerAnnouncementsApiUrl = module.api.chatTimerAnnouncementsApiUrl;
                userActive = data.userActive;
                body = {
                    cuid: cuid,
                    user_active: userActive,
                };
                return [4 /*yield*/, postFetch(body, chatTimerAnnouncementsApiUrl)];
            case 1:
                answers = (_a.sent()).answers;
                return [2 /*return*/, announcements(module, answers)];
        }
    });
}); };

var _a = { "env": { "INF_API_URL": "", "GEO_LACATION_API_URL": "", "LIVE_CHAT_OPERATORS_API_URL": "", "NOTIFICATIONS_API_URL": "", "CHAT_TIMER_ANNOUNCEMENTS_API_URL": "", "CHAT_UPDATE_API_URL": "" } }.env, INF_API_URL = _a.INF_API_URL, GEO_LACATION_API_URL = _a.GEO_LACATION_API_URL, LIVE_CHAT_OPERATORS_API_URL = _a.LIVE_CHAT_OPERATORS_API_URL, NOTIFICATIONS_API_URL = _a.NOTIFICATIONS_API_URL, CHAT_TIMER_ANNOUNCEMENTS_API_URL = _a.CHAT_TIMER_ANNOUNCEMENTS_API_URL, CHAT_UPDATE_API_URL = _a.CHAT_UPDATE_API_URL;
var DialogLanguageModule = /** @class */ (function () {
    function DialogLanguageModule(config) {
        var _this = this;
        this.moduleDispatcher = function (event, data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        _a = event === 'chatInit' && data;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 1:
                        _a = (_p.sent());
                        _p.label = 2;
                    case 2:
                        _b = event === 'chatEvent' && data;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 3:
                        _b = (_p.sent());
                        _p.label = 4;
                    case 4:
                        _c = event === 'chatRequest' && data;
                        if (!_c) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 5:
                        _c = (_p.sent());
                        _p.label = 6;
                    case 6:
                        _d = event === 'setInfo' && data;
                        if (!_d) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 7:
                        _d = (_p.sent());
                        _p.label = 8;
                    case 8:
                        _e = event === 'chatRate' && data;
                        if (!_e) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 9:
                        _e = (_p.sent());
                        _p.label = 10;
                    case 10:
                        _f = event === 'chatTrack' && data;
                        if (!_f) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 11:
                        _f = (_p.sent());
                        _p.label = 12;
                    case 12:
                        _g = event === 'chatUpdate';
                        if (!_g) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.moduleEvents[event](this)];
                    case 13:
                        _g = (_p.sent());
                        _p.label = 14;
                    case 14:
                        _h = event === 'chatTimerAnnouncementsRequest' &&
                            data;
                        if (!_h) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 15:
                        _h = (_p.sent());
                        _p.label = 16;
                    case 16:
                        _j = event === 'notificationDisplay' && data;
                        if (!_j) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 17:
                        _j = (_p.sent());
                        _p.label = 18;
                    case 18:
                        _k = event === 'notificationRequest';
                        if (!_k) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.moduleEvents[event](this)];
                    case 19:
                        _k = (_p.sent());
                        _p.label = 20;
                    case 20:
                        _l = event === 'geoLocationRequest';
                        if (!_l) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.moduleEvents[event](this)];
                    case 21:
                        _l = (_p.sent());
                        _p.label = 22;
                    case 22:
                        _m = event === 'liveChatOperatorsCheckRequest';
                        if (!_m) return [3 /*break*/, 24];
                        return [4 /*yield*/, this.moduleEvents[event](this)];
                    case 23:
                        _m = (_p.sent());
                        _p.label = 24;
                    case 24:
                        _o = event === 'reset';
                        if (!_o) return [3 /*break*/, 26];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 25:
                        _o = (_p.sent());
                        _p.label = 26;
                    case 26:
                        return [2 /*return*/];
                }
            });
        }); };
        this.uiDispatcher = function (event, data) {
            event === 'sendMessage' && _this.uiEvents[event](data, _this.ckStore);
            event === 'uiManagment' &&
                _this.uiEvents[event](data.uiManagmentEvent, data.data, _this.ckStore);
            event === 'notifications' &&
                _this.uiEvents[event](data.notificationEvent, data.data, _this.ckStore);
            event === 'modules' && _this.uiEvents[event](data.modulesEvent, data.data, _this.ckStore);
        };
        var info = config.info, api = config.api, moduleEvents = config.moduleEvents, uiEvents = config.uiEvents, ckStore = config.ckStore;
        this.name = 'dialogLanguage';
        this.ckStore = ckStore;
        this.info = {
            cuid: '',
            uuid: info.uuid,
            events: {},
        };
        this.api = {
            infApiUrl: (api === null || api === void 0 ? void 0 : api.infApiUrl) || INF_API_URL || '',
            geoLocationApiUrl: (api === null || api === void 0 ? void 0 : api.geoLocationApiUrl) || GEO_LACATION_API_URL || '',
            liveChatOperatorsApiUrl: (api === null || api === void 0 ? void 0 : api.liveChatOperatorsApiUrl) || LIVE_CHAT_OPERATORS_API_URL + "=" + document.URL || "",
            notificationsApiUrl: (api === null || api === void 0 ? void 0 : api.notificationsApiUrl) || "" + NOTIFICATIONS_API_URL + this.info.uuid + ".json" || "",
            chatTimerAnnouncementsApiUrl: (api === null || api === void 0 ? void 0 : api.chatTimerAnnouncementsApiUrl) || CHAT_TIMER_ANNOUNCEMENTS_API_URL || '',
            chatUpdateApiUrl: (api === null || api === void 0 ? void 0 : api.chatUpdateApiUrl) || CHAT_UPDATE_API_URL || '',
        };
        this.uiEvents = {
            sendMessage: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.sendMessage) || defaultSendMessage,
            uiManagment: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.uiManagment) || defaultUIManagment,
            notifications: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.notifications) || defaultNotifications,
            modules: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.modules) || defaultModules,
        };
        this.moduleEvents = {
            setInfo: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.setInfo) || setInfo,
            chatInit: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatInit) || chatInit,
            chatEvent: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatEvent) || chatEvent,
            chatRequest: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatRequest) || chatRequest,
            chatRate: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatRate) || chatRate,
            chatTrack: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatTrack) || chatTrack,
            geoLocationRequest: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.geoLocationRequest) || geoLocationRequest,
            liveChatOperatorsCheckRequest: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.liveChatOperatorsCheckRequest) || liveChatOperatorsCheckRequest,
            notificationRequest: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.notificationRequest) || notificationRequest,
            notificationDisplay: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.notificationDisplay) || notificationDisplay,
            chatUpdate: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatUpdate) || chatUpdate,
            chatTimerAnnouncementsRequest: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatTimerAnnouncementsRequest) || chatTimerAnnouncementsRequest,
            reset: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.reset) || reset,
        };
    }
    return DialogLanguageModule;
}());

var ckModuleInit = function (config) { return new DialogLanguageModule(config); };

exports.default = ckModuleInit;
//# sourceMappingURL=index.js.map
