console.log('hello world')
document.addEventListener('DOMContentLoaded', () => {
    M.updateTextFields();
    const button =document.getElementById('enter')
    button.addEventListener('click', checkDoku)
})
const checkDoku=function(){
    for(let i=0;i<9;i++){
        const input = document.getElementById('I0').value
        if(input.length!=9){
            break;
        }
        
    }
    
    
}
const checknum = function(input){
   for(let i=0;i<10;i++){
        if(input=i){
            return true
        } 
    }
    return false
}