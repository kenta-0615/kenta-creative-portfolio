export type Work = {
  slug: string;
  number: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  target: string;
  conversion: string;
  strategy: string[];
  rejected: string;
  implementation: string[];
  accessibility: string[];
  tests: string[];
  demo?: string;
};

export const works: readonly Work[] = [
  { slug:"lumiere-skin", number:"01", industry:"美容", title:"LUMIÈRE SKIN", summary:"カウンセリング予約につなげる、完全予約制スキンケアサロンの自主制作。", challenge:"高級感を保ちながら、初めての来店に伴う不安を減らすこと。", target:"30〜40代／肌と丁寧に向き合いたい方", conversion:"初回カウンセリング予約", strategy:["施術より先に悩みへの共感を置く","料金と施術の流れを予約前に明示","余白と低彩度カラーで静かな信頼感を形成"], rejected:"装飾性の高い案は、施術内容より世界観が先行するため不採用。", implementation:["React / TypeScript","レスポンシブUI","WebP画像と遅延読み込み"], accessibility:["見出し階層","フォームラベル","十分な文字コントラスト"], tests:["主要導線","入力検証","スマートフォン表示"] },
  { slug:"kinosara", number:"02", industry:"飲食", title:"季ノ皿 KINOSARA", summary:"季節のコース予約を目的にした日本料理店の自主制作。", challenge:"料理の魅力と、価格・空席・場所など予約判断に必要な情報を両立すること。", target:"30〜50代／記念日・会食利用", conversion:"ディナーコース予約", strategy:["季節の物語からコースへ接続","予約CTAを各判断ポイントに配置","店舗情報を短い導線で確認可能にする"], rejected:"メニューを最初から大量に並べる案は、季節のコース価値が弱まるため不採用。", implementation:["予約UI","空席ステータス","管理画面デモ"], accessibility:["日付の状態を記号と文字で併記","キーボード操作","エラー文の明示"], tests:["予約登録","空席表示","管理ステータス変更"], demo:"/izakaya" },
  { slug:"elan-studio", number:"03", industry:"アパレル", title:"ÉLAN STUDIO", summary:"新作コレクションの購入を促すアパレルECプロモーションの自主制作。", challenge:"強いビジュアルを保ちながら、商品情報と購入導線を見失わせないこと。", target:"20〜30代／モードとストリートを横断する層", conversion:"新作コレクション購入", strategy:["商品名・価格・サイズを一定位置に配置","大胆な文字と余白で優先順位を形成","スマホでは購入操作を短くする"], rejected:"横スクロール中心の案は操作の学習コストが高いため不採用。", implementation:["商品一覧","カートUI","レスポンシブレイアウト"], accessibility:["画像代替テキスト","フォーカス表示","ボタン名の具体化"], tests:["商品絞り込み","カート数量変更","合計金額計算"] },
  { slug:"hikari-energy", number:"04", industry:"電気会社", title:"HIKARI ENERGY", summary:"料金比較と切り替え相談を分かりやすくした電力会社の自主制作。", challenge:"専門用語を減らし、料金・再エネ・切り替え手順を短時間で比較できること。", target:"電気代と環境負荷を見直したい世帯", conversion:"料金シミュレーション完了", strategy:["節約額は条件とセットで表示","数字の強弱を統一","切り替え手順を3段階に整理"], rejected:"未来感を優先した抽象表現は、料金の理解を妨げるため不採用。", implementation:["料金カード","シミュレーションUI","構造化データ"], accessibility:["色だけに頼らない状態表示","表の見出し","拡大時の崩れ防止"], tests:["料金入力","結果表示","CTA遷移"] },
  { slug:"tokyo-creative-week", number:"05", industry:"キャンペーン", title:"TOKYO CREATIVE WEEK", summary:"イベント認知から無料参加登録へつなぐ都市型フェスの自主制作。", challenge:"多数のプログラムを扱いながら、開催日と参加方法を即座に伝えること。", target:"クリエイター・学生・新しい表現に出会いたい方", conversion:"無料参加登録", strategy:["開催日と登録CTAを最上部で固定","会場・テーマで情報を分類","強い色は重要情報だけに限定"], rejected:"全プログラムを同じ強さで表示する案は、選びにくいため不採用。", implementation:["プログラム一覧","会場案内","イベント計測"], accessibility:["ランドマーク構造","リンク文言の具体化","動きを減らす設定への対応"], tests:["フィルター","登録導線","狭い画面での見出し折返し"] },
  { slug:"rhythm-mobile-app", number:"06", industry:"モバイルアプリ", title:"RHYTHM", summary:"習慣記録、進捗可視化、設定までを設計したReact Nativeアプリの自主制作。", challenge:"記録操作の負担を減らし、途切れても再開しやすい体験を作ること。", target:"小さな習慣を定着させたい忙しい社会人", conversion:"1日1回の習慣記録", strategy:["一覧から1タップで完了","週間達成率と連続日数を併用","片手操作できる大きなタップ領域"], rejected:"連続日数だけを強調する案は、記録が途切れた際に再開しづらいため不採用。", implementation:["React Native / Expo / TypeScript","Expo Router","Context + Reducer"], accessibility:["色・アイコン・文字による状態表示","文字拡大を想定","動きを減らす設定への対応"], tests:["状態更新","画面遷移","タップ領域と読み上げラベル"], demo:"/react-native-app" },
];

export const serviceDetails = [
  { slug:"homepage", title:"ホームページ制作", lead:"店舗・個人事業の信頼と問い合わせを育てるWebサイト。", audience:"新規開業、既存サイトを見直したい店舗・個人事業主", issues:["サービスの違いが伝わらない","スマホで見づらい","問い合わせにつながらない"], scope:["情報設計・ワイヤー","UIデザイン","レスポンシブ実装","基本SEO・公開支援"], price:"300,000円〜", duration:"1.5〜3か月" },
  { slug:"landing-page", title:"LP制作", lead:"広告やキャンペーンの目的から逆算した、行動につながる縦長ページ。", audience:"サービス申込・予約・資料請求を増やしたい事業者", issues:["説明が長く要点が伝わらない","CTAの位置が分からない","広告とページの内容がずれる"], scope:["構成・コピー整理","UIデザイン","実装","計測イベント設計"], price:"180,000円〜", duration:"4〜7週間" },
  { slug:"frontend", title:"React・TypeScript開発", lead:"デザイン意図を保ちながら、保守しやすくテスト可能な画面へ。", audience:"制作会社・開発会社・プロダクトチーム", issues:["デザインと実装の差が大きい","コンポーネントが整理されていない","テスト不足で改修が不安"], scope:["React / TypeScript実装","Atomic Design整理","アクセシビリティ","TypeScriptテスト"], price:"50,000円〜", duration:"内容に応じて調整" },
  { slug:"booking-system", title:"予約フォーム制作", lead:"利用者の予約体験と、店舗側の確認作業を一体で設計。", audience:"美容室、飲食店、教室、個人サロン", issues:["電話予約に時間がかかる","空き状況が伝わらない","管理が複数ツールに分散"], scope:["カレンダーUI","空席・時間枠表示","入力検証","管理画面設計"], price:"150,000円〜", duration:"3〜6週間" },
  { slug:"maintenance", title:"保守・改善", lead:"公開後の更新、表示確認、SEO・導線改善を継続支援。", audience:"更新担当が不足している事業者・制作チーム", issues:["更新方法が分からない","表示崩れに気づけない","改善が感覚頼み"], scope:["定期更新","表示崩れ修正","SEO・導線改善","GitHub運用"], price:"月額20,000円〜", duration:"月単位／スポット相談可" },
] as const;
