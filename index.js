 
let result = document.getElementById("result");
let btn = document.getElementById("get-leap-year");
//hello
button.addEventListener("click", () => {

    let startyear = Number(document.getElementById("start-year").value);
    let endyear = Number(document.getElementById("end-year").value);
    console.log( startyear,  endyear);
    invalid
    if(
        (startyear < 1582 || startyear > 2999) && (endyear < 1582 || endyear > 2999)
     ) 
     {
         result.innerHTML = 'End year should be greater than start year.'; 
     }
     else if(startyear<1582 || startyear > 2999){
        result.innerHTML = 'Start year should be greater than 1581 and less than 3000.' ; 
     }
     else if(endyear<1582 || endyear > 2999 ){
        result.innerHTML = 'End year should be greater than 1581 and less than 3000.';    
    

});

   

// document.querySelector("button").addEventListener("click", function(){
//     alert("got click");
//     if         (startyear < 1582 || startyear > 2999) && (endyear < 1582 || endyear > 2999      )         
//            result.innerHTML = 'End year should be greater than start year.';  
//                     else if(startyear<1582 || startyear > 2999)        
//                      result.innerHTML = 'Start year should be greater than 1581 and less than 3000.' ;           
//                       else if(endyear<1582 || endyear > 2999 )   
//                             result.innerHTML = 'End year should be greater than 1581 and less than 3000.';    
            
        
        
        





// } );
  