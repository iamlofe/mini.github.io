(function() {
  const columnRes = document.getElementById('column-res1');
  const columnRes2 = document.getElementById('column-res2');
  const columnRes3 = document.getElementById('column-res3');

  write1(columnRes);
  write2(columnRes2);
  write3(columnRes3);

  /////////////////////////////////////////////

  function write2(where) {
    for (let i = 0; i < 4; i++) {
      let element = document.createElement('div');
      element.className = 'element';
      where.appendChild(element);
    }

    for (let i = 0; i <= 80; i++) {
      let element = document.createElement('div');

      element.className = 'element1';

      if (i == 40) {
        let img = document.createElement('img');
        img.src = './img/Path.png';
        img.style =
          'height:40px;width:40px;z-index:4;position:absolute;top:-18px';
        element.appendChild(img);
        where.appendChild(element);
        continue;
      }

      if (i % 10 === 0 || i === 0) {
        let img = document.createElement('img');
        img.src = './img/Path.png';
        img.style =
          'height:1.0em;width:1.0em;z-index:4;position:absolute;top:-0.4em';
        element.appendChild(img);

        where.appendChild(element);

        continue;
      }

      where.appendChild(element);
    }

    for (let i = 0; i < 5; i++) {
      let element = document.createElement('div');
      element.className = 'element';

      where.appendChild(element);
    }
  }

  function write3(where) {
    for (let i = 0; i < 4; i++) {
      let element = document.createElement('div');
      element.className = 'element';
      element.style = 'visibility: hidden;';
      where.appendChild(element);
    }

    for (let i = 0; i <= 80; i++) {
      let element = document.createElement('div');

      element.className = 'element13';
      element.style = 'border:none';

      if (i == 40) {
        let price = document.createElement('div');
        price.innerText = '$' + i * 100;
        price.style =
          'color: #BF8FFF; 	font-size:1em; position:absolute; top:-60px; left:-0.70em';
        element.appendChild(price);
      }

      if (i > 40) {
        element.addEventListener('click', e => {
          console.log(e);
          e.target.style = 'background:green';
        });
        let tooltip = document.createElement('div');

        element.addEventListener('mouseover', e => {
          tooltip.className = 'tooltipe';

          tooltip.style =
            'height:50px;width:140px; background:#434E60; position:absolute; top:40px;border-radius:7px; font-size:16px; padding:2px; word-wrap: break-word';
          tooltip.innerText = 'it is our blockk';
          e.target.appendChild(tooltip);
        });

        element.addEventListener('mouseout', e => {
          tooltip.innerText = '';
          tooltip.style = 'display:none';
        });

        element.style =
          'border: 2px solid #3462A3;border-top: none;border-bottom: none;border-left: none;';

        if (i % 10 == 0 || i == 0) {
          let price = document.createElement('div');
          price.innerText = '$' + i * 100;
          price.style =
            'color: red; 	font-size:0.5em; position:absolute; top:20px; left:-0.5em';
          element.appendChild(price);
        }
      }
      if (i % 10 == 1) continue;
      where.appendChild(element);
    }

    for (let i = 0; i < 4; i++) {
      let element = document.createElement('div');
      element.className = 'element';
      element.style = 'visibility: hidden;';

      where.appendChild(element);
    }
  }
  function write1(where) {
    for (let i = 0; i < 4; i++) {
      let element = document.createElement('div');
      element.className = 'element';
      element.style = 'visibility: hidden;';
      where.appendChild(element);
    }

    for (let i = 0; i <= 80; i++) {
      let element = document.createElement('div');

      // element.addEventListener();

      element.className = 'element13';
      element.style = 'border:none';

      if (i < 40) {
        element.addEventListener('click', e => {
          e.target.style = 'background:red';
        });
        element.style =
          'border: 2px solid #3462A3;border-top: none;border-bottom: none;border-left: none;';
        let tooltip = document.createElement('div');

        element.addEventListener('mouseover', e => {
          tooltip.className = 'tooltipe';

          tooltip.style =
            'height:50px;width:140px; background:#434E60; position:absolute; top:-70px;border-radius:7px; font-size:16px; padding:2px; word-wrap: break-word';
          tooltip.innerText = 'it is our blockk';
          e.target.appendChild(tooltip);
        });

        element.addEventListener('mouseout', e => {
          tooltip.innerText = '';
          tooltip.style = 'display:none';
        });
        if (i % 10 == 0 || i == 0) {
          let price = document.createElement('div');
          price.innerText = '$' + i * 100;
          price.style =
            'color: green; 	font-size:0.5em; position:absolute; top:-30px; left:-0.7em';
          element.appendChild(price);
        }
      }

      where.appendChild(element);
    }

    for (let i = 0; i < 4; i++) {
      let element = document.createElement('div');
      element.className = 'element';
      element.style = 'visibility: hidden;';

      where.appendChild(element);
    }
  }
})();
