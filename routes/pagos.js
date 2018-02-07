const path = require('path');
let express = require('express');
let router = express.Router();
let fs = require('fs');
let pdf = require('html-pdf');
//let html = fs.readFileSync(path.resolve(__dirname, '../recibos/template.html'), 'utf8');
let html = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Recibo de Pago</title> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"></head><body style="margin-top: 50px;"> <style> .underline { border-bottom: 1px solid black; width: 100%; display: block; } .row { margin-bottom: 5px; } #inc { font-size: 10pt; } </style> <div class="container" style="border: 2px solid black; border-radius: 5px; padding-left: 25px; padding-right: 25px; padding-top: 25px;"> <div class="row"> <div class="col text-left"> <img src="http://cuiturbide.edu.mx/campusvirtual/pluginfile.php?file=%2F1%2Ftheme_academi%2Flogo%2F1489119727%2Flogo.jpg" class="img-fluid" width="80%" height="80%"> </div> <div class="col text-center"> <span><strong>CENTRO UNIVERSITARIO ITURBIDE, S.C.</strong></span> <p style="font-size: 8pt;">JOSÉ MARÍA MORELOS No. 21-BIS CENTRO</p> <p style="font-size: 8pt;">CP 37980 SAN JOSÉ ITURBIDE, GTO. TEL. (419) 234 28 26</p> </div> <div class="col text-right" style="padding-top: 25px;"> <div style="color: red; font-size: 14pt;">No. 123</div> </div> </div> <div class="row"> <div class="col"> <span class="underline"> <strong>RECIBÍ DE:</strong> Guillermo Ortiz Rebolledo </span> </div> </div> <div class="row"> <div class="col"> <span class="underline"> <strong>LICENCIATURA:</strong> Informática </span> </div> <div class="col"> <span class="underline"> <strong>CUATRIMESTRE:</strong> 4 </span> </div> </div> <div class="row"> <div class="col"> <span class="underline"> <strong>LA CANTIDAD DE:</strong> 850 OCHOCIENTOS CINCUENTA PESOS 00/100 MN </span> </div> </div> <div class="row"> <div class="col"> <span class="underline"> <strong>POR CONCEPTO DE:</strong> PAGO POR 4 MATERIAS LIBRES </span> </div> </div> <div class="row"> <div class="col text-center"> <p>San José Iturbide, Gto. 23 de SEPTIEMBRE del 2018</p> </div> </div> <div class="row" style="margin-top: 35px;"> <div class="col-6"> </div> <div class="col-6"> <p class="underline text-right"></p> <p class="text-center">Nombre y Firma</p> </div> </div> <div class="row"> <div class="col"> <p class="text-center" id="inc">INCORPORADO A SEP RVOE 2012 1822/2012 1823/2012 1824 DE FECHA 12-SEPT-2012</p> </div> </div> </div></body></html>';
let options = { format: 'Letter' };


/*Vista de Pagos*/
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/*Lista de Pagos*/
router.get('/lista', (req,res) => {
    res.json([
        {
            id: 1,
            nombre: 'Pago 01',
            cantidad: 1234
        },
        {
            id: 2,
            nombre: 'Pago 02',
            cantidad: 5432
        }
    ]);
});

router.get('/get/:id', (req,res) => {
    if(req.params.id){
        res.json({
            id: 1,
            nombre: 'Pago 01',
            cantidad: 1234
        });
    }else{
        res.send('sin id');
    }
});

router.get('/recibo', (req,res) => {
    pdf.create(html, options).toFile(path.resolve(__dirname,'../recibos/pago.pdf'), (err, result) => {
        if(err) return console.log(err);
        console.log(result);

        let stream = fs.ReadStream(path.resolve(__dirname, '../recibos/pago.pdf'));
        let filename = "pago.pdf";

        filename = encodeURIComponent(filename);
        res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');
        stream.pipe(res);
    });
});

module.exports = router;
