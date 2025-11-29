import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements OnInit, OnDestroy {
  currentSlide = 0;
  touchStartX = 0;
  touchEndX = 0;
  autoAdvanceTimer: any;

  slides: Slide[] = [
    {
      image: 'https://scontent.fpnh9-1.fna.fbcdn.net/v/t39.30808-6/463287777_854593613518403_2078810091851993927_n.png?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHm0ji0-pWXj8yCyfTOs-k9KlF8sj-nl9EqUXyyP6eX0ZegX3bQ9SrQUPVGzA1CH1h00r_ObpPkoWfNJ6jIvvR4&_nc_ohc=9XzcTZ3C3TkQ7kNvwHhVkmq&_nc_oc=AdmJ4wjGRwWBuNaJM9Z_JQQTWg73SAdOVr4GkLBaabuM9N3waiXpvx_pVOEXPZmgyJE&_nc_zt=23&_nc_ht=scontent.fpnh9-1.fna&_nc_gid=OI8nFZXaKFQ7YSG2LMcEnA&oh=00_AficPpfqJ5g99n2x12PfAZMmv4R4JKK0riD234IIzOBF4w&oe=692FA268',
     title: 'Pich Pisey Brightening Cream',
description: 'Brighten, smooth, and nourish — Pich Pisey Brightening Cream helps even out skin tone while leaving your skin soft, radiant, and healthy.'
,  gradient: 'linear-gradient(to bottom right, rgba(139, 92, 246, 0.4), rgba(168, 85, 247, 0.4))'
    },
    {
      image: '/cover.jpg',
      title: 'Tech Haven',
      description: 'Immerse yourself in the cutting edge of technology and innovation.',
      gradient: 'linear-gradient(to bottom right, rgba(217, 70, 239, 0.4), rgba(236, 72, 153, 0.4))'
    },
    {
      image: 'https://scontent.fpnh9-2.fna.fbcdn.net/v/t39.30808-6/472830407_447630211760068_8774506226759583897_n.png?_nc_cat=110&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEJ8TxZlzSFGxclEkOVUn8JLM4nJogybEkszicmiDJsSb7UCZeZ3p1l2zrB4xGHbcYwiEmr53gNNXmGKGQIkQSy&_nc_ohc=piPUgPs-DzEQ7kNvwF5np6v&_nc_oc=Adkr3PJQmSwqHnvghuV1wDWBdJlkYYtxUnVka1Ui563leT7YKiPZGxKpdCnco8Or9u0&_nc_zt=23&_nc_ht=scontent.fpnh9-2.fna&_nc_gid=X36aRx5d1E3aLNmr4lM9OA&oh=00_AfgW6QI0OcnHualP79I_PgM84h-qH5bSahd4AVOCDjL5NQ&oe=692F9617',
     title: 'Phka Blush',
description: 'Elevate your skincare routine with Phka Blush — a perfect blend of natural ingredients and gentle care for radiant, healthy skin.'
, gradient: 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.4), rgba(251, 113, 133, 0.4))'
    },
    {
      image: 'https://scontent.fpnh9-1.fna.fbcdn.net/v/t39.30808-6/578775620_122226389114057995_3455403021387423493_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFavmKacQJu6Vq3bLS5PQZc50KJUyubiwHnQolTK5uLATb2nL23LQARUcC69miIImUUHI2VvBJtwrA6EVFwXCC0&_nc_ohc=MgfWV0Sj0xcQ7kNvwH1EJBM&_nc_oc=Adk9V2zWVB59_123iHSpm9vsiFwNBOukUudKDWCgw2Ot9dg86IhTvy0-KaNqm4Q9zkU&_nc_zt=23&_nc_ht=scontent.fpnh9-1.fna&_nc_gid=us4AbmoahpwJ4VRwp3IWkw&oh=00_Afh9YmPiYcAl3kQF6RPIBuzPJLYM0hwAwac2DWoqpd8c2w&oe=69307143',
    title: 'Lip Oil 3 in 1',
description: 'Nourish, plump, and shine — Lip Oil 3 in 1 combines hydration, color, and care for irresistibly soft and glowing lips.'
,  gradient: 'linear-gradient(to bottom right, rgba(236, 72, 153, 0.4), rgba(251, 113, 133, 0.4))'
    },
   
  ];

  ngOnInit() {
    this.resetAutoAdvance();
  }

  ngOnDestroy() {
    if (this.autoAdvanceTimer) {
      clearInterval(this.autoAdvanceTimer);
    }
  }

  getSlideClass(index: number): string {
    if (index === this.currentSlide) {
      return 'active';
    } else if (index === (this.currentSlide + 1) % this.slides.length) {
      return 'next';
    } else if (index === (this.currentSlide - 1 + this.slides.length) % this.slides.length) {
      return 'prev';
    } else {
      return 'hidden';
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.resetAutoAdvance();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.resetAutoAdvance();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoAdvance();
  }

  getProgressWidth(): string {
    return `${((this.currentSlide + 1) / this.slides.length) * 100}%`;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  private resetAutoAdvance() {
    if (this.autoAdvanceTimer) {
      clearInterval(this.autoAdvanceTimer);
    }
    this.autoAdvanceTimer = setInterval(() => this.nextSlide(), 5000);
  }
}