console.log(document.querySelectorAll("input[name=radio-1-set]:checked")[0].value);

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
var radioArea = document.querySelectorAll('.radio-area');
radioArea.forEach(radio => radio.addEventListener('change', () => {
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-area',radio.value)
}));

/*Passport Checkbox*/
var checkboxPassport = document.querySelectorAll('.passport-checkbox');
checkboxPassport.forEach(checkboxes => checkboxes.addEventListener('change', () => {
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-passport',checkboxes.checked)
}));

