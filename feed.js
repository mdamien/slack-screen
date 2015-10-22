var i = 0;

var messages = []

function generateMessage(onChange) {
    messages.push({text:'this is '+i+' !'})
    onChange(messages);
    i += 1;
}

function start(onChange) {
    setInterval(generateMessage.bind(this, onChange), 1000);
}

exports.start = start;