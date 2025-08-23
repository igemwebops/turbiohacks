// app/components/EducationalMaterial.tsx
'use client';

import React from 'react';

const CATEGORIES = [
  { name: 'FOOD AND NUTRITION', color: '#5CB3CC' },
  { name: 'ONCOLOGY', color: '#6B73FF' },
  { name: 'THERAPEUTICS', color: '#9B59B6' },
  { name: 'ASTROBIOLOGY', color: '#4A90E2' },
  { name: 'DIAGNOSTICS', color: '#5CB3CC' },
  { name: 'NEUROSCIENCE', color: '#6B73FF' },
  { name: 'DRUG DISCOVERY', color: '#9B59B6' }
];

export default function EducationalMaterial() {
  return (
    <section id="educational-material" className="section">
      <h2>Educational Material</h2>
      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12, listStyle: 'none', padding: 0 }}>
        {CATEGORIES.map(cat => (
          <li key={cat.name} style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, padding: 12, background: '#fff' }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: cat.color, display: 'inline-block', marginRight: 8 }} />
            <span>{cat.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
