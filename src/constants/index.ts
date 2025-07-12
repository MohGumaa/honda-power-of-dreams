import { Honad0, Honad1, Honad2 } from '../assets';
import type { MEDIAITEMSPROPS, NavLinkProps } from '../types';

export const NavLinks: NavLinkProps[] = [
	{ id: 0, text: 'models', href: '#' },
	{ id: 1, text: 'features', href: '#' },
	{ id: 2, text: 'technology', href: '#' },
	{ id: 3, text: 'contact', href: '#' },
];


export const MEDIAITEMS:MEDIAITEMSPROPS =  [
  {
    id:0,
    type: "image",
    src: Honad0,
    title: "Civic Sedan",
    subtitle: "Sport Elegance",
    description: "Bold design meets refined performance in stunning blue",
  },
  {
    id:1,
    type: "image",
    src: Honad1,
    title: "Civic Type R",
    subtitle: "Track-Bred Beast",
    description: "The ultimate high-performance machine with racing DNA",
  },
  {
    id:2,
    type: "image",
    src: Honad2,
    title: "HR-V",
    subtitle: "Versatile Adventure",
    description: "Compact SUV designed for urban exploration and beyond",
  },
  {
    id:3,
    type: "image",
    src: Honad1,
    title: "Civic Sport",
    subtitle: "Sophisticated Power",
    description: "Sleek sophistication with dynamic performance capabilities",
  },
  {
    id:4,
    type: "image",
    src: Honad0,
    title: "Accord Hybrid",
    subtitle: "Intelligent Efficiency",
    description: "Premium sedan with advanced hybrid technology",
  },
]
