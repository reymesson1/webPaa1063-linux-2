import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Master } from "../model/master";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
let global
@Component({
  selector: 'itemgenerator',
  templateUrl: './itemgenerator.component.html',
  styleUrls: ['./itemgenerator.component.scss']
})
export class ItemGeneratorComponent {

  fieldData : any = {}  

  constructor(public data: RestSourceData){}

  ngOnInit(){
    this.data.getMaster();
  }

  generate(){
    var from = 25000
    var generated = ""

    var list = [
      'Acura',
      'Alfa Romeo',
      'Audi',
      'Bentley',
      'Bmw',
      'Brilliance',
      'Buick',
      'Byd',
      'Cadillac',
      'Chana',
      'Changan',
      'Changfeng',
      'Changhe',
      'Chery',
      'Chevrolet',
      'Chrysler',
      'Citroën',
      'Corvette',
      'Daewoo',
      'Daihatsu',
      'Datsun',
      'Dodge',
      'Dongfeng',
      'Ferrari',
      'Fiat',
      'Ford',
      'Foton',
      'Gmc',
      'Honda',
      'Huanghai',
      'Hummer',
      'Hyundai',
      'Infiniti',
      'Isuzu',
      'Jac',
      'Jaguar',
      'Jeep',
      'Jinbei',
      'Kia',
      'Land Rover',
      'Lexus',
      'Lincoln',
      'Luxgen',
      'Maserati',
      'Mazda',
      'Mercedes',
      'Mercury',
      'Mg',
      'Mini',
      'Mitsubishi',
      'Nissan',
      'Oldsmobile',
      'Opel',
      'Otra',
      'Peugeot',
      'Plymouth',
      'Pontiac',
      'Porsche',
      'Proton',
      'Renault',
      'Saturn',
      'Seat',
      'Skoda',
      'Smart',
      'Ssangyong',
      'Subaru',
      'Suzuki',
      'Tianma',
      'Toyota',
      'Volkswagen',
      'Volvo',
      
    ]

    var count = 0;
    var indexCount = 0;
      
    
    

    
    for(var x=0,a=1;x<this.data.master.length;x++,a++){
    //  console.log(this.data.master[x].nameImage[0]);

    for(var i=0;i<list.length;i++){
      if(this.data.master[x].make.substring(0,1)==list[i].substring(0,1)){                     
        indexCount = i; 
        break;
      }
    }    

    count = list.indexOf(this.data.master[x].make,0)-indexCount;
    count++;
    console.log(count + " " + this.data.master[x].make.substring(0,1).toLowerCase());

    generated += " \n"
    generated += "/******************************************************************************************************************************************************************************************************************************************************** \n"
    generated += "* \n"
    generated += "* \n"
    generated += "* "+this.data.master[x].header+" \n" 
    generated += "* \n"
    generated += "* \n"
    generated += "*********************************************************************************************************************************************************************************************************************************************************/"
    generated += " \n"
    


    if(this.data.master[x].category2=="Carro"){  
      var complement = []

      complement.push('      return driver.get("https://www.corotos.com.do/create")');
      complement.push(        '      return driver.findElement(By.id("_tealiumModalClose")).click();');
      complement.push(        '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[0]+'");');
      complement.push(        '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[1]+'");');
      complement.push(        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
      complement.push(        '      return driver.findElement(By.id("title")).sendKeys(dataMaster'+a+'.header);');
      complement.push(        '      return driver.findElement(By.id("description")).sendKeys(dataMaster'+a+'.description);');
      complement.push(        '      return driver.findElement(By.id("category_0")).click();');
      complement.push(        '      return driver.findElement(By.id("category_0")).sendKeys("v");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("category_1")).click();');
      complement.push(        '      return driver.findElement(By.id("category_1")).sendKeys("c");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.vehicleType")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.year")).sendKeys("2012");');
      complement.push(        '      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000");');
      complement.push(        '      return driver.findElement(By.id("metadata.fuel")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");');
      complement.push(        '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");');
      complement.push(        '      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4");');
      complement.push(        '      return driver.findElement(By.id("metadata.transmission")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.transmission")).sendKeys("a");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.outsideColor")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.condition")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.condition")).sendKeys("u");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.insideColor")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");');
      complement.push(        '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.make")).click();');
      //for(var i=0;i<count;i++){
        //complement.push(          '      return driver.findElement(By.id("metadata.make")).sendKeys('+ " '" + this.data.master[x].make.substring(0,1).toLowerCase() +"' " +');');
        complement.push(          '      return driver.findElement(By.id("metadata.make")).sendKeys('+ " '" + 'h' +"' " +');');
      //}  
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.model")).click();');
      complement.push(        '      return driver.findElement(By.id("metadata.model")).sendKeys("f");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
      complement.push(        '      return driver.findElement(By.id("price")).sendKeys('+this.data.master[x].price+');');
      complement.push(        '      return driver.findElement(By.id("region_0")).click();');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.id("region_0")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.tagName("body")).click();');
      complement.push(        '      return driver.findElement(By.id("region_1")).click();');
      complement.push(        '      return driver.findElement(By.id("region_1")).sendKeys("s");');
      complement.push(        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
      complement.push(        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
      
         
    }else if(this.data.master[x].category2=="Jeepeta"){
        var complement = []

        complement.push('      return driver.get("https://www.corotos.com.do/create")');
        complement.push(          '      return driver.findElement(By.id("_tealiumModalClose")).click();');
        complement.push(          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[0]+'");');
        complement.push(          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[1]+'");');
        complement.push(          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
        complement.push(          '      return driver.findElement(By.id("title")).sendKeys(dataMaster'+a+'.header);');
        complement.push(          '      return driver.findElement(By.id("description")).sendKeys(dataMaster'+a+'.description);');
        complement.push(          '      return driver.findElement(By.id("category_0")).click();');
        complement.push(          '      return driver.findElement(By.id("category_0")).sendKeys("v");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("category_1")).click();');
        complement.push(          '      return driver.findElement(By.id("category_1")).sendKeys("j");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.year")).sendKeys("2013");');
        complement.push(          '      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000");');
        complement.push(          '      return driver.findElement(By.id("metadata.fuel")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");');
        complement.push(          '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");');
        complement.push(          '      return driver.findElement(By.id("metadata.transmission")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.transmission")).sendKeys("a");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.outsideColor")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.insideColor")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");');
        complement.push(          '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.condition")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.condition")).sendKeys("u");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.make")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.make")).sendKeys("h");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.model")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.model")).sendKeys("f");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.heavyVehicleType")).click();');
        complement.push(          '      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
        complement.push(          '      return driver.findElement(By.id("price")).sendKeys('+this.data.master[x].price+');');
        complement.push(          '      return driver.findElement(By.id("region_0")).click();');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.id("region_0")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.tagName("body")).click();');
        complement.push(          '      return driver.findElement(By.id("region_1")).click();');
        complement.push(          '      return driver.findElement(By.id("region_1")).sendKeys("s");');
        complement.push(          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
        complement.push(          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();');
        
      }

    for(var y=0,i=from;y<6;y++,i+=4000){      
        generated += " setTimeout(async()=>{ \n\n \t " + complement[y] + " \n\n  }, " + i + ")\n";
        from=i
    }
    from+=4000
    for(var z=6,i=from;z<complement.length;z++,i+=1000){      
        generated += " setTimeout(async()=>{ \n\n \t " + complement[z] + " \n\n  }, " + i + ")\n";
        from = i
    }


    
    from +=4000
    
    }
    // for(var x=0;x<parseInt(this.fieldData.num);x++){
    //   for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
    //     generated += " setTimeout(async()=>{ \n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
    //   }
    //   from = i.toString()
    // }

    this.fieldData["generated"] = generated
  
  }

}