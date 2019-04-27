"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
function scalar(value) {
    var result = new Observable_1.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
exports.scalar = scalar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm1zL2FuZHJvaWQvYXBwL2J1aWxkL2ludGVybWVkaWF0ZXMvbWVyZ2VkX2Fzc2V0cy9kZWJ1Zy9tZXJnZURlYnVnQXNzZXRzL291dC9hcHAvdG5zX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9zY2FsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBMkM7QUFFM0MsU0FBZ0IsTUFBTSxDQUFJLEtBQVE7SUFDaEMsSUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBVSxDQUFJLFVBQUEsVUFBVTtRQUN6QyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLE1BQWMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzlCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFSRCx3QkFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxhcjxUPih2YWx1ZTogVCkge1xuICBjb25zdCByZXN1bHQgPSBuZXcgT2JzZXJ2YWJsZTxUPihzdWJzY3JpYmVyID0+IHtcbiAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgfSk7XG4gIHJlc3VsdC5faXNTY2FsYXIgPSB0cnVlO1xuICAocmVzdWx0IGFzIGFueSkudmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==