import assert from "node:assert/strict";
import test from "node:test";
import { cartItemCount, cartSubtotal, updateCart, type ShopProduct } from "../lib/vtuber-cart.ts";

const hoodie: ShopProduct = { id:"hoodie", name:"Hoodie", price:7800, category:"apparel" };

test("cart adds, increments and removes an item",()=>{
  const added=updateCart([],hoodie,1);
  const incremented=updateCart(added,hoodie,1);
  assert.equal(cartItemCount(incremented),2);
  assert.equal(cartSubtotal(incremented),15600);
  assert.deepEqual(updateCart(incremented,hoodie,-2),[]);
});

