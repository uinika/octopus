const asar = require("asar");

src = "./resources";
dest = "./build";

options = {
  unpack: [], // 不需要打包的文件
  unpackDir: [] // 不需要打包的目录
};

/** 打包完成后的回调函数 */
callback = () => {
  console.info("some info");
};

asar.createPackageWithOptions(src, dest, options, callback);