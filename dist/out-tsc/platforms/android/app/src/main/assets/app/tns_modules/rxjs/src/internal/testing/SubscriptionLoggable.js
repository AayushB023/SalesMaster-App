"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubscriptionLog_1 = require("./SubscriptionLog");
var SubscriptionLoggable = /** @class */ (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uTG9nZ2FibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vYXNzZXRzL2FwcC90bnNfbW9kdWxlcy9yeGpzL3NyYy9pbnRlcm5hbC90ZXN0aW5nL1N1YnNjcmlwdGlvbkxvZ2dhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscURBQW9EO0FBRXBEO0lBQUE7UUFDUyxrQkFBYSxHQUFzQixFQUFFLENBQUM7SUFnQi9DLENBQUM7SUFiQyxpREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELG1EQUFvQixHQUFwQixVQUFxQixLQUFhO1FBQ2hDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFNLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksaUNBQWUsQ0FDM0Msa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNyQixDQUFDO0lBQ0osQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlZHVsZXIgfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uTG9nIH0gZnJvbSAnLi9TdWJzY3JpcHRpb25Mb2cnO1xuXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uTG9nZ2FibGUge1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uTG9nW10gPSBbXTtcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXI7XG5cbiAgbG9nU3Vic2NyaWJlZEZyYW1lKCk6IG51bWJlciB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobmV3IFN1YnNjcmlwdGlvbkxvZyh0aGlzLnNjaGVkdWxlci5ub3coKSkpO1xuICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIGxvZ1Vuc3Vic2NyaWJlZEZyYW1lKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb25Mb2dzID0gdGhpcy5zdWJzY3JpcHRpb25zO1xuICAgIGNvbnN0IG9sZFN1YnNjcmlwdGlvbkxvZyA9IHN1YnNjcmlwdGlvbkxvZ3NbaW5kZXhdO1xuICAgIHN1YnNjcmlwdGlvbkxvZ3NbaW5kZXhdID0gbmV3IFN1YnNjcmlwdGlvbkxvZyhcbiAgICAgIG9sZFN1YnNjcmlwdGlvbkxvZy5zdWJzY3JpYmVkRnJhbWUsXG4gICAgICB0aGlzLnNjaGVkdWxlci5ub3coKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==