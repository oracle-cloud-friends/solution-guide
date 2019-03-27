---
title: InternetGateway
---
# パターン
![internet-gateway]({{site.baseurl}}/assets/patterns/internet-gateway.png)

# 説明
OCIでは、不要なインスタンスのweb公開を避けるため、標準状態ではインスタンスが外からのアクセスを受け付けない状態となっている。インターネットからの接続を受け付けるためには、インスタンスに紐付いたVirtualCloudNetwork(VCN)にInternetGatewayを作成する。

# 用途
(LoadBalancerを用いない)Webサーバーなど、外部から直接アクセスを受け取ることができる。

# 実装
TODO: 後でスクショを貼る

1. インターネットからの接続を受け付けたいVCNのDetail画面からInternetGatewayの画面を開く。
1. Create Internet Gatewayボタンをクリックし、InternetGatewayを作成する
  * (複数あっても意味がないので)一つのVCNには一つのInternetGatewayしか作成できない

