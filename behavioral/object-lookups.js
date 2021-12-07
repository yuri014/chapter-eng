const canva = { width: 800, height: 800 };
const element = { width: 200, height: 200 };

const alignElement = (direction) => {
  switch (direction) {
    case 'left':
      return { x: 0 };
    case 'right': {
      return { x: canva.width - element.width };
    }
  }
};

alignElement('left');

const alignElement2 = (direction) => {
  const align = {
    left: { x: 0 },
    right: { x: canva.width - element.width },
  };

  return align[direction];
};

alignElement2('right');
