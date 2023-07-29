---
    title: "AWS"
    description: "もりけんのAWSノートです。"
    date: "2023-07-29"
    draft: true
    tags: ["infra"]
    slug: "aws"
    thumbnail: "aws.webp"
---

# AWS

## 簡単な理解

- 業界シェアNo.1のクラウドサービス
- 機能がありすぎる、ほんとに。
- よく使うのはlambda, s3, cloudfront, ECS, Cognito, Secret Manager, SQS, Route53 とかとか。

## Tips

- ECSをデプロイした時、フリーズすることがよくある。コードが間違っていて正しくコンテナが立ち上がってないと確認リクエストを延々と送り続けてフリーズするので、ECSのタスク数を0にするととりあえずはフリーズを抜けられる。