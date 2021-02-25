const ubahnolnol = (nomor) =>{
    if (nomor <10) {
        nomor ='00'+nomor
    }else if (nomor <100){
        nomor ='0'+nomor
    }
    return nomor
}

module.exports = ubahnolnol