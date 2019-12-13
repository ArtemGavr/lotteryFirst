document.body.addEventListener("click", function(event) {
    if (event.target.nodeName == "IMG"){
    let tvalue= document.getElementById('inputNumbers').value;
    let generatedNumber= Math.floor(1000 + Math.random() * 8999) ;

    let ArrayEntered= tvalue.toString().split('');
    let generatedString= generatedNumber.toString();
        if (ArrayEntered.length != 4) {alert('You entered the wrong value'); return; }
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
      document.getElementById("prize").value = output;
      alert(generatedNumber + '   ' + output);

    }
      return;

});