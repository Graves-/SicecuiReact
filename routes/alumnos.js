let express = require('express');
let router = express.Router();

/*Vista de Alumnos*/
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/*Lista de Alumnos*/
router.get('/lista', (req,res) => {
    res.json([
        {
            id: 1,
            nombre: 'Memo',
            correo: 'memo7728@gmail.com'
        },
        {
            id: 2,
            nombre: 'Oscar',
            correo: 'oscar.pa@gmail.com'
        }
    ]);
});

router.get('/:id', (req,res) => {
    if(req.params.id){
        res.json({
            id: 1,
            nombre: 'Memo',
            correo: 'memo7728@gmail.com'
        });
    }else{
        res.send('sin id');
    }
});

module.exports = router;
