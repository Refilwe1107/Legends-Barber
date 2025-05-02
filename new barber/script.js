document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});


document.addEventListener('click', (event) => {
  const nav = document.querySelector('nav ul');
  const navToggle = document.querySelector('.nav-toggle');
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
    nav.classList.remove('show');
  }
});


document.querySelector('nav ul').addEventListener('click', (event) => {
  if (event.target.matches('.home-link')) {
    window.location.href = '/'; 
  } else if (event.target.matches('.product-link')) {
    window.location.href = '/product';
  } else if (event.target.matches('.service-link')) {
    window.location.href = '/service'; 
  } else if (event.target.matches('.booking-link')) {
    window.location.href = '/booking';
  } else if (event.target.matches('.policy-link')) {
    window.location.href = '/policy';
  }
});
