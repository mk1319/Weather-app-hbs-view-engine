const axios=require('axios');
const fs=require('fs');
const app = require('express')()



app.set('views','./views')
app.set("view engine","hbs")


app.get('/',(req,response)=>{

    var datas=[];

    axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
.then((res)=>{

    response.render('index',{"objects":[res.data] });
    let data = JSON.stringify(res.data, null, 2);
    fs.writeFile('Weather.json', data, (err) => {
    if (err) throw err;
});
})
.catch((err)=>{
    response.send("Unable to fetch data!");
})
})

app.listen(3000);
