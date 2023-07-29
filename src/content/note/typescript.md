---
    title: "Typescript"
    description: "もりけんのtypescriptノートです。"
    date: "2023-07-27"
    draft: true
    tags: ["language"]
    slug: "typescript"
    thumbnail: "typescript.webp"
---

# Typescript

## Tips
- `str.padStart(targetLength [, padString])`・・・数値を0で始まる二桁に揃えたい時など
- スプレッド構文はリストやオブジェクトの中身を展開して渡すみたいなことをやってる。

## 環境構築

### npm(node pakage manager)について
→node.js(サーバーで動くjavascript、サーバーで動くとは、ブラウザが直接読み込むんじゃなくて、サーバーが読み込んで、計算とかして、返してくれるイメージ)の天才たちが作った抽象化されたプログラムのディレクトリ(パッケージ)のバージョン管理をやってくれてかつ自動でインストールしたりしてくれるやつ
（メタが作ったyarnとかもあるけど、ややこしくなるからnpmで）

### npmを使うメリット
→パケージをいちいちダウンロードして使うとバージョンとかパッケージ同士のバージョンの違いによるエラーなんかがめちゃくちゃだるいことになる。その辺を解決した状態でインストールしてもらって使う方が楽。これを外部パッケージをnpmに依存している。(dependency)という

### node_modulesとは
→プロジェクト(一つのアプリのプログラム群、俺でいうkimisukeweb)のルートディレクトリ(kimisukewebディレクトリ)直下に置かれ、ダウンロードしたパッケージたちが入る普通は編集してはいけない。

### package.jsonとは
→(とりあえずの理解、よくわかってないがあんまりいじることもないのかな)作成したプロジェクトの詳細設定、バージョンとか名前とか依存とかwebpackとかを管理する…？
※ここにパッケージのバージョンとかが記されていて、npmの足がかりになっている。gitでリポジトリをクローンしてきて、npm installをすると、自分のローカルにpackage.jsonに書かれている奴らがインストールされ、無事ローカルで実行することができる

### webpack(モジュールバンドラ)とは
→複数のファイル(複数のtypescriptファイルとか)を、まとめて(bundle)一つのファイルにしてくれる。
→どこのtypescriptをどこにどんな感じでjsにして保存するのかとかを設定する。

## 環境構築手順
1. ルートディレクトリとなるディレクトリを作成し、そこのターミナルで「npm init -y」(質問項目をすべてyesで)コマンド入力→package.jsonができる
2. 次に「npm install -D typescript」（npmで、インストール、開発者モードで(—save-devでもいい、こんときだけの設定って意味grobalではない)、typescriptを）コマンド入力→node_modulesとpackage-lock.jsonができる（ここまでで一応typescript使える、typescriptのコンパイルは「npx tsc (ファイル名)」、javascriptのコンパイルは「node (ファイル名)」）
3. Webpackをダウンロードしていく「npm install -D webpack webpack-cli webpack-dev-server ts-loader」（npmで、インストール、webpackを、webpackをコマンドラインで使えるようにするツールを、webpackでローカルサーバーを立ち上げられるやつを(いらない？)、tsをいい感じにコンパイルしてくれるやつを）→node_modulesの中にいろいろ入って、package.jsonにいろいろ情報が追加される
4. webpack.config.jsで設定をしていく(何をバンドルするのか、それはどこにあるのか、どこにバンドルしたものを出すのか、などなど、詳しくは中身参照)
5. 「npx tsc —init」でtypescriptのための構成ファイルのダウンロード、中身はおいおい
6. 最後に、package.jsonの中のscriptsを編集(特に“build”: “webpack”)し、tsは「npm run build」でコンパイル、ローカルサーバーは「npm start」で立てられる
