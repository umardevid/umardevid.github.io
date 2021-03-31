window.onload = function () {
  // Get element with props "data-toggle='toggle'"
  let TOGGLERS = document.querySelectorAll('[data-toggle="toggle"]');
  let TOGGLERS_LENGTH = TOGGLERS.length;

  // Loop toggler button
  for (let i = 0; i < TOGGLERS_LENGTH; i++) {
    // Goto toggle function
    toggleTarget(TOGGLERS[i]);
  }

  // Toggle function
  function toggleTarget(elem) {
    let target = getTarget(elem);
    let addClassStr = getAttr(elem, 'data-addclass');
    let removeClassStr = getAttr(elem, 'data-removeclass');

    elem.addEventListener('click', function (e) {
      // Get expanded state from props
      let isExpanded = getAttr(elem, 'aria-expanded');

      // If is expanded false then make it to true
      // else the make it to false
      if (isExpanded === 'false') {
        if (addClassStr !== '') {
          addClass(target, addClassStr);
        }

        if (removeClassStr !== '') {
          rmClass(target, removeClassStr);
        }

        // Set btn state to not expand
        setAttr(this, 'aria-expanded', 'true');
      } else {
        if (addClassStr !== '') {
          removeClass(target, addClassStr);
        }

        if (removeClassStr !== '') {
          addClass(target, removeClassStr);
        }

        // Set btn state to not expand
        setAttr(this, 'aria-expanded', 'false');
      }
    });
  }

  // Get target element
  function getTarget(elem) {
    let targetId = getAttr(elem, 'data-target');
    let target = document.querySelector(targetId);

    return target;
  }

  // Function to get attribute
  // will return the string
  function getAttr(elem, attrName) {
    let attr = elem.getAttribute(attrName);

    return attr;
  }

  // Set attribute
  function setAttr(elem, attrName, attrValue) {
    elem.setAttribute(attrName, attrValue);
  }

  // Remove the classe
  function rmClass(elem, classStr) {
    elem.classList.remove(classStr);
  }

  // Add the class
  function addClass(elem, classStr) {
    elem.classList.add(classStr);
  }
};
