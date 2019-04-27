"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
function toArrayReducer(arr, item, index) {
    if (index === 0) {
        return [item];
    }
    arr.push(item);
    return arr;
}
function toArray() {
    return reduce_1.reduce(toArrayReducer, []);
}
exports.toArray = toArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9BcnJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9idWlsZC9pbnRlcm1lZGlhdGVzL21lcmdlZF9hc3NldHMvZGVidWcvbWVyZ2VEZWJ1Z0Fzc2V0cy9vdXQvYXBwL3Ruc19tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy90b0FycmF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQWtDO0FBR2xDLFNBQVMsY0FBYyxDQUFJLEdBQVEsRUFBRSxJQUFPLEVBQUUsS0FBYTtJQUN6RCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjtJQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFFRCxTQUFnQixPQUFPO0lBQ3JCLE9BQU8sZUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQTZCLENBQUM7QUFDaEUsQ0FBQztBQUZELDBCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnLi9yZWR1Y2UnO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZnVuY3Rpb24gdG9BcnJheVJlZHVjZXI8VD4oYXJyOiBUW10sIGl0ZW06IFQsIGluZGV4OiBudW1iZXIpIHtcbiAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgcmV0dXJuIFtpdGVtXTtcbiAgfVxuICBhcnIucHVzaChpdGVtKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXk8VD4oKTogT3BlcmF0b3JGdW5jdGlvbjxULCBUW10+IHtcbiAgcmV0dXJuIHJlZHVjZSh0b0FycmF5UmVkdWNlciwgW10pIGFzIE9wZXJhdG9yRnVuY3Rpb248VCwgVFtdPjtcbn1cbiJdfQ==