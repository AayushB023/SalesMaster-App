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
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * ![](mapTo.png)
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * ## Example
 * Map every click to the string 'Hi'
 * ```javascript
 * const clicks = fromEvent(document, 'click');
 * const greetings = clicks.pipe(mapTo('Hi'));
 * greetings.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
exports.mapTo = mapTo;
var MapToOperator = /** @class */ (function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = /** @class */ (function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwVG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vYXNzZXRzL2FwcC90bnNfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwVG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQTJDO0FBSTNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEJHO0FBQ0gsU0FBZ0IsS0FBSyxDQUFPLEtBQVE7SUFDbEMsT0FBTyxVQUFDLE1BQXFCLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXJDLENBQXFDLENBQUM7QUFDMUUsQ0FBQztBQUZELHNCQUVDO0FBRUQ7SUFJRSx1QkFBWSxLQUFRO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssVUFBeUIsRUFBRSxNQUFXO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFFRDs7OztHQUlHO0FBQ0g7SUFBb0MsbUNBQWE7SUFJL0MseUJBQVksV0FBMEIsRUFBRSxLQUFRO1FBQWhELFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBRW5CO1FBREMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0lBQ3JCLENBQUM7SUFFUywrQkFBSyxHQUFmLFVBQWdCLENBQUk7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFaRCxDQUFvQyx1QkFBVSxHQVk3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZXJhdG9yIH0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBFbWl0cyB0aGUgZ2l2ZW4gY29uc3RhbnQgdmFsdWUgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlIGV2ZXJ5IHRpbWUgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5MaWtlIHtAbGluayBtYXB9LCBidXQgaXQgbWFwcyBldmVyeSBzb3VyY2UgdmFsdWUgdG9cbiAqIHRoZSBzYW1lIG91dHB1dCB2YWx1ZSBldmVyeSB0aW1lLjwvc3Bhbj5cbiAqXG4gKiAhW10obWFwVG8ucG5nKVxuICpcbiAqIFRha2VzIGEgY29uc3RhbnQgYHZhbHVlYCBhcyBhcmd1bWVudCwgYW5kIGVtaXRzIHRoYXQgd2hlbmV2ZXIgdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBlbWl0cyBhIHZhbHVlLiBJbiBvdGhlciB3b3JkcywgaWdub3JlcyB0aGUgYWN0dWFsIHNvdXJjZSB2YWx1ZSxcbiAqIGFuZCBzaW1wbHkgdXNlcyB0aGUgZW1pc3Npb24gbW9tZW50IHRvIGtub3cgd2hlbiB0byBlbWl0IHRoZSBnaXZlbiBgdmFsdWVgLlxuICpcbiAqICMjIEV4YW1wbGVcbiAqIE1hcCBldmVyeSBjbGljayB0byB0aGUgc3RyaW5nICdIaSdcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IGNsaWNrcyA9IGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiBjb25zdCBncmVldGluZ3MgPSBjbGlja3MucGlwZShtYXBUbygnSGknKSk7XG4gKiBncmVldGluZ3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWFwfVxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZSBUaGUgdmFsdWUgdG8gbWFwIGVhY2ggc291cmNlIHZhbHVlIHRvLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBnaXZlbiBgdmFsdWVgIGV2ZXJ5IHRpbWVcbiAqIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBlbWl0cyBzb21ldGhpbmcuXG4gKiBAbWV0aG9kIG1hcFRvXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG88VCwgUj4odmFsdWU6IFIpOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFI+IHtcbiAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+IHNvdXJjZS5saWZ0KG5ldyBNYXBUb09wZXJhdG9yKHZhbHVlKSk7XG59XG5cbmNsYXNzIE1hcFRvT3BlcmF0b3I8VCwgUj4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBSPiB7XG5cbiAgdmFsdWU6IFI7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IFIpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgTWFwVG9TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMudmFsdWUpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgTWFwVG9TdWJzY3JpYmVyPFQsIFI+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG5cbiAgdmFsdWU6IFI7XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8Uj4sIHZhbHVlOiBSKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh4OiBUKSB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=