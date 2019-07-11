export default function chunk() {
    const br = document.createElement('br');
    const text = document.createTextNode('This is my answer!');
    document.body.appendChild(br);
    // const path="./c7n.jpg";//请修改为本地图片的路径
    // document.body.appendChild(br);
    // document.body.innerHTML='<img src="'+path+'" />';
    document.body.appendChild(text);
  }
  