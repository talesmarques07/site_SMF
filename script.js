// Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Animação de revelação ao rolar a página
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));

  // Formulário de contato -> abre o WhatsApp com a mensagem pronta
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cf-name').value.trim();
    const business = document.getElementById('cf-business').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    let text = `Olá! Meu nome é ${name}.`;
    if (business) text += ` Represento a marca ${business}.`;
    text += ` ${message}`;

    const whatsappUrl = `https://wa.me/5577992103416?text=${encodeURIComponent(text)}`;
    formNote.classList.add('show');
    window.open(whatsappUrl, '_blank');
  });