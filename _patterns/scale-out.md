---
title: ScaleOut
---
# パターン
![scale-out]({{site.baseurl}}/assets/patterns/scale-out.png)

# 説明
一つのインスタンスのみを利用している場合、負荷に応じて処理リソースを増減させることは難しい。そのような場合は、LoadBalancerに振分をまかせLoadBalancer配下のインスタンスを増減させることにより、負荷に応じた処理リソースの増減を実現する。

# 用途
なんらかの理由で処理負荷が一定ではないサービスを運用をしているときに、サーバー費用を抑え、費用的に効率の良い運用ができるようにする

# 実装
TODO: 後でスクショを貼る

1. Networking > LoadBalancerの画面でCreate Load Balancerボタンを押す
1. 必要なLoadBalancerの設定を入力し、作成する
  * ここでバックエンドとなるサーバーのIPを入力する

