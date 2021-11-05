var xhr = new XMLHttpRequest();
xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function() {
    if(xhr.status >=200 && xhr.status < 300){
        var data = JSON.parse(this.response);
        //console.log(data);
        for(let i=0; i<=data.length; i++){
            console.log(`
            Flag       : ${data[i].flag}
            Name       : ${data[i].name}
            Region     : ${data[i].region}
            Sub Region : ${data[i].subregion}
            Population : ${data[i].population}
            `);
        }
    }else {
        console.log("Data not available");
    }
}
xhr.send();