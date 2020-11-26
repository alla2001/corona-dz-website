

async function request() {
    var request = await fetch('https://api.covid19api.com/country/Algeria');
    //var request = await fetch('https://api.covid19api.com/country/Algeria',{ countryCode: "DZ" });
    
    var data = await request.json();
   
    alert(JSON.stringify( data));
    var lab = [];
    var actives = [];
    var confirm=[];
    var deat=[];
    var i;
    for (var i = 0; i < data.length; i++) {
        var date = JSON.stringify(data[i].Date).slice(1, JSON.stringify(data[i].Date).indexOf("T"));
        lab.push(date);
        actives.push(data[i].Active);
        confirm.push(data[i].Confirmed);
        deat.push(data[i].Deaths);
    }
    document.getElementById("confirmed").innerHTML=data[data.length-1].Confirmed;
    document.getElementById("active").innerHTML=data[data.length-1].Active;
    document.getElementById("deaths").innerHTML=data[data.length-1].Deaths;
    document.getElementById("recovered").innerHTML=data[data.length-1].Recovered;
    var confirmed_change = (data[data.length-1].Confirmed)-(data[data.length-2].Confirmed);
    var active_change = (data[data.length-1].Active)-(data[data.length-2].Active);
    var deaths_change = (data[data.length-1].Deaths)-(data[data.length-2].Deaths);
    var recovered_change = (data[data.length-1].Recovered)-(data[data.length-2].Recovered);
    if(active_change>0)
    {
        document.getElementById("active_change").innerHTML="⬆";
    }
    else{
        document.getElementById("active_change").innerHTML="⬇";

    }
    document.getElementById("confirmed_change").innerHTML = ("⬆"+ confirmed_change);
    document.getElementById("active_change").innerHTML += (active_change);
    document.getElementById("deaths_change").innerHTML = ("⬆"+ deaths_change);
    document.getElementById("recovered_change").innerHTML = ("⬆"+ recovered_change);
    
    var con_ctx = document.getElementById('confirmed_chart').getContext('2d');
    var act_ctx = document.getElementById('active_chart').getContext('2d');
    var death_ctx = document.getElementById('death_chart').getContext('2d');
   
    var chart = new Chart(con_ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: lab,
            datasets: [{
                label: 'Active',
                backgroundColor: 'rgba(255, 120, 132,0)',

                borderColor: 'rgb(175, 100, 100)',
                data: actives
            }]
        },

        // Configuration options go here
        options: {
            legend: {




                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'rgb(44, 54, 68)'
                }
            }
        }
    });
    var chart = new Chart(act_ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: lab,
            datasets: [{
                label: 'Confirmed',
                backgroundColor: 'rgba(255, 120, 132,0)',

                borderColor: 'rgb(175, 100, 100)',
                data: confirm
            }]
        },

        // Configuration options go here
        options: {
            legend: {




                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'rgb(44, 54, 68)'
                }
            }
        }
    });
    var chart = new Chart(death_ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: lab,
            datasets: [{
                label: 'Deaths',
                backgroundColor: 'rgba(255, 120, 132,0)',

                borderColor: 'rgb(175, 100, 100)',
                data: deat
            }]
        },

        // Configuration options go here
        options: {
            legend: {




                labels: {
                    // This more specific font property overrides the global property
                    fontColor: 'rgb(44, 54, 68)'
                }
            }
        }
    });
    

    
}

request();