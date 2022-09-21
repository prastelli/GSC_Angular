import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: [ './events-list.component.css' ]
})
export class EventsListComponent  {

  events = [
    {
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: {
        address: '1 London Road ',
        city: 'London',
        country: 'England'
      },
      format: "InPerson"
    },
    {
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      onlineUrl: 'https://www.ng-conf.org/',
      format: "Online"
    },
    {
      name: 'Future Conf (Location/Url a determinar)',
      date: '6/10/2037',
      time: '8am'
    },
    {
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      format: "InPerson"
    }
  ]


  getTipoColor(event:string | any): object{
    if (event === 'InPerson'){
      return {'color':'green'};
    } else if (event === 'Online'){
      return {'color':'red'};
    } else {
      return {'color':'#aaa'};
    }

  }

}
