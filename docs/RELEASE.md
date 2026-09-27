# リリース手順

この手順は、Cursor／VS Codeで修正したKENTY CREATIVE PORTFOLIOを、GitHubの`master`へ反映して公開確認するための運用手順です。

## 1. リリース方針

- `master`: 公開可能な状態だけを置く本番ブランチ
- 作業ブランチ: `feature/内容`、`fix/内容`、`chore/内容`
- 通常の修正は作業ブランチからPull Requestを作り、確認後に`master`へマージする
- 緊急時を除き、`master`へ直接コミットしない
- 強制Push、履歴の上書き、秘密情報のコミットは禁止

## 2. 初回セットアップ

```bash
nvm use
corepack enable
pnpm --version
pnpm install --frozen-lockfile
```

- Node.jsは`.nvmrc`のバージョンを使用する
- pnpmは`package.json`の`packageManager`と同じバージョンを使用する
- 必要な環境変数は`.env.example`を参考に`.env.local`へ設定する
- `.env.local`、APIキー、トークン、個人情報はGitへ追加しない

## 3. 作業開始

```bash
git switch master
git pull --ff-only
git switch -c fix/example
pnpm install --frozen-lockfile
pnpm dev
```

Cursor／VS Codeでは「Tasks: Run Task」から`開発サーバーを起動`を選んでも構いません。

## 4. 修正後の確認

```bash
pnpm check
pnpm build
pnpm audit --prod
pnpm peers check
```

あわせてブラウザで次を確認します。

- トップ、サービス、予約デモ、プライバシーが表示できる
- ヘッダー、CTA、問い合わせボタンで正しい画面へ移動できる
- PCとスマートフォンで文字切れ、不自然な改行、横スクロールがない
- 予約カレンダーの「○・△・×」と時間枠が一致する
- 問い合わせフォームの必須入力、エラー表示、完了表示が動く
- `/ops`が未許可ユーザーへ公開されない
- 公開名が「ケンティ」または「KENTY CREATIVE」で統一されている

## 5. GitHubへ反映

```bash
git status
git add -A
git commit -m "fix: 変更内容"
git push -u origin fix/example
```

GitHubでPull Requestを作成し、変更内容、確認結果、影響範囲、画面変更がある場合は比較画像を記載します。確認後、`master`へマージします。

GitHub Desktopを使う場合は、変更一覧を確認してCommitし、`Push origin`、`Create Pull Request`の順に進めます。

## 6. バージョンとリリース記録

- 不具合修正: パッチ番号を上げる（例：`v1.0.0 → v1.0.1`）
- 後方互換の機能追加: マイナー番号を上げる（例：`v1.0.0 → v1.1.0`）
- 大きな仕様変更: メジャー番号を上げる（例：`v1.0.0 → v2.0.0`）

```bash
git switch master
git pull --ff-only
git tag -a v1.0.1 -m "v1.0.1"
git push origin v1.0.1
```

GitHub Releasesに、変更内容、修正した不具合、確認結果、既知の制限を記録します。

## 7. 公開

GitHubへのPushとWebサイトの公開は別の処理です。自動デプロイ設定がない場合、Pushだけでは公開サイトは更新されません。

1. `master`の最新コミットとリリース対象を照合する
2. 現在利用中のホスティング管理画面から本番公開を実行する
3. 公開URLで主要ページとフォームを再確認する
4. GitHub Releaseへ公開日時と公開先を追記する

独自ドメインやCloudflare Pagesへ移行する場合は、DNS、環境変数、ビルドコマンド、出力形式を別途検証してから切り替えます。

## 8. 問題が起きた場合

公開後に問題が見つかった場合は、履歴を消さずに対象コミットを取り消します。

```bash
git switch master
git pull --ff-only
git revert <問題のコミットSHA>
git push origin master
```

その後、取り消し後の`master`を再公開します。データベース変更がある場合は、コードだけを戻す前にスキーマの互換性を確認してください。

## リリース完了条件

- `pnpm check`、`pnpm build`、依存監査が成功
- Pull Requestの差分と削除ファイルを確認
- `master`へのマージ完了
- GitHub Releaseまたはタグを作成
- 公開URLの主要導線を確認
- 問題発生時の戻し先コミットを記録
