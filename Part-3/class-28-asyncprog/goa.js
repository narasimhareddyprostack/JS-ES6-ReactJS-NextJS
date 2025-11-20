let goToGoa=(success,failure)=>{
    let acc_Bal=28000;
        if (acc_Bal>=15000) {
            success("Go and Enjoy")
        } else {
            failure("Go to Pro Stack! Practice")
        }
            
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})