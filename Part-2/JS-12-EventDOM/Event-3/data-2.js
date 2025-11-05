function display(){
    //let cdt=new Date().toDateString()
    let cdt=new Date().toLocaleString()
    let ptag_Ref=document.getElementById('xyz')
    console.log(ptag_Ref)
    ptag_Ref.innerHTML=cdt
    //ptag_Ref.innerHTML="GM"
}