let importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const automotiveImages = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default automotiveImages