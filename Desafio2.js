import fs from "fs";

class Container {
    constructor(filename){
        this.filename = filename;
        this.products=[];
    }
    read = async () =>{
        try{
            const data = await fs.promises.readFile(this.filename,"utf-8")
            this.products = JSON.parse(data)
        }
        catch(err){
            throw new Error(err);
        }
    };
    save = async (item) =>{
            try {
                await this.read();
                const newProduct = {
                    id: this.products.length + 1,
                    ...item,
                }
                this.products.push(newProduct);
                await fs.promises.writeFile(this.filename,JSON.stringify(this.products,null,2));
                return newProduct.id;
            }catch (e){
                console.log('No se pudo leer del archivo, se creara uno con el prodcuto.',e.message)
                
            }
    }
    async getById(id){
        await this.read();
        return this.products.find(p=>p.id === id);
    }
    async getAll(){
        await this.read();
        return this.products;
    }
    async deleteById(id){
        try{
            await this.read();
            this.products = this.products.filter(p=>p.id !== id);
            console.log(this.products)
            await fs.promises.writeFile(this.filename,JSON.stringify(this.products,null,2));

        } catch(err){
            throw new Error(err);
        }
        
    }
    async deleteAll(){
        try{
            await this.read();
            this.products = [];
            await fs.promises.writeFile(this.filename,JSON.stringify(this.products,null,2));
        } catch(err){
            throw new Error(err);
        }
    }
}

const ContainerProducts = new Container("./products.json");
// ContainerProducts.save({
//     title:'mortadela',
//     price:56,
//     thumbnail:'url1'}).then(id=>console.log(id));
// ContainerProducts.getById(2).then(p=>console.log(p));
// ContainerProducts.deleteById(2);
ContainerProducts.deleteAll();
// ContainerProducts.getAll().then(p=>console.log(p));