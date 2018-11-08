import {from} from 'rxjs';
import fs from 'fs';
import languageWording from './toWorkOn/languageWording.json';
import jsonArray from './toWorkOn/JsonFromExcel.json';

export class Transformer {
    static jsonToTxt(delimiter: string = '\t'){
        const prop$ = from(Object.entries(languageWording));

        let fileContent= '';
        prop$.subscribe(
            v =>fileContent = fileContent +  `${v[0]}\t${v[1]}\r`
        );
        
        fs.writeFile('./languageWording.txt', fileContent, (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });        
    }

    static jsonArrayToJsonProp() {
        let fileContent= '';
        jsonArray.values.map( (v, index, arr) =>fileContent = fileContent + ((index === arr.length -1)? `"${v[0]}": "${v[1]}"`: `"${v[0]}": "${v[1]}",\r`));

        fs.writeFile('./jsonProp.txt', fileContent, (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });    
    }
}