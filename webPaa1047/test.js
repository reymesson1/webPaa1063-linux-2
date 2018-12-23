var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var Post = require('./models/post.js');
var Master = require('./models/master.js');

// var CronJob = require('cron').CronJob;
// new CronJob('0 49 * * * *', function() {
//   console.log('You will see this message every second');  


var dataMaster = {}
var dataMaster2 = {}
var dataMaster3 = {}
var dataMaster4 = {}
var dataMaster5 = {}
var dataMaster6 = {}
var dataMaster7 = {}
var dataMaster8 = {}
var dataMaster9 = {}
var dataMaster10 = {}
var dataMaster11 = {}
var dataMaster12 = {}
var dataMaster13 = {}
var dataMaster14 = {}
var dataMaster15 = {}
var dataMaster16 = {}
var dataMaster17 = {}
var dataMaster18 = {}
var dataMaster19 = {}
var dataMaster20 = {}
var dataMaster21 = {}
var dataMaster22 = {}
var dataMaster23 = {}
var dataMaster24 = {}


  setTimeout(async() => {

    var master = await Master.findOne({"sequence":0})
    console.log(master)      
    dataMaster["title"] = master.title
    dataMaster["header"] = master.header
    dataMaster["description"] = master.description

    var posts = Post.remove({},function(err){
      if(!err){console.log('removed!')}
    })
 
    var master2 = await Master.findOne({"sequence":1})
    console.log(master2)      
    dataMaster2["title"] = master2.title
    dataMaster2["header"] = master2.header
    dataMaster2["description"] = master2.description

    var master3 = await Master.findOne({"sequence":2})
    console.log(master3)      
    dataMaster3["title"] = master3.title
    dataMaster3["header"] = master3.header
    dataMaster3["description"] = master3.description

    var master4= await Master.findOne({"sequence":3})
    console.log(master4)      
    dataMaster4["title"] = master4.title
    dataMaster4["header"] = master4.header
    dataMaster4["description"] = master4.description

    var master5= await Master.findOne({"sequence":4})
    console.log(master5)      
    dataMaster5["title"] = master5.title
    dataMaster5["header"] = master5.header
    dataMaster5["description"] = master5.description

    var master6= await Master.findOne({"sequence":5})
    console.log(master6)      
    dataMaster6["title"] = master6.title
    dataMaster6["header"] = master6.header
    dataMaster6["description"] = master6.description

    var master7= await Master.findOne({"sequence":6})
    console.log(master7)      
    dataMaster7["title"] = master7.title
    dataMaster7["header"] = master7.header
    dataMaster7["description"] = master7.description

    var master8= await Master.findOne({"sequence":7})
    console.log(master8)      
    dataMaster8["title"] = master8.title
    dataMaster8["header"] = master8.header
    dataMaster8["description"] = master8.description

    var master9= await Master.findOne({"sequence":8})
    console.log(master9)      
    dataMaster9["title"] = master9.title
    dataMaster9["header"] = master9.header
    dataMaster9["description"] = master9.description

    var master10= await Master.findOne({"sequence":9})
    console.log(master10)      
    dataMaster10["title"] = master10.title
    dataMaster10["header"] = master10.header
    dataMaster10["description"] = master10.description

    var master11= await Master.findOne({"sequence":10})
    console.log(master11)      
    dataMaster11["title"] = master11.title
    dataMaster11["header"] = master11.header
    dataMaster11["description"] = master11.description

    var master12= await Master.findOne({"sequence":11})
    console.log(master12)      
    dataMaster12["title"] = master12.title
    dataMaster12["header"] = master12.header
    dataMaster12["description"] = master12.description

    var master13= await Master.findOne({"sequence":12})
    console.log(master13)      
    dataMaster13["title"] = master13.title
    dataMaster13["header"] = master13.header
    dataMaster13["description"] = master13.description

    var master14= await Master.findOne({"sequence":13})
    console.log(master14)      
    dataMaster14["title"] = master14.title
    dataMaster14["header"] = master14.header
    dataMaster14["description"] = master14.description

    var master15= await Master.findOne({"sequence":14})
    console.log(master15)      
    dataMaster15["title"] = master15.title
    dataMaster15["header"] = master15.header
    dataMaster15["description"] = master15.description

    var master16= await Master.findOne({"sequence":15})
    console.log(master16)      
    dataMaster16["title"] = master16.title
    dataMaster16["header"] = master16.header
    dataMaster16["description"] = master16.description

    var master17= await Master.findOne({"sequence":16})
    console.log(master17)      
    dataMaster17["title"] = master17.title
    dataMaster17["header"] = master17.header
    dataMaster17["description"] = master17.description

    var master18= await Master.findOne({"sequence":17})
    console.log(master18)      
    dataMaster18["title"] = master18.title
    dataMaster18["header"] = master18.header
    dataMaster18["description"] = master18.description

    var master19= await Master.findOne({"sequence":18})
    console.log(master19)      
    dataMaster19["title"] = master19.title
    dataMaster19["header"] = master19.header
    dataMaster19["description"] = master19.description

    var master20= await Master.findOne({"sequence":19})
    console.log(master20)      
    dataMaster20["title"] = master20.title
    dataMaster20["header"] = master20.header
    dataMaster20["description"] = master20.description

    var master21= await Master.findOne({"sequence":20})
    console.log(master21)      
    dataMaster21["title"] = master21.title
    dataMaster21["header"] = master21.header
    dataMaster21["description"] = master21.description

    var master22= await Master.findOne({"sequence":21})
    console.log(master22)      
    dataMaster22["title"] = master22.title
    dataMaster22["header"] = master22.header
    dataMaster22["description"] = master22.description

    var master23= await Master.findOne({"sequence":22})
    console.log(master23)      
    dataMaster23["title"] = master23.title
    dataMaster23["header"] = master23.header
    dataMaster23["description"] = master23.description

    var master24= await Master.findOne({"sequence":23})
    console.log(master24)      
    dataMaster24["title"] = master24.title
    dataMaster24["header"] = master24.header
    dataMaster24["description"] = master24.description



  }, 6000);

