const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active to clicked
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
