const Student = require('../models/student');
const Subject = require('../models/subject');

const usuarioCtrl = {};

usuarioCtrl.getStudents=  async (req, res) => {

    const listastudent = await Student.find();
    res.json(listastudent);
 }

 usuarioCtrl.getStudent = async(req, res)=>{
    console.log(req.params);
    try{
    const studentActual = await Student.findOne({name: req.params.name});
       res.json(studentActual);
    }
    catch
     {res.json({status: '404'});}
   };






usuarioCtrl.getSubjects = async (req, res) => {

    
    const listasubject = await Subject.find();
    res.json(listasubject);
 }

usuarioCtrl.getSubject = async(req, res)=>{
    console.log(req.params);
    try{
    const subjectActual = await Subject.findOne({name: req.params.name});
       res.json(subjectActual);
    }
    catch
     {res.json({status: '404'});}
   };

usuarioCtrl.postStudent= async (req, res) => {

    const studentnew = new Student({

       name: req.body.name,
       adress: req.body.adress,
       phone: req.body.phone

    });
      await studentnew.save();
    res.json({

        status: "200"
    });
};

usuarioCtrl.postSubject= async (req, res) => {

    const subjectNew = new Subject({

       name: req.body.name,
       

    });
      await subjectNew.save();
    res.json({

        status: "200"
    });
};


usuarioCtrl.AñadirStudent = async (req, res) => {
    try{
        console.log(req.params);
    const { name } = req.params.name;
    const cambioDeLista = {
      students: req.body.name
    };

    await Subject.findOneAndUpdate({name: req.params.name}, {$addToSet: cambioDeLista}, {new: true});
    res.json({status: '200'});
}
catch{
    res.json({status: '404'});
}
};


module.exports = usuarioCtrl;