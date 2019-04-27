"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("../common/events");
Zone.__load_patch('EventEmitter', function (global) {
    // For EventEmitter
    var EE_ADD_LISTENER = 'addListener';
    var EE_PREPEND_LISTENER = 'prependListener';
    var EE_REMOVE_LISTENER = 'removeListener';
    var EE_REMOVE_ALL_LISTENER = 'removeAllListeners';
    var EE_LISTENERS = 'listeners';
    var EE_ON = 'on';
    var compareTaskCallbackVsDelegate = function (task, delegate) {
        // same callback, same capture, same event name, just return
        return task.callback === delegate || task.callback.listener === delegate;
    };
    var eventNameToString = function (eventName) {
        if (typeof eventName === 'string') {
            return eventName;
        }
        if (!eventName) {
            return '';
        }
        return eventName.toString().replace('(', '_').replace(')', '_');
    };
    function patchEventEmitterMethods(obj) {
        var result = events_1.patchEventTarget(global, [obj], {
            useG: false,
            add: EE_ADD_LISTENER,
            rm: EE_REMOVE_LISTENER,
            prepend: EE_PREPEND_LISTENER,
            rmAll: EE_REMOVE_ALL_LISTENER,
            listeners: EE_LISTENERS,
            chkDup: false,
            rt: true,
            diff: compareTaskCallbackVsDelegate,
            eventNameToString: eventNameToString
        });
        if (result && result[0]) {
            obj[EE_ON] = obj[EE_ADD_LISTENER];
        }
    }
    // EventEmitter
    var events;
    try {
        events = require('events');
    }
    catch (err) {
    }
    if (events && events.EventEmitter) {
        patchEventEmitterMethods(events.EventEmitter.prototype);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL2Fzc2V0cy9hcHAvdG5zX21vZHVsZXMvem9uZS5qcy9saWIvbm9kZS9ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7QUFFSCwyQ0FBa0Q7QUFFbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsVUFBQyxNQUFXO0lBQzVDLG1CQUFtQjtJQUNuQixJQUFNLGVBQWUsR0FBRyxhQUFhLENBQUM7SUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM5QyxJQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDO0lBQzVDLElBQU0sc0JBQXNCLEdBQUcsb0JBQW9CLENBQUM7SUFDcEQsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQztJQUVuQixJQUFNLDZCQUE2QixHQUFHLFVBQVMsSUFBUyxFQUFFLFFBQWE7UUFDckUsNERBQTREO1FBQzVELE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO0lBQzNFLENBQUMsQ0FBQztJQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBUyxTQUF3QjtRQUN6RCxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxPQUFPLFNBQW1CLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUM7SUFFRixTQUFTLHdCQUF3QixDQUFDLEdBQVE7UUFDeEMsSUFBTSxNQUFNLEdBQUcseUJBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUUsZUFBZTtZQUNwQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixTQUFTLEVBQUUsWUFBWTtZQUN2QixNQUFNLEVBQUUsS0FBSztZQUNiLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLDZCQUE2QjtZQUNuQyxpQkFBaUIsRUFBRSxpQkFBaUI7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsZUFBZTtJQUNmLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSTtRQUNGLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDNUI7SUFBQyxPQUFPLEdBQUcsRUFBRTtLQUNiO0lBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtRQUNqQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pEO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7cGF0Y2hFdmVudFRhcmdldH0gZnJvbSAnLi4vY29tbW9uL2V2ZW50cyc7XG5cblpvbmUuX19sb2FkX3BhdGNoKCdFdmVudEVtaXR0ZXInLCAoZ2xvYmFsOiBhbnkpID0+IHtcbiAgLy8gRm9yIEV2ZW50RW1pdHRlclxuICBjb25zdCBFRV9BRERfTElTVEVORVIgPSAnYWRkTGlzdGVuZXInO1xuICBjb25zdCBFRV9QUkVQRU5EX0xJU1RFTkVSID0gJ3ByZXBlbmRMaXN0ZW5lcic7XG4gIGNvbnN0IEVFX1JFTU9WRV9MSVNURU5FUiA9ICdyZW1vdmVMaXN0ZW5lcic7XG4gIGNvbnN0IEVFX1JFTU9WRV9BTExfTElTVEVORVIgPSAncmVtb3ZlQWxsTGlzdGVuZXJzJztcbiAgY29uc3QgRUVfTElTVEVORVJTID0gJ2xpc3RlbmVycyc7XG4gIGNvbnN0IEVFX09OID0gJ29uJztcblxuICBjb25zdCBjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSA9IGZ1bmN0aW9uKHRhc2s6IGFueSwgZGVsZWdhdGU6IGFueSkge1xuICAgIC8vIHNhbWUgY2FsbGJhY2ssIHNhbWUgY2FwdHVyZSwgc2FtZSBldmVudCBuYW1lLCBqdXN0IHJldHVyblxuICAgIHJldHVybiB0YXNrLmNhbGxiYWNrID09PSBkZWxlZ2F0ZSB8fCB0YXNrLmNhbGxiYWNrLmxpc3RlbmVyID09PSBkZWxlZ2F0ZTtcbiAgfTtcblxuICBjb25zdCBldmVudE5hbWVUb1N0cmluZyA9IGZ1bmN0aW9uKGV2ZW50TmFtZTogc3RyaW5nfFN5bWJvbCkge1xuICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGV2ZW50TmFtZSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIGlmICghZXZlbnROYW1lKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBldmVudE5hbWUudG9TdHJpbmcoKS5yZXBsYWNlKCcoJywgJ18nKS5yZXBsYWNlKCcpJywgJ18nKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwYXRjaEV2ZW50RW1pdHRlck1ldGhvZHMob2JqOiBhbnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSBwYXRjaEV2ZW50VGFyZ2V0KGdsb2JhbCwgW29ial0sIHtcbiAgICAgIHVzZUc6IGZhbHNlLFxuICAgICAgYWRkOiBFRV9BRERfTElTVEVORVIsXG4gICAgICBybTogRUVfUkVNT1ZFX0xJU1RFTkVSLFxuICAgICAgcHJlcGVuZDogRUVfUFJFUEVORF9MSVNURU5FUixcbiAgICAgIHJtQWxsOiBFRV9SRU1PVkVfQUxMX0xJU1RFTkVSLFxuICAgICAgbGlzdGVuZXJzOiBFRV9MSVNURU5FUlMsXG4gICAgICBjaGtEdXA6IGZhbHNlLFxuICAgICAgcnQ6IHRydWUsXG4gICAgICBkaWZmOiBjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSxcbiAgICAgIGV2ZW50TmFtZVRvU3RyaW5nOiBldmVudE5hbWVUb1N0cmluZ1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0WzBdKSB7XG4gICAgICBvYmpbRUVfT05dID0gb2JqW0VFX0FERF9MSVNURU5FUl07XG4gICAgfVxuICB9XG5cbiAgLy8gRXZlbnRFbWl0dGVyXG4gIGxldCBldmVudHM7XG4gIHRyeSB7XG4gICAgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICB9XG5cbiAgaWYgKGV2ZW50cyAmJiBldmVudHMuRXZlbnRFbWl0dGVyKSB7XG4gICAgcGF0Y2hFdmVudEVtaXR0ZXJNZXRob2RzKGV2ZW50cy5FdmVudEVtaXR0ZXIucHJvdG90eXBlKTtcbiAgfVxufSk7XG4iXX0=