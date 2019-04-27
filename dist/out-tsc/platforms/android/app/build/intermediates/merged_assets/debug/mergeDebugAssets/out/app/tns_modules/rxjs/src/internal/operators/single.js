"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = require("../Subscriber");
var EmptyError_1 = require("../util/EmptyError");
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * items, notify of an IllegalArgumentException or NoSuchElementException respectively. If the source Observable
 * emits items but none match the specified predicate then `undefined` is emiited.
 *
 * ![](single.png)
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate or `undefined` when no items match.
 *
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return function (source) { return source.lift(new SingleOperator(predicate, source)); };
}
exports.single = single;
var SingleOperator = /** @class */ (function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = /** @class */ (function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.seenValue = false;
        _this.index = 0;
        return _this;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new EmptyError_1.EmptyError);
        }
    };
    return SingleSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm1zL2FuZHJvaWQvYXBwL2J1aWxkL2ludGVybWVkaWF0ZXMvbWVyZ2VkX2Fzc2V0cy9kZWJ1Zy9tZXJnZURlYnVnQXNzZXRzL291dC9hcHAvdG5zX21vZHVsZXMvcnhqcy9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3NpbmdsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSw0Q0FBMkM7QUFDM0MsaURBQWdEO0FBSWhEOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFJLFNBQXVFO0lBQy9GLE9BQU8sVUFBQyxNQUFxQixJQUFLLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQztBQUN2RixDQUFDO0FBRkQsd0JBRUM7QUFFRDtJQUNFLHdCQUFvQixTQUF1RSxFQUN2RSxNQUFzQjtRQUR0QixjQUFTLEdBQVQsU0FBUyxDQUE4RDtRQUN2RSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtJQUMxQyxDQUFDO0lBRUQsNkJBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztRQUN6QyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUVEOzs7O0dBSUc7QUFDSDtJQUFrQyxvQ0FBYTtJQUs3QywwQkFBWSxXQUF3QixFQUNoQixTQUF1RSxFQUN2RSxNQUFzQjtRQUYxQyxZQUdFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUhtQixlQUFTLEdBQVQsU0FBUyxDQUE4RDtRQUN2RSxZQUFNLEdBQU4sTUFBTSxDQUFnQjtRQU5sQyxlQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBTTFCLENBQUM7SUFFTywyQ0FBZ0IsR0FBeEIsVUFBeUIsS0FBUTtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRVMsZ0NBQUssR0FBZixVQUFnQixLQUFRO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFTyxrQ0FBTyxHQUFmLFVBQWdCLEtBQVEsRUFBRSxLQUFhO1FBQ3JDLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFUyxvQ0FBUyxHQUFuQjtRQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNsQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hFLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFsREQsQ0FBa0MsdUJBQVUsR0FrRDNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT3BlcmF0b3IgfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBFbXB0eUVycm9yIH0gZnJvbSAnLi4vdXRpbC9FbXB0eUVycm9yJztcblxuaW1wb3J0IHsgT2JzZXJ2ZXIsIE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgVGVhcmRvd25Mb2dpYyB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2luZ2xlIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBtYXRjaGVzIGEgc3BlY2lmaWVkXG4gKiBwcmVkaWNhdGUsIGlmIHRoYXQgT2JzZXJ2YWJsZSBlbWl0cyBvbmUgc3VjaCBpdGVtLiBJZiB0aGUgc291cmNlIE9ic2VydmFibGUgZW1pdHMgbW9yZSB0aGFuIG9uZSBzdWNoIGl0ZW0gb3Igbm9cbiAqIGl0ZW1zLCBub3RpZnkgb2YgYW4gSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uIG9yIE5vU3VjaEVsZW1lbnRFeGNlcHRpb24gcmVzcGVjdGl2ZWx5LiBJZiB0aGUgc291cmNlIE9ic2VydmFibGVcbiAqIGVtaXRzIGl0ZW1zIGJ1dCBub25lIG1hdGNoIHRoZSBzcGVjaWZpZWQgcHJlZGljYXRlIHRoZW4gYHVuZGVmaW5lZGAgaXMgZW1paXRlZC5cbiAqXG4gKiAhW10oc2luZ2xlLnBuZylcbiAqXG4gKiBAdGhyb3dzIHtFbXB0eUVycm9yfSBEZWxpdmVycyBhbiBFbXB0eUVycm9yIHRvIHRoZSBPYnNlcnZlcidzIGBlcnJvcmBcbiAqIGNhbGxiYWNrIGlmIHRoZSBPYnNlcnZhYmxlIGNvbXBsZXRlcyBiZWZvcmUgYW55IGBuZXh0YCBub3RpZmljYXRpb24gd2FzIHNlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgLSBBIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBldmFsdWF0ZSBpdGVtcyBlbWl0dGVkIGJ5IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZS5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VD59IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2luZ2xlIGl0ZW0gZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBtYXRjaGVzXG4gKiB0aGUgcHJlZGljYXRlIG9yIGB1bmRlZmluZWRgIHdoZW4gbm8gaXRlbXMgbWF0Y2guXG4gKlxuICogQG1ldGhvZCBzaW5nbGVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGU8VD4ocHJlZGljYXRlPzogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IGJvb2xlYW4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248VD4ge1xuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gc291cmNlLmxpZnQobmV3IFNpbmdsZU9wZXJhdG9yKHByZWRpY2F0ZSwgc291cmNlKSk7XG59XG5cbmNsYXNzIFNpbmdsZU9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByZWRpY2F0ZT86ICh2YWx1ZTogVCwgaW5kZXg6IG51bWJlciwgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PiBib29sZWFuLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZT86IE9ic2VydmFibGU8VD4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPiwgc291cmNlOiBhbnkpOiBUZWFyZG93bkxvZ2ljIHtcbiAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgU2luZ2xlU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnByZWRpY2F0ZSwgdGhpcy5zb3VyY2UpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgU2luZ2xlU3Vic2NyaWJlcjxUPiBleHRlbmRzIFN1YnNjcmliZXI8VD4ge1xuICBwcml2YXRlIHNlZW5WYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNpbmdsZVZhbHVlOiBUO1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBPYnNlcnZlcjxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwcmVkaWNhdGU/OiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4gYm9vbGVhbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VyY2U/OiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVNpbmdsZVZhbHVlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VlblZhbHVlKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKCdTZXF1ZW5jZSBjb250YWlucyBtb3JlIHRoYW4gb25lIGVsZW1lbnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWVuVmFsdWUgPSB0cnVlO1xuICAgICAgdGhpcy5zaW5nbGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleCsrO1xuXG4gICAgaWYgKHRoaXMucHJlZGljYXRlKSB7XG4gICAgICB0aGlzLnRyeU5leHQodmFsdWUsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBseVNpbmdsZVZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyeU5leHQodmFsdWU6IFQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMucHJlZGljYXRlKHZhbHVlLCBpbmRleCwgdGhpcy5zb3VyY2UpKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTaW5nbGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG5cbiAgICBpZiAodGhpcy5pbmRleCA+IDApIHtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQodGhpcy5zZWVuVmFsdWUgPyB0aGlzLnNpbmdsZVZhbHVlIDogdW5kZWZpbmVkKTtcbiAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uLmVycm9yKG5ldyBFbXB0eUVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==