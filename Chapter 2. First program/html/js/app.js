//openWindow() открывает файл, после нажатия кнопки
    // function openWindow() {
    //   msgWindow= open('index.html')
    // }

//alert() - простое окно с сообщением и кнопкой ОК
    // window.alert("Hello, World!!!")

//confirm() - окно с кнопками ОК и CANCEL
    // if (window.confirm("Click OK or Cancel")) {
    //   window.alert("OK");
    // }
    // else {
    //   window.alert("Cancel")
    // }

//prompt() - диалоговое окно для ввода данных
    var UName = window.prompt("What is your name?", "No way");
    if (UName == null) {
      alert("Bye");
    }
    else {
      document.write("Hello, " + UName);
    }
