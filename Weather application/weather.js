 class Weather {
     constructor(city,state){
         this.key='42e5530b61d2d74bac016fd2cce927b8'
         this.city=city
         this.state=state
         this.status=status
     }

     async GetReport(){
         let getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.key}`)
 
    let data=await getData.json()
     
    return data
    
        
     }
 }