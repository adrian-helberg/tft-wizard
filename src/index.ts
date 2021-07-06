import * as _ from 'lodash';
import { teest } from './test';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'World (finally)!'], ' ');

    teest();
  
    return element;
  }
  
  document.body.appendChild(component());