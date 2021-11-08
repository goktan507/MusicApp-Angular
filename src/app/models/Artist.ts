export class Artist
{
    private id: any = -1;
    private name: any = "";
    
    constructor(id:number, name:string)
    {
        this.id = id;
        this.name = name;
     }

    get Id():number
    {
        return this.id;
    }
    set Id(id:number)
    {
        this.id = id;
    }

    get Name():string
    {
        return this.name;
    }
    set Name(name:string)
    {
        this.name = name;
    }
}