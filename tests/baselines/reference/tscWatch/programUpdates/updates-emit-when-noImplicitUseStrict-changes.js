/a/lib/tsc.js -w
//// [/a.ts]
export let v = 1;

//// [/tsconfig.json]
{"compilerOptions":{}}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a.js]
"use strict";
exports.__esModule = true;
exports.v = 1;



Output::
>> Screen clear
12:00:13 AM - Starting compilation in watch mode...



12:00:16 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a.ts","/a/lib/lib.d.ts"]
Program options: {"watch":true,"configFilePath":"/tsconfig.json"}
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::
/a.ts
/a/lib/lib.d.ts

WatchedFiles::
/tsconfig.json:
  {"pollingInterval":250}
/a.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Enable noImplicitUseStrict

//// [/tsconfig.json]
{"compilerOptions":{"noImplicitUseStrict":true}}

//// [/a.js]
exports.__esModule = true;
exports.v = 1;



Output::
>> Screen clear
12:00:20 AM - File change detected. Starting incremental compilation...



12:00:24 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a.ts","/a/lib/lib.d.ts"]
Program options: {"noImplicitUseStrict":true,"watch":true,"configFilePath":"/tsconfig.json"}
Program files::
/a.ts
/a/lib/lib.d.ts

Semantic diagnostics in builder refreshed for::

WatchedFiles::
/tsconfig.json:
  {"pollingInterval":250}
/a.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
