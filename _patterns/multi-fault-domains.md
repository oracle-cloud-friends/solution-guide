---
title: FaultDomain分散
---
# パターン
![clone-volume]({{site.baseurl}}/assets/patterns/multi-fault-domains.png)
※LoadBalancerやVirtualMachineは配置例

# 説明
同じデータセンター上の別物理マシン上のコンポーネントを利用する

# 用途
可用性を向上させる。
同一データセンター内の配置になるため複数のAvailabilityDomain(AD)よりも対象外性は落ちるが、サブネット・ルートテーブルなどはAD間で共有できないため、定義を使いまわしできるなどの利点もある。

# 実装
コンポーネント作成時、適切なFaultDomainを選択し、分散させる

