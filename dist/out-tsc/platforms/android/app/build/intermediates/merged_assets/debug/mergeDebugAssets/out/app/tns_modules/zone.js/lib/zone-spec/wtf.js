/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (global) {
    // Detect and setup WTF.
    var wtfTrace = null;
    var wtfEvents = null;
    var wtfEnabled = (function () {
        var wtf = global['wtf'];
        if (wtf) {
            wtfTrace = wtf.trace;
            if (wtfTrace) {
                wtfEvents = wtfTrace.events;
                return true;
            }
        }
        return false;
    })();
    var WtfZoneSpec = /** @class */ (function () {
        function WtfZoneSpec() {
            this.name = 'WTF';
        }
        WtfZoneSpec.prototype.onFork = function (parentZoneDelegate, currentZone, targetZone, zoneSpec) {
            var retValue = parentZoneDelegate.fork(targetZone, zoneSpec);
            WtfZoneSpec.forkInstance(zonePathName(targetZone), retValue.name);
            return retValue;
        };
        WtfZoneSpec.prototype.onInvoke = function (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
            var src = source || 'unknown';
            var scope = WtfZoneSpec.invokeScope[src];
            if (!scope) {
                scope = WtfZoneSpec.invokeScope[src] =
                    wtfEvents.createScope("Zone:invoke:" + source + "(ascii zone)");
            }
            return wtfTrace.leaveScope(scope(zonePathName(targetZone)), parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source));
        };
        WtfZoneSpec.prototype.onHandleError = function (parentZoneDelegate, currentZone, targetZone, error) {
            return parentZoneDelegate.handleError(targetZone, error);
        };
        WtfZoneSpec.prototype.onScheduleTask = function (parentZoneDelegate, currentZone, targetZone, task) {
            var key = task.type + ':' + task.source;
            var instance = WtfZoneSpec.scheduleInstance[key];
            if (!instance) {
                instance = WtfZoneSpec.scheduleInstance[key] =
                    wtfEvents.createInstance("Zone:schedule:" + key + "(ascii zone, any data)");
            }
            var retValue = parentZoneDelegate.scheduleTask(targetZone, task);
            instance(zonePathName(targetZone), shallowObj(task.data, 2));
            return retValue;
        };
        WtfZoneSpec.prototype.onInvokeTask = function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
            var source = task.source;
            var scope = WtfZoneSpec.invokeTaskScope[source];
            if (!scope) {
                scope = WtfZoneSpec.invokeTaskScope[source] =
                    wtfEvents.createScope("Zone:invokeTask:" + source + "(ascii zone)");
            }
            return wtfTrace.leaveScope(scope(zonePathName(targetZone)), parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs));
        };
        WtfZoneSpec.prototype.onCancelTask = function (parentZoneDelegate, currentZone, targetZone, task) {
            var key = task.source;
            var instance = WtfZoneSpec.cancelInstance[key];
            if (!instance) {
                instance = WtfZoneSpec.cancelInstance[key] =
                    wtfEvents.createInstance("Zone:cancel:" + key + "(ascii zone, any options)");
            }
            var retValue = parentZoneDelegate.cancelTask(targetZone, task);
            instance(zonePathName(targetZone), shallowObj(task.data, 2));
            return retValue;
        };
        WtfZoneSpec.forkInstance = wtfEnabled ? wtfEvents.createInstance('Zone:fork(ascii zone, ascii newZone)') : null;
        WtfZoneSpec.scheduleInstance = {};
        WtfZoneSpec.cancelInstance = {};
        WtfZoneSpec.invokeScope = {};
        WtfZoneSpec.invokeTaskScope = {};
        return WtfZoneSpec;
    }());
    function shallowObj(obj, depth) {
        if (!obj || !depth)
            return null;
        var out = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                switch (typeof value) {
                    case 'object':
                        var name_1 = value && value.constructor && value.constructor.name;
                        value = name_1 == Object.name ? shallowObj(value, depth - 1) : name_1;
                        break;
                    case 'function':
                        value = value.name || undefined;
                        break;
                }
                out[key] = value;
            }
        }
        return out;
    }
    function zonePathName(zone) {
        var name = zone.name;
        var localZone = zone.parent;
        while (localZone != null) {
            name = localZone.name + '::' + name;
            localZone = localZone.parent;
        }
        return name;
    }
    Zone['wtfZoneSpec'] = !wtfEnabled ? null : new WtfZoneSpec();
})(typeof window === 'object' && window || typeof self === 'object' && self || global);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3RmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGxhdGZvcm1zL2FuZHJvaWQvYXBwL2J1aWxkL2ludGVybWVkaWF0ZXMvbWVyZ2VkX2Fzc2V0cy9kZWJ1Zy9tZXJnZURlYnVnQXNzZXRzL291dC9hcHAvdG5zX21vZHVsZXMvem9uZS5qcy9saWIvem9uZS1zcGVjL3d0Zi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7O0dBR0c7QUFFSCxDQUFDLFVBQVMsTUFBVztJQW9CckIsd0JBQXdCO0lBQ3hCLElBQUksUUFBUSxHQUFrQixJQUFJLENBQUM7SUFDbkMsSUFBSSxTQUFTLEdBQW1CLElBQUksQ0FBQztJQUNyQyxJQUFNLFVBQVUsR0FBWSxDQUFDO1FBQzNCLElBQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsRUFBRTtZQUNQLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3JCLElBQUksUUFBUSxFQUFFO2dCQUNaLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM1QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTDtRQUFBO1lBQ0UsU0FBSSxHQUFXLEtBQUssQ0FBQztRQTRFdkIsQ0FBQztRQW5FQyw0QkFBTSxHQUFOLFVBQU8sa0JBQWdDLEVBQUUsV0FBaUIsRUFBRSxVQUFnQixFQUFFLFFBQWtCO1lBRTlGLElBQU0sUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsV0FBVyxDQUFDLFlBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lB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QUMsV0FBWSxDQUFDLElBQUksQ0FBQzt3QkFDekUsS0FBSyxHQUFHLE1BQUksSUFBVSxNQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBSSxDQUFDO3dCQUN6RSxNQUFNO29CQUNSLEtBQUssVUFBVTt3QkFDYixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7d0JBQ2hDLE1BQU07aUJBQ1Q7Z0JBQ0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNsQjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsSUFBVTtRQUM5QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsT0FBTyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDcEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDOUI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFQSxJQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cblxuKGZ1bmN0aW9uKGdsb2JhbDogYW55KSB7XG5pbnRlcmZhY2UgV3RmIHtcbiAgdHJhY2U6IFd0ZlRyYWNlO1xufVxuaW50ZXJmYWNlIFd0ZlNjb3BlIHt9XG5pbnRlcmZhY2UgV3RmUmFuZ2Uge31cbmludGVyZmFjZSBXdGZUcmFjZSB7XG4gIGV2ZW50czogV3RmRXZlbnRzO1xuICBsZWF2ZVNjb3BlKHNjb3BlOiBXdGZTY29wZSwgcmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkO1xuICBiZWdpblRpbWVSYW5nZShyYW5nZVR5cGU6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiBXdGZSYW5nZTtcbiAgZW5kVGltZVJhbmdlKHJhbmdlOiBXdGZSYW5nZSk6IHZvaWQ7XG59XG5pbnRlcmZhY2UgV3RmRXZlbnRzIHtcbiAgY3JlYXRlU2NvcGUoc2lnbmF0dXJlOiBzdHJpbmcsIGZsYWdzPzogYW55KTogV3RmU2NvcGVGbjtcbiAgY3JlYXRlSW5zdGFuY2Uoc2lnbmF0dXJlOiBzdHJpbmcsIGZsYWdzPzogYW55KTogV3RmRXZlbnRGbjtcbn1cblxudHlwZSBXdGZTY29wZUZuID0gKC4uLmFyZ3M6IGFueVtdKSA9PiBXdGZTY29wZTtcbnR5cGUgV3RmRXZlbnRGbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG4vLyBEZXRlY3QgYW5kIHNldHVwIFdURi5cbmxldCB3dGZUcmFjZTogV3RmVHJhY2V8bnVsbCA9IG51bGw7XG5sZXQgd3RmRXZlbnRzOiBXdGZFdmVudHN8bnVsbCA9IG51bGw7XG5jb25zdCB3dGZFbmFibGVkOiBib29sZWFuID0gKGZ1bmN0aW9uKCk6IGJvb2xlYW4ge1xuICBjb25zdCB3dGY6IFd0ZiA9IGdsb2JhbFsnd3RmJ107XG4gIGlmICh3dGYpIHtcbiAgICB3dGZUcmFjZSA9IHd0Zi50cmFjZTtcbiAgICBpZiAod3RmVHJhY2UpIHtcbiAgICAgIHd0ZkV2ZW50cyA9IHd0ZlRyYWNlLmV2ZW50cztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG5jbGFzcyBXdGZab25lU3BlYyBpbXBsZW1lbnRzIFpvbmVTcGVjIHtcbiAgbmFtZTogc3RyaW5nID0gJ1dURic7XG5cbiAgc3RhdGljIGZvcmtJbnN0YW5jZSA9XG4gICAgICB3dGZFbmFibGVkID8gd3RmRXZlbnRzIS5jcmVhdGVJbnN0YW5jZSgnWm9uZTpmb3JrKGFzY2lpIHpvbmUsIGFzY2lpIG5ld1pvbmUpJykgOiBudWxsO1xuICBzdGF0aWMgc2NoZWR1bGVJbnN0YW5jZToge1trZXk6IHN0cmluZ106IFd0ZkV2ZW50Rm59ID0ge307XG4gIHN0YXRpYyBjYW5jZWxJbnN0YW5jZToge1trZXk6IHN0cmluZ106IFd0ZkV2ZW50Rm59ID0ge307XG4gIHN0YXRpYyBpbnZva2VTY29wZToge1trZXk6IHN0cmluZ106IFd0ZkV2ZW50Rm59ID0ge307XG4gIHN0YXRpYyBpbnZva2VUYXNrU2NvcGU6IHtba2V5OiBzdHJpbmddOiBXdGZFdmVudEZufSA9IHt9O1xuXG4gIG9uRm9yayhwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsIHpvbmVTcGVjOiBab25lU3BlYyk6XG4gICAgICBab25lIHtcbiAgICBjb25zdCByZXRWYWx1ZSA9IHBhcmVudFpvbmVEZWxlZ2F0ZS5mb3JrKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICBXdGZab25lU3BlYy5mb3JrSW5zdGFuY2UhKHpvbmVQYXRoTmFtZSh0YXJnZXRab25lKSwgcmV0VmFsdWUubmFtZSk7XG4gICAgcmV0dXJuIHJldFZhbHVlO1xuICB9XG5cbiAgb25JbnZva2UoXG4gICAgICBwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsIGRlbGVnYXRlOiBGdW5jdGlvbixcbiAgICAgIGFwcGx5VGhpczogYW55LCBhcHBseUFyZ3M/OiBhbnlbXSwgc291cmNlPzogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBzcmMgPSBzb3VyY2UgfHwgJ3Vua25vd24nO1xuICAgIGxldCBzY29wZSA9IFd0ZlpvbmVTcGVjLmludm9rZVNjb3BlW3NyY107XG4gICAgaWYgKCFzY29wZSkge1xuICAgICAgc2NvcGUgPSBXdGZab25lU3BlYy5pbnZva2VTY29wZVtzcmNdID1cbiAgICAgICAgICB3dGZFdmVudHMhLmNyZWF0ZVNjb3BlKGBab25lOmludm9rZToke3NvdXJjZX0oYXNjaWkgem9uZSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIHd0ZlRyYWNlIS5sZWF2ZVNjb3BlKFxuICAgICAgICBzY29wZSh6b25lUGF0aE5hbWUodGFyZ2V0Wm9uZSkpLFxuICAgICAgICBwYXJlbnRab25lRGVsZWdhdGUuaW52b2tlKHRhcmdldFpvbmUsIGRlbGVnYXRlLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSk7XG4gIH1cblxuXG4gIG9uSGFuZGxlRXJyb3IocGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCBlcnJvcjogYW55KTpcbiAgICAgIGJvb2xlYW4ge1xuICAgIHJldHVybiBwYXJlbnRab25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyb3IpO1xuICB9XG5cbiAgb25TY2hlZHVsZVRhc2socGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCB0YXNrOiBUYXNrKTpcbiAgICAgIGFueSB7XG4gICAgY29uc3Qga2V5ID0gdGFzay50eXBlICsgJzonICsgdGFzay5zb3VyY2U7XG4gICAgbGV0IGluc3RhbmNlID0gV3RmWm9uZVNwZWMuc2NoZWR1bGVJbnN0YW5jZVtrZXldO1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlID0gV3RmWm9uZVNwZWMuc2NoZWR1bGVJbnN0YW5jZVtrZXldID1cbiAgICAgICAgICB3dGZFdmVudHMhLmNyZWF0ZUluc3RhbmNlKGBab25lOnNjaGVkdWxlOiR7a2V5fShhc2NpaSB6b25lLCBhbnkgZGF0YSlgKTtcbiAgICB9XG4gICAgY29uc3QgcmV0VmFsdWUgPSBwYXJlbnRab25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRhcmdldFpvbmUsIHRhc2spO1xuICAgIGluc3RhbmNlKHpvbmVQYXRoTmFtZSh0YXJnZXRab25lKSwgc2hhbGxvd09iaih0YXNrLmRhdGEsIDIpKTtcbiAgICByZXR1cm4gcmV0VmFsdWU7XG4gIH1cblxuXG4gIG9uSW52b2tlVGFzayhcbiAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgdGFzazogVGFzayxcbiAgICAgIGFwcGx5VGhpcz86IGFueSwgYXBwbHlBcmdzPzogYW55W10pOiBhbnkge1xuICAgIGNvbnN0IHNvdXJjZSA9IHRhc2suc291cmNlO1xuICAgIGxldCBzY29wZSA9IFd0ZlpvbmVTcGVjLmludm9rZVRhc2tTY29wZVtzb3VyY2VdO1xuICAgIGlmICghc2NvcGUpIHtcbiAgICAgIHNjb3BlID0gV3RmWm9uZVNwZWMuaW52b2tlVGFza1Njb3BlW3NvdXJjZV0gPVxuICAgICAgICAgIHd0ZkV2ZW50cyEuY3JlYXRlU2NvcGUoYFpvbmU6aW52b2tlVGFzazoke3NvdXJjZX0oYXNjaWkgem9uZSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIHd0ZlRyYWNlIS5sZWF2ZVNjb3BlKFxuICAgICAgICBzY29wZSh6b25lUGF0aE5hbWUodGFyZ2V0Wm9uZSkpLFxuICAgICAgICBwYXJlbnRab25lRGVsZWdhdGUuaW52b2tlVGFzayh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykpO1xuICB9XG5cbiAgb25DYW5jZWxUYXNrKHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgdGFzazogVGFzayk6XG4gICAgICBhbnkge1xuICAgIGNvbnN0IGtleSA9IHRhc2suc291cmNlO1xuICAgIGxldCBpbnN0YW5jZSA9IFd0ZlpvbmVTcGVjLmNhbmNlbEluc3RhbmNlW2tleV07XG4gICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UgPSBXdGZab25lU3BlYy5jYW5jZWxJbnN0YW5jZVtrZXldID1cbiAgICAgICAgICB3dGZFdmVudHMhLmNyZWF0ZUluc3RhbmNlKGBab25lOmNhbmNlbDoke2tleX0oYXNjaWkgem9uZSwgYW55IG9wdGlvbnMpYCk7XG4gICAgfVxuICAgIGNvbnN0IHJldFZhbHVlID0gcGFyZW50Wm9uZURlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgaW5zdGFuY2Uoem9uZVBhdGhOYW1lKHRhcmdldFpvbmUpLCBzaGFsbG93T2JqKHRhc2suZGF0YSwgMikpO1xuICAgIHJldHVybiByZXRWYWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaGFsbG93T2JqKG9iajoge1trOiBzdHJpbmddOiBhbnl9fHVuZGVmaW5lZCwgZGVwdGg6IG51bWJlcik6IGFueSB7XG4gIGlmICghb2JqIHx8ICFkZXB0aCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG91dDoge1trOiBzdHJpbmddOiBhbnl9ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbGV0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiAoPGFueT52YWx1ZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgICB2YWx1ZSA9IG5hbWUgPT0gKDxhbnk+T2JqZWN0KS5uYW1lID8gc2hhbGxvd09iaih2YWx1ZSwgZGVwdGggLSAxKSA6IG5hbWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm5hbWUgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgb3V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gem9uZVBhdGhOYW1lKHpvbmU6IFpvbmUpIHtcbiAgbGV0IG5hbWU6IHN0cmluZyA9IHpvbmUubmFtZTtcbiAgbGV0IGxvY2FsWm9uZSA9IHpvbmUucGFyZW50O1xuICB3aGlsZSAobG9jYWxab25lICE9IG51bGwpIHtcbiAgICBuYW1lID0gbG9jYWxab25lLm5hbWUgKyAnOjonICsgbmFtZTtcbiAgICBsb2NhbFpvbmUgPSBsb2NhbFpvbmUucGFyZW50O1xuICB9XG4gIHJldHVybiBuYW1lO1xufVxuXG4oWm9uZSBhcyBhbnkpWyd3dGZab25lU3BlYyddID0gIXd0ZkVuYWJsZWQgPyBudWxsIDogbmV3IFd0ZlpvbmVTcGVjKCk7XG59KSh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgfHwgdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYgfHwgZ2xvYmFsKTtcbiJdfQ==