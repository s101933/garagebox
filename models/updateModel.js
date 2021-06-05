// Dependencies
import fs from 'fs';   
import fetch from 'node-fetch';
import Constant from './constantModel.js'

export default class Updater {

    //Request API-Json
    static async request(url){
    	try {
        	let res = await fetch(url, {
				headers: {
      				'Accept': 'application/json',
      				'Authorization': 'Bearer BwvPVuMhnxaxOqmaJ2iL'
    			}
			})
        	return await res.json();
    	} catch (error) {
        	console.log(error);
    	}
    }

    //Update Files
    static async update(){
        for (let index = 0; index < Constant.url.length; index++) {
            const raw = await this.request(Constant.url[index]);
            fs.access(Constant.files[index], fs.F_OK, (err) => {
                let update = true;
                let data = JSON.stringify(raw.docs);
                if (err) {
                  console.log("Bestand bestaat niet!");
                  update = false
                }
                fs.writeFile(Constant.files[index], data, function(err) {
                    if(err) throw err;
                    if(!update)
                        console.log("Bestand aangemaakt! (" + Constant.files[index] + ")");
                    else                    
                        console.log("Bestand geupdate! (" + Constant.files[index] + ")");
                })
            });
        }
    }
}