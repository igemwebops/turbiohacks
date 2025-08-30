'use client';

import React from 'react';

const CATEGORIES = [
  { name: 'ONCOLOGY',            color: '#6B73FF' },
  { name: 'ASTROBIOLOGY',        color: '#4A90E2' },
  { name: 'BIOMANUFACTURING',         color: '#5CB3CC' },
  { name: 'NEUROSCIENCE',        color: '#6B73FF' },
  { name: 'DRUG DISCOVERY',      color: '#9B59B6' },
];

export default function EducationalMaterial() {
  return (
    <section id="educational-material" className="section" style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
      <h2 style={{ margin: 0, color: 'rgba(0,0,0,0.9)' }}>Educational Material</h2>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
          width: '100%',
          maxWidth: 1100,
        }}
      >
        {CATEGORIES.map(cat => (
          <li
            key={cat.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              border: '1px solid var(--gray-alpha-200)',
              borderRadius: 12,
              padding: 12,
              background: 'var(--background)',
              color: 'color: 'rgba(var(--gray-rgb),0.92)',
            }}
          >
            <span style={{ width: 18, height: 18, borderRadius: 4, background: cat.color, display: 'inline-block' }} />
            <span style={{ lineHeight: '20px' }}>{cat.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

