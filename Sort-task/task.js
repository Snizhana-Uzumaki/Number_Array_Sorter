function ManMin( ) {
  let NumbersErray = numbers.value.trim().split(',').map(v => +v);
  let Max = NumbersErray[0];
  let Min = NumbersErray[0];
  for (let i = 0; i < NumbersErray.length; i++) {
    if (NumbersErray[i]> Max){
      Max = NumbersErray[i];
    }
    else{
      Min = NumbersErray[i];
    }
  }
  alert(Max);
  alert(Min);
}
