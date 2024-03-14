// function toggleDescription(element) {
//   document.getElementById(element).classList.toggle('show-info');
// }


function toggleAdditionalInfo(index) {
  var additionalInfo = document.getElementById('additional-info-' + index);
  var arrow = document.querySelector('#heading-' + index + ' .arrow');
  
  if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
      additionalInfo.style.display = 'block';
      additionalInfo.style.opacity = '1'; // добавляем свойство opacity, чтобы блок был видимым
      document.getElementById('heading-' + index).classList.add('open'); // Добавлено присваивание класса .open
  } else {
      additionalInfo.style.display = 'none';
      additionalInfo.style.opacity = '0'; // добавляем свойство opacity, чтобы блок был скрытым
      document.getElementById('heading-' + index).classList.remove('open'); // Добавлено удаление класса .open
  }
}



function closeAdditionalInfo(index) {
  var additionalInfo = document.getElementById('additional-info-' + index);
  var arrow = document.querySelector('#heading-' + index + ' .arrow');

  if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
    additionalInfo.style.display = 'block';
    additionalInfo.style.opacity = '1';
    document.getElementById('heading-' + index).classList.add('open');
  } else {
    additionalInfo.style.display = 'none';
    additionalInfo.style.opacity = '0';
    document.getElementById('heading-' + index).classList.remove('open');

    // Прокручиваем к началу блока, чтобы страница не уезжала вниз
    var heading = document.getElementById('heading-' + index);
    heading.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    
    // Добавляем или вычитаем 150 пикселей, чтобы прокрутить чуть выше
    window.scrollBy(0, -1400);
  }
}

function closeAdditionalInfo1(index) {
  var additionalInfo = document.getElementById('additional-info-' + index);
  var arrow = document.querySelector('#heading-' + index + ' .arrow');

  if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
    additionalInfo.style.display = 'block';
    additionalInfo.style.opacity = '1';
    document.getElementById('heading-' + index).classList.add('open');
  } else {
    additionalInfo.style.display = 'none';
    additionalInfo.style.opacity = '0';
    document.getElementById('heading-' + index).classList.remove('open');

    // Прокручиваем к началу блока, чтобы страница не уезжала вниз
    var heading = document.getElementById('heading-' + index);
    heading.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    
    // Добавляем или вычитаем 150 пикселей, чтобы прокрутить чуть выше
    if(index === 6){
      window.scrollBy(0, -40);
    }
    else{window.scrollBy(0, -1100);}
    
  }
}

