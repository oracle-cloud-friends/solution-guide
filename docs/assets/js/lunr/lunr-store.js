var store = [{
        "title": "一般的なWebサービス",
        "excerpt":"パターン     説明  多くの(主に)Webアプリケーションを乗せるインフラとして一般的な構成。 WEBサーバーとAPサーバーを一つのサーバーにした二層構成と呼ばれる構成に比べWEB+APサーバーの負荷が分散できるというメリットがある。 たとえば、静的なリクエストを処理をすることまでWEB+APサーバーにやらせると負荷が集中してしまうので、それはWEBサーバーにやらせるなど。   用途  困ったらこの構成で考えて、要件を満たせないポイントがあったらカスタマイズしていく   実装  (FIXME)  ","categories": [],
        "tags": [],
        "url": "/solution-guide/architectures/3-tier",
        "teaser":null},{
        "title": "CloneVolume",
        "excerpt":"パターン     説明  OCIでは、インスタンスのBootVolumeに指定されているBlockStorageをCloneし、新規インスタンス作成時に複製したVolumeを選択することにより、インスタンスの複製を可能とする。   用途  アプリケーションのビルド等、時間のかかる作業を複数インスタンスでやりたい場合など、一つのインスタンスで実施し、作業済みのものを展開できる。   実装  TODO: 後でスクショを貼る      Compute &gt; BootVolumesの画面から、該当インスタンスのBootVolumeを見つけ、CloneVolumeを選択            インスタンスの停止やデタッチは不要で、起動中インスタンスにアタッチされたVolumeを複製可能           CloneしたVolumeがBootVolumesの画面でAVAILABLE表示になるまで待つ   インスタンス新規作成時、OSなどイメージを選択するところで、複製したVolumeを選択  ","categories": [],
        "tags": [],
        "url": "/solution-guide/patterns/clone-volume",
        "teaser":null},{
        "title": "File Storage",
        "excerpt":"パターン     説明  OCIでは、拡張可能なストレージサービスが用意されている。BlockStorageとはことなり、インスタンス上からはNFSのように見え、操作することができる。   用途  複数インスタンス・コンテナ間でのデータ共有。オンラインのまま拡張可能なストレージ。   実装  TODO: 後でスクショを貼る  ","categories": [],
        "tags": [],
        "url": "/solution-guide/patterns/file-storage",
        "teaser":null},{
        "title": "InternetGateway",
        "excerpt":"パターン     説明  OCIでは、不要なインスタンスのweb公開を避けるため、標準状態ではインスタンスが外からのアクセスを受け付けない状態となっている。インターネットからの接続を受け付けるためには、インスタンスに紐付いたVirtualCloudNetwork(VCN)にInternetGatewayを作成する。   用途  (LoadBalancerを用いない)Webサーバーなど、外部から直接アクセスを受け取ることができる。   実装  TODO: 後でスクショを貼る      インターネットからの接続を受け付けたいVCNのDetail画面からInternetGatewayの画面を開く。   Create Internet Gatewayボタンをクリックし、InternetGatewayを作成する            (複数あっても意味がないので)一つのVCNには一つのInternetGatewayしか作成できない           ","categories": [],
        "tags": [],
        "url": "/solution-guide/patterns/internet-gateway",
        "teaser":null},{
        "title": "FaultDomain分散",
        "excerpt":"パターン   ※LoadBalancerやVirtualMachineは配置例   説明  同じデータセンター上の別物理マシン上のコンポーネントを利用する   用途  可用性を向上させる。 同一データセンター内の配置になるため複数のAvailabilityDomain(AD)よりも対障害性は落ちるが、サブネット・ルートテーブルなどはAD間で共有できないため、定義を使いまわしできるなどの利点もある。   実装  コンポーネント作成時、適切なFaultDomainを選択し、分散させる   ","categories": [],
        "tags": [],
        "url": "/solution-guide/patterns/multi-fault-domains",
        "teaser":null},{
        "title": "ScaleOut",
        "excerpt":"パターン     説明  一つのインスタンスのみを利用している場合、負荷に応じて処理リソースを増減させることは難しい。そのような場合は、LoadBalancerに振分をまかせLoadBalancer配下のインスタンスを増減させることにより、負荷に応じた処理リソースの増減を実現する。   用途  なんらかの理由で処理負荷が一定ではないサービスを運用をしているときに、サーバー費用を抑え、費用的に効率の良い運用ができるようにする   実装  TODO: 後でスクショを貼る      Networking &gt; LoadBalancerの画面でCreate Load Balancerボタンを押す   必要なLoadBalancerの設定を入力し、作成する            ここでバックエンドとなるサーバーのIPを入力する           ","categories": [],
        "tags": [],
        "url": "/solution-guide/patterns/scale-out",
        "teaser":null},]
