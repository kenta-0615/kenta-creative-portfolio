# RHYTHM — React Native習慣管理アプリ

KENTY CREATIVEの設計デモを、実際に操作・保存できるReact Nativeアプリにした自主制作です。

## 機能

- 習慣の追加・完了切替・長押し削除
- 今日と7日間の進捗表示
- 表示・リマインド設定
- AsyncStorageによる端末保存
- 読み上げ用ラベル
- TypeScriptと自動テスト

## 起動

Node.js LTSとスマートフォンのExpo Goを用意します。

\`\`\`bash
cd apps/rhythm-mobile
npm install
npm start
\`\`\`

QRコードをExpo Goで読み取ります。同じWi-Fiで接続できない場合は \`npx expo start --tunnel\` を使います。

\`\`\`bash
npm run ios      # macOSとiOS Simulator
npm run android  # Android Emulator
npm run web      # ブラウザー
\`\`\`

## 学習しながら作る流れ

1. **要件を分ける**：「一覧 → 完了切替 → 追加 → 保存」の順で作ります。
2. **型を決める**：\`src/domain/habits.ts\`の\`Habit\`が1件のデータです。
3. **処理を分離する**：追加、切替、削除、達成率を画面外の関数にします。
4. **画面を組む**：\`View\`、\`Text\`、\`Pressable\`、\`ScrollView\`、\`TextInput\`、\`Modal\`を使います。
5. **Expo Routerで画面を分ける**：\`src/app/\`のファイルが各画面です。\`_layout.tsx\`で下部タブを定義します。
6. **stateをつなぐ**：Contextで習慣を3画面へ共有し、モーダルの開閉などは各画面で管理します。
7. **保存する**：\`src/storage.ts\`でAsyncStorageへ保存し、読み込み時に型を検証します。
8. **アクセシビリティ**：役割とチェック状態を読み上げへ伝え、色だけで状態を表しません。
9. **検証する**：

\`\`\`bash
npm run check
npx expo export --platform web
\`\`\`

10. **実機確認**：追加、完了、再起動後の保存、長い名称、iPhone／Androidのタップ領域を確認します。
11. **公開準備**：EAS CLIを使い、ストア用ビルドへ進みます。

\`\`\`bash
npx eas-cli@latest login
npx eas-cli@latest build:configure
npx eas-cli@latest build --platform android
npx eas-cli@latest build --platform ios
\`\`\`

ストア公開には開発者登録、プライバシーポリシー、説明文、スクリーンショットも必要です。

## 主な構成

\`\`\`text
src/app/_layout.tsx            # 下部タブ
src/app/index.tsx              # ホーム
src/app/progress.tsx           # 進捗
src/app/settings.tsx           # 設定
src/context/habits-context.tsx # 状態共有と保存
src/components/rhythm-ui.tsx   # 画面UI
src/domain/habits.ts           # 型とロジック
src/storage.ts                 # AsyncStorage
tests/habits.test.ts           # 自動テスト
\`\`\`
