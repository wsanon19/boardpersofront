export class Projet {

  private id:  string;
  private nom : string ;
  private description : string;
  private debut : Date;
  private fin : Date;
  private image_url : string;
  constructor() {
    this.debut = new Date();
    this.fin = new Date();
    this.id = '';
    this.nom = '';
    this.description = '';
    this.image_url = '';

  }
}
