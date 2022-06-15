import fs from 'fs';
const eje1= () =>{
    try{
        fs.writeFileSync('fyh.txt', new Date().toLocaleString());
        const dato = fs.readFileSync('fyh.txt','utf-8')
        console.log(dato)
    } catch(e){
        throw new Error(`No se pudo ejecutar la accion:${e.message}`)
        }
}

const ruta = './packages.json'
const eje2= ()=>{
    fs.readFile(ruta,'utf-8',(err,data)=>{
        if(err) throw new Error(`No se puede leer el archivo: ${err.message}`)
        const info = {
            contenidoStr: JSON.stringify(data),
            contenidoObj: JSON.parse(data),
            size: fs.statSync(ruta).size,
        };
        console.log(info);
    
        fs.writeFile('info.txt', JSON.stringify(info,null,2),(err)=>{
            if(err) throw new Error(`Otro error:${err.message}`)
        });
    })
}

const eje3 = async () =>{
    try {
        const contenido = await fs.promises.readFile('info.txt','utf-8');
        console.log(contenido);
        const objInfo = JSON.parse(contenido)
        objInfo.contenidoObj.author = 'Juan Stefano Carbajal Cuba'
        await fs.promises.writeFile('package.json.coder',JSON.stringify(objInfo,null,2));
    } catch(e){
        throw new Error(`Mas Problemas: ${e.message}`)
    }
}
eje2();



