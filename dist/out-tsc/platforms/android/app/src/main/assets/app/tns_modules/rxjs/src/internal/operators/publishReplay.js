"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = require("../ReplaySubject");
var multicast_1 = require("./multicast");
/* tslint:enable:max-line-length */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
    return function (source) { return multicast_1.multicast(function () { return subject; }, selector)(source); };
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaFJlcGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9hc3NldHMvYXBwL3Ruc19tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL29wZXJhdG9ycy9wdWJsaXNoUmVwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0RBQWlEO0FBQ2pELHlDQUF3QztBQVF4QyxtQ0FBbUM7QUFFbkMsU0FBZ0IsYUFBYSxDQUFPLFVBQW1CLEVBQ25CLFVBQW1CLEVBQ25CLG1CQUE0RCxFQUM1RCxTQUF5QjtJQUUzRCxJQUFJLG1CQUFtQixJQUFJLE9BQU8sbUJBQW1CLEtBQUssVUFBVSxFQUFFO1FBQ3BFLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztLQUNqQztJQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sbUJBQW1CLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzdGLElBQU0sT0FBTyxHQUFHLElBQUksNkJBQWEsQ0FBSSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRXhFLE9BQU8sVUFBQyxNQUFxQixJQUFLLE9BQUEscUJBQVMsQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFQLENBQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQTZCLEVBQXRFLENBQXNFLENBQUM7QUFDM0csQ0FBQztBQWJELHNDQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJy4uL1JlcGxheVN1YmplY3QnO1xuaW1wb3J0IHsgbXVsdGljYXN0IH0gZnJvbSAnLi9tdWx0aWNhc3QnO1xuaW1wb3J0IHsgQ29ubmVjdGFibGVPYnNlcnZhYmxlIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9Db25uZWN0YWJsZU9ic2VydmFibGUnO1xuaW1wb3J0IHsgVW5hcnlGdW5jdGlvbiwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBPcGVyYXRvckZ1bmN0aW9uLCBTY2hlZHVsZXJMaWtlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoUmVwbGF5PFQ+KGJ1ZmZlclNpemU/OiBudW1iZXIsIHdpbmRvd1RpbWU/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD47XG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaFJlcGxheTxULCBSPihidWZmZXJTaXplPzogbnVtYmVyLCB3aW5kb3dUaW1lPzogbnVtYmVyLCBzZWxlY3Rvcj86IE9wZXJhdG9yRnVuY3Rpb248VCwgUj4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+O1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hSZXBsYXk8VD4oYnVmZmVyU2l6ZT86IG51bWJlciwgd2luZG93VGltZT86IG51bWJlciwgc2VsZWN0b3I/OiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD47XG4vKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcHVibGlzaFJlcGxheTxULCBSPihidWZmZXJTaXplPzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93VGltZT86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yT3JTY2hlZHVsZXI/OiBTY2hlZHVsZXJMaWtlIHwgT3BlcmF0b3JGdW5jdGlvbjxULCBSPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBVbmFyeUZ1bmN0aW9uPE9ic2VydmFibGU8VD4sIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxSPj4ge1xuXG4gIGlmIChzZWxlY3Rvck9yU2NoZWR1bGVyICYmIHR5cGVvZiBzZWxlY3Rvck9yU2NoZWR1bGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgc2NoZWR1bGVyID0gc2VsZWN0b3JPclNjaGVkdWxlcjtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdG9yID0gdHlwZW9mIHNlbGVjdG9yT3JTY2hlZHVsZXIgPT09ICdmdW5jdGlvbicgPyBzZWxlY3Rvck9yU2NoZWR1bGVyIDogdW5kZWZpbmVkO1xuICBjb25zdCBzdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8VD4oYnVmZmVyU2l6ZSwgd2luZG93VGltZSwgc2NoZWR1bGVyKTtcblxuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gbXVsdGljYXN0KCgpID0+IHN1YmplY3QsIHNlbGVjdG9yKShzb3VyY2UpIGFzIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxSPjtcbn1cbiJdfQ==