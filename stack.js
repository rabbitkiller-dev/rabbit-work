"use strict";
var sdk_1 = require("@stackblitz/sdk");
require("./styles.css");
// Create the index.ts file
var code = "import moment from 'moment';\n\ndocument.getElementById('time').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');\n";
// Create the index.html file
var html = "<h1>I was created on <span id='time'></span></h1>";
// Create the project payload.
var project = {
    files: {
        'index.ts': code,
        'index.html': html
    },
    title: 'Dynamically Generated Project',
    description: 'Created with <3 by the StackBlitz SDK!',
    template: 'typescript',
    tags: ['stackblitz', 'sdk'],
    dependencies: {
        moment: '*' // * = latest version
    }
};
// Method to open project in new window
window['openNewProject'] = function () {
    sdk_1["default"].openProject(project);
};
// Method to embed this project
window['embedNewProject'] = function () {
    sdk_1["default"].embedProject('myDiv', project, { height: 320 });
};
