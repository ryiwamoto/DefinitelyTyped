///<reference path="eventemitter.d.ts"/>

//import EventEmitter = require("eventemitter");

var emitter = new EventEmitter();

var listener = function (value: any) {
    console.log("The event was raised.");
};

function testGetListeners() {
    var listeners: Function[] = emitter.getListeners("foo");
    var listenersSearchedByRegexp: {[key:string]: Function} = emitter.getListeners(/^foo/);
}

function testFlattenListeners() {
    var listeners: Function[] = emitter.flattenListeners([{listener: listener}]);
}

function testGetListenersAsObject() {
    emitter.getListenersAsObject("foo");
    emitter.getListenersAsObject(/^foo/);
}

function testAddListener() {
    var e: eventemitter.EventEmitter = emitter
        .addListener("foo", listener)
        .addListener(/^foo/, listener);
}

function testOn() {
    var e: eventemitter.EventEmitter = emitter
        .on("foo", listener)
        .on(/^foo/, listener);
}

function testAddOnceListener() {
    var e: eventemitter.EventEmitter = emitter
        .addOnceListener("foo", listener)
        .addOnceListener(/^foo/, listener);
}

function testOnce() {
    var e: eventemitter.EventEmitter = emitter
        .once("foo", listener)
        .once(/^foo/, listener);
}

function testDefineEvent() {
    var e: eventemitter.EventEmitter = emitter.defineEvent("foo");
}

function testDefineEvents() {
    var e: eventemitter.EventEmitter = emitter.defineEvents(["foo", "bar"]);
}

function testAddListeners() {
    var e: eventemitter.EventEmitter = emitter
        .addListeners("foo", [listener])
        .addListeners({
            "foo": listener,
            "bar": [listener]
        });
}

function testRemoveListeners() {
    var e: eventemitter.EventEmitter = emitter
        .removeListeners("foo", [listener])
        .removeListeners({
            "foo": listener,
            "bar": [listener]
        });
}

function testRemoveListener() {
    var e: eventemitter.EventEmitter = emitter.removeListener("foo", listener);
}

function testManipulateListeners() {
    var e: eventemitter.EventEmitter = emitter
        .manipulateListeners(true, "foo", [listener])
        .manipulateListeners(true, {
            "foo": listener
        });
}

function testRemoveEvent() {
    var e: eventemitter.EventEmitter = emitter
        .removeEvent("foo")
        .removeEvent();
}

function testEmitEvent() {
    var e: eventemitter.EventEmitter = emitter
        .emitEvent("foo", [
            {},
            {}
        ])
        .emitEvent("foo")
}

function testTrigger() {
    var e: eventemitter.EventEmitter = emitter
        .trigger("foo", [
            {},
            {}
        ])
        .trigger("foo")
}

function testEmit() {
    var e: eventemitter.EventEmitter = emitter
        .emit("foo", [
            {},
            {}
        ])
        .emit("foo")
}

function testSetOnceReturnValue() {
    var e: eventemitter.EventEmitter = emitter.setOnceReturnValue(false);
}

function testNoConflict() {
    var noConflictEventEmitter = EventEmitter.noConflict();
    var e: eventemitter.EventEmitter = new noConflictEventEmitter();
}

