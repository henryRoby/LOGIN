var Login = require('../Model/model.client');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);


// Create tableau des eleves
module.exports.PosteLogin = function(req,res) {
   
    
    var nomUtilisateur = req.body.nomUtilisateur
    var password = req.body.password
     var email = req.body.email
    var hash = bcrypt.hashSync(password, salt);
   
    console.log("voici hash",hash);
    
    Login.find()
            .then(note0 => {
                if(note0.length==0) {
                    id = 0;
                    console.log('mbola',id);
                    
                }else{
                    id = parseInt(note0[note0.length-1].id)+1;
                }

            const insert = new Login({_id:id,nomUtilisateur:nomUtilisateur,email:email,password:hash});
            (!nomUtilisateur||!email || !password)? console.log(" non reussi",nomUtilisateur,email,password):insert.save()
                .then(()=>{
                    Login.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
            })
    }


    module.exports.GetLogin = (req, res) => {
        var nomUtilisateur = req.body.nomUtilisateur
        var password = req.body.password
        

        Login.find()
            .then(note=>{
                var r=false
                
                for(let i=0;i<note.length;i++){
                   
                    
                    if(bcrypt.compareSync(password, note[i].password)&&(nomUtilisateur===note[i].nomUtilisateur||nomUtilisateur===note[i].email)){
                        r=true
                        res.send(note[i].nomUtilisateur)
                    }
                }
                if(!r){
                    res.send("erreur mdp ou nom")
                }
            //    var v= bcrypt.compareSync("henry", note[0].password)
            //     console.log(v);
            })
            .catch (e =>{
                res.status(500).send({mes:e.mes || "erreur"})
            });
    };
    
    //Post prof

  