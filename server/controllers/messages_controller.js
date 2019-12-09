let messages = [];
let id = 0;

function create(req, res){
    const{ text, time } = req.body
    messages.push({id, text, time});
    id++;
    res.status(200).json(messages)
}

function read(req, res){
    res.status(200).json(messages)
}

function update(req, res){
    const { text } = req.body
    const { id } = req.params
    const index = messages.findIndex(element => element.id == id)
    messages[index].text = text;
    res.status(200).json(messages)
}

function deleteMessage(req, res){
    const { id } = req.params;
    for(let i=0; i < messages.length; i++){
        if(messages[i].id == id) {
            messages.splice(i, 1);
        }
    }
    res.status(200).json(messages)
}


module.exports = {
    create,
    read,
    update,
    deleteMessage
}