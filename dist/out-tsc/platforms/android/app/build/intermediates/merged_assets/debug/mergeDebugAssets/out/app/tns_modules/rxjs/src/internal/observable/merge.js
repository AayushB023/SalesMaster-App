"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
var isScheduler_1 = require("../util/isScheduler");
var mergeAll_1 = require("../operators/mergeAll");
var fromArray_1 = require("./fromArray");
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * ![](merge.png)
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * ## Examples
 * ### Merge together two Observables: 1s interval and clicks
 * ```javascript
 * const clicks = fromEvent(document, 'click');
 * const timer = interval(1000);
 * const clicksOrTimer = merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // timer will emit ascending values, one every second(1000ms) to console
 * // clicks logs MouseEvents to console everytime the "document" is clicked
 * // Since the two streams are merged you see these happening
 * // as they occur.
 * ```
 *
 * ### Merge together 3 Observables, but only 2 run concurrently
 * ```javascript
 * const timer1 = interval(1000).pipe(take(10));
 * const timer2 = interval(2000).pipe(take(6));
 * const timer3 = interval(500).pipe(take(10));
 * const concurrent = 2; // the argument
 * const merged = merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - First timer1 and timer2 will run concurrently
 * // - timer1 will emit a value every 1000ms for 10 iterations
 * // - timer2 will emit a value every 2000ms for 6 iterations
 * // - after timer1 hits it's max iteration, timer2 will
 * //   continue, and timer3 will start to run concurrently with timer2
 * // - when timer2 hits it's max iteration it terminates, and
 * //   timer3 will continue to emit a value every 500ms until it is complete
 * ```
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {...ObservableInput} observables Input Observables to merge together.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {SchedulerLike} [scheduler=null] The {@link SchedulerLike} to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (isScheduler_1.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable_1.Observable) {
        return observables[0];
    }
    return mergeAll_1.mergeAll(concurrent)(fromArray_1.fromArray(observables, scheduler));
}
exports.merge = merge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvYnVpbGQvaW50ZXJtZWRpYXRlcy9tZXJnZWRfYXNzZXRzL2RlYnVnL21lcmdlRGVidWdBc3NldHMvb3V0L2FwcC90bnNfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL21lcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNENBQTJDO0FBRTNDLG1EQUFrRDtBQUNsRCxrREFBaUQ7QUFDakQseUNBQXdDO0FBaUJ4QyxtQ0FBbUM7QUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRUc7QUFDSCxTQUFnQixLQUFLO0lBQU8scUJBQW9FO1NBQXBFLFVBQW9FLEVBQXBFLHFCQUFvRSxFQUFwRSxJQUFvRTtRQUFwRSxnQ0FBb0U7O0lBQy9GLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUMxQyxJQUFJLFNBQVMsR0FBa0IsSUFBSSxDQUFDO0lBQ25DLElBQUksSUFBSSxHQUFRLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixTQUFTLEdBQWtCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3JGLFVBQVUsR0FBVyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDeEM7S0FDRjtTQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ25DLFVBQVUsR0FBVyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDeEM7SUFFRCxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLHVCQUFVLEVBQUU7UUFDMUYsT0FBc0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsT0FBTyxtQkFBUSxDQUFJLFVBQVUsQ0FBQyxDQUFDLHFCQUFTLENBQU0sV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQWxCRCxzQkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlSW5wdXQsIFNjaGVkdWxlckxpa2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9tZXJnZUFsbCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2Zyb21BcnJheSc7XG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQ+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQ+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIGNvbmN1cnJlbnQ/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQsIFQyPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VCB8IFQyPjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxULCBUMj4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIGNvbmN1cnJlbnQ/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQgfCBUMj47XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8VCwgVDIsIFQzPih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzPjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxULCBUMiwgVDM+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgY29uY3VycmVudD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VCB8IFQyIHwgVDM+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQsIFQyLCBUMywgVDQ+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQsIFQyLCBUMywgVDQ+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIGNvbmN1cnJlbnQ/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQ+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQsIFQyLCBUMywgVDQsIFQ1Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1Piwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VCB8IFQyIHwgVDMgfCBUNCB8IFQ1PjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxULCBUMiwgVDMsIFQ0LCBUNT4odjE6IE9ic2VydmFibGVJbnB1dDxUPiwgdjI6IE9ic2VydmFibGVJbnB1dDxUMj4sIHYzOiBPYnNlcnZhYmxlSW5wdXQ8VDM+LCB2NDogT2JzZXJ2YWJsZUlucHV0PFQ0PiwgdjU6IE9ic2VydmFibGVJbnB1dDxUNT4sIGNvbmN1cnJlbnQ/OiBudW1iZXIsIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNT47XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8VCwgVDIsIFQzLCBUNCwgVDUsIFQ2Pih2MTogT2JzZXJ2YWJsZUlucHV0PFQ+LCB2MjogT2JzZXJ2YWJsZUlucHV0PFQyPiwgdjM6IE9ic2VydmFibGVJbnB1dDxUMz4sIHY0OiBPYnNlcnZhYmxlSW5wdXQ8VDQ+LCB2NTogT2JzZXJ2YWJsZUlucHV0PFQ1PiwgdjY6IE9ic2VydmFibGVJbnB1dDxUNj4sIHNjaGVkdWxlcj86IFNjaGVkdWxlckxpa2UpOiBPYnNlcnZhYmxlPFQgfCBUMiB8IFQzIHwgVDQgfCBUNSB8IFQ2PjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxULCBUMiwgVDMsIFQ0LCBUNSwgVDY+KHYxOiBPYnNlcnZhYmxlSW5wdXQ8VD4sIHYyOiBPYnNlcnZhYmxlSW5wdXQ8VDI+LCB2MzogT2JzZXJ2YWJsZUlucHV0PFQzPiwgdjQ6IE9ic2VydmFibGVJbnB1dDxUND4sIHY1OiBPYnNlcnZhYmxlSW5wdXQ8VDU+LCB2NjogT2JzZXJ2YWJsZUlucHV0PFQ2PiwgY29uY3VycmVudD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyTGlrZSk6IE9ic2VydmFibGU8VCB8IFQyIHwgVDMgfCBUNCB8IFQ1IHwgVDY+O1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFQ+KC4uLm9ic2VydmFibGVzOiAoT2JzZXJ2YWJsZUlucHV0PFQ+IHwgU2NoZWR1bGVyTGlrZSB8IG51bWJlcilbXSk6IE9ic2VydmFibGU8VD47XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8VCwgUj4oLi4ub2JzZXJ2YWJsZXM6IChPYnNlcnZhYmxlSW5wdXQ8YW55PiB8IFNjaGVkdWxlckxpa2UgfCBudW1iZXIpW10pOiBPYnNlcnZhYmxlPFI+O1xuLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qKlxuICogQ3JlYXRlcyBhbiBvdXRwdXQgT2JzZXJ2YWJsZSB3aGljaCBjb25jdXJyZW50bHkgZW1pdHMgYWxsIHZhbHVlcyBmcm9tIGV2ZXJ5XG4gKiBnaXZlbiBpbnB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5GbGF0dGVucyBtdWx0aXBsZSBPYnNlcnZhYmxlcyB0b2dldGhlciBieSBibGVuZGluZ1xuICogdGhlaXIgdmFsdWVzIGludG8gb25lIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqICFbXShtZXJnZS5wbmcpXG4gKlxuICogYG1lcmdlYCBzdWJzY3JpYmVzIHRvIGVhY2ggZ2l2ZW4gaW5wdXQgT2JzZXJ2YWJsZSAoYXMgYXJndW1lbnRzKSwgYW5kIHNpbXBseVxuICogZm9yd2FyZHMgKHdpdGhvdXQgZG9pbmcgYW55IHRyYW5zZm9ybWF0aW9uKSBhbGwgdGhlIHZhbHVlcyBmcm9tIGFsbCB0aGUgaW5wdXRcbiAqIE9ic2VydmFibGVzIHRvIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS4gVGhlIG91dHB1dCBPYnNlcnZhYmxlIG9ubHkgY29tcGxldGVzXG4gKiBvbmNlIGFsbCBpbnB1dCBPYnNlcnZhYmxlcyBoYXZlIGNvbXBsZXRlZC4gQW55IGVycm9yIGRlbGl2ZXJlZCBieSBhbiBpbnB1dFxuICogT2JzZXJ2YWJsZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGVtaXR0ZWQgb24gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqICMjIEV4YW1wbGVzXG4gKiAjIyMgTWVyZ2UgdG9nZXRoZXIgdHdvIE9ic2VydmFibGVzOiAxcyBpbnRlcnZhbCBhbmQgY2xpY2tzXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBjbGlja3MgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogY29uc3QgdGltZXIgPSBpbnRlcnZhbCgxMDAwKTtcbiAqIGNvbnN0IGNsaWNrc09yVGltZXIgPSBtZXJnZShjbGlja3MsIHRpbWVyKTtcbiAqIGNsaWNrc09yVGltZXIuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIC8vIFJlc3VsdHMgaW4gdGhlIGZvbGxvd2luZzpcbiAqIC8vIHRpbWVyIHdpbGwgZW1pdCBhc2NlbmRpbmcgdmFsdWVzLCBvbmUgZXZlcnkgc2Vjb25kKDEwMDBtcykgdG8gY29uc29sZVxuICogLy8gY2xpY2tzIGxvZ3MgTW91c2VFdmVudHMgdG8gY29uc29sZSBldmVyeXRpbWUgdGhlIFwiZG9jdW1lbnRcIiBpcyBjbGlja2VkXG4gKiAvLyBTaW5jZSB0aGUgdHdvIHN0cmVhbXMgYXJlIG1lcmdlZCB5b3Ugc2VlIHRoZXNlIGhhcHBlbmluZ1xuICogLy8gYXMgdGhleSBvY2N1ci5cbiAqIGBgYFxuICpcbiAqICMjIyBNZXJnZSB0b2dldGhlciAzIE9ic2VydmFibGVzLCBidXQgb25seSAyIHJ1biBjb25jdXJyZW50bHlcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IHRpbWVyMSA9IGludGVydmFsKDEwMDApLnBpcGUodGFrZSgxMCkpO1xuICogY29uc3QgdGltZXIyID0gaW50ZXJ2YWwoMjAwMCkucGlwZSh0YWtlKDYpKTtcbiAqIGNvbnN0IHRpbWVyMyA9IGludGVydmFsKDUwMCkucGlwZSh0YWtlKDEwKSk7XG4gKiBjb25zdCBjb25jdXJyZW50ID0gMjsgLy8gdGhlIGFyZ3VtZW50XG4gKiBjb25zdCBtZXJnZWQgPSBtZXJnZSh0aW1lcjEsIHRpbWVyMiwgdGltZXIzLCBjb25jdXJyZW50KTtcbiAqIG1lcmdlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogLy8gUmVzdWx0cyBpbiB0aGUgZm9sbG93aW5nOlxuICogLy8gLSBGaXJzdCB0aW1lcjEgYW5kIHRpbWVyMiB3aWxsIHJ1biBjb25jdXJyZW50bHlcbiAqIC8vIC0gdGltZXIxIHdpbGwgZW1pdCBhIHZhbHVlIGV2ZXJ5IDEwMDBtcyBmb3IgMTAgaXRlcmF0aW9uc1xuICogLy8gLSB0aW1lcjIgd2lsbCBlbWl0IGEgdmFsdWUgZXZlcnkgMjAwMG1zIGZvciA2IGl0ZXJhdGlvbnNcbiAqIC8vIC0gYWZ0ZXIgdGltZXIxIGhpdHMgaXQncyBtYXggaXRlcmF0aW9uLCB0aW1lcjIgd2lsbFxuICogLy8gICBjb250aW51ZSwgYW5kIHRpbWVyMyB3aWxsIHN0YXJ0IHRvIHJ1biBjb25jdXJyZW50bHkgd2l0aCB0aW1lcjJcbiAqIC8vIC0gd2hlbiB0aW1lcjIgaGl0cyBpdCdzIG1heCBpdGVyYXRpb24gaXQgdGVybWluYXRlcywgYW5kXG4gKiAvLyAgIHRpbWVyMyB3aWxsIGNvbnRpbnVlIHRvIGVtaXQgYSB2YWx1ZSBldmVyeSA1MDBtcyB1bnRpbCBpdCBpcyBjb21wbGV0ZVxuICogYGBgXG4gKlxuICogQHNlZSB7QGxpbmsgbWVyZ2VBbGx9XG4gKiBAc2VlIHtAbGluayBtZXJnZU1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwVG99XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKlxuICogQHBhcmFtIHsuLi5PYnNlcnZhYmxlSW5wdXR9IG9ic2VydmFibGVzIElucHV0IE9ic2VydmFibGVzIHRvIG1lcmdlIHRvZ2V0aGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PU51bWJlci5QT1NJVElWRV9JTkZJTklUWV0gTWF4aW11bSBudW1iZXIgb2YgaW5wdXRcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHBhcmFtIHtTY2hlZHVsZXJMaWtlfSBbc2NoZWR1bGVyPW51bGxdIFRoZSB7QGxpbmsgU2NoZWR1bGVyTGlrZX0gdG8gdXNlIGZvciBtYW5hZ2luZ1xuICogY29uY3VycmVuY3kgb2YgaW5wdXQgT2JzZXJ2YWJsZXMuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgdGhhdCBhcmUgdGhlIHJlc3VsdCBvZlxuICogZXZlcnkgaW5wdXQgT2JzZXJ2YWJsZS5cbiAqIEBzdGF0aWMgdHJ1ZVxuICogQG5hbWUgbWVyZ2VcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxULCBSPiguLi5vYnNlcnZhYmxlczogQXJyYXk8T2JzZXJ2YWJsZUlucHV0PGFueT4gfCBTY2hlZHVsZXJMaWtlIHwgbnVtYmVyPik6IE9ic2VydmFibGU8Uj4ge1xuIGxldCBjb25jdXJyZW50ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuIGxldCBzY2hlZHVsZXI6IFNjaGVkdWxlckxpa2UgPSBudWxsO1xuICBsZXQgbGFzdDogYW55ID0gb2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV07XG4gIGlmIChpc1NjaGVkdWxlcihsYXN0KSkge1xuICAgIHNjaGVkdWxlciA9IDxTY2hlZHVsZXJMaWtlPm9ic2VydmFibGVzLnBvcCgpO1xuICAgIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPiAxICYmIHR5cGVvZiBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmN1cnJlbnQgPSA8bnVtYmVyPm9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgbGFzdCA9PT0gJ251bWJlcicpIHtcbiAgICBjb25jdXJyZW50ID0gPG51bWJlcj5vYnNlcnZhYmxlcy5wb3AoKTtcbiAgfVxuXG4gIGlmIChzY2hlZHVsZXIgPT09IG51bGwgJiYgb2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxICYmIG9ic2VydmFibGVzWzBdIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiA8T2JzZXJ2YWJsZTxSPj5vYnNlcnZhYmxlc1swXTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZUFsbDxSPihjb25jdXJyZW50KShmcm9tQXJyYXk8YW55PihvYnNlcnZhYmxlcywgc2NoZWR1bGVyKSk7XG59XG4iXX0=