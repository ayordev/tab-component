
      const profileButton = document.getElementById('profile');
      const settingsButton = document.getElementById('settings');
      const optionsButton = document.getElementById('options');

      const textFirst = document.getElementById('text-first');
      const textSecond = document.getElementById('text-second');

      const colorPalette = document.getElementById('color-pallete');

      function displayProfileBody() {
        let color = localStorage.getItem('color');
        profileButton.style.backgroundColor = color;
        profileButton.style.color = '#fff';
        optionsButton.style.backgroundColor = '#fff';
        optionsButton.style.color = color;
        settingsButton.style.backgroundColor = '#fff';
        settingsButton.style.color = color;

        textFirst.textContent =
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod asperiores nesciunt maxime molestias ducimus nisi ab sint repellendus quam.';

        textSecond.textContent =
          ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ab impedit optio mollitia quidem eius?';
      }
      displayProfileBody();

      function displaySettingsBody() {
        let color = localStorage.getItem('color');
        settingsButton.style.backgroundColor = color;
        settingsButton.style.color = '#fff';
        profileButton.style.backgroundColor = '#fff';
        profileButton.style.color = color;
        optionsButton.style.backgroundColor = '#fff';
        optionsButton.style.color = color;

        textFirst.textContent =
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis pariatur dolorem,  optio hic quibusdam ea dolore deserunt?';
        textSecond.textContent =
          'Lorem ipsum dolor, sit amet consectetur. Quam veritatis quae perspiciatis minus architecto.';
      }

      function displayOptionsBody() {
        let color = localStorage.getItem('color');
        optionsButton.style.backgroundColor = color;
        optionsButton.style.color = '#fff';
        profileButton.style.backgroundColor = '#fff';
        profileButton.style.color = color;
        settingsButton.style.backgroundColor = '#fff';
        settingsButton.style.color = color;

        textFirst.textContent =
          'This is an example...... adipisicing elit. Facilis pariatur dolorem, adipisicing elit dicta aliquid natus optio hic quibusdam ea dolore deserunt?';
        textSecond.textContent =
          'Yea, an exampleeeee...... adipisicing elit. Quam veritatis quae perspiciatis adipisicing elit assumenda minus architecto.';
      }

      function getColor() {
        let color = localStorage.getItem('color');
        colorPalette.value = color;
      }

      getColor();

      function saveColor(color) {
        console.log(color);
        localStorage.setItem('color', color);
      }

      function changeColor(e) {
        saveColor(e.target.value);
        profileButton.style.backgroundColor = e.target.value;
        profileButton.style.color = '#fff';
        settingsButton.style.backgroundColor = '#fff';
        settingsButton.style.color = e.target.value;
        optionsButton.style.backgroundColor = '#fff';
        optionsButton.style.color = e.target.value;
      }

      profileButton.addEventListener('click', displayProfileBody);
      settingsButton.addEventListener('click', displaySettingsBody);
      optionsButton.addEventListener('click', displayOptionsBody);
      colorPalette.addEventListener('input', changeColor);
    
