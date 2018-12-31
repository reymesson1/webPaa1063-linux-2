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




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM (1).jpeg"); 

}, 33000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM.jpeg"); 

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


/**************************************************************************************
 * 
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

}, 110000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 114000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 1.14.17 PM.jpeg"); 

}, 118000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 1.14.18 PM (1).jpeg"); 

}, 122000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 126000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster2.header); 

}, 127000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster2.description); 

}, 128000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 129000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 130000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 131000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 132000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 133000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 134000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 135000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 136000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 137000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 138000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 140000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 140000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 141000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 142000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 143000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 144000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 145000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 146000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 147000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 148000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 149000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 150000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 151000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 152000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 153000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 154000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 155000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 156000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 157000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 158000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 159000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 160000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 161000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 162000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 163000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 164000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 165000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 166000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(51000); 

}, 167000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 168000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 169000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 170000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 171000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 172000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 173000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 174000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 175000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 176000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 177000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 178000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 179000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 180000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 181000)


/************************************************************************************
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

}, 200000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 204000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 1.08.03 PM (1).jpeg"); 

}, 208000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 1.08.03 PM.jpeg"); 

}, 212000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 216000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster3.header); 

}, 217000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster3.description); 

}, 218000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 219000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 220000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 221000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 222000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 223000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 224000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 225000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 227000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 227000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 228000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 229000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 230000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 231000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 232000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 233000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 234000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 235000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 236000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 237000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 238000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 239000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 240000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 241000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 242000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 243000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 244000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 245000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 246000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 247000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 248000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 249000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 250000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 251000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 252000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 253000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 254000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 255000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 256000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 257000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 258000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(71000); 

}, 259000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 260000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 261000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 262000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 263000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 264000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 265000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 266000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 267000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 268000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 269000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 270000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 271000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 272000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 273000)


/************************************************************************************
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

}, 280000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 284000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.37.27 AM.jpeg"); 

}, 288000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.37.28 AM.jpeg"); 

}, 292000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 296000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster4.header); 

}, 297000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster4.description); 

}, 298000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 299000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 300000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 301000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 302000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 303000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 304000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 305000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 306000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 307000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 308000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 309000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 310000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 311000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 312000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 313000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 314000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 315000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 316000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 317000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 318000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 319000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 320000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 321000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 322000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 323000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 324000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 325000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 326000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 327000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 328000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 329000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 330000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 331000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 332000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 333000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 334000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 335000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 336000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 337000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 338000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(95000); 

}, 339000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 340000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 341000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 342000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 343000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 344000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 345000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 346000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 347000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 348000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 349000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 350000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 351000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 352000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 353000)

/************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 360000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 364000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.34.00 AM.jpeg"); 

}, 368000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.33.59 AM.jpeg"); 

}, 372000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 376000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

}, 377000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

}, 378000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 379000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 380000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 381000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 382000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 383000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 384000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 385000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 386000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 387000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 388000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 389000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 390000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 391000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 392000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 393000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 394000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 395000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 396000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 397000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 398000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 399000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 400000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 401000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 402000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 403000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 404000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 405000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 406000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 407000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 408000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 409000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 410000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 411000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 412000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 413000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 414000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 415000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 416000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(36500); 

}, 417000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 418000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 419000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 420000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 421000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 422000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 423000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 424000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 425000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 426000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 427000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 428000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 429000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 430000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 431000)

/**********************************************************************************
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

}, 440000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 444000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.32.03 AM (1).jpeg"); 

}, 448000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.32.03 AM.jpeg"); 

}, 452000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 456000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster6.header); 

}, 457000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster6.description); 

}, 458000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 459000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 460000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 461000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 462000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 463000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 464000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 465000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 467000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 467000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 468000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 469000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 470000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 471000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 472000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 473000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 474000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 475000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 476000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 477000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 478000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 479000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 480000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 481000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 482000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 483000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 484000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 485000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 486000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 487000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 488000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 489000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 490000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 491000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 492000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 493000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 494000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 495000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 496000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 497000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 498000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(81000); 

}, 499000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 500000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 501000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 502000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 503000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 504000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 505000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 506000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 507000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 508000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 509000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 510000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 511000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 512000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 513000)


/***********************************************************************************
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

}, 520000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 524000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.30.25 AM (1).jpeg"); 

}, 528000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.30.25 AM.jpeg"); 

}, 532000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 536000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster7.header); 

}, 537000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster7.description); 

}, 538000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 539000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 540000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 541000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 542000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 543000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 544000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 545000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 547000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 547000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 548000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 549000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 550000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 551000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 552000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 553000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 554000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 555000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 556000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 557000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 558000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 559000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 560000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 561000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 562000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 563000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 564000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 565000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 566000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 567000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 568000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 569000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 570000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 571000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 572000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 573000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 574000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 575000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 576000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 577000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 578000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69000); 

}, 579000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 580000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 581000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 582000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 583000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 584000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 585000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 586000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 587000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 588000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 589000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 590000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 591000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 592000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 593000)

/*****************************************************************************
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

}, 600000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 604000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.26.29 AM (1).jpeg"); 

}, 608000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-20 at 11.26.30 AM.jpeg"); 

}, 612000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 616000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster8.header); 

}, 617000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster8.description); 

}, 618000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 619000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 620000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 621000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 622000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 623000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 624000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 625000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 627000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 627000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 628000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 629000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 630000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 631000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 632000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 633000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 634000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 635000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 636000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 637000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 638000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 639000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 640000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 641000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 642000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 643000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 644000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 645000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 646000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 647000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 648000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 649000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 650000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 651000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 652000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 653000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 654000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 655000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 656000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 657000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 658000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(2900); 

}, 659000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 660000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 661000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 662000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 663000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 664000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 665000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 666000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 667000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 668000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 669000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 670000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 671000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 672000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 673000)


/*************************************************************************************
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

}, 680000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 684000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-12 at 5.14.15 PM.jpeg"); 

}, 688000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-12 at 5.14.41 PM.jpeg"); 

}, 692000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 696000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster9.header); 

}, 697000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster9.description); 

}, 698000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 699000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 700000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 701000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 702000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 703000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 704000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 705000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 707000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 707000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 708000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 709000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 710000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 711000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 712000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 713000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 714000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 715000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 716000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 717000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 718000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 719000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 720000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 721000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 722000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 723000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 724000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 725000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 726000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 727000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 728000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 729000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 730000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 731000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 732000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 733000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 734000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 735000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 736000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 737000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 738000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(86000); 

}, 739000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 740000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 741000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 742000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 743000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 744000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 745000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 746000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 747000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 748000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 749000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 750000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 751000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 752000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 753000)


/**********************************************************************************
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

}, 760000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 764000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-19 at 6.12.28 PM (1).jpeg"); 

}, 768000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-19 at 6.12.28 PM.jpeg"); 

}, 772000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 776000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster10.header); 

}, 777000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster10.description); 

}, 778000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 779000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 780000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 781000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 782000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 783000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 784000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 785000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 787000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 787000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 788000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 789000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 790000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 791000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 792000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 793000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 794000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 795000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 796000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 797000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 798000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 799000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 800000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 801000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 802000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 803000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 804000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 805000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 806000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 807000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 808000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 809000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 810000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 811000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 812000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 813000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 814000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 815000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 816000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 817000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 818000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(65000); 

}, 819000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 820000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 821000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 822000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 823000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 824000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 825000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 826000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 827000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 828000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 829000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 830000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 831000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 832000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 833000)


/********************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




     return driver.get("https://www.corotos.com.do/create") 

}, 840000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 844000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-19 at 5.59.29 PM (1).jpeg"); 

}, 848000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-19 at 5.59.29 PM.jpeg"); 

}, 852000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 856000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("title")).sendKeys(dataMaster11.header); 

}, 857000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("description")).sendKeys(dataMaster11.description); 

}, 858000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).click(); 

}, 859000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 860000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 861000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).click(); 

}, 862000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 863000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 864000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 865000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 866000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 867000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 868000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 869000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 870000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).click(); 

}, 871000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 872000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 873000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 874000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).click(); 

}, 875000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 876000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 877000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 878000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 879000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 880000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).click(); 

}, 881000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 882000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 883000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 884000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 885000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 886000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 887000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).click(); 

}, 888000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 889000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 890000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 891000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).click(); 

}, 892000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 893000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 894000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 895000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 896000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("price")).sendKeys(49000); 

}, 897000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).click(); 

}, 898000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 899000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 900000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 901000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 902000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 903000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 904000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 905000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 906000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 907000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).click(); 

}, 908000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 909000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 910000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 911000)

/*************************************************************************************
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

}, 920000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 924000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-12 at 10.11.45 AM (1).jpeg"); 

}, 928000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-12 at 10.11.45 AM.jpeg"); 

}, 932000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 936000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("title")).sendKeys(dataMaster12.header); 

}, 937000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("description")).sendKeys(dataMaster12.description); 

}, 938000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).click(); 

}, 939000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 940000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 941000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).click(); 

}, 942000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 943000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 944000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 945000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 947000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 947000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).click(); 

}, 948000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 949000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 950000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).click(); 

}, 951000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 952000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 953000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 954000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 955000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 956000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 957000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 958000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 959000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 960000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 961000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 962000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 963000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).click(); 

}, 964000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 965000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 966000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 967000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 968000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).click(); 

}, 969000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 970000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 971000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).click(); 

}, 972000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 973000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 974000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 975000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 976000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 977000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 978000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("price")).sendKeys(86000); 

}, 979000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).click(); 

}, 980000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 981000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 982000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 983000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 984000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 985000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 986000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 987000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 988000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 989000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).click(); 

}, 990000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 991000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 992000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 993000)



/***********************************************************************************88
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

}, 1000000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1004000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-30 at 11.25.27 AM (1).jpeg"); 

}, 1008000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-30 at 11.25.27 AM.jpeg"); 

}, 1012000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1016000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster12.header); 

}, 1017000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster12.description); 

}, 1018000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1019000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1020000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1021000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1022000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1023000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1024000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1025000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1027000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1027000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1028000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1029000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1030000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1031000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1032000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1033000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1034000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1035000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1036000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1037000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1038000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1039000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1040000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1041000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1042000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1043000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1044000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1045000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1046000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1047000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1048000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1049000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1050000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1051000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1052000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1053000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1054000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1055000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1056000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1057000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1058000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(67000); 

}, 1059000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1060000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1061000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1062000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1063000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1064000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1065000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1066000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1067000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1068000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1069000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1070000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1071000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1072000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1073000)

/*******************************************************************************
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

}, 1080000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1084000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-20 at 10.47.10 AM.jpeg"); 

}, 1088000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-20 at 10.47.11 AM.jpeg"); 

}, 1092000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1096000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("title")).sendKeys(dataMaster14.header); 

}, 1097000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("description")).sendKeys(dataMaster14.description); 

}, 1098000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).click(); 

}, 1099000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1100000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1101000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).click(); 

}, 1102000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1103000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1104000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1105000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1106000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1107000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1108000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1109000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1110000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1111000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1112000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1113000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1114000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1115000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1116000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1117000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1118000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1119000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1120000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).click(); 

}, 1121000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1122000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1123000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1124000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1125000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1126000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1127000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).click(); 

}, 1128000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1129000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1130000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1131000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).click(); 

}, 1132000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1133000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1134000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1135000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1136000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("price")).sendKeys(27000); 

}, 1137000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).click(); 

}, 1138000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1139000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1140000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1141000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1142000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1143000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1144000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1145000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1146000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1147000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).click(); 

}, 1148000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1149000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1150000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1151000)


/**************************************************************************************8
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

}, 1160000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1164000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-20 at 10.40.09 AM.jpeg"); 

}, 1168000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-20 at 10.40.08 AM.jpeg"); 

}, 1172000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1176000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster15.header); 

}, 1177000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster15.description); 

}, 1178000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1179000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1180000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1181000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1182000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1183000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1184000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1185000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1186000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1187000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1188000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1189000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1190000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1191000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1192000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1193000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1194000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1195000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1196000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1197000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1198000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1199000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1200000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1201000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1202000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1203000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1204000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1205000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1206000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1208000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1209000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1210000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1211000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1212000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1213000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1214000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1215000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1216000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(85000); 

}, 1217000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1218000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1219000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1220000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1221000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1222000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1223000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1224000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1225000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1226000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1227000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1228000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1229000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1230000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1231000)


/*********************************************************************************8
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1240000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1244000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-20 at 9.48.41 AM.jpeg"); 

}, 1248000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-20 at 9.48.46 AM.jpeg"); 

}, 1252000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1256000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster16.header); 

}, 1257000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster16.description); 

}, 1258000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1259000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1260000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1261000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1262000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1263000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1264000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1265000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1266000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1267000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1268000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1269000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1270000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1271000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1272000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1273000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1274000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1275000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1276000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1277000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1278000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1279000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1280000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1281000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1282000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1283000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1284000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1285000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1286000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1287000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1288000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1289000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1290000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1291000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1292000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1293000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1294000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1295000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1296000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(49000); 

}, 1297000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1298000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1299000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1300000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1301000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1302000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1303000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1304000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1305000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1306000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1307000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1308000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1309000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1310000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1311000)

/**************************************************************************************
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

}, 1320000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1324000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-06 at 10.09.42 AM.jpeg"); 

}, 1328000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-12-06 at 10.09.45 AM.jpeg"); 

}, 1332000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1336000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster17.header); 

}, 1337000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster17.description); 

}, 1338000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1339000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1340000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1341000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1342000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1343000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1344000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1345000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1347000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1347000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1348000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1349000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1350000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1351000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1352000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1353000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1354000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1355000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1356000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1357000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1358000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1359000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1360000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1361000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1362000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1363000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1364000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1365000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1366000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1367000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1368000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1369000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1370000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1371000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1372000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1373000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1374000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1375000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1376000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1377000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1378000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(79000); 

}, 1379000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1380000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1381000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1382000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1383000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1384000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1385000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1386000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1387000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1388000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1389000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1390000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1391000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1392000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1393000)


/*************************************************************************************
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

}, 1400000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1404000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-12 at 5.14.15 PM.jpeg"); 

}, 1408000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-12 at 5.14.41 PM.jpeg"); 

}, 1412000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1416000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster18.header); 

}, 1417000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster18.description); 

}, 1418000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1419000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1420000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1421000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1422000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1423000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1424000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1425000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1427000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1427000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1428000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1429000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1430000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1431000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1432000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1433000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1434000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1435000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1436000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1437000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1438000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1439000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1440000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1441000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1442000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1443000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1444000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1445000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1446000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1447000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1448000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1449000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1450000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1451000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1452000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1453000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1454000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1455000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1456000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1457000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1458000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(86000); 

}, 1459000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1460000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1461000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1462000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1463000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1464000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1465000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1466000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1467000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1468000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1469000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1470000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1471000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1472000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1473000)


/**************************************************************************************
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

}, 1500000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1504000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-08 at 11.09.29 AM.jpeg"); 

}, 1508000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-11-08 at 11.09.28 AM.jpeg"); 

}, 1512000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1516000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster19.header); 

}, 1517000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster19.description); 

}, 1518000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1519000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1520000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1521000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1522000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1523000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1524000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1525000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1526000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1527000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1528000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1529000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1530000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1531000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1532000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1533000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1534000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1535000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1536000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1537000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1538000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1539000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1540000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1541000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1542000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1543000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1544000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1545000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1546000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1547000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1548000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1549000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1550000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1551000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1552000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1553000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1554000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1555000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1556000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69000); 

}, 1557000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1558000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1559000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1560000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1561000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1562000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1563000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1564000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1565000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1566000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1567000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1568000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1569000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1570000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1571000)

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

}, 1580000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1584000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-24 at 12.46.00 PM (1).jpeg"); 

}, 1588000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("/home/rey/Desktop/webpaa1063-linux-2/anuncio/WhatsApp Image 2018-10-24 at 12.46.00 PM.jpeg"); 

}, 1592000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1596000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("title")).sendKeys(dataMaster20.header); 

}, 1597000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("description")).sendKeys(dataMaster20.description); 

}, 1598000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).click(); 

}, 1599000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1600000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1601000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).click(); 

}, 1602000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1603000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1604000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1605000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1607000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1607000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1608000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1609000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1610000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1611000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1612000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1613000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1614000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1615000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1616000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1617000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1618000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1619000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1620000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1621000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1622000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1623000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).click(); 

}, 1624000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1625000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1626000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1627000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1628000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).click(); 

}, 1629000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1630000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1631000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).click(); 

}, 1632000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1633000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1634000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1635000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1636000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1637000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1638000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("price")).sendKeys(59000); 

}, 1639000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).click(); 

}, 1640000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1641000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1642000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1643000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1644000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1645000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1646000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1647000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1648000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 1649000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).click(); 

}, 1650000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1651000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1652000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1653000)

/****************************************************************************
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

}, 1660000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1664000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/WhatsApp Image 2018-12-28 at 2.43.44 PM.jpeg"); 

}, 1668000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/WhatsApp Image 2018-12-28 at 2.43.45 PM.jpeg"); 

}, 1672000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1676000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster21.header); 

}, 1677000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster21.description); 

}, 1678000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1679000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1680000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1681000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1682000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1683000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1684000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1685000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1686000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1687000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1688000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1689000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1690000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1691000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1692000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1693000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1694000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1695000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1696000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1697000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1698000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1699000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1700000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1701000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1702000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1703000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1704000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1705000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1706000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1707000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1708000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1709000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1710000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1711000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1712000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1713000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1714000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1715000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1716000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(2600); 

}, 1717000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1718000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1719000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1720000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1721000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1722000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1723000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1724000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1725000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1726000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1727000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1728000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1729000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1730000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1731000)


/****************************************************************************************
 * 
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

}, 1740000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1744000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/WhatsApp Image 2018-12-27 at 10.42.13 AM (1).jpeg"); 

}, 1748000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/WhatsApp Image 2018-12-27 at 10.42.13 AM.jpeg"); 

}, 1752000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1756000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster22.header); 

}, 1757000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster22.description); 

}, 1758000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1759000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1760000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1761000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1762000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1763000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1764000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1765000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1766000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1767000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1768000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1769000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1770000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1771000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1772000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1773000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1774000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1775000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1776000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1777000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1778000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1779000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1780000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1781000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1782000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1783000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1784000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1785000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1786000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1787000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1788000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1789000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1790000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1791000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1792000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1793000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1794000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1795000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1796000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1797000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1798000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69500); 

}, 1799000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1800000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1801000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1802000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1803000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1804000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1805000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1806000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1807000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1808000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1809000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1810000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1811000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1812000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1813000)

/****************************************************************************************
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

}, 1820000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1824000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/WhatsApp Image 2018-12-27 at 10.40.57 AM.jpeg"); 

}, 1828000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/WhatsApp Image 2018-12-27 at 10.40.58 AM.jpeg"); 

}, 1832000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1836000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster23.header); 

}, 1837000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster23.description); 

}, 1838000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1839000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1840000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1841000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1842000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1843000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1844000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1845000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1846000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1847000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1848000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1849000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1850000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1851000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1852000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1853000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1854000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1855000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1856000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1857000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1858000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1859000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1860000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1861000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1862000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1863000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1864000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1865000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1866000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1867000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1868000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1869000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1870000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1871000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1872000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1873000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1874000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1875000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1876000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1877000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1878000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(59500); 

}, 1879000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1880000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1881000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1882000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1883000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1884000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1885000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1886000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1887000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1888000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1889000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1890000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1891000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1892000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1893000)





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
