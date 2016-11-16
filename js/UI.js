// Element Instantiation
var header = new Header({
  level: '1',
  text: 'Jed\'s Header',
  cls: 'jed-header',
  id: 'main-header'
});

// Add elements to DOM
app.appendChild(header.element);