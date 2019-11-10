import mongoose from 'mongoose';

class MongoManager {

    
    constructor(config){
        this._config = config;
    }
    getConnectionURL(){
        return this._config;
    }

    isConnected(){
        mongoose.connection.on('connected',_=> true);
    }
    
    connect () {
        return mongoose.connect(this.getConnectionURL(),
        { useNewUrlParser: true, useUnifiedTopology: true });
      }
    
    disconnect(){
        mongoose.disconnect();
    }

}

export default new MongoManager("mongodb+srv://tonireis60:#PinkFloyd1883#@cluster0-vi9uq.mongodb.net/test?retryWrites=true&w=majority");
