// src/lib/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Get project ID from environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '21e1fwb1';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Validate projectId
if (!projectId || projectId === 'YOUR_PROJECT_ID') {
  console.error('⚠️ Sanity: Invalid projectId. Check your .env.local file.');
  console.error('Current projectId:', projectId);
}

console.log('🔵 Sanity Client Config:', { projectId, dataset });

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);