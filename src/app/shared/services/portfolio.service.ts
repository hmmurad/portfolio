import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  items: any[] = [
    {
      id:1,
      title: 'First title',
      thumbnail: 'project-1',
      desc: 'Some description',
      image: [],
      client: 'Tech',
      clientText: 'This is client testimonial',
      weblink: 'www.youtube.com'
    },
    {
      id:2,
      title: 'Second title',
      thumbnail: 'project-2',
      desc: 'Some description',
      image: [],
      client: 'Tech',
      clientText: 'This is client testimonial',
      weblink: 'www.youtube.com'
    },
    {
      id:3,
      title: 'Third title  sadsf',
      thumbnail: 'project-1',
      desc: 'Some description adad',
      image: [],
      client: 'Tech',
      clientText: 'This is client testimonial',
      weblink: 'www.youtube.com',
      category: 'frontend'
    },
  ]

  constructor() { }

  getPortfolioItems() {
    return this.items;
  }
  getPortfolioItem(id: any) {
    return this.items.find((item:any) => {
     item.id = id
     console.log(item);
     return  item
     
       
    })
  }
}
