  
    
    
   
 

 document.querySelector('.btn').addEventListener('click',()=>{
     let sa=document.querySelector('.city').value
     let sg=document.querySelector('.state').value
     let ui=new UI(sa,sg)
    let weather =new Weather(sa,sg)
      
    weather.GetReport()
    .then((data1)=>{
        
        
        ui.PaintAll(data1)}
    
        )
 
    .catch(err=>console.log(err))
     document.querySelector('.city').value=''
     document.querySelector('.state').value=''
 })
  