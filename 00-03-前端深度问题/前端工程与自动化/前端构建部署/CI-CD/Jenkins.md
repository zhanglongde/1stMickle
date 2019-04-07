1.拉取代码
拉取指定分支
git clone https://github.com/zhanglongde/xxx -b gh-pages
git clone https://github.com/zhanglongde/xxx -b dev

拉取指定tag
git checkout -b branch_name tag_name

2.编译代码
通过release.sh

3.同步编译后文件到远程服务器
rsync：第一次是把所有文件同步过去，当文件修改后，只把修改的文件同步过去
       单独协议 873端口
       用rsync做文件的复制要比scp的速度快，rsync只对差异文件做更新。
scp：scp是把文件全部复制过去，当文件修改后还是把所有文件复制过去
     基于ssh

