document.addEventListener('DOMContentLoaded', () => {
  const btnTranslate = document.querySelector('#btn_translate');
  const langInput = document.querySelector('#language_code');
  const helloDiv = document.querySelector('#hello');

  async function translate () {
    const lang = langInput.value.trim();
    if (!lang) return;

    try {
      const response = await fetch(`https://hellosalut.stefanbohacek.dev/?lang=${lang}`);
      if (!response.ok) {
        throw new Error('Failed to fetch translation');
      }
      const data = await response.json();
      helloDiv.textContent = data.hello;
    } catch (error) {
      helloDiv.textContent = 'Error loading translation';
    }
  }

  btnTranslate.addEventListener('click', translate);
});
