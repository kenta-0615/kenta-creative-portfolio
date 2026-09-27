"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
import { ReliableLink } from "@/components/atoms/reliable-link";
import { cartItemCount, cartSubtotal, updateCart, type CartLine, type ShopProduct } from "@/lib/vtuber-cart";
import styles from "@/app/showcase.module.css";

const products: ShopProduct[] = [
  { id: "moon-hoodie", name: "MOON SIGNAL Hoodie", price: 7800, category: "apparel" },
  { id: "acrylic-stand", name: "Orbit Acrylic Stand", price: 2400, category: "acrylic" },
  { id: "voice-pack", name: "Midnight Voice Pack", price: 1500, category: "digital" },
  { id: "star-keychain", name: "Starlight Keychain", price: 1200, category: "acrylic" },
];

const filters = ["all", "apparel", "acrylic", "digital"] as const;

export function VtuberShopTemplate() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const visible = filter === "all" ? products : products.filter((product) => product.category === filter);
  const subtotal = useMemo(() => cartSubtotal(cart), [cart]);

  const change = (product: ShopProduct, delta: number) => {
    setCart((current) => updateCart(current, product, delta));
    if (delta > 0) setCartOpen(true);
  };

  return <main className={`${styles.demoPage} ${styles.vtuberPage}`}>
    <div className={styles.demoNotice}>FICTIONAL BRAND / INTERACTIVE PORTFOLIO DEMO</div>
    <header className={styles.demoHeader}>
      <ReliableLink href="/" className={styles.backLink}><ArrowLeft size={17}/> KENTY CREATIVE</ReliableLink>
      <strong className={styles.vtuberLogo}>LUNA//VOID</strong>
      <button className={styles.cartButton} onClick={() => setCartOpen(true)} aria-label={`カートを開く、${cartItemCount(cart)}点`}><ShoppingBag size={18}/> CART <b>{cartItemCount(cart)}</b></button>
    </header>

    <section className={styles.vtuberHero}>
      <div className={styles.vtuberHeroCopy}><span>1ST ANNIVERSARY DROP</span><h1>TOUCH THE<br/><em>MOONLIGHT.</em></h1><p>月の裏側から配信する、架空の個人VTuber「月詠ルナ」の公式ストア。世界観と購入導線を一つにつないだECデモです。</p><a href="#collection">COLLECTION <ArrowRight/></a></div>
      <div className={styles.vtuberHeroVisual}><Image src="/vtuber-luna-hero.webp" alt="架空VTuber月詠ルナのキービジュアル" fill priority sizes="(max-width: 800px) 100vw, 52vw"/></div>
      <span className={styles.heroIndex}>01</span>
    </section>

    <section className={styles.vtuberMarquee} aria-label="ショップの特徴"><span>ORIGINAL GOODS</span><i/> <span>WORLDWIDE SHIPPING</span><i/> <span>DIGITAL DOWNLOAD</span></section>

    <section className={styles.shopSection} id="collection">
      <div className={styles.shopHeading}><div><small>02 / SHOP</small><h2>ANNIVERSARY<br/>COLLECTION</h2></div><p>ビジュアルの熱量を保ったまま、カテゴリ選択からカート追加まで迷わず操作できる商品一覧です。</p></div>
      <div className={styles.filterRow} role="group" aria-label="商品カテゴリ">{filters.map((item)=><button key={item} data-active={filter===item} onClick={()=>setFilter(item)}>{item.toUpperCase()}</button>)}</div>
      <div className={styles.productGrid}>{visible.map((product,index)=><article className={styles.productCard} key={product.id}>
        <div className={styles.productVisual} data-product={product.id}><Image src="/vtuber-luna-hero.webp" alt="" fill sizes="(max-width: 700px) 100vw, 25vw"/><span>0{index+1}</span></div>
        <div className={styles.productInfo}><small>{product.category}</small><h3>{product.name}</h3><p>¥{product.price.toLocaleString("ja-JP")} <span>税込</span></p><button onClick={()=>change(product,1)}>ADD TO CART <Plus size={17}/></button></div>
      </article>)}</div>
    </section>

    <section className={styles.vtuberCaseNote}><Sparkles/><div><small>DESIGN NOTE</small><h2>ファンの「好き」を、<br/>迷わない購入体験へ。</h2></div><p>世界観を崩さない配色と大胆なタイポグラフィ、モバイルでも届く商品情報、常に確認できるカートを設計。決済直前までを操作できるポートフォリオです。</p></section>

    {cartOpen && <div className={styles.cartBackdrop} onClick={()=>setCartOpen(false)}><aside className={styles.cartDrawer} onClick={(event)=>event.stopPropagation()} aria-label="ショッピングカート">
      <div className={styles.cartHead}><div><small>YOUR CART</small><h2>{cartItemCount(cart)} ITEMS</h2></div><button onClick={()=>setCartOpen(false)} aria-label="カートを閉じる"><X/></button></div>
      <div className={styles.cartLines}>{cart.length===0?<p className={styles.emptyCart}>カートは空です。<br/>気になるグッズを追加してください。</p>:cart.map((line)=><div className={styles.cartLine} key={line.id}><div><small>{line.category}</small><strong>{line.name}</strong><span>¥{line.price.toLocaleString("ja-JP")}</span></div><div><button onClick={()=>change(line,-1)} aria-label={`${line.name}を1点減らす`}><Minus/></button><b>{line.quantity}</b><button onClick={()=>change(line,1)} aria-label={`${line.name}を1点増やす`}><Plus/></button></div></div>)}</div>
      <div className={styles.cartTotal}><span>SUBTOTAL</span><strong>¥{subtotal.toLocaleString("ja-JP")}</strong><p>送料・決済は含まれていません。</p><button disabled={!cart.length} onClick={()=>alert("ポートフォリオデモのため、実際の決済は行いません。")}>CHECKOUT DEMO <ArrowRight/></button></div>
    </aside></div>}
    <footer className={styles.demoFooter}><span>© 2026 LUNA//VOID — FICTIONAL EC DEMO</span><ReliableLink href="/">PORTFOLIOへ戻る</ReliableLink></footer>
  </main>;
}
