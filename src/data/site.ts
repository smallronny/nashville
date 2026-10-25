import type { ImageMetadata } from 'astro';
import type { IconName } from '../lib/icons';

import gallery01 from '../assets/gallery/party-painting-apron.jpg';
import gallery02 from '../assets/gallery/painting-table-focus.jpg';
import gallery03 from '../assets/gallery/young-painter-tree.jpg';
import gallery04 from '../assets/gallery/purple-tree-painting.jpg';
import gallery05 from '../assets/gallery/blue-tree-artist.jpg';
import gallery06 from '../assets/gallery/flower-canvas-smiles.jpg';
import gallery07 from '../assets/gallery/two-masterpieces.jpg';
import gallery08 from '../assets/gallery/orange-landscape-artist.jpg';
import gallery09 from '../assets/gallery/pink-tree-artist.jpg';
import gallery10 from '../assets/gallery/butterfly-canvas.jpg';

export const site = {
  name: 'Nashville Crafting Club',
  shortName: 'Crafting Club',
  tagline: "Nashville's family craft party studio",
  description:
    'Mobile arts and crafts parties for families in Nashville. Choose a slime, sand art, or plush pet party—we bring the materials, guided projects, and creative fun to your celebration.',
  email: 'nashvillecraftingclub@gmail.com',
  phoneDisplay: '636-577-2732',
  phoneHref: '+16365772732',
  whatsappNumber: '16365772732',
  city: 'Nashville',
  region: 'Tennessee',
  areaServed: 'Nashville and the surrounding communities',
  defaultWhatsAppMessage:
    "Hi Nashville Crafting Club! I'd like to learn more about your craft party packages.",
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100077483206243',
    instagram: 'https://www.instagram.com/nashvillecraftingclub/',
  },
} as const;

