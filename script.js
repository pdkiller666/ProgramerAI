// ===== Mobile Menu Toggle =====
(function() {
  'use strict';

  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');

  if (burger && nav) {
    burger.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', isOpen);
      
      // Prevent body scroll when menu is open
      document.body.style.overfl