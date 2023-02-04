var azure = require('azure-storage');

module.exports = async function (context, req) {
    var tableSvc = azure.createTableService();
    tableSvc.retrieveEntity('Articles', '2023-02-04', 'PoolOfTheDay', function(error, result, response){
        if(!error){
          // result contains the entity
          context.res.result;
        }
      });    
};