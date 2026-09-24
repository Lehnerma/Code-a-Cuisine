import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tag',
  styleUrl: './tag.scss',
  templateUrl: './tag.html',
})
export class Tag {
  label = input<string>('');

  answer = {
    steps: [
      {
        chef: 'Chef 1',
        title: 'Pasta Preparation',
        description: 'Cook the 100 gram Pasta and the 300 gram Egg Noodles in salted boiling water until tender. Drain and set aside.',
      },
      {
        chef: 'Chef 2',
        title: 'Caramelizing Onions',
        description:
          'Peel and thinly slice the Yellow Onions. Melt Butter in a pan and cook onions on medium-low heat for 20 minutes until golden brown.',
      },
      {
        chef: 'Chef 1',
        title: 'Grating and Seasoning',
        description: 'Grate the Chees and prepare the Heavy cream with a pinch of salt and dried nutmeg.',
      },
      {
        chef: 'Chef 2',
        title: 'Final Assembly',
        description: 'Add the cooked pasta and Heavy cream to the onions. Stir in the Chees until melted and creamy.',
      },
    ],
  };
}
