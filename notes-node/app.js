// initialization file

'use strict';

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
            describe: "Title of note",
            demand: true,
            alias: 't'
        };
const bodyOptions = {
            describe: "Body of note",
            demand: true,
            alias: 'b'
        };

const argv = yargs
    .command('add', 'add a new note', { titleOptions, bodyOptions })
    .command('list', 'list all notes')
    .command('remove', 'remove a note', { titleOptions })
    .command('read', 'remove a note', { titleOptions })
    .help()
    .argv;
var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log("Note tilte exists!");
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    allNotes.forEach((note) => console.log(`[${note.title}]`));

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    } else {
        console.log(`Note ${argv.title} not found.`)
    }

} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('command not recoginized');

}
