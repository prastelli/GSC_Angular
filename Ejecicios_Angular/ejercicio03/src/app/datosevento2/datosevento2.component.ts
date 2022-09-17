import { Component} from '@angular/core';
import { Evento } from '../interface/evento.interface';

@Component({
  selector: 'app-datosevento2',
  template: `<div>
  <h1>Componente con template</h1>
  <h1>Felicitaciones!</h1>
  <h4>Has conseguido que tu componente se muestre!</h4>
  <hr />
  <h5>Como se ve el evento?</h5>
  <div style="margin-top:30px">
  Evento: {{datos.name}}
  </div>
  <div>
  Fecha: {{datos.date}}
  </div>
  <div>
  Hora: {{datos.time}}
  </div>
  <div>
  Direccion: {{datos.location.address}}
  </div>
</div>`,
  styleUrls: ['./datosevento2.component.css']
})
export class Datosevento2Component {

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

}
