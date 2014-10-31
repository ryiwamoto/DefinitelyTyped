// Type definitions for EventEmitter v0.14.4
// Project: https://github.com/asyncly/EventEmitter
// Definitions by: ryiwamoto <https://github.com/ryiwamoto/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module eventemitter {
    interface RawListenerObject {
        listener: Function;
    }

    /**
     * listener functions for events in an object.
     */
    interface ListenersInObject{
        [key:string]: Function
    }

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    export class EventEmitter {
        constructor();

        /**
         * Returns the listener array for the specified event.
         * Will initialise the event object and listener arrays if required.
         * Will return an object if you use a regex search. The object contains keys for each matched event.
         * So /ba[rz]/ might return an object containing bar and baz.
         * But only if you have either defined them with defineEvent or added some listeners to them.
         * Each property in the object response is an array of listener functions.
         *
         * @param {String} event Name of the event to return the listeners from.
         * @return {Function[]} All listener functions for the event.
         */
        getListeners(event: RegExp): {[key:string]: Function};

        /**
         * Returns the listener array for the specified event.
         * Will initialise the event object and listener arrays if required.
         * Will return an object if you use a regex search. The object contains keys for each matched event.
         * So /ba[rz]/ might return an object containing bar and baz.
         * But only if you have either defined them with defineEvent or added some listeners to them.
         * Each property in the object response is an array of listener functions.
         *
         * @param {String} event Name of the event to return the listeners from.
         * @return {Function[]} All listener functions for the event.
         */
        getListeners(event: string): Function[];

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {String} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListener(event: string, listener: Function): EventEmitter;

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {String} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        addListener(event: RegExp, listener: Function): EventEmitter;

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {String} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        on(event: string, listener: Function): EventEmitter;

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {String} event Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
         * @return {EventEmitter} Current instance of EventEmitter for chaining.
         */
        on(event: RegExp, listener: Function): EventEmitter;

        /**
         * Takes a list of listener objects and flattens it into a list of listener functions.
         *
         * @param {RawListenerObject[]} listeners Raw listener objects.
         * @return {Function[]} Just the listener functions.
         */
        flattenListeners(listeners: RawListenerObject[]): Function[];

        getListenersAsObject(event: string):ListenersInObject;
        getListenersAsObject(event: RegExp):ListenersInObject;
    }

}

declare var EventEmitter: typeof eventemitter.EventEmitter;
