export class Employee{
    public id:number;
    public name:string;
    public designation?:string[];
    public imagePath:string;
    public address:string;
    public mobNo:number;
    public location:string;

    public constructor(id:number, name:string, designation:string[]=[], imagePath:string, address:string, mobNo:number, location:string){
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.imagePath = imagePath;
        this.address = address;
        this.mobNo = mobNo;
        this.location = location;
    }
}