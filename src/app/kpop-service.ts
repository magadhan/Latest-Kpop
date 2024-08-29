import { Injectable } from '@angular/core';
import { KpopVideo } from './kpop-video';

@Injectable({
  providedIn: 'root'
})
export class KpopService {

    protected kpopVideoList: KpopVideo[] = [
      {
        id: 0,
        name: 'Chk Chk Boom',
        group: 'Stray Kids',
        album: 'ATE',
        photo: '/assets/Stray_Kids_-_Chk_Chk_Boom.png',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0P0aQreFs8w?si=MQDkbRbeyn0_PquV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N'
      },
      {
        id: 1,
        name: 'Mountains',
        group: 'Stray Kids',
        album: 'ATE',
        photo: '/assets/ATE-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/80H_-aHTUws?si=btFfVRzl2b2C-6mo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N'
      },
      {
        id: 2,
        name: 'JJam',
        group: 'Stray Kids',
        album: 'ATE',
        photo: '/assets/ATE-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7ytGFxD-FcI?si=W5cnV93ySK8wm-L-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, I.N'
      },
      {
        id: 3,
        name: 'Who',
        group: 'Jimin (Member of BTS)',
        album: 'MUSE',
        photo: '/assets/who-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Av9DvtlJ9_M?si=BhVKp1AFoUFzDmgn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Jimin'
      },
      {
        id: 4,
        name: 'Brought the Heat Back',
        group: 'ENHYPEN',
        album: 'Romance: Untold',
        photo: '/assets/brought-heat-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Av9DvtlJ9_M?si=BhVKp1AFoUFzDmgn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon, Ni-ki'
      },
      {
        id: 5,
        name: 'XO (Only If You Say Yes)',
        group: 'ENHYPEN',
        album: 'Romance: Untold',
        photo: './assets/romance-untold-cover.jpg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FPDYeRk2PO8?si=wCnPvkX05CiMhm9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Heeseung, Jay, Jake, Sunghoon, Sunoo, Jungwon, Ni-ki'
      },
      {
        id: 6,
        name: 'Hare Hare',
        group: 'TWICE',
        album: 'DIVE',
        photo: '/assets/dive-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-uqWaGzQyxA?si=PkrVtkifwWgBXIsK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, Tzuyu'
      },
      {
        id: 7,
        name: 'DIVE',
        group: 'TWICE',
        album: 'DIVE',
        photo: '/assets/dive-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/QGCkDOkpWf8?si=nXNLFgo-a2u6Zrpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, Tzuyu'
      },
      {
        id: 8,
        name: 'Ice Cream',
        group: 'Jeon Somi',
        album: 'Ice Cream (Single)',
        photo: '/assets/ice-cream-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WWFjlPAHwoM?si=a2aKrONo2WsOYtev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Jeon Somi'
      },
      {
        id: 9,
        name: 'Boom Boom Bass',
        group: 'Riize',
        album: 'RIIZING - The 1st Mini Album',
        photo: '/assets/rizing-cover.jpeg',
        // video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/78lNnCitcBM?si=OY5z_tkR57uAdV22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        artists: 'Shotaro, Eunseok, Sungchan, Wonbin, Seunghan, Sohee, and Anton'
      }
    ];
    constructor() { }
  
    getAllKpopVideo() :KpopVideo[] {
      return this.kpopVideoList;
    }
  
    getKpopVideoById(id: Number): KpopVideo | undefined {
    //  return this.getKpopVideoById.find(kpopVideo => kpopVideo.id === id);
      return this.getAllKpopVideo().find(x => x.id === id);
    }
  
    submitApplication(firstName: string, lastName: string, email: string, phone: number) {
      console.log(firstName, lastName, email, phone);
    }
  }