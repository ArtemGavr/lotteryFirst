document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "IMG"){

    let valueNumbers= document.getElementById('inputNumbers').value;
    let moneyInput = document.getElementById('moneyInput').value;
    if (Number(moneyInput) == NaN) {alert('You entered the wrong money format'); return; }
    let generatedNumber= Math.floor(1000 + Math.random() * 8999) ;

    let ArrayEntered= valueNumbers.toString().split('');

    let generatedString= generatedNumber.toString();
        if (ArrayEntered.length != 4) {alert('You entered the wrong numbers'); return; }

    let winCounter=0;
    for (let i=0; i<4; i++){
        if (ArrayEntered.indexOf(generatedString[i]) != -1) winCounter++;
    }

    let output='';
    switch (winCounter) {
        case 0:
          output=( 'Проишрыш (ы' );
          break;
        case 1:
          output=( 'Вы выиграли телефон' );
          break;
        case 2:
          output=( 'Вы выиграли компьютер!' );
          break;
        case 3:
          output=( 'Вы выиграли мотоцикл!!' );
          break;
        case 4:
            output=( 'Вы выиграли квартиру!!!' );
            break;
          
      }
      document.getElementById("generated").value = generatedNumber;


      if (winCounter == 0){document.getElementById("prize").value = output}
      else {let changer= Number(prompt('Если хотите получить приз введите 1, есди деньги - что-то другое', 1) );
      if (changer == 1) {
      document.getElementById("prize").value = output;
      }
      else {document.getElementById("prize").value = winCounter* moneyInput; }}
      //alert(generatedNumber + '   ' + output);

    }
      return;

});
