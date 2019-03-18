# OCI SolutionGuide

Oracle Cloud Infrastructureの使い方ドキュメント

https://oracle-cloud-friends.github.io/solution-guide/

## Getting Started

GitとDocker(Compose)があればできるはず。

```
# 事前準備
git pull <this-repository>
docker-compose build

# 起動(起動中は https://localhost:4000/solution-guide で表示確認ができます)
docker-compose up -d

# 終了
docker-compose down

# ドキュメント生成(pushするまえに一度実行してファイルを生成してください)
docker-compose exec site jekyll build -d docs
```

masterの/docsをgithub-pagesで公開する設定になっています。

## How To Contribute
[@tazyamah](https://twitter.com/tazyamah) まで連絡ください
