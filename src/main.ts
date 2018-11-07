import {greeter} from './greeter';
import fs from 'fs';

fs.writeFile("./result.txt", 'Funny', (err:any) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
