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
var dataMaster25 = {}
var dataMaster26 = {}
var dataMaster27 = {}
var dataMaster28 = {}
var dataMaster29 = {}
var dataMaster30 = {}


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

    var master25= await Master.findOne({"sequence":24})
    console.log(master25)      
    dataMaster25["title"] = master25.title
    dataMaster25["header"] = master25.header
    dataMaster25["description"] = master25.description

    var master26= await Master.findOne({"sequence":25})
    console.log(master26)      
    dataMaster26["title"] = master26.title
    dataMaster26["header"] = master26.header
    dataMaster26["description"] = master26.description

    var master27= await Master.findOne({"sequence":26})
    console.log(master27)      
    dataMaster27["title"] = master27.title
    dataMaster27["header"] = master27.header
    dataMaster27["description"] = master27.description
    
    var master28= await Master.findOne({"sequence":27})
    console.log(master28)      
    dataMaster28["title"] = master28.title
    dataMaster28["header"] = master28.header
    dataMaster28["description"] = master28.description
    
    var master29= await Master.findOne({"sequence":28})
    console.log(master29)      
    dataMaster29["title"] = master29.title
    dataMaster29["header"] = master29.header
    dataMaster29["description"] = master29.description
    
    var master30= await Master.findOne({"sequence":29})
    console.log(master30)      
    dataMaster30["title"] = master30.title
    dataMaster30["header"] = master30.header
    dataMaster30["description"] = master30.description



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




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM (1).jpeg"); 

}, 33000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM.jpeg"); 

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

}, 53000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 53000)
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



