const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('mobileOverlay');

function closeMenu() {
  sidebar?.classList.remove('open');
  overlay?.classList.remove('show');
}

menuButton?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
  overlay?.classList.toggle('show');
});
overlay?.addEventListener('click', closeMenu);

// Auto-dismiss feedback messages after a short delay.
document.querySelectorAll('.flash').forEach((flash) => {
  setTimeout(() => {
    flash.style.opacity = '0';
    flash.style.transform = 'translateY(-4px)';
    setTimeout(() => flash.remove(), 250);
  }, 4500);
});
