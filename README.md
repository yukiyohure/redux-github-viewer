# Github-viewer by React.js with Redux and React hooks

## どんなサイト？
「Githubの状態を表すアプリ」という体で、見た目の部分だけを実装してみました。  
実際にGithubのAPIを叩いて取得したデータを用いたものは[別のリポジトリ(👷‍♂️鋭意製作中です👷‍♀️)](https://github.com/yukiyohure/redux-saga-github-viewer)に切り出してあります。  
デモページは[こちら](https://yukiyohure.github.io/redux-github-viewer/)。



## 苦労した箇所は？
- Redux, React-Reduxの関係を上手く使いこなすこと

  > `Container`ってなんだ？  
  > `mapStateToProps`ってなんだ？  
  > `Reducer`? `ActionCreator`???
  
  というふうにたくさんわからない言葉が出てきて混乱していました。

- `Button`コンポーネントの作成
  デモページをご覧いただければ分かる通り、このサイトには緑色と赤色の2種類のボタンが出てきます。
  それを`Button`コンポーネントファイルの中身で動的に「スタイル」「onClickハンドラー」「children」を生成しようと考えていました。

  初めは`props`に色に関する値を`Button`コンポーネントにたくさん渡して上記の考えを実現していましたが、可読性が著しく下がるので実装の方法を変えることにしました。
  より少ない`props`宣言のみで「スタイル」「onClickハンドラー」「children」を切り分けられるコンポーネントを作成することができました。  
  
  以下にその方法をまとめて記事にしました。  
  [Reactで汎用性のあるbuttonコンポーネントの作成 with styled-components
](https://zenn.dev/yukiyohure/articles/32801c0c6bf147)
  
- ドロップダウンメニューの範囲外のクリックがあった場合に同メニューを閉じる処理
   単純に実装するだけなら比較的簡単に実装できますが、Reactの性質上、　　
   無駄なレンダリングを避けるためにhooksの`useEffect`や`useRef`を使うことにし、それらを学ぶきっかけになりました。



## 何を学んだの？
- Reduxを用いたグローバルな状態管理
  勉強しながら以下の記事を投稿しました。
  - [React-Reduxの使い方 (ReactとReduxの接続)](https://qiita.com/yukiyohure0923/items/5c29ed73ad57d852f007)
  - [Reactアプリ内でのReduxの複数のReducerを一つにまとめる方法](https://qiita.com/yukiyohure0923/items/37320d22dff84127feb6)

- React hooks APIの一部
  - `useState`:`local state`とそれを更新する関数を作成
  - `useEffect`:`class component`でいうライフサイクルを`functional component`でも再現したもの。返り値は(依存配列がない場合は)初回レンダリング以降、レンダリング毎に実行される関数となる。

- 可溶性の高いコンポーネントを作成する意識
  - 一つのコンポーネントファイルの中にロジックと見た目を閉じ込める意識で実装
  - フラグメントを極力使わないように意識してコンポーネントを切り分け  
    理由としては、  

    > フラグメントを使う → そのコンポーネントファイルには`div`が一つ以上ある → 切り出し方に問題がある可能性あり

    と考えたからです。
- イベント伝撰について
  デモページのチェックボックスをクリックした時に、DOM上の親である`<tr>`に設定してあるイベントハンドラーも意図せずに実行してしまうことがあり、その際に学びました。
  
  <img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F39330%2F32be6719-9e30-1f84-6e81-140c2c06bc6a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=04086743a03d71d7cec0dbd94c6e5c11" width="40%">

- `React.js`を使用した基本的なパーツの作り方
  - モーダル
  - ドロップダウンメニュー
  - ボタン(押下アクション付)
  - タブメニュー
  - テーブル形式の一覧表示
  - 一括チェックボタン
  - 検索バー
  - セレクトボックス
  - テキスト入力欄

## 技術スタック
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React hooks API](https://reactjs.org/docs/hooks-intro.html) (`useState`, `useEffect`, `useRef`)
- [React-modal](https://reactcommunity.org/react-modal/)
- [React-Router](https://reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/docs)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

技術ではないけど採用したもの
- [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)
