import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel';
import { Background } from '../background/background';
import { IfiniteRun } from '../ifinite-run/ifinite-run';
import { Card } from '../card/card';
import { ModelSection } from '../model-section/model-section';
import { Testimonial } from '../testimonial/testimonial';

@Component({
  standalone:true,
  selector: 'app-home',
  imports: [Carousel,Background,IfiniteRun,Card,ModelSection,Testimonial],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
