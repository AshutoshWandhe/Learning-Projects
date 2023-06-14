export class Details{
    public mobileNo:number;
    public name:string;
    public email:string;
    public address:string;
    public adharNo:number;
    public panCardNo:number;
    public location:string;


    public constructor(mobileNo:number, name:string, email:string, address:string, adharNo:number, panCardNo:number, location:string){
        this.mobileNo = mobileNo;
        this.panCardNo = panCardNo;
        this.address = address;
        this.adharNo = adharNo;
        this.name = name;
        this.email = email;
        this.location = location;
    }
}