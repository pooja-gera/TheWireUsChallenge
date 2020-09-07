/**Creates a element and renders it to the DOM  with the id as 'root'*/
const element = <div>I am going to appear on the screen.</div>;
ReactDOM.render(element, getElementById('root'));

/**Clock function is called for every 1sec. So after every sec the time here changes and rendered it in DOM*/
function clock() {
    const element = (
      <div>It is {new Date().toLocaleTimeString()}.</div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
setInterval(clock, 1000);