npm owner add

npm publish


main->lib
bin->cli


files白名单>npmignore黑名单>gitignore黑名单


主版本号 次版本号 修订版本号


npm包用途
组件
工具包




npm包调试方式
1.软连接
源目录，npm link 连接到全局
目标目录，npm link 连接到当前的node_modules

2.硬链接
ln -s 源目录 目标目录
ln -l