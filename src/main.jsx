import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { siteContent } from '@/content/siteContent';

function populateContent() {
  document.body.setAttribute('data-video-id', siteContent.game.videoId);

  const mapping = {
    // SEO
    'seo.title': { type: 'text', target: 'title' },
    'seo.description': { type: 'meta', name: 'description' },
    'seo.keywords': { type: 'meta', name: 'keywords' },
    'seo.canonical': { type: 'link', rel: 'canonical' },
    'og.title': { type: 'meta', property: 'og:title' },
    'og.description': { type: 'meta', property: 'og:description' },
    'og.url': { type: 'meta', property: 'og:url' },
    'og.image': { type: 'meta', property: 'og:image' },
    'twitter.title': { type: 'meta', name: 'twitter:title' },
    'twitter.description': { type: 'meta', name: 'twitter:description' },
    'schema': { type: 'script', target: 'script[type="application/ld+json"]' },

    // Hero
    'hero.image': { type: 'image', target: '[data-cms-id="hero.image"]' },
    'hero.buttonLink': { type: 'link', target: '[data-cms-id="hero.buttonLink"]' },
    'hero.buttonText': { type: 'text', target: '[data-cms-id="hero.buttonText"]' },
    
    // Prize
    'prize.image': { type: 'image', target: '[data-cms-id="prize.image"]' },
    'prize.link': { type: 'link', target: '[data-cms-id="prize.link"]' },

    // Stars
    'stars.image': { type: 'image', target: '[data-cms-id="stars.image"]' },
    'stars.link': { type: 'link', target: '[data-cms-id="stars.link"]' },

    // VIP
    'vip.image': { type: 'image', target: '[data-cms-id="vip.image"]' },
    'vip.link': { type: 'link', target: '[data-cms-id="vip.link"]' },
    
    // Register
    'register.title': { type: 'text', target: '[data-cms-id="register.title"]' },
    'register.image': { type: 'image', target: '[data-cms-id="register.image"]' },
    'register.link': { type: 'link', target: '[data-cms-id="register.link"]' },
    'register.instructionsTitle': { type: 'text', target: '[data-cms-id="register.instructionsTitle"]' },
    
    // CTA
    'cta.image': { type: 'image', target: '[data-cms-id="cta.image"]' },
    'cta.link': { type: 'link', target: '[data-cms-id="cta.link"]' },
    'cta.buttonLink': { type: 'link', target: '[data-cms-id="cta.buttonLink"]' },
    'cta.buttonText': { type: 'text', target: '[data-cms-id="cta.buttonText"]' },
  };

  for (const key in mapping) {
    const { type, target, name, property } = mapping[key];
    const value = getNestedValue(siteContent, key);
    if (value === undefined) continue;

    const selector = target || (name ? `meta[name="${name}"]` : `meta[property="${property}"]`);
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
      switch (type) {
        case 'text':
          element.textContent = value;
          break;
        case 'image':
          element.src = value.src;
          element.alt = value.alt;
          break;
        case 'link':
          element.href = value;
          break;
        case 'meta':
          element.content = value;
          break;
        case 'script':
          element.innerHTML = JSON.stringify(value);
          break;
        case 'link-tag':
          element.href = value;
          break;
      }
    });
  }

  const instructionsList = document.getElementById('register-instructions');
  if (instructionsList && siteContent.register.instructions) {
    instructionsList.innerHTML = '';
    siteContent.register.instructions.forEach((item, index) => {
      const li = document.createElement('li');
      li.style.marginBottom = '0.8rem';
      li.innerHTML = `<span style="color: #e91e63; font-weight: bold;">${index + 1} -</span> ${item}`;
      instructionsList.appendChild(li);
    });
  }
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

document.addEventListener('DOMContentLoaded', populateContent);

const shouldRenderReact = window.location.hash === '#react' || 
                         localStorage.getItem('useReactVersion') === 'true';

if (shouldRenderReact) {
  const root = document.getElementById('root');
  if (root) {
    root.style.display = 'block';
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}