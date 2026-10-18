document.addEventListener('DOMContentLoaded', () => {
  async function fetchHello () {
    const helloDiv = document.querySelector('#hello');
    try {
      const response = await fetch('https://hellosalut.stefanbohacek.dev/?lang=fr');
      if (!response.ok) {
        throw new Error('Failed to fetch hello');
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error loading translation';
    }
  }

  fetchHello();
});
