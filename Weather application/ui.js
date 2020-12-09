let sa=document.querySelector('.city').value
let sg=document.querySelector('.state').value
 let weather=new Weather(sa,sg)
 
 class UI{
     constructor(city,state){
          this.paint=document.querySelector('.display')
          this.city=city
          this.state=state
     }
      PaintAll(area){
this.paint.innerHTML=`
<div class="container"> 
    <div class="col s12 m7">
        <h2 class="header">Live Report</h2>
        <div class="card horizontal">
          <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6">
          </div>
          <div class="card-stacked">
            <div class="card-content">
                <ul>
                    <li>City:   ${this.city} </li>
                    <br>
                    <li>State    :${this.state} </li>
                    <br>
                    <li>Humidity  :${area.main.humidity}  air g.kg-1</li>
                    <br>
                    <li>Windflow    :${area.wind.speed} Km/hr</li>
                    <br>
                    <li>Tempreture    :${area.main.temp} K</li>
                    <br>
                     
                </ul>
            </div>
             
          </div>
        </div>
      </div>
</div>
 
`
      }
 }