/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');

// Add this to the end of the existing file
import './app.jsx';

// import {fs} from 'fs';
// window.require = require;
//import { createRequire } from 'module';
//const require = createRequire(import.meta.url);

import * as fs from'fs';

console.log('👋 import fs');
// import * as fs from 'fs';
//window.require = require;
// const fs = require('fs');
fs.writeFileSync("hello.txt", "Привет ми ми миasdfasdfasdg!");
// import serialPort from 'serialport';
// import serialPort from 'serialport';
// console.log(serialPort.list());
//import * as SerialPort from 'serialport';