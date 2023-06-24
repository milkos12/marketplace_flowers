

function passGrid() {

    const elements = [
      document.getElementById('grid_one'),
      document.getElementById('grid_two'),
      document.getElementById('grid_three')
    ];
  
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.click();
        window.scrollTo(0, scrollPosition);
      }, index * 6000);
    });
  }
  
  setInterval(passGrid, 18000);

