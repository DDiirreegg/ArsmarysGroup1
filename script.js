// function toggleDescription(element) {
//   document.getElementById(element).classList.toggle('show-info');
// }
window.onload = function() {
  window.scrollTo(0, 0); 
}


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



 


