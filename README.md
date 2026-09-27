# KENTY CREATIVE PORTFOLIO

美容、飲食、アパレル、電気会社、キャンペーンの5業種について、HP・LP・バナー計15点を掲載したレスポンシブポートフォリオです。

## 設計

- HP: ブランド理解と回遊を重視
- LP: 共感 → 価値 → 根拠 → オファーの獲得導線
- バナー: 1メッセージ・1ベネフィット・1CTA
- SEO: title/description、見出し階層、構造化データ、alt、Core Web Vitalsを考慮

## 技術

本体はTypeScript、React、Tailwind CSS、CSSで実装。`examples/` にHTML、CSS、JavaScript、Tailwind CSS、TypeScriptの単独サンプルを収録しています。

## Cursor／VS Codeで編集する

### 初回だけ

1. GitHub Desktopで `kenta-0615/kenta-creative-portfolio` をCloneします。CLIを使う場合は次を実行します。

   ```bash
   git clone https://github.com/kenta-0615/kenta-creative-portfolio.git
   cd kenta-creative-portfolio
   ```

2. GitHub Desktopの「Open in Visual Studio Code」、またはCursor／VS Codeの「フォルダーを開く」から、Cloneしたルートフォルダを開きます。
3. Node.js 22.13.0以上を使用します。nvmを利用している場合は `nvm use` で、このリポジトリの`.nvmrc`を適用できます。
4. `corepack enable` を実行し、`pnpm --version` が `11.25.0` であることを確認します。
5. ターミナルで `pnpm install --frozen-lockfile` を実行します。
6. 必要に応じて `.env.example` を複製し、`.env.local` を作成します。

### 開発を開始する

```bash
pnpm dev
```

表示されたローカルURLをブラウザで開きます。Cursor／VS Codeのコマンドパレットから「Tasks: Run Task」を選び、`開発サーバーを起動`を実行しても開始できます。

### 変更後の確認

```bash
pnpm check
pnpm build
```

`pnpm check`で型チェック、自動テスト、Lintをまとめて実行できます。`.next`、`dist`、`node_modules`は生成物なので編集・コミットしません。

## 主な編集場所

- `app/`: ページ、レイアウト、ページ固有CSS
- `components/`: Atomic DesignのUI部品
- `data/`: 表示データ
- `lib/`: 予約ロジック、認証、入力検証
- `tests/`: TypeScriptテスト
- `public/`: 画像、アイコン

現在利用している共通UIは`components/ui/`の`button`、`calendar`、`input`、`native-select`、`textarea`です。未使用コンポーネントを追加したままにせず、必要になった時点で追加します。

CursorのAI編集ルールは`.cursor/rules/project.mdc`、Cursor／VS Code共通のタスクと推奨拡張機能は`.vscode/`に定義しています。

## リリース

開発開始からGitHub反映、公開確認、ロールバックまでの手順は[docs/RELEASE.md](docs/RELEASE.md)を確認してください。
