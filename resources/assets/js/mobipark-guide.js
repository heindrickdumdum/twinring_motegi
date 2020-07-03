
/* Reset*/
function checkboxReset(checkbox){
  var dataArr = [];
  var checkboxes = document.querySelectorAll('.'+checkbox+'-checkbox:checked');
  for (var i = 0; i < checkboxes.length; i++) {
    dataArr.push(checkboxes[i].value)
  }
  console.log(dataArr);
  document.getElementsByClassName('guide-data-holder')[0].setAttribute('data-'+checkbox,dataArr)
}



/*Age Checkbox*/
var checkboxAge = document.querySelectorAll('.age-checkbox');
checkboxAge.forEach(checkbox => checkbox.addEventListener('change', () => {
  checkboxReset('age');
  checkboxReset('grade');
}));


/*Grade Checkbox*/
var checkboxGrade = document.querySelectorAll('.grade-checkbox');
checkboxGrade.forEach(checkbox => checkbox.addEventListener('change', () => {
  checkboxReset('grade');
  checkboxReset('age');
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

