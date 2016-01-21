'use strict';

import 'array.from';

export const html = (strings, ...values) => {

  let str = '';

  if(Array.isArray(strings)){
    for(let i = 0; i < strings.length; i++){
      if(strings[i]) str += strings[i];
      if(values[i]) str += values[i];
    }
  }else{
    str = strings;
  }

  let doc = new DOMParser().parseFromString(str.trim(), 'text/html');

  return doc.body.firstChild;

};

export const prepend = ($parent, $element) => {

  let $first = $parent.children[0];
  $parent.insertBefore($element, $first);

};

export const getTopOffset = () => {

  let topOffset = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  return topOffset;

};

export const animate = (elem, style, unit, from, to, time, prop) => {

  if(!elem) return;

  let start = new Date().getTime();
  let timer = setInterval(() => {

    let step = Math.min(1, (new Date().getTime() - start) / time);

    if (prop) {
      elem[style] = (from + step * (to - from)) + unit;
    } else {
      elem.style[style] = (from + step * (to - from)) + unit;
    }

    if(step === 1) clearInterval(timer);

  }, 25);

  elem.style[style] = from + unit;

};

export const removeByClassName = selector => {

  let $element = document.querySelector(selector);
  $element.parentNode.removeChild($element);

};

export const httpGet = (theUrl) => {

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( 'GET', theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;

};

export const httpGetAsync = (theUrl, callback) => {

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {

    if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
      callback(xmlHttp.responseText);
    }

  };

  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.send(null);

};

export const $ = selector => {

  let result;

  if(selector === 'body'){
    return document.body;
  }else if(selector === 'head'){
    return document.head;
  }else if(/^[\#.]?[\w-]+$/.test(selector)){

    if(selector[0] === '#'){
      return document.getElementById(selector.slice(1));
    }else if(selector[0] === '.'){
      result = document.getElementsByClassName(selector.slice(1));
    }else{
      result = document.getElementsByTagName(selector);
    }
  }else{
    result = document.querySelectorAll(selector);
  }

  let elements = [...result];
  if(elements.length === 1) return elements[0];
  return elements;

};
