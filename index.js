        var cont=document.createElement("div");
        cont.setAttribute("class","container")
        document.body.append(cont);
        var roww=document.createElement("div");
        roww.setAttribute("class","row roww");
        cont.append(roww);
        var res=fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data1)=>{
            for(var i=0;i<data1.length;i++)
            { 
                var div=document.createElement("div");
                div.setAttribute("class","col-lg-4 col-md-12")
                div.innerHTML=`<div class="card text-white mb-3 divss" style="max-width: 18rem;">
            <div class="card-header" style="text-align:center">${data1[i].name}</div>
            <div class="card-body divvsb ${data1[i].name}">
            <img src="${data1[i].flag}" class="card-img-top" alt="...">
            <h5 class="card-title text-center" id="title" style="text-align:center;" >Capital : ${data1[i].capital}</h5>
            <h5 class="card-title text-center" id="title" style="text-align:center;" >Region : ${data1[i].region}</h5>
            <h5 class="card-title text-center" id="title" style="text-align:center;" >Country code : ${data1[i].alpha3Code}</h5> 
            <h5 class="card-title text-center" id="title" style="text-align:center;" > <button class="btn btn-primary" type="button" onclick="restdata('${data1[i].name}',${data1[i].latlng})">Click For Weather</button></h5>
            </div>`;
            roww.append(div)
        }
        }); 

        //function to pass the values of country's name,lat,lng to get the country's temp
            async function restdata(name,lat,lon){
            try {
            let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=860db5c26a30aea0727d8270feee4abb`);
            let res1= await res.json();
            var temp = document.createElement("h5");
            temp.setAttribute("class","card-title text-center");
            temp.setAttribute("class","card-title text-center");
            temp.setAttribute("style","text-align:center;");
            temp.innerHTML=`Temparature : ${res1.main.temp}`;
            var body = document.querySelector(`.card-body.${name}`);
            body.querySelector('.btn-primary').setAttribute("disabled",true);
            body.append(temp);
            
            } catch (error) {
                console.log(error.message);
            }
            }