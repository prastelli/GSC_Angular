import { Component} from '@angular/core';
import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-datosevento',
  templateUrl: './datosevento.component.html',
  styleUrls: ['./datosevento.component.css']
})
export class DatoseventoComponent {

  datos:Evento =  {
    name: "ngConf 2025",
    date: "3/1/2025",
    time: "8am",
    location: {
      address: "123 Main St",
      city: "Salt Lake City, UT",
      country: 'USA',
    }
  };

  direccion: string = this.datos.location.address;
  ciudad: string = this.datos.location.city;
  pais: string = this.datos.location.country;



}
