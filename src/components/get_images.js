// 获取图片相关的数据
// 将图片信息存储起来，打包的同时会将图片打包到对应输出的文件夹中
// 如果直接在文件中使用如: './src/xxx.jpg' 的路径,打包后图片将不会打包到对应输出的文件中
var imageDatas=require('../data/imageDatas.json');
//传入图片数据，利用自执行函数，将图片名信息转化成图片URL路径信息,最后返回图片数组
imageDatas=(function getImageURL(imageDatasArr){
    for(let  i = 0, j = imageDatasArr.length;i < j;i++){
    let singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

export default imageDatas;