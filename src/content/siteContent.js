import yaml from 'js-yaml';
import raw from './content.yml?raw';

export const siteContent = yaml.load(raw);
