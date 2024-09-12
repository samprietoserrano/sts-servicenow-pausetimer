// ==UserScript==
// @name        ServiceNow Stop Timer
// @namespace   https://github.com/samprietoserrano/sts-servicenow-pausetimer
// @match       *://stanford.service-now.com/*
// @description Script to stop the timer if it is running
// @icon https://cdn.iconscout.com/icon/premium/png-256-thumb/stop-timer-1073190.png
// @downloadURL https://raw.githubusercontent.com/samprietoserrano/sts-servicenow-pausetimer/main/servicenow-pause-timer.user.js
// @updateURL https://raw.githubusercontent.com/samprietoserrano/sts-servicenow-pausetimer/main/servicenow-pause-timer.user.js
// @license MIT
// @copyright 2024, samxp (https://openuserjs.org/users/samxp)
// ==/UserScript==

(function() {
    'use strict';

    // Function to process elements and change the hidden input value
    function processElements() {
        // 1. Check for any element with data-type="timer"
        var timerElement = document.querySelector('input[data-type="timer"]');

        if (timerElement) {
            // Extract the value of the data-uid attribute
            var timerUID = timerElement.getAttribute('data-uid');
            console.log("Timer data-uid found:", timerUID);

            // Concatenate the data-uid to create the hidden input ID
            var hiddenInputID = "tmr_" + timerUID + "_paused";
            console.log("Concatenated hidden input-timer ID:", hiddenInputID);

            // 2. Get the hidden input element using the concatenated ID
            var hiddenInput = document.getElementById(hiddenInputID);

            // Check if the hidden input element exists
            if (hiddenInput) {
                // Change the value attribute of the hidden input
                hiddenInput.value = "true";
                console.log("Hidden input-timer bool value changed to:", hiddenInput.value);
            } else {
                console.log("Hidden input-timer element not found with ID:", hiddenInputID);
            }
        } else {
            console.log("No element with data-type='timer' found!");
        }
    }

    // Wait until the DOM is fully loaded
    window.addEventListener('load', function() {
        setTimeout(processElements, 100);  // Slight delay to ensure all elements are loaded
    });

})();