export const navigation = [
  { label: 'What we do', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const trustPoints = [
  { icon: 'users' as IconName, label: 'Up to 10 kids' },
  { icon: 'sparkles' as IconName, label: 'Guided craft fun' },
  { icon: 'map-pin' as IconName, label: 'We come to you' },
] as const;

export const services: Array<{
  icon: IconName;
  title: string;
  description: string;
  accent: 'ocean' | 'coral' | 'sun' | 'mint';
}> = [
  {
    icon: 'gift',
    title: 'Arty birthday parties',
    description:
      'Pick a signature craft party and let us bring the creative chaos. Every little maker leaves with a masterpiece—and a big smile.',
    accent: 'coral',
  },
  {
    icon: 'palette',
    title: 'Family crafting',
    description:
      'Sand painting, crafts, and interactive games designed for the whole family to enjoy together, from little ones to grown-ups.',
    accent: 'ocean',
  },
  {
    icon: 'sparkles',
    title: 'Guided by makers',
    description:
      'We supply all the materials and guide the children through exciting projects they can take home at the end of the event.',
    accent: 'sun',
  },
  {
    icon: 'map-pin',
    title: 'We come to you',
    description:
      'At your home, a local park, or another favorite spot—we bring the fun and creativity directly to your location.',
    accent: 'mint',
  },
];

export const features = [
  'All craft materials included',
  'Hands-on guidance from our team',
  'Projects kids take home',
  'Parties at your location',
] as const;

export type PartyPackage = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const packages: PartyPackage[] = [
  {
    id: 'slime-party',
    name: 'Slime Party',
    price: '$150',
    priceNote: 'for 10 kids',
    description:
      'A gloriously gooey party where every kid mixes, stretches, and takes home their own slime.',
    features: [
      "2 decorated kids' tables",
      "10 kids' chairs",
      'Glue, activator, foam & bowls',
      'Plastic containers to take slime home',
      'Play games',
      '2 hours of guided fun',
    ],
  },
  {
    id: 'sand-art-party',
    name: 'Sand Art Party',
    price: '$199.99',
    priceNote: 'for 10 kids',
    description:
      'Layered color, happy hands, and two games make this our brightest, most colorful celebration.',
    features: [
      '2 card stickers for each child',
      '15 colors of sand',
      'Tables included',
      '2 games',
      '2 hours of guided fun',
      'Completed sand art to take home',
    ],
    featured: true,
    badge: '2 games included',
  },
  {
    id: 'adopt-a-plush-pet',
    name: 'Adopt a Plush Pet',
    price: '$349.99',
    priceNote: 'for 10 kids',
    description:
      'A sweet, hands-on party where kids stuff, customize, and officially adopt a new plush friend.',
    features: [
      'Unstuffed bear or unicorn',
      'Soft stuffing to fill the plush',
      'White T-shirt to customize',
      'Adoption certificate',
      'Drawstring bag',
      'Guided plush-making experience',
    ],
  },
];

export const faqs = [
  {
    question: "What types of children's events do you organize?",
    answer:
      'We organize a wide variety of events for children, including birthday parties, themed celebrations, and interactive activities. We tailor our services to your needs and preferences to create memorable experiences.',
  },
  {
    question: 'What are the suitable age ranges for your events?',
    answer:
      "Our events are designed for children of various ages. We can customize activities based on the group's age, offering simpler activities for the little ones and creative challenges for older children.",
  },
  {
    question: 'Do you offer personalized services or preset packages?',
    answer:
      'We provide both options. You can choose from our preset packages, which include a variety of activities, or work closely with us to personalize an event that perfectly suits your needs and preferences.',
  },
  {
    question: 'How do arts and crafts work at your events?',
    answer:
      'Our arts and crafts events are fun and educational. We supply all the necessary materials and guide children through exciting creative projects that they can take home at the end of the event.',
  },
  {
    question: 'Can you organize events at our specific location?',
    answer:
      "We specialize in bringing fun and creativity directly to your location. Whether it's at your home, a local park, or any other place you prefer, we are ready to customize our services to meet your needs and make the event unforgettable.",
  },
  {
    question: 'How do I book a party?',
    answer:
      'Send us a note through the form or message us on WhatsApp with your preferred date, party package, and number of kids. We will confirm availability and walk you through the next steps.',
  },
];

export const gallery: Array<{
  src: ImageMetadata;
  alt: string;
  caption: string;
}> = [
  {
    src: gallery01,
    alt: 'A young maker holding a colorful flower painting at a Nashville Crafting Club party.',
    caption: 'A masterpiece in the making',
  },
  {
    src: gallery02,
    alt: 'A child concentrating on painting a canvas at a craft party table.',
    caption: 'Focused, happy makers',
  },
  {
    src: gallery03,
    alt: 'A young artist holding up a colorful tree painting at a birthday party.',
    caption: 'Tree-mendous work',
  },
  {
    src: gallery04,
    alt: 'A teenage artist showing a purple tree painting beside a balloon garland.',
    caption: 'Big color, big smiles',
  },
  {
    src: gallery05,
    alt: 'A smiling young artist holding a blue tree painting.',
    caption: 'Proud artist moment',
  },
  {
    src: gallery06,
    alt: 'A young maker showing a bright flower painting and a Nashville Crafting Club apron.',
    caption: 'Flower power',
  },
  {
    src: gallery07,
    alt: 'A child holding two handmade paintings with a rabbit and a fish.',
    caption: 'Two masterpieces, one happy maker',
  },
  {
    src: gallery08,
    alt: 'A young artist with an orange landscape painting at a craft party.',
    caption: 'Sunset on canvas',
  },
  {
    src: gallery09,
    alt: 'A smiling maker holding a pink tree painting.',
    caption: 'Pretty in pink',
  },
  {
    src: gallery10,
    alt: 'A child proudly displaying a butterfly painting at a craft party.',
    caption: 'Let your creativity fly',
  },
];

export const navCta = { label: 'Plan your party', href: '#contact' } as const;
