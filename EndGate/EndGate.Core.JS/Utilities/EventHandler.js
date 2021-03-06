/// <reference path="../Interfaces/IDisposable.ts" />
/// <reference path="../Interfaces/ITyped.ts" />
var EndGate;
(function (EndGate) {
    /**
    * Defines an event handler object that can maintain bound functions and trigger them on demand.
    */
    var EventHandler = (function () {
        /**
        * Creates a new instance of the EventHandler object.
        */
        function EventHandler() {
            this._type = "EventHandler";
            this._actions = [];
        }
        /**
        * Binds the provided action to the EventHandler.  Trigger will execute all bound functions.
        * @param action Function to execute on EventHandler Trigger.
        */
        EventHandler.prototype.Bind = function (action) {
            this._actions.push(action);
        };

        /**
        * Binds the provided action to the EventHandler for the specified number of triggers.  Once all triggers have been fired the EventHandler will unbind itself.  Trigger will execute all bound functions.
        * @param action Function to execute on EventHandler Trigger.
        * @param triggerCount Number of triggers to wait before unbinding the action.
        */
        EventHandler.prototype.BindFor = function (action, triggerCount) {
            var that = this, triggers = 0, wire = function () {
                if (++triggers >= triggerCount) {
                    that.Unbind(wire);
                }

                action.apply(this, arguments);
            };

            this._actions.push(wire);
        };

        /**
        * Unbinds the provided action from the EventHandler.
        * @param action Function to unbind.  The action will no longer be executed when the EventHandler gets Triggered.
        */
        EventHandler.prototype.Unbind = function (action) {
            for (var i = 0; i < this._actions.length; i++) {
                if (this._actions[i] === action) {
                    this._actions.splice(i, 1);

                    return;
                }
            }
        };

        /**
        * Determines if the EventHandler has active bindings.
        */
        EventHandler.prototype.HasBindings = function () {
            return this._actions.length > 0;
        };

        /**
        * Executes all bound functions and passes the provided args to each.
        */
        EventHandler.prototype.Trigger = function () {
            var actions;

            if (this.HasBindings()) {
                // Clone array so unbinds happening via triggers do not affect functionality
                actions = this._actions.slice(0);

                for (var i = 0; i < actions.length; i++) {
                    actions[i]();
                }
            }
        };

        /**
        * Disposes the event handler and unbinds all bound events.
        */
        EventHandler.prototype.Dispose = function () {
            // Clear the array
            this._actions = [];
        };
        return EventHandler;
    })();
    EndGate.EventHandler = EventHandler;
})(EndGate || (EndGate = {}));
