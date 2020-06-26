

/*Grade Checkbox*/
var checkboxAge = document.querySelectorAll('.age-checkbox');
checkboxAge.forEach(checkbox => checkbox.addEventListener('change', () => {
  var agesArr = [];
  var checkboxes = document.querySelectorAll('.age-checkbox:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    agesArr.push(checkboxes[i].value)
  }
  console.log(agesArr);
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-age',agesArr)
}));


/*Grade Checkbox*/
var checkboxGrade = document.querySelectorAll('.grade-checkbox');
checkboxGrade.forEach(checkbox => checkbox.addEventListener('change', () => {
  var gradesArr = [];
  var checkboxes = document.querySelectorAll('.grade-checkbox:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    gradesArr.push(checkboxes[i].value)
  }
  console.log(gradesArr);
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-grade',gradesArr)
}));

/*Area Select*/
var radioArea = document.querySelectorAll('.area-checkbox');
radioArea.forEach(radio => radio.addEventListener('change', () => {
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-area',radio.value)

  var areaArr = [];
  var checkboxes = document.querySelectorAll('.area-checkbox:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    areaArr.push(checkboxes[i].value)
  }
  console.log(areaArr);
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-area',areaArr)
}));

/*Passport Checkbox*/
var checkboxPassport = document.querySelectorAll('.passport-checkbox');
checkboxPassport.forEach(checkboxes => checkboxes.addEventListener('change', () => {
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-passport',checkboxes.checked)
}));

