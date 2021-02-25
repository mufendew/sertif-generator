const Jimp = require('jimp');
const {Event, Participant, ParticipantEvent} = require("../models")

class generateController {
    static show(req, res){
        console.log(req.session);
        res.render('generate/inputNomor.ejs')
    }
    static generate(req,res){
        ParticipantEvent.findOne({
            include: [Participant,Event],
            where: {
                certificate_number : req.body.nomor
            }
        })
        .then((data) =>{
            let tanggal = new Date(data.Event.awal).toString()
            Jimp.read('template/sertif.jpg')
            .then(image => {
                Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(font => {
                    image.print(font,750,950,{
                        text: data.Participant.name,
                        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                      },2000,200);
                     return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK)
                }).then(fontt =>{
                    image.print(fontt,750,300,{
                        text: data.certificate_number,
                        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                      },2000,200);
                    image.print(fontt,450,1200,{
                        text: `Telah mengikuti Bimbingan Teknis Kualifikasi ${data.Event.name} Migas yang diselenggarakan oleh Direktorat Jenderal Migas tanggal ${tanggal.substring(0,12)} dengan hasil : Baik`,
                        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
                      },2500,200);
                    return image.write('lena-small-bw.jpg',res.download("lena-small-bw.jpg")); // save
                });
            })
            .catch(err => {
                console.error(err);
            });
        })
        .catch(err => {
            res.send(err)
        });
        
    }
}

module.exports = generateController