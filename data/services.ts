import type { CaseStudy, FaqItem, PricePlan, ServiceItem } from "@/types/service";

export const services: readonly ServiceItem[] = [
  { number: "01", title: "Webサイト／HP", description: "ブランド理解と問い合わせ導線を両立するサイト設計。", items: ["情報設計・ワイヤー", "UIデザイン", "レスポンシブ実装", "基本SEO"] },
  { number: "02", title: "LP制作", description: "広告・キャンペーンの目的から逆算した縦長ページ。", items: ["構成・コピー整理", "デザイン", "CTA設計", "計測設計"] },
  { number: "03", title: "バナー／広告", description: "媒体とターゲットに合わせた視線設計。", items: ["静止画バナー", "SNS広告", "サイズ展開", "簡易AB案"] },
  { number: "04", title: "フロントエンド", description: "デザインを保ちながら、運用しやすい画面へ実装。", items: ["React / TypeScript", "HTML / CSS / JavaScript", "Tailwind CSS", "アクセシビリティ"] },
  { number: "05", title: "予約・フォーム", description: "予約体験と運用フローを一体で設計。", items: ["カレンダーUI", "時間枠選択", "入力検証", "管理画面設計"] },
  { number: "06", title: "改善・運用", description: "公開後の計測結果をもとに継続改善。", items: ["SEO改善", "導線改善", "更新対応", "GitHub運用"] },
  { number: "07", title: "モバイルアプリ", description: "React Native・Expoを想定したアプリUIと実装設計。", items: ["React Native / Expo", "TypeScript", "画面遷移・状態管理", "テスト設計"] },
];

export const pricePlans: readonly PricePlan[] = [
  { title: "バナー制作", price: { currency: "¥", amount: "15,000", suffix: "〜" }, leadTime: "3〜7営業日" },
  { title: "LPデザイン", price: { currency: "¥", amount: "80,000", suffix: "〜" }, leadTime: "3〜5週間" },
  { title: "LPデザイン＋実装", price: { currency: "¥", amount: "180,000", suffix: "〜" }, leadTime: "4〜7週間" },
  { title: "Webサイト制作", price: { currency: "¥", amount: "300,000", suffix: "〜" }, leadTime: "1.5〜3か月" },
  { title: "予約フォームUI", price: { currency: "¥", amount: "150,000", suffix: "〜" }, leadTime: "3〜6週間" },
  { title: "保守・改善", price: { qualifier: "月額", currency: "¥", amount: "20,000", suffix: "〜" }, leadTime: "内容に応じて調整" },
];

export const caseStudies: readonly CaseStudy[] = [
  { industry: "美容", title: "LUMIÈRE SKIN", description: "予約獲得を目的に、静かな高級感とカウンセリング導線を設計。", href: "/works/lumiere-skin" },
  { industry: "飲食", title: "季ノ皿 KINOSARA", description: "旬の物語とコース予約を結びつけたサイト・LP・バナー。", href: "/works/kinosara" },
  { industry: "アパレル", title: "ÉLAN STUDIO", description: "新作購入へつなげるエディトリアルなECプロモーション。", href: "/works/elan-studio" },
  { industry: "電気会社", title: "HIKARI ENERGY", description: "料金の分かりやすさと信頼性を重視した獲得導線。", href: "/works/hikari-energy" },
  { industry: "キャンペーン", title: "TOKYO CREATIVE WEEK", description: "イベント認知と無料登録を促す高コントラスト設計。", href: "/works/tokyo-creative-week" },
  { industry: "予約システム", title: "SALON BOOKING DEMO", description: "カレンダー、空き枠、フォーム、確認画面までの操作デモ。", href: "/booking-demo" },
  { industry: "モバイルアプリ", title: "RHYTHM", description: "React Nativeでの実装を想定した習慣管理アプリ。", href: "/react-native-app" },
];

export const faqItems: readonly FaqItem[] = [
  { question: "相談前に何を準備すればよいですか？", answer: "目的、対象ユーザー、希望公開時期、参考サイトがあれば十分です。文章や構成が未確定でも、ヒアリングから整理できます。" },
  { question: "デザインだけ、実装だけでも依頼できますか？", answer: "可能です。既存のワイヤーやFigmaデータ、デザインガイドの有無を確認して制作範囲を決めます。" },
  { question: "修正は何回までですか？", answer: "基本料金には各工程2回までの修正を含みます。方向性変更や追加ページは別途お見積もりします。" },
  { question: "素材や原稿がなくても進められますか？", answer: "仮原稿で構成を固めることは可能です。写真撮影、ロゴ制作、専門ライティングが必要な場合は範囲を分けてご案内します。" },
  { question: "公開後の更新も依頼できますか？", answer: "スポット更新と月次保守の両方に対応可能です。更新頻度と対象範囲を確認してご提案します。" },
  { question: "独自ドメインにも対応できますか？", answer: "取得済みドメインのDNS設定、SSL、公開先への接続を支援できます。ドメイン購入費と外部サービス料金は実費です。" },
];