var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

driver.get('https://www.corotos.com.do/create');

driver.findElement(By.id('pid_email')).sendKeys('reymesson@gmail.com')
driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()

driver.wait(webdriver.until.elementLocated(webdriver.By.id('otp-verification-code')),20000)
.then(()=>{
  setTimeout(async() => {
    console.log('esperar....')
    var posts = await Post.find({})
    console.log(posts[0].code);
    return driver.findElement(webdriver.By.id('otp-verification-code')).sendKeys(posts[0].code);
  }, 15000);
  
}).then((element)=>{
    setTimeout(async() => {      
      console.log('esperar2....')
      console.log('esperar3....')
      var posts = Post.remove({},function(err){
        if(!err){console.log('removed!')}
      })
      return driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()
    }, 20000);
   
    setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 25000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 29000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM (1).jpeg"); 

}, 33000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM.jpeg"); 

}, 37000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 41000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster.header); 

}, 42000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster.description); 

}, 43000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 44000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 45000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 46000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 47000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 48000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 49000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 50000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 51000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 52000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 53000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 54000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 55000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 56000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 57000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 58000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 59000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 60000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 61000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 62000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 63000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 64000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 65000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 66000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 67000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 68000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 69000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 70000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 71000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 72000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 73000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 74000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 75000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 76000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 77000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 78000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 79000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 80000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 81000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 82000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 83000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(21000); 

}, 84000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 85000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 86000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 87000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 88000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 89000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 90000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 91000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 92000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 93000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 94000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 95000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 96000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 97000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 98000)






}).catch(()=>{
    console.log('Element not found');
    driver.close();
})

//}, null, true, 'America/Los_Angeles');


mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})
