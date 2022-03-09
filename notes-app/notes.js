const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title == title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
    
   
}

const removeNote = (title) => {
    const notes = loadNotes()
    
    const newNotes = notes.filter((note) => note.title != title
  )

    if (notes.length == newNotes.length) {
        console.log(chalk.bgRed('No note found!'))
    }
    else {
        console.log(chalk.bgGreen('Note Removed!'))
        saveNotes(newNotes)
    }
    
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    const theNote = notes.find((note)=> note.title == title)
    if(theNote) {
        console.log(chalk.inverse("Title : " + theNote.title))
        console.log("Body : " + theNote.body)
    }
    else {
        console.log(chalk.inverse.red("Error! Note not found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    } catch(e) {
        return []
    }    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}