var store = [{
        "title": "三層構成",
        "excerpt":"パターン     説明  多くの(主に)Webアプリケーションを乗せるインフラとして一般的な構成。 WEBサーバーとAPサーバーを一つのサーバーにした二層構成と呼ばれる構成に比べWEB+APサーバーの負荷が分散できるというメリットがある。 たとえば、静的なリクエストを処理をすることまでWEB+APサーバーにやらせると負荷が集中してしまうので、それはWEBサーバーにやらせるなど。   用途  困ったらこの構成で考えて、要件を満たせないポイントがあったらカスタマイズしていく   実装  (FIXME)  ","categories": [],
        "tags": [],
        "url": "/jekyll-test/architectures/3-tier",
        "teaser":null},{
        "title": "CloneVolume",
        "excerpt":"パターン     説明  OCIでは、インスタンスのBootVolumeに指定されているBlockStorageをCloneし、新規インスタンス作成時に複製したVolumeを選択することにより、インスタンスの複製を可能とする。   用途  アプリケーションのビルド等、時間のかかる作業を複数インスタンスでやりたい場合など、一つのインスタンスで実施し、作業済みのものを展開できる。   実装  TODO: 後でスクショを貼る      Compute &gt; BootVolumesの画面から、該当インスタンスのBootVolumeを見つけ、CloneVolumeを選択            インスタンスの停止やデタッチは不要で、起動中インスタンスにアタッチされたVolumeを複製可能           CloneしたVolumeがBootVolumesの画面でAVAILABLE表示になるまで待つ   インスタンス新規作成時、OSなどイメージを選択するところで、複製したVolumeを選択  ","categories": [],
        "tags": [],
        "url": "/jekyll-test/patterns/clone-volume",
        "teaser":null},{
        "title": "FaultDomain分散",
        "excerpt":"パターン   ※LoadBalancerやVirtualMachineは配置例   説明  同じデータセンター上の別物理マシン上のコンポーネントを利用する   用途  可用性を向上させる。 同一データセンター内の配置になるため複数のAvailabilityDomain(AD)よりも対象外性は落ちるが、サブネット・ルートテーブルなどはAD間で共有できないため、定義を使いまわしできるなどの利点もある。   実装  コンポーネント作成時、適切なFaultDomainを選択し、分散させる   ","categories": [],
        "tags": [],
        "url": "/jekyll-test/patterns/multi-fault-domains",
        "teaser":null},{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": [],
        "url": "/jekyll-test/jekyll/update/2019/02/22/welcome-to-jekyll.html",
        "teaser":null}]