/*********************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 100000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 104000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.14.17 PM.jpeg"); 

}, 108000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.14.18 PM (1).jpeg"); 

}, 112000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 116000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster2.header); 

}, 117000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster2.description); 

}, 118000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 119000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 120000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 121000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 122000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 123000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 124000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 125000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 126000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 127000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 128000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 129000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 130000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 131000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 132000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 133000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 134000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 135000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 136000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 137000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 138000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 139000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 140000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 141000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 142000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 143000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 144000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 145000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 146000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 147000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 148000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 149000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 150000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 151000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 152000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 153000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 154000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 155000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 156000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(51000); 

}, 157000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 158000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 159000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 160000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 161000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 162000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 163000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 164000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 165000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 166000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 167000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 168000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 169000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 170000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 171000)


/***************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 180000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 184000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.37.27 AM.jpeg"); 

}, 188000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.37.28 AM.jpeg"); 

}, 192000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 196000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster3.header); 

}, 197000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster3.description); 

}, 198000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 199000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 200000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 201000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 202000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 203000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 204000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 205000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 208000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 209000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 210000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 211000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 212000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 213000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 214000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 215000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 216000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 217000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 218000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 219000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 220000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 221000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 222000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 223000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 224000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 225000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 226000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 227000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 228000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 229000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 230000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 231000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 232000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 233000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 234000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 235000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 236000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 237000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 238000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(94500); 

}, 239000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 240000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 241000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 242000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 243000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 244000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 245000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 246000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 247000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 248000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 249000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 250000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 251000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 252000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 253000)


/********************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 260000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 264000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.32.03 AM (1).jpeg"); 

}, 268000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.32.03 AM.jpeg"); 

}, 272000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 276000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster4.header); 

}, 277000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster4.description); 

}, 278000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 279000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 280000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 281000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 282000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 283000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 284000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 285000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 287000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 287000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 288000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 289000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 290000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 291000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 292000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 293000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 294000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 295000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 296000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 297000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 298000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 299000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 300000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 301000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 302000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 303000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 304000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 305000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 306000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 307000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 308000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 309000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 310000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 311000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 312000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 313000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 314000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 315000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 316000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 317000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 318000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(81500); 

}, 319000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 320000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 321000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 322000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 323000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 324000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 325000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 326000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 327000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 328000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 329000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 330000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 331000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 332000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 333000)

/******************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 340000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 344000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.30.25 AM (1).jpeg"); 

}, 348000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.30.25 AM.jpeg"); 

}, 352000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 356000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

}, 357000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

}, 358000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 359000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 360000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 361000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 362000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 363000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 364000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 365000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 367000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 367000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 368000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 369000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 370000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 371000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 372000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 373000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 374000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 375000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 376000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 377000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 378000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 379000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 380000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 381000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 382000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 383000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 384000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 385000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 386000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 387000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 388000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 389000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 390000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 391000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 392000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 393000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 394000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 395000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 396000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 397000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 398000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(68000); 

}, 399000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 400000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 401000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 402000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 403000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 404000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 405000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 406000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 407000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 408000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 409000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 410000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 411000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 412000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 413000)


/******************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 420000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 424000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.26.30 AM.jpeg"); 

}, 428000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.26.29 AM.jpeg"); 

}, 432000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 436000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster6.header); 

}, 437000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster6.description); 

}, 438000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 439000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 440000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 441000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 442000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 443000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 444000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 445000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 447000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 447000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 448000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 449000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 450000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 451000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 452000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 453000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 454000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 455000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 456000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 457000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 458000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 459000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 460000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 461000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 462000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 463000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 464000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 465000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 466000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 467000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 468000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 469000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 470000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 471000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 472000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 473000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 474000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 475000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 476000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 477000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 478000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(2900); 

}, 479000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 480000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 481000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 482000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 483000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 484000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 485000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 486000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 487000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 488000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 489000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 490000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 491000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 492000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 493000)

/******************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 500000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 504000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/anuncio/WhatsApp Image 2018-12-12 at 10.11.45 AM (1).jpeg"); 

}, 508000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/anuncio/WhatsApp Image 2018-12-12 at 10.11.45 AM.jpeg"); 

}, 512000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 516000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster7.header); 

}, 517000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster7.description); 

}, 518000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 519000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 520000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 521000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 522000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 523000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 524000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 525000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 527000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 527000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 528000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 529000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 530000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 531000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 532000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 533000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 534000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 535000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 536000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 537000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 538000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 539000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 540000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 541000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 542000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 543000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 544000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 545000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 546000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 547000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 548000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 549000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 550000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 551000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 552000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 553000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 554000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 555000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 556000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 557000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 558000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(86000); 

}, 559000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 560000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 561000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 562000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 563000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 564000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 565000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 566000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 567000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 568000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 569000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 570000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 571000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 572000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 573000)


/****************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 580000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 584000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-20 at 10.47.10 AM.jpeg"); 

}, 588000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-20 at 10.47.11 AM.jpeg"); 

}, 592000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 596000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster8.header); 

}, 597000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster8.description); 

}, 598000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 599000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 600000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 601000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 602000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 603000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 604000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 605000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 606000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 607000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 608000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 609000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 610000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 611000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 612000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 613000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 614000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 615000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 616000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 617000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 618000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 619000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 620000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 621000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 622000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 623000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 624000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 625000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 626000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 627000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 628000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 629000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 630000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 631000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 632000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 633000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 634000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 635000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 636000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(25000); 

}, 637000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 638000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 639000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 640000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 641000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 642000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 643000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 644000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 645000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 646000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 647000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 648000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 649000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 650000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 651000)


/******************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 660000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 664000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-20 at 10.40.09 AM.jpeg"); 

}, 668000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-20 at 10.40.08 AM.jpeg"); 

}, 672000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 676000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster9.header); 

}, 677000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster9.description); 

}, 678000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 679000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 680000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 681000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 682000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 683000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 684000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 685000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 686000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 687000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 688000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 690000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 690000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 691000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 692000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 693000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 694000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 695000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 696000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 697000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 698000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 699000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 700000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 701000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 702000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 703000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 704000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 705000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 706000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 707000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 708000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 709000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 710000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 711000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 712000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 713000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 714000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 715000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 716000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(81000); 

}, 717000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 718000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 719000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 720000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 721000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 722000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 723000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 724000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 725000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 726000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 727000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 728000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 729000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 730000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 731000)

/*****************************************************************8
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 740000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 744000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-20 at 9.48.41 AM.jpeg"); 

}, 748000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-20 at 9.48.46 AM.jpeg"); 

}, 752000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 756000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster10.header); 

}, 757000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster10.description); 

}, 758000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 759000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 760000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 761000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 762000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 763000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 764000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 765000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 766000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 767000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 768000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 769000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 770000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 771000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 772000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 773000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 774000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 775000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 776000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 777000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 778000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 779000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 780000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 781000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 782000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 783000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 784000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 785000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 786000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 787000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 788000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 789000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 790000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 791000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 792000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 793000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 794000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 795000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 796000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(49000); 

}, 797000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 798000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 799000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 800000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 801000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 802000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 803000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 804000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 805000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 806000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 807000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 808000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 809000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 810000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 811000)




/************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 820000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 824000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-24 at 12.46.00 PM (1).jpeg"); 

}, 828000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-24 at 12.46.00 PM.jpeg"); 

}, 832000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 836000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster11.header); 

}, 837000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster11.description); 

}, 838000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 839000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 840000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 841000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 842000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 843000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 844000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 845000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 847000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 847000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 848000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 849000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 850000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 851000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 852000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 853000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 854000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 855000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 856000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 857000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 858000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 859000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 860000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 861000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 862000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 863000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 864000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 865000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 866000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 867000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 868000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 869000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 870000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 871000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 872000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 873000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 874000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 875000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 876000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 877000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 878000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(59000); 

}, 879000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 880000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 881000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 882000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 883000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 884000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 885000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 886000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 887000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 888000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 889000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 890000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 891000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 892000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 893000)



/**************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 900000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 904000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-06 at 10.09.42 AM.jpeg"); 

}, 908000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-06 at 10.09.45 AM.jpeg"); 

}, 912000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 916000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster12.header); 

}, 917000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster12.description); 

}, 918000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 919000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 920000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 921000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 922000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 923000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 924000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 925000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 927000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 927000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 928000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 929000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 930000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 931000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 932000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 933000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 934000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 935000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 936000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 937000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 938000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 939000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 940000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 941000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 942000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 943000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 944000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 945000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 946000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 947000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 948000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 949000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 950000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 951000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 952000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 953000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 954000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 955000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 956000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 957000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 958000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(79000); 

}, 959000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 960000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 961000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 962000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 963000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 964000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 965000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 966000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 967000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 968000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 969000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 970000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 971000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 972000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 973000)


/******************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 980000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 984000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-28 at 2.43.44 PM.jpeg"); 

}, 988000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-12-28 at 2.43.45 PM.jpeg"); 

}, 992000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 996000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster13.header); 

}, 997000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster13.description); 

}, 998000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 999000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1000000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1001000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1002000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1003000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1004000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1005000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1006000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1007000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1008000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1009000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1010000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1011000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1012000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1013000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1014000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1015000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1016000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1017000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1018000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1019000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1020000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1021000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1022000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1023000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1024000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1025000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1026000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1027000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1028000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1029000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1030000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1031000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1032000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1033000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1034000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1035000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1036000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(2600); 

}, 1037000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1038000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1039000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1040000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1041000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1042000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1043000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1044000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1045000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1046000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1047000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1048000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1049000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1050000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1051000)

/***************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1060000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1064000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-15 at 5.50.57 PM (1).jpeg"); 

}, 1068000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-15 at 5.50.57 PM.jpeg"); 

}, 1072000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1076000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster14.header); 

}, 1077000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster14.description); 

}, 1078000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1079000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1080000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1081000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1082000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1083000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1084000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1085000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1088000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1088000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1088000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1089000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1090000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1091000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1092000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1093000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1094000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1095000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1096000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1097000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1098000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1099000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1100000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1101000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1102000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1103000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1104000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1105000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1106000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1107000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1108000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1109000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1110000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1111000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1112000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1113000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1114000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1115000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1116000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1117000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1118000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69500); 

}, 1119000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1120000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1121000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1122000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1123000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1124000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1125000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1126000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1127000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1128000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1129000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1130000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1131000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1132000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1133000)


/***********************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1140000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1144000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-15 at 5.49.56 PM.jpeg"); 

}, 1148000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-15 at 5.49.57 PM.jpeg"); 

}, 1152000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1156000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster15.header); 

}, 1157000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster15.description); 

}, 1158000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1159000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1160000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1161000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1162000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1163000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1164000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1165000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1168000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1168000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1168000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1169000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1170000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1171000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1172000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1173000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1174000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1175000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1176000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1177000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1178000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1179000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1180000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1181000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1182000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1183000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1184000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1185000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1186000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1187000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1188000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1189000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1190000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1191000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1192000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1193000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1194000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1195000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1196000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1197000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1198000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(85000); 

}, 1199000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1200000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1201000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1202000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1203000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1204000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1205000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1206000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1208000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1209000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1210000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1211000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1212000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1213000)


/*********************************************************
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1220000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1224000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-15 at 3.03.54 PM (1).jpeg"); 

}, 1228000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-15 at 3.03.54 PM.jpeg"); 

}, 1232000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1236000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster16.header); 

}, 1237000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster16.description); 

}, 1238000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1239000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1240000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1241000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1242000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1243000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1244000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1245000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1246000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1247000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1248000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1249000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1250000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1251000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1252000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1253000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1254000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1255000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1256000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1257000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1258000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1259000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1260000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1261000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1262000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1263000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1264000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1265000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1266000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1267000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1268000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1269000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1270000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1271000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1272000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1273000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1274000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1275000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1276000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(66000); 

}, 1277000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1278000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1279000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1280000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1281000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1282000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1283000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1284000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1285000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1286000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1287000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1288000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1289000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1290000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1291000)


/**************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1300000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1304000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-24 at 11.30.16 AM.jpeg"); 

}, 1308000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2019-01-24 at 11.30.15 AM.jpeg"); 

}, 1312000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1316000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster18.header); 

}, 1317000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster18.description); 

}, 1318000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1319000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1320000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1321000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1322000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1323000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1324000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1325000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1326000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1327000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1328000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1329000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1330000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1331000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1332000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1333000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1334000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1335000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1336000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1337000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1338000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1339000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1340000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1341000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1342000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1343000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1344000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1345000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1346000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1347000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1348000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1349000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1350000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1351000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1352000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1353000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1354000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1355000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1356000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(49500); 

}, 1357000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1358000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1359000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1360000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1361000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1362000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1363000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1364000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1365000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1366000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1367000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1368000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1369000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1370000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1371000)







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
