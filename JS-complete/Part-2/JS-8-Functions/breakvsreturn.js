function calc(){
        let numbers=[10,20,25,30,40]
        for( let num of numbers){
            if(num%2!==0){
                //break;
                return
            }
            console.log(num)
        }
    console.log("GM")
}
calc()