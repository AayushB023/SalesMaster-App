"use strict";
// This file is required by karma.conf.js and loads recursively all the .spec and framework files
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-testing");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// Then we find all the tests.
var context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpR0FBaUc7O0FBRWpHLHFDQUFtQztBQUNuQyxpREFBbUQ7QUFDbkQscUVBR21EO0FBSW5ELHFEQUFxRDtBQUNyRCxvQkFBVSxFQUFFLENBQUMsbUJBQW1CLENBQzlCLHFDQUEyQixFQUMzQix1Q0FBNkIsRUFBRSxDQUNoQyxDQUFDO0FBQ0YsOEJBQThCO0FBQzlCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRCx3QkFBd0I7QUFDeEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyByZXF1aXJlZCBieSBrYXJtYS5jb25mLmpzIGFuZCBsb2FkcyByZWN1cnNpdmVseSBhbGwgdGhlIC5zcGVjIGFuZCBmcmFtZXdvcmsgZmlsZXNcblxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS10ZXN0aW5nJztcbmltcG9ydCB7IGdldFRlc3RCZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtcbiAgQnJvd3NlckR5bmFtaWNUZXN0aW5nTW9kdWxlLFxuICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljVGVzdGluZ1xufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvdGVzdGluZyc7XG5cbmRlY2xhcmUgY29uc3QgcmVxdWlyZTogYW55O1xuXG4vLyBGaXJzdCwgaW5pdGlhbGl6ZSB0aGUgQW5ndWxhciB0ZXN0aW5nIGVudmlyb25tZW50LlxuZ2V0VGVzdEJlZCgpLmluaXRUZXN0RW52aXJvbm1lbnQoXG4gIEJyb3dzZXJEeW5hbWljVGVzdGluZ01vZHVsZSxcbiAgcGxhdGZvcm1Ccm93c2VyRHluYW1pY1Rlc3RpbmcoKVxuKTtcbi8vIFRoZW4gd2UgZmluZCBhbGwgdGhlIHRlc3RzLlxuY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi8nLCB0cnVlLCAvXFwuc3BlY1xcLnRzJC8pO1xuLy8gQW5kIGxvYWQgdGhlIG1vZHVsZXMuXG5jb250ZXh0LmtleXMoKS5tYXAoY29udGV4dCk7XG4iXX0=