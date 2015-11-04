/*
*   getaccname.js
*
*   Note: Information in this module is based on the following documents:
*   1. HTML Accessibility API Mappings 1.0 (http://rawgit.com/w3c/aria/master/html-aam/html-aam.html)
*   2. SVG Accessibility API Mappings (http://rawgit.com/w3c/aria/master/svg-aam/svg-aam.html)
*/

import {
  getElementContents,
  hasFirstValue,
  isLabelableElement,
  nameFromAttribute,
  nameFromAltAttribute,
  nameFromContents,
  nameFromDefault,
  nameFromDescendant,
  nameFromLabelElement,
  nameFromDetailsOrSummary
} from './namefrom';

import { getAriaRole, nameFromIncludesContents } from './roles';

/*
*   addFieldsetLegend: Recursively prepend legend contents of closest
*   fieldset ancestor to the accName, which may already have content.
*/
function addFieldsetLegend (element, accName) {
  let fieldset, legend, text;

  if (typeof element.closest === 'function') {
    fieldset = element.closest('fieldset');
    if (fieldset) {
      legend = fieldset.querySelector('legend');
      if (legend) {
        text = getElementContents(legend);
        if (text.length) {
          if (accName) {
            accName.name = text + ' ' + accName.name;
            accName.source = 'fieldset/legend + ' + accName.source;
          }
          else {
            accName = { name: text, source: 'fieldset/legend' };
          }
        }
      }
      return addFieldsetLegend(fieldset.parentNode, accName);
    }
  }

  return accName;
}

/*
*   nameFromNativeSemantics: Use method appropriate to the native semantics
*   of element to find accessible name. Includes methods for all interactive
*   elements. For non-interactive elements, if the element's ARIA role allows
*   its acc. name to be derived from its text contents, or if recFlag is set,
*   indicating that we are in a recursive aria-labelledby calculation, the
*   nameFromContents method is used.
*/
export function nameFromNativeSemantics (element, recFlag = false) {
  let tagName = element.tagName.toLowerCase(),
      ariaRole = getAriaRole(element),
      accName = null;

  // TODO: Verify that this applies to all elements
  if (ariaRole && (ariaRole === 'presentation' || ariaRole === 'none')) {
    return null;
  }

  switch (tagName) {
    // FORM ELEMENTS: INPUT
    case 'input':
      switch (element.type) {
        // HIDDEN
        case 'hidden':
          if (recFlag) {
            accName = nameFromLabelElement(element);
          }
          break;

        // TEXT FIELDS
        case 'email':
        case 'password':
        case 'search':
        case 'tel':
        case 'text':
        case 'url':
          accName = nameFromLabelElement(element);
          if (accName === null) accName = nameFromAttribute(element, 'placeholder');
          break;

        // OTHER INPUT TYPES
        case 'button':
          accName = nameFromAttribute(element, 'value');
          break;

        case 'reset':
          accName = nameFromAttribute(element, 'value');
          if (accName === null) accName = nameFromDefault('Reset');
          break;

        case 'submit':
          accName = nameFromAttribute(element, 'value');
          if (accName === null) accName = nameFromDefault('Submit');
          break;

        case 'image':
          accName = nameFromAltAttribute(element);
          if (accName === null) accName = nameFromAttribute(element, 'value');
          break;

        default:
          accName = nameFromLabelElement(element);
          break;
      }
      break;

    // FORM ELEMENTS: OTHER
    case 'button':
      accName = nameFromContents(element);
      break;

    case 'label':
      accName = nameFromContents(element);
      break;

    case 'keygen':
    case 'meter':
    case 'output':
    case 'progress':
    case 'select':
      accName = nameFromLabelElement(element);
      break;

    case 'textarea':
      accName = nameFromLabelElement(element);
      if (accName === null) accName = nameFromAttribute(element, 'placeholder');
      break;

    // EMBEDDED ELEMENTS
    case 'audio': // if 'controls' attribute is present
      accName = { name: 'NOT YET IMPLEMENTED', source: '' };
      break;

    case 'embed':
      accName = { name: 'NOT YET IMPLEMENTED', source: '' };
      break;

    case 'iframe':
      accName = nameFromAttribute(element, 'title');
      break;

    case 'img':
    case 'area': // added
      accName = nameFromAltAttribute(element);
      break;

    case 'object':
      accName = { name: 'NOT YET IMPLEMENTED', source: '' };
      break;

    case 'svg': // added
      accName = nameFromDescendant(element, 'title');
      break;

    case 'video': // if 'controls' attribute is present
      accName = { name: 'NOT YET IMPLEMENTED', source: '' };
      break;

    // OTHER ELEMENTS
    case 'a':
      accName = nameFromContents(element);
      break;

    case 'details':
      accName = nameFromDetailsOrSummary(element);
      break;

    case 'figure':
      accName = nameFromDescendant(element, 'figcaption');
      break;

    case 'table':
      accName = nameFromDescendant(element, 'caption');
      break;

    // ELEMENTS NOT SPECIFIED ABOVE
    default:
      if (nameFromIncludesContents(element) || recFlag)
        accName = nameFromContents(element);
      break;
  }

  // LAST RESORT USE TITLE
  if (accName === null) accName = nameFromAttribute(element, 'title');

  return accName;
}

/*
*   nameFromAriaLabelledBy: Get the aria-labelledby attribute value of the
*   element param (a space-separated list of IDREFs), visit each referenced
*   element in the order it appears in the list and obtain its accessible
*   name (skipping recursive aria-labelledby calculations), and return an
*   object with name property set to a space-separated string concatenation
*   of those results if any, otherwise return null.
*/
function nameFromAriaLabelledBy (element) {
  let value = element.getAttribute('aria-labelledby');
  let idRefs, i, refElement, accName, arr = [];

  if (value && value.length) {
    idRefs = value.split(' ');

    for (i = 0; i < idRefs.length; i++) {
      refElement = document.getElementById(idRefs[i]);
      accName = getAccessibleName(refElement, true);
      if (accName && accName.name.length) arr.push(accName.name);
    }
  }

  if (arr.length)
    return { name: arr.join(' '), source: 'aria-labelledby' };

  return null;
}

/*
*   getAccessibleName: Use ARIA Roles Model specification for accessible
*   name calculation based on precedence order: (1) Use aria-labelledby,
*   unless we are already in the midst of a recursive aria-labelledby
*   calculation; (2) use aria-label; (3) use whatever method is specified
*   by the native semantics of the element, which includes, at the bottom
*   of the precedence list, use of the title attribute.
*/
export function getAccessibleName (element, recFlag = false) {
  let accName = null;

  if (!recFlag) accName = nameFromAriaLabelledBy(element);
  if (accName === null) accName = nameFromAttribute(element, 'aria-label');
  if (accName === null) accName = nameFromNativeSemantics(element, recFlag);

  if (isLabelableElement(element))
    accName = addFieldsetLegend(element, accName);

  return accName;
}
