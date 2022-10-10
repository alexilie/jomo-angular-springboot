export class Bike {

    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public model: string;
    public serialNumber: string;
    public purchasePrice: number;
    public purchaseDate: string;
    public contact: boolean;

     
    constructor(id:number, name:string, email:string, phone:string, model:string, serialNumber:string, purchasePrice:number, purchaseDate:string, contact:boolean) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.model = model;
      this.serialNumber = serialNumber;
      this.purchasePrice = purchasePrice;
      this.purchaseDate = purchaseDate;
      this.contact = contact;
    }
    
  }