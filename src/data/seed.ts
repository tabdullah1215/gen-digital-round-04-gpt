import type { CommercePlan, PlanContent } from '@/lib/types';

/** Offer order is chosen by merchandising, independently of price order. */
export const commercePlans: CommercePlan[] = [
  {
    id: 'secure-essential',
    brand: 'Harbor Secure',
    name: 'Everyday Shield',
    category: 'Security',
    offers: [
      { sku: 'HS-ES-3', devices: 3, firstYear: '29.99', renewal: '59.99' },
      { sku: 'HS-ES-1', devices: 1, firstYear: '19.99', renewal: '39.99' },
      { sku: 'HS-ES-5', devices: 5, firstYear: '39.99', renewal: '79.99' },
    ],
  },
  {
    id: 'secure-family',
    brand: 'Harbor Secure',
    name: 'Family Shield',
    category: 'Security',
    offers: [
      { sku: 'HS-FS-5', devices: 5, firstYear: '49.99', renewal: '89.99' },
      { sku: 'HS-FS-10', devices: 10, firstYear: '69.99', renewal: null },
    ],
  },
  {
    id: 'privacy-connect',
    brand: 'Cedar Privacy',
    name: 'Private Connect',
    category: 'Privacy',
    offers: [
      { sku: 'CP-PC-3', devices: 3, firstYear: '34.50', renewal: '34.50' },
      { sku: 'CP-PC-5', devices: 5, firstYear: '44.50', renewal: '54.50' },
    ],
  },
  {
    id: 'privacy-complete',
    brand: 'Cedar Privacy',
    name: 'Private Complete',
    category: 'Privacy',
    offers: [
      { sku: 'CP-ALL-5', devices: 5, firstYear: '64.99', renewal: null },
      { sku: 'CP-ALL-10', devices: 10, firstYear: '84.99', renewal: '74.99' },
    ],
  },
];

/** Editorial content is joined to commerce by productId. */
export const planContent: PlanContent[] = [
  {
    productId: 'secure-essential',
    slug: 'everyday-shield',
    description: 'Everyday protection for the devices you depend on, at home and on the move.',
    features: [
      'Real-time malware protection',
      'Safer browsing and download checks',
      'Password manager',
    ],
    accent: '#d9e9e5',
  },
  {
    productId: 'secure-family',
    slug: 'family-shield',
    description: 'Protection and simple controls for a connected household, all in one subscription.',
    features: [
      'Everything in Everyday Shield',
      'Parental controls',
      'Family device overview',
    ],
    accent: '#dae1f0',
  },
  {
    productId: 'privacy-connect',
    slug: 'private-connect',
    description: 'A private connection for browsing, working and streaming across your devices.',
    features: [
      'Encrypted internet connection',
      'Public Wi-Fi protection',
      'Tracker blocking',
    ],
    accent: '#eee4d7',
  },
  {
    productId: 'privacy-complete',
    slug: 'private-complete',
    description: 'More control over your digital footprint with privacy tools that work together.',
    features: [
      'Everything in Private Connect',
      'Personal data monitoring',
      'Privacy report',
    ],
    accent: '#e9dfee',
  },
];
