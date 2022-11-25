const fs = require('fs');

var dataTechnique = "";

const convertPrioriFileToArrayObject = async () => {
    this.prioriData = [];
    const data = fs.readFileSync('./features/web/step_definitions/data/post_data.txt', {encoding:'utf8', flag:'r'});
    const lines = data.split(/\n/);
    for(let i = 1; i < lines.length - 1; i++){
        var dataObject = {};
        const dataLine = lines[i].split(/\t/);
        dataObject.postShortTitle = dataLine[0];
        dataObject.postLongTitle = dataLine[1];
        dataObject.postShortBody = dataLine[2];
        dataObject.postLongBody = dataLine[3];
        dataObject.postRigthUrl = dataLine[4];
        dataObject.postWrongUrl = dataLine[5];
        dataObject.postFutureDate = dataLine[6];
        dataObject.postPastDate = dataLine[7];
        dataObject.postWordsTags = dataLine[8];
        dataObject.postSentenceTags = dataLine[9];
        dataObject.postWrongTags = dataLine[10];
        this.prioriData.push(dataObject);
    }
}

const setDataTechnique = (technique) => {
    this.dataTechnique = technique;
}

const getDataTechnique = () => {
    return this.dataTechnique;
}

const getPrioriDataFromArray = (field) => {
    const randomNumber = getRandomInt(0, this.prioriData.length);
    var object = this.prioriData[randomNumber];
    return object[field];
}

module.exports = {
    convertPrioriFileToArrayObject, setDataTechnique, getDataTechnique, getPrioriDataFromArray
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
