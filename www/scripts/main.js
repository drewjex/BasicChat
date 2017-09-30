var pageLoadedCallbacks = [];
var pageUnloadedCallbacks = [];

var oldUrl;

var counter = 0;

function go(url) {
  ui.startWorking();

  //clear queue
  ui.refresh();

  //remove previous screen
  var oldContainer = document.querySelector('.app-container');
  if (oldContainer !== void 0 && oldContainer !== null) { 
    oldContainer.classList.remove('active-screen');
    oldContainer.classList.add('removing');
    setTimeout(() => {
      oldContainer.remove();
    }, 600);
  }

  //add new screen
  var section = document.createElement('section');
  section.classList.add('app-container');
  section.classList.add('active-screen');
  document.querySelector('body').appendChild(section);
  $(section).load(url, () => {
    pageUnloadedCallbacks.forEach(obj => {
      if (obj.page === oldUrl) {
        obj.callback();
      }
    });
  });

  ui.stopWorking();
}

function AddMessagesRepeat(url) {
  if (url == "/www/pages/main.html") {
    setTimeout(() => {
      ui.addMessage("TESTING");
      counter++;
      if (counter < 10)
        AddMessagesRepeat(url);
    }, 5000);
  }
}

function addMessage(event) {
  if (event.keyCode == 13) {
        ui.addMessage(event.target.value);
        event.target.value = "";
        return false;
    }
}