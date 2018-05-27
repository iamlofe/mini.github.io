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
          'height:1.0em;width:1.0em;z-index:4;position:absolute;top:-0.45em';
        element.appendChild(img);
        where.appendChild(element);
        continue;
      }

      if (i % 10 === 0 || i === 0) {
        let img = document.createElement('img');
        img.src = './img/Path.png';
        img.style =
          'height:0.8em;width:0.8em;z-index:4;position:absolute;top:-0.35em';
        element.appendChild(img);

        where.appendChild(element);

        continue;
      }

      where.appendChild(element);
    }

    for (let i = 0; i < 4; i++) {
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
          'color: #BF8FFF; 	font-size:0.7em; position:absolute; top:-60px; left:-0.85em';
        element.appendChild(price);
      }
      if (i == 45) {
        let green = document.createElement('div');
        green.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px;';
        element.appendChild(green);

        let green1 = document.createElement('div');
        green1.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px;top:11px;';
        element.appendChild(green1);

        let green2 = document.createElement('div');
        green2.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px; top:22px';
        element.appendChild(green2);

        let green3 = document.createElement('div');
        green3.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px; top:33px';
        element.appendChild(green3);
      }

      if (i == 75) {
        let green = document.createElement('div');
        green.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px;';
        element.appendChild(green);

        let green1 = document.createElement('div');
        green1.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px;top:11px;';
        element.appendChild(green1);
      }

      if (i == 53) {
        let green = document.createElement('div');
        green.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px;';
        element.appendChild(green);

        let green1 = document.createElement('div');
        green1.style =
          'height:10px; width:100%; background:red;position:absolute;z-index:100000px;top:11px;';
        element.appendChild(green1);
      }

      if (i > 40) {
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
            'color: red; 	font-size:0.5em; position:absolute; top:20px; left:-1.1em';
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
        if (i == 25) {
          let green = document.createElement('div');
          green.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px;';
          element.appendChild(green);

          let green1 = document.createElement('div');
          green1.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px;top:-11px;';
          element.appendChild(green1);

          let green2 = document.createElement('div');
          green2.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px; top:-22px';
          element.appendChild(green2);

          let green3 = document.createElement('div');
          green3.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px; top:-33px';
          element.appendChild(green3);

          let green4 = document.createElement('div');
          green4.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px; top:-44px';
          element.appendChild(green4);

          let green5 = document.createElement('div');
          green5.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px; top:-55px';
          element.appendChild(green5);
        }

        if (i == 23) {
          let green = document.createElement('div');
          green.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px;';
          element.appendChild(green);

          let green1 = document.createElement('div');
          green1.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px;top:-11px;';
          element.appendChild(green1);

          let green2 = document.createElement('div');
          green2.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px; top:-22px';
          element.appendChild(green2);

          let green3 = document.createElement('div');
          green3.style =
            'height:10px; width:100%; background:green;position:absolute;z-index:100000px; top:-33px';
          element.appendChild(green3);
        }

        element.addEventListener('mouseout', e => {
          tooltip.innerText = '';
          tooltip.style = 'display:none';
        });
        if (i % 10 == 0 || i == 0) {
          let price = document.createElement('div');
          price.innerText = '$' + i * 100;
          price.style =
            'color: green; 	font-size:0.5em; position:absolute; top:-30px; left:-1.3em';
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
