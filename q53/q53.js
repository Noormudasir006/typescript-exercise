"use strict";
//Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
Object.defineProperty(exports, "__esModule", { value: true });
let developerSkills = {
    languages: ['javascript', 'python', 'Java'],
    framework: ['React.js', 'Angular', 'Django'],
    tools: ['Git', 'Docker', 'Visual Studio Code']
};
let { languages, framework, tools } = developerSkills;
console.log(`language: ${languages[0]}, farmework: ${framework[0]}, tools: ${tools[2]}`);
