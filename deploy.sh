rm -rf dist &&
yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:czc2222/bigScreen-2-webside.git&&
git push -f origin main &&
cd ..
