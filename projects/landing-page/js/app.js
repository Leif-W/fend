'use strict';

/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navbarList = document.getElementById('navbar__list');
const scrollToTop = document.getElementById('scroll-to-top');
let sections = document.getElementsByName('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let i = 0; i < sections.length; i++) {
  let li_ = document.createElement('li');
  let a_ = document.createElement('a');

  a_.href = '#' + sections[i].id;
  a_.textContent = sections[i].dataset.nav;

  li_.appendChild(a_);
  navbarList.appendChild(li_);
}

// Scroll to top
document.addEventListener('click', () => window.scrollTo(0, 0));

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
