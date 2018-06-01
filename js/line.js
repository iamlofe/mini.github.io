(function() {
  const notice = document.getElementsByClassName('elementANegative');
  const notice1 = document.getElementsByClassName('elementAPositive');

  const con = document.getElementsByClassName('container_line');
  console.log(notice);

  const a = Array.prototype.forEach.call(notice, element => {
    let noticeMouse = document.createElement('div');

    let top = 0;
    let left = 0;

    element.addEventListener('mouseover', e => {
      let imgTwitter = document.createElement('img');
      imgTwitter.src = 'img/twitter.png';
      imgTwitter.style = 'width:10px;height:10px;';

      console.log(e);
      top = e.y / 140;

      noticeMouse.style = `width:9em;height:3em;background:#195383;position:absolute;font-size:0.4em;padding:0.5em; left:1em;top:${top}em;z-index:1000`;
      noticeMouse.appendChild(imgTwitter);
      noticeMouse.innerText = 'Crypromainer';
      element.appendChild(noticeMouse);
    });
    element.addEventListener('mouseleave', () => {
      noticeMouse.innerText = '';

      element.removeChild(noticeMouse);
    });
  });

  Array.prototype.forEach.call(notice1, element => {
    let noticeMouse = document.createElement('div');

    let top = 0;
    let left = 0;

    element.addEventListener('mouseover', e => {
      let imgTwitter = document.createElement('img');
      imgTwitter.src = 'img/twitter.png';
      imgTwitter.style = 'width:10px;height:10px;';

      console.log(e);
      top = e.y / 100;

      noticeMouse.style = `width:9em;height:3em;background:#195383;position:absolute;font-size:0.4em;padding:0.5em; left:1em;bottom:${top}em;z-index:1000;text-align:center;`;
      noticeMouse.appendChild(imgTwitter);
      noticeMouse.innerText = 'Crypromainer';
      element.appendChild(noticeMouse);
    });
    element.addEventListener('mouseleave', () => {
      noticeMouse.innerText = '';

      element.removeChild(noticeMouse);
    });
  });
})();
