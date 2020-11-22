async function request(){
    var request = await fetch('https://api.covid19api.com/country/south-africa');
    var data=await request.json();
    alert(toString( data.Country));
}
request();