document.addEventListener('DOMContentLoaded', function () {

  // menu mobile
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
  }

  // fecha menu ao clicar em link
  document.querySelectorAll('.main-nav a, .nav-cta').forEach(function (el) {
    el.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      q.parentElement.classList.toggle('open');
    });
  });

  // filtros da vitrine (wireframe - apenas feedback visual, sem backend)
  var filterForm = document.getElementById('filtros-vitrine');
  if (filterForm) {
    filterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Wireframe funcional: nesta etapa os filtros ainda não têm integração com dados reais. Na versão final, a listagem será atualizada dinamicamente via Firebase.');
    });
  }

  // formulário de contato / lead
  document.querySelectorAll('form[data-lead]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Wireframe funcional: este formulário está representando o fluxo de envio. Na versão final, os dados serão enviados e armazenados para a equipe comercial da Kurt.');
      f.reset();
    });
  });

  // marca item ativo no menu conforme a página atual
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

});
