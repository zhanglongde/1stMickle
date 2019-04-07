/**
 * Created by zhanglongde on 2016/8/28.
 */

query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
    query("SELECT * FROM transactions WHERE clientId=" + id, function(transactions){
        transactions.each(function(transac){
            query("UPDATE transactions SET value = " + (transac.value*0.1) + " WHERE id=" + transac.id, function(error){
                if(!error){
                    console.log("success!!");
                }else{
                    console.log("error");
                }
            });
        });
    });
});

//通过模块化，避免回调地狱
var logError = function(error){
        if(!error){
            console.log("success!!");
        }else{
            console.log("error");
        }
    },
    updateTransaction = function(t){
        query("UPDATE transactions SET value = " + (t.value*0.1) + " WHERE id=" + t.id, logError);
    },
    handleTransactions = function(transactions){
        transactions.each(updateTransaction);
    },
    handleClient = function(id){
        query("SELECT * FROM transactions WHERE clientId=" + id, handleTransactions);
    };

query("SELECT clientId FROM clients WHERE clientName='picanteverde';",handleClient);