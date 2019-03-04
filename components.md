---
title: コンポーネントについて
---

このページでは、各パターンの説明で登場するOCIコンポーネントについての説明をおこなう

# コンポーネント一覧

| 名称 | 略称 | 説明 | アイコンなど | 備考 |
| AvailabilityDomain | AD | 可用性ドメイン。データセンターごとに定義される |  | AWSでいうAvailability Zoneにあたる |
| Fault Domain | FD | 障害ドメイン。データセンター上のマシングループ。単純なハードウェア故障などはFDをマタイがないように設計されている | | |
| Compute インスタンス | - | 仮想マシン・ベアメタルマシンの総称 | | AWSでいうEC2が近い概念 |
| Virtual Machine | VM | 仮想マシン。| | |
| Load Balancer | LB | ロードバランサ。 | | |
| Block Storage | BS | Computeインスタンスにアタッチして使うディスク。 | | AWSでいうEBS |
| Boot Volume | - | Block Storageのうち、Computeインスタンスの起動ディスクとして使われているもの | | |

