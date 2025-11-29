import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Needed for *ngIf and *ngFor

interface TestimonialsInterface {
  id: number;
  name: string;
  date: string;
  rating: number;
  review: string;
  audioTime: string;
  image: string;
}
@Component({
  selector: 'app-testimonial',
    standalone: true, // <-- standalone component
  imports: [CommonModule], // <-- Import CommonModule here

  templateUrl: './testimonial.html',
  styleUrls: ['./testimonial.css'],
})
export class Testimonial {
currentIndex = 0;
  isPlaying = false;

  testimonials: TestimonialsInterface[] = [
    {
      id: 1,
      name: 'Kanha Tevy',
      date: 'April 28, 2025',
      rating: 5,
      review: 'I’ve been using Blush’s Hydration Serum for a few weeks now. My skin feels soft all day, and it doesn’t leave any greasy residue. I love that it’s made with natural ingredients that calm and nourish my skin. It has quickly become a staple in my daily routine. ',
      audioTime: '1:32 / 2:54 Minutes',
      image: '/fb1.jpg'
    },
    {
      id: 2,
      name: 'Neang Leakhena',
      date: 'May 10, 2025',
      rating: 5,
      review: 'I’ve tried countless products, but Blush Phka stands out. My skin feels hydrated, calmer, and more radiant from day one. It’s gentle yet powerful, and I notice a visible difference in texture and tone. I highly recommend it to anyone looking for real results.',
      audioTime: '1:45 / 3:12 Minutes',
      image: '/fb2.jpg'
    },
    {
      id: 3,
      name: 'Linda Sayorn',
      date: 'May 12, 2025',
      rating: 5,
      review: 'Blush Phka is perfect for my sensitive skin. My redness has decreased, and my skin feels nourished all day. The serum is lightweight and easy to layer with my other products. I’m so happy I found a product that really works!',
      audioTime: '1:32 / 2:54 Minutes',
      image: 'https://scontent.fpnh9-1.fna.fbcdn.net/v/t39.30808-6/473260246_122186163404057995_463226675654030348_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEDdFh4yQOE12SnfhSFAocDA7QOSD-Sc34DtA5IP5Jzfr0heU8GaptkVz_iZ_JMQUCp5VKL_PoDRW03eBzFLB-f&_nc_ohc=Gp92MQuHNRIQ7kNvwEyom7F&_nc_oc=AdnR1_j13CU3o95S1cH0MRNyxr37wpjxNABl1Qxv9LhGxTsGNMuIfMrfU5cX9URWKn0&_nc_zt=23&_nc_ht=scontent.fpnh9-1.fna&_nc_gid=WpjFG9wCzy7wXB-aWuohDQ&oh=00_AfiXdSSLtQkfupIbSkw3qLnV-7E6_lOpQMS12GsmXLqvqw&oe=693066C4'
    },
    {
      id: 4,
      name: 'Sarah Tepy',
      date: 'May 15, 2025',
      rating: 5,
      review: 'After just two weeks of using Blush Phka, my skin looks more even and radiant. It’s soft, hydrated, and feels healthy without any greasy residue. The natural formula makes me confident using it daily. I can see real improvements every morning.',
      audioTime: '1:28 / 2:45 Minutes',
      image: 'https://scontent.fpnh9-1.fna.fbcdn.net/v/t39.30808-6/535541279_122217134738057995_2907566626577426920_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG3PNjGE3yw47uikxQnxzIwDR_e_R1ALIMNH979HUAsgxNbPQacNjHmIASpcgY90ffko3opzJjJB6L0lHxw_afp&_nc_ohc=y1h3Tyr8JSoQ7kNvwFFIYpa&_nc_oc=Adla2QK07UTvMyyiXvtNLgfR4ps3-dsMAZq34I9kxMx1SnWBgzuVekrvZ-qZ9iUxb9I&_nc_zt=23&_nc_ht=scontent.fpnh9-1.fna&_nc_gid=zDxPtvNJ7lLe1uwZMTgQaQ&oh=00_Afj5NuZuHuRPDqF12QUL0Fya2hEwg1kubsv0cOKixISWcA&oe=69305552'
    },
    {
      id: 5,
      name: 'ឃុន​ នារី',
      date: 'May 18, 2025',
      rating: 5,
      review: 'I can’t imagine my skincare routine without Blush Phka now. My skin feels refreshed, smooth, and balanced all day. It absorbs instantly and leaves no sticky feeling. I love knowing it’s made with safe, natural ingredients that actually work.',
      audioTime: '1:55 / 3:20 Minutes',
      image:'https://scontent.fpnh9-1.fna.fbcdn.net/v/t39.30808-6/469779650_122181678548057995_491965691940828595_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGUJghNMFVycvrUGzX_T3t-YP-Gr2zwdnBg_4avbPB2cKkXzs9SOb8wTGz6fxU1hJB7JYZZVtlJfeExGS1uGbx1&_nc_ohc=OUMZraJ8RB4Q7kNvwFKB9X9&_nc_oc=Adndx2KFmEqDU77BS9P3btxKmcZksvWgtxCzn7FYTO5L3b4vCj2EABWA_qLvlhvLNmc&_nc_zt=23&_nc_ht=scontent.fpnh9-1.fna&_nc_gid=vnS3q3hHGx_SmRDvF7_DYg&oh=00_AfhxPy--mzaPVgCJDoIpv4n6ItQZ5kE09AkeH1G1nNJo-w&oe=693071AF'
    }
  ];

  get visibleTestimonials(): TestimonialsInterface[] {
    const prev = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
    const next = this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;
    return [this.testimonials[prev], this.testimonials[this.currentIndex], this.testimonials[next]];
  }

getZIndex(index: number): number {
  // The active card is on top
  return index === 1 ? 3 : index === 0 ? 2 : 1;
}

getTransform(index: number): string {
  // Stack vertically: previous card above (-Y), next card below (+Y)
  if (index === 0) return 'translateY(60px) '; // previous card slightly above
  if (index === 1) return 'translateY(200px) ';       // active card in center
  return 'translateY(-50px) ';                  // next card slightly below
}

  goToTestimonial(index : number): void {
    this.currentIndex = index;
    this.isPlaying = false;
  } 

  togglePlay(): void {
    this.isPlaying = !this.isPlaying;
  }
  setActiveCard(visibleIndex: number): void {
  // visibleIndex = 0 => previous card
  // visibleIndex = 1 => active card (do nothing)
  // visibleIndex = 2 => next card

  if (visibleIndex === 1) return; // already active

  const prevIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  const nextIndex = this.currentIndex === this.testimonials.length - 1 ? 0 : this.currentIndex + 1;

  if (visibleIndex === 0) {
    // previous card clicked
    this.currentIndex = prevIndex;
  } else if (visibleIndex === 2) {
    // next card clicked
    this.currentIndex = nextIndex;
  }

  this.isPlaying = false;
}

}
