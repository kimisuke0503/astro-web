---
    title: "Astrojsで個人サイトを作りました"
    description: "もりけんの個人ブログです。"
    date: "2023-07-28"
    draft: true
    tags: ["tech"]
    slug: "create-web"
    thumbnail: "blog-pc-cat.webp"
---

# Astrojsでポートフォリオサイトを作りました。

## はじめに

こんにちは。現在大学院2回生（2023/7時点）で、情報学を専攻しているものです。web系の企業でインターンをさせていただいており、いろいろ勉強したことをメモしたり、試してみたりしたことをアウトプットするために、ポートフォリオ兼ブログサイトを作ってみました。本記事はその概要です。

## 本サイトの概要

本サイトは以下のようになってます。

- profile : ポートフォリオ（自己紹介）部分です。
- note : 主に勉強したことをメモしたりします。全然web系じゃないことも書いたり。
- blog : ひとまとまりのやってみた系のことなどを書いたりします。
- app : 過去の制作物を供養するページです。

## 使用した技術スタック

本サイトで使用した技術スタックは以下のようになってます。

### フロントエンド

- Astrojs : フロントエンドフレームワークです。業務で使うことがあり、これは便利だ！と思ったので使ってみました。
- Typescript : 業務でも主に使っている言語です。
- tailwindCSS : CSSを使いやすくするライブラリです。CSSファイルが肥大化しないので良いですね。

### ホスティング

- Vercel : gitHubと連携するだけで、めちゃくちゃ簡単にwebページをデプロイできるツールです。Nextjsを生み出しただけある。。。

## Astrojsについてもう少し詳しく

（個人的に宇宙兄弟が大好きなので、astronautにかかった名前が気に入ってます。）

Astrojsはwebのフレームワークで、高速で管理しやすいwebサイトを作ることができます。

基本的にwebサイトとかwebアプリは主な構成にフロントエンド、バックエンド、データベースとあって、個人のwebサイトでもこれまではGatsbyやReact, Nextjsなどで作ったフロントエンドとCMSなどを組み合わせて作る例が多かったような気がします。（諸説ないですが、、）

しかし、本サイトのようにそんな複雑じゃないwebサイトとかはわざわざCMSを接続したり、多少なりともバックエンドを書いたりするのはちょっと腰が重いところがあって、、そんな中、最小構成で割と管理も楽そうと思い採用したのが今回のAstrojsです。

### html要素の書き方

AstrojsではReactやNextjsのように、コンポーネントの概念があり、ひとまとまりのhtml要素をページ別に使い回したり、拡張したりすることができます。

例として、本サイトのコードの一部です。`<Header />` や`<Footer />`などはコンポーネントとして定義して、インポートしたものを使っています。

```typescript
---
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import Card from "../components/Card.astro";

...中略

   <Header />
    <section class="p-10 pt-96">
      <Card>
        <div class="p-10">
          <div class="mb-16">
            <h1 class="page-title">Blog</h1>
            <p class="page-description">
              なんでもブログです。技術、勉強、趣味、etc..
            </p>
          </div>
          <section class="card-content-wrap">
            ...中略
          </section>
        </div>
      </Card>
    </section>
    <Footer />
...
```

ReactやNextjsでtsxに親しんできた人は非常に扱いやすくていい！

### コンテンツ管理の仕方

ここが簡単なので今回Astrojs選定に至りました。`content/`配下にmdファイルをおいて、それらを以下のコードのようにそれぞれのページで受け取り、表示するという機能が標準で備わっていて、バックエンドを書く必要もなければCMSも導入する必要がないのが嬉しいポイントですねー。（正直ReactやNextjsでもできないことはないと思いますが、Astroはこの構成がビルトインで用意されているということがポイント高いです。）

コード一部（伝われ）

```typescript
import { CollectionEntry, getCollection } from "astro:content";

export type Props = {
  blog: CollectionEntry<"blog">;
};

export async function getStaticPaths() {
  const blogEntries = await getCollection("blog"); //ブログ記事情報を取得
  return blogEntries.map(blog => ({
    params: { slug: blog.slug },
    props: { blog },
  }));
}

const { blog } = Astro.props;
const { Content } = await blog.render(); //render関数がmdファイルをhtmlに変換してくれる！
```

<!-- コンテンツ管理部分のイメージです。レイアウトを作成した後は、ここにmdで記事を追加していくだけでコンテンツ管理ができます。

![img](/public/img/blog-0729-1.webp) -->

## 無駄 & 苦労話

今回Astrojsが簡単そう！ということで飛びついて始めた開発ですが、元は業務で使っていました。

その中で、Astroはformatter（コードを自動で整形してくれるツール、開発者はこれがないと生きていけない）として、[prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)というものを提供してくれるんですが、おそらく公式のバグ？で動いてくれなくて、しばらく地獄のformatterなし開発期間がありました。（靴下でバスケの試合出るようなもん）

これがしばらく待ってたら解決されたらしく、嬉しさのあまりサイト作成に至ったというような経緯でした。
参考: <https://github.com/withastro/prettier-plugin-astro/issues>

## おわりに

自分で書いていて全然技術的なドキュメントを書く力がないなと感じました。この辺も慣れていきたい所存です。

今後も技術的なことも含め、いろいろアウトプットしていけたらと思います。それでは！
