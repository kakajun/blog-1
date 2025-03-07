#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件 
yarn build
 
# 进入生成的文件夹
cd .vitepress/dist 
 
git add .
git commit -m 'deploy'
 
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/kakajun/blog gh-pages
 
cd -
