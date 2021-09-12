"use strict";
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
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var tasks = [
    {
        id: "1",
        name: "ALEXANDR22",
        priority: '1',
        status: '1',
        time_start: "2021-07-22T19:18:43.929Z",
        time_end: "2021-07-22T22:39:43.929Z",
        fact_time_start: "2021-07-22T19:18:43.929Z",
        fact_time_end: "2021-07-22T22:39:43.929Z"
    },
    {
        id: "2",
        name: "f",
        priority: '1',
        status: '1',
        time_start: "2021-07-22T19:18:43.929Z",
        time_end: "2021-07-22T19:59:13.929Z",
        fact_time_start: "2021-07-22T19:18:43.929Z",
        fact_time_end: "2021-07-22T19:59:13.929Z"
    },
    {
        id: "3",
        name: "asd",
        priority: '1',
        status: '1',
        time_start: "2021-07-22T19:18:43.929Z",
        time_end: "2021-07-22T20:20:43.929Z",
        fact_time_start: "2021-07-22T19:18:43.929Z",
        fact_time_end: "2021-07-22T20:18:43.929Z"
    },
    {
        id: "4",
        name: "qwe",
        priority: '1',
        status: '1',
        time_start: "2021-07-22T19:18:43.929Z",
        time_end: "2021-07-22T23:20:13.929Z",
        fact_time_start: "2021-07-22T19:18:43.929Z",
        fact_time_end: "2021-07-22T23:20:13.929Z"
    },
];
var users = [
    {
        id: "1",
        name: "Alex",
        email: "box-1@gmail.com",
        fullname: "Alex Aleksandrov_1",
        password: '123456',
        secretQuestion: "How old are you?",
        secretAnswer: "1"
    },
];
var TOKEN = 'asdpasdasmdqjdmcnjscklzcmzkdoasdal';
var server = (0, fastify_1.default)({});
var opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
server.get('/ping', opts, function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, { pong: 'it worked!!!!!!!!!!!!!' }];
    });
}); });
server.get('/tasks', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
    var name, newTasks;
    return __generator(this, function (_a) {
        name = request.query.name;
        newTasks = tasks.filter(function (task) { return task.name.match(name); });
        return [2 /*return*/, { tasks: newTasks }];
    });
}); });
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    var address, port, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, server.listen(3000)];
            case 1:
                _a.sent();
                address = server.server.address();
                port = typeof address === 'string' ? address : address === null || address === void 0 ? void 0 : address.port;
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                server.log.error(err_1);
                process.exit(1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
start();
// this.get("/tasks", (schema: any, request) => {
//   const {name} = request.queryParams;
//   let tasks = schema.tasks.all().models.filter((task: TaskType) => !!name ? task.name.match(name) : true);
//   return {list: tasks}
//   // return getRandomArg({list: tasks}, new Response(500, { some: 'header' }, { errors: {error: 'server '} }));
// });
// this.post("/tasks", (schema: any, request) => {
//   let attrs = JSON.parse(request.requestBody);
//   let errors: {[key: string]: string} = {};
//   for (let key of [
//     'name',
//     'status',
//     'priority',
//     'time_start',
//     'time_end',
//   ]) {
//     if(!attrs[key]) {
//       errors[key] = `${key} is required`
//     }
//   }
//   if (!isEmpty(errors)) return {errors};
//   const task = schema.tasks.create(attrs);
//   return schema.tasks.all();
// })
// this.put("/tasks/:id", (schema: any, request) => {
//   let id = request.params.id;
//   let attrs = JSON.parse(request.requestBody);
//   let errors: {[key: string]: string} = {};
//   for (let key of [
//     'name',
//     'status',
//     'priority',
//     'time_start',
//     'time_end',
//   ]) {
//     if(!attrs[key]) {
//       errors[key] = `${key} is required`
//     }
//   }
//   if (!isEmpty(errors)) return {errors};
//   schema.db.tasks.update(id, attrs);
//   return schema.tasks.all();
// });
// this.delete("/tasks/:id", (schema: any, request) => {
//   let id = request.params.id;
//   schema.db.tasks.remove(id);
//   return schema.tasks.all();
// });
// this.get("/users", (schema: any) => {
//   return schema.users.all();
// });
// this.get("/profile/:id", (schema: any, request) => {
//   let id = request.params.id;
//   let user = schema.users.find(id);
//   return user;
// });
// this.put("/profile/:id", (schema: any, request) => {
//   let id = request.params.id;
//   let attrs = JSON.parse(request.requestBody);
//   let errors: {[key: string]: string} = {};
//   for (let key of [
//     'name',
//     'email',
//     'fullname',
//     'password',
//     'secretQuestion',
//     'secretAnswer'
//   ]) {
//     if(!attrs[key]) {
//       errors[key] = `${key} is required`
//     }
//   }
//   if (!isEmpty(errors)) return {errors};
//   schema.db.users.update(id, attrs);
//   let user =  schema.users.find(id);
//   return user;
// });
// this.post("/login", (schema, request) => {
//   let {email, password} = JSON.parse(request.requestBody)
//   if (!email || !password) {
//     return {error: 'require email and password'};
//   }
//   const currentUser = schema.db.users.findBy({email});
//   if (currentUser === null) {
//     return {error: 'email not found'};
//   }
//   if (currentUser.password !== password) {
//     return {error: 'password incorrect'};
//   }
//   return {id: currentUser.id, token: TOKEN};
// })
// this.post("/register", (schema: any, request) => {
//   let attrs = JSON.parse(request.requestBody);
//   let errors: {[key: string]: string} = {};
//   for (let key of ['name','email','password','secretQuestion','secretAnswer']) {
//     if(!attrs[key]) {
//       errors[key] = `${key} is required`
//     }
//   }
//   if (!isEmpty(errors)) return {errors};
//   if (!validateEmail(attrs['email'])) {
//     return {errors: {email: 'incorrect email'}}
//   }
//   const user = schema.users.create(attrs);
//   return {id: user.id, token: TOKEN};
// })
// this.post("/forgot", (schema: any, request) => {
//   let email = JSON.parse(request.requestBody);
//   let user = schema.db.users.findBy({email});
//   if (user === null) {
//     return {error: 'email not found'};
//   }
//   return {id: user.id, secretQuestion: user.secretQuestion, secretAnswer: user.secretAnswer};
// })
