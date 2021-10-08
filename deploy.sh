npm run build

cp CNAME dist/

cd dist

git init

git add .

git commit -m"deploy"

git remote add evans-portfolio git@github.com:kevinec/evans-portfolio.git

git branch dist
git checkout dist

git push -f --set-upstream evans-portfolio dist