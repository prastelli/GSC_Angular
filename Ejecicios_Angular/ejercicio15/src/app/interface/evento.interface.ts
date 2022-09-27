export interface Evento {
  id:number;
  name: string;
  date: string;
  time: string;
  location: {
  address: string;
  city: string;
  country: string;}
  }
