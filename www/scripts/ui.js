var ui = (function() {
  var queue = [];

  function addMessage(message) {
    queue.push(message);
    if (queue.length == 1) {
      dequeueMessages();
    }
  }

  function dequeueMessages() {
    if (queue.length === 0)
      return;

    var messages = document.querySelector('.active-screen .messages');
    var message = queue[0];

    var messageElement = document.createElement('div');
    messageElement.innerHTML = '<div class="message">'+message+'</div>';
    messages.appendChild(messageElement);

    // messageElement.scrollIntoView({ 
    //   behavior: 'smooth' 
    // });

    //  $(messages).stop().animate({
    //      scrollTop: $(messageElement).offset().top
    //  }, 1000);

    setTimeout(function() {
      queue.shift();
      dequeueMessages();
    }, 1000);
  }

  function startWorking() {
    document.querySelector('body').classList.remove('ready');
  }

  function stopWorking() {
    document.querySelector('body').classList.add('ready');
  }

  function refresh() {
    queue = [];
  }

  function Scroll_To(elem, pos)
{
    var y = elem.scrollTop;
    y += (pos - y) * 0.3;
    if (Math.abs(y-pos) < 2)
    {
        elem.scrollTop = pos;
        return;
    }
    elem.scrollTop = y;
    setTimeout(Scroll_To, 40, elem, pos);   
}

  return {
    addMessage,
    dequeueMessages,
    startWorking,
    stopWorking,
    refresh
  }
})();