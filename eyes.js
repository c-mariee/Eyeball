const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
};

const balls = [];

for (let i = 0; i < 2; i++) {
  const ball = document.createElement('div');
  ball.className = 'ball';
  document.body.appendChild(ball);
  balls.push(ball);
}

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls.forEach((ball) => {
    ball.style.left = x;
    ball.style.top = y;
    ball.style.transform = 'translate(-' + x + ',-' + y + ')';
  });
};