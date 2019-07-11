import './index.css';

function main() {
  const text = document.createTextNode('test-24567');
  document.body.appendChild(text);
  import('./chunk').then(module => {
    module.default();
  });
}

main();

export default main;