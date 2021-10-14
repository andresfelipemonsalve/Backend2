const mongoose = require ('mongoose');

const URI= 'mongodb://localhost/testcrud';

const conn = async()=>{
    try {
        const db= await mongoose.connect( URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos conectada', db.connection.name )
        
    } catch (error) {
        console.log(error.message)
    }
};

module.exports= conn()

/* 

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
 //    useCreateIndex: true,
 //   useFindAndModify: false 
}).then(db=>console.log('Base de datos conectada'))
.catch(error=>console.log(error.message));

module.exports= mongoose
 */
