const commands = [
    {
        command: 'Prompt *',
        callback: (msg) => prompt(`Message: ${msg}`)
    },
    {
        command: 'Alert *',
        callback: (msg) => alert(`Message: ${msg}`)
    },
    {
        command: 'Clear',
        callback: ({resetTranscript}) => resetTranscript()
    }

]

export default commands