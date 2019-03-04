---
title: CloneVolume
---
# パターン
![clone-volume]({{site.baseurl}}/assets/patterns/clone-volume.png)

# 説明
OCIでは、インスタンスのBootVolumeに指定されているBlockStorageをCloneし、新規インスタンス作成時に複製したVolumeを選択することにより、インスタンスの複製を可能とする。

# 用途
アプリケーションのビルド等、時間のかかる作業を複数インスタンスでやりたい場合など、一つのインスタンスで実施し、作業済みのものを展開できる。

# 実装
TODO: 後でスクショを貼る

1. Compute > BootVolumesの画面から、該当インスタンスのBootVolumeを見つけ、CloneVolumeを選択
  * インスタンスの停止やデタッチは不要で、起動中インスタンスにアタッチされたVolumeを複製可能
1. CloneしたVolumeがBootVolumesの画面でAVAILABLE表示になるまで待つ
1. インスタンス新規作成時、OSなどイメージを選択するところで、複製したVolumeを選択
