

var dbs = require('../data/friends.js')


module.exports = function(app){

    app.get('/api/friends',function(req,res){

        res.json(dbs);
    })

    app.post('/api/friends',function(req,res){
        
        var data = req.body;
        var uScore = data.scores


       
        console.log(data);

        var compare = {
            name:"",
            photo:"",
            values:1000
        };


        var difference = 0;

        for (var i = 0; i < dbs.length; i++){
           
            console.log(dbs[i]);    
            difference = 0;
            
            for (var j = 0; j < dbs[i].scores[j]; j++){
             
                difference += Math.abs(parseInt(uScore[j]) - parseInt(dbs[i].scores[j]));

                if(difference <= compare.values){
                    
                    compare.name = dbs[i].name;
                    compare.photo = dbs[i].photo;
                    compare.values = difference;
                }
            }
            
        }

        dbs.push(data);

        res.json(compare);
    })
}