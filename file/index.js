
const fsPromises = require('fs').promises;



async function openAndWriteFile(){
    let filehandle
    let data = 'insert txx hello world'
    try {
        filehandle = await fsPromises.open('./index.html', 'r+');
        let html = await filehandle.readFile('utf-8');
        html = html.toString();
        const insertIndex = html.indexOf('<div id="script">');
        if (typeof data !== 'string') {
            data = JSON.stringify(data);
        }
        const newHtml = data + html.substr(insertIndex + 17);
        return await filehandle.write(newHtml, insertIndex + 17,5);
        
    } catch (error) {
        if (filehandle !== undefined) {
            await filehandle.close();
        }
    }
}

openAndWriteFile().then(res=>{
    console.log('111');
}).catch(e=>{
    console.log(e);
})
