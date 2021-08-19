npm run build

cd dist

git init

git add .

git commit -m"deploy"

git remote add evans-portfolio https://github.com/KevinEC/evans-portfolio

git branch dist
git checkout dist

git push -f --set-upstream evans-portfolio dist