import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import '../prism.css';

export const highlightAll = () => {
  if (typeof window !== 'undefined') {
    Prism.highlightAll();
  }
};