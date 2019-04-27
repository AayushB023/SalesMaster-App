/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('electron', function (global, Zone, api) {
    function patchArguments(target, name, source) {
        return api.patchMethod(target, name, function (delegate) { return function (self, args) {
            return delegate && delegate.apply(self, api.bindArguments(args, source));
        }; });
    }
    var _a = require('electron'), desktopCapturer = _a.desktopCapturer, shell = _a.shell, CallbacksRegistry = _a.CallbacksRegistry;
    // patch api in renderer process directly
    // desktopCapturer
    if (desktopCapturer) {
        patchArguments(desktopCapturer, 'getSources', 'electron.desktopCapturer.getSources');
    }
    // shell
    if (shell) {
        patchArguments(shell, 'openExternal', 'electron.shell.openExternal');
    }
    // patch api in main process through CallbackRegistry
    if (!CallbacksRegistry) {
        return;
    }
    patchArguments(CallbacksRegistry.prototype, 'add', 'CallbackRegistry.add');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvYnVpbGQvaW50ZXJtZWRpYXRlcy9tZXJnZWRfYXNzZXRzL2RlYnVnL21lcmdlRGVidWdBc3NldHMvb3V0L2FwcC90bnNfbW9kdWxlcy96b25lLmpzL2xpYi9leHRyYS9lbGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7SUFDM0UsU0FBUyxjQUFjLENBQUMsTUFBVyxFQUFFLElBQVksRUFBRSxNQUFjO1FBQy9ELE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQUMsUUFBa0IsSUFBSyxPQUFBLFVBQUMsSUFBUyxFQUFFLElBQVc7WUFDbEYsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRSxDQUFDLEVBRjRELENBRTVELENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSyxJQUFBLHdCQUFpRSxFQUFoRSxvQ0FBZSxFQUFFLGdCQUFLLEVBQUUsd0NBQXdDLENBQUM7SUFDeEUseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixJQUFJLGVBQWUsRUFBRTtRQUNuQixjQUFjLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsUUFBUTtJQUNSLElBQUksS0FBSyxFQUFFO1FBQ1QsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztLQUN0RTtJQUVELHFEQUFxRDtJQUNyRCxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDdEIsT0FBTztLQUNSO0lBRUQsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblpvbmUuX19sb2FkX3BhdGNoKCdlbGVjdHJvbicsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGZ1bmN0aW9uIHBhdGNoQXJndW1lbnRzKHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcsIHNvdXJjZTogc3RyaW5nKTogRnVuY3Rpb258bnVsbCB7XG4gICAgcmV0dXJuIGFwaS5wYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IChzZWxmOiBhbnksIGFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUgJiYgZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXBpLmJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3Qge2Rlc2t0b3BDYXB0dXJlciwgc2hlbGwsIENhbGxiYWNrc1JlZ2lzdHJ5fSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG4gIC8vIHBhdGNoIGFwaSBpbiByZW5kZXJlciBwcm9jZXNzIGRpcmVjdGx5XG4gIC8vIGRlc2t0b3BDYXB0dXJlclxuICBpZiAoZGVza3RvcENhcHR1cmVyKSB7XG4gICAgcGF0Y2hBcmd1bWVudHMoZGVza3RvcENhcHR1cmVyLCAnZ2V0U291cmNlcycsICdlbGVjdHJvbi5kZXNrdG9wQ2FwdHVyZXIuZ2V0U291cmNlcycpO1xuICB9XG4gIC8vIHNoZWxsXG4gIGlmIChzaGVsbCkge1xuICAgIHBhdGNoQXJndW1lbnRzKHNoZWxsLCAnb3BlbkV4dGVybmFsJywgJ2VsZWN0cm9uLnNoZWxsLm9wZW5FeHRlcm5hbCcpO1xuICB9XG5cbiAgLy8gcGF0Y2ggYXBpIGluIG1haW4gcHJvY2VzcyB0aHJvdWdoIENhbGxiYWNrUmVnaXN0cnlcbiAgaWYgKCFDYWxsYmFja3NSZWdpc3RyeSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhdGNoQXJndW1lbnRzKENhbGxiYWNrc1JlZ2lzdHJ5LnByb3RvdHlwZSwgJ2FkZCcsICdDYWxsYmFja1JlZ2lzdHJ5LmFkZCcpO1xufSk7XG4iXX0=