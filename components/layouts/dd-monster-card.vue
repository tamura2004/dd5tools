<template lang="pug">
v-card(v-if="monster")
  .title.pl-2.grey.darken-4.white--text(v-if="title") {{ monster | name }}
  v-row(no-gutters)
    // サイズと種類、属性
    v-col(cols="9")
      | {{ monster.size }}の
      | {{ monster.type }}
    v-col(cols="3")
      | {{ monster.alignment }}

    // AC,HP,exp
    v-col(cols="2")
      v-card.text-center.grey.darken-4.white--text(tile outlined)
        | AC
    v-col(cols="2")
      v-card.text-center(tile outlined)
        | {{ monster.ac }}
    v-col(cols="2")
      v-card.text-center.grey.darken-4.white--text(tile outlined)
        | HP
    v-col(cols="2")
      v-card.text-center(tile outlined)
        | {{ monster.hp }}
    v-col(cols="1")
      v-card.text-center.grey.darken-4.white--text(tile outlined)
        | exp
    v-col(cols="3")
      v-card.text-center(tile outlined)
        | {{ monster.exp }}

    // 移動
    v-col(cols="2")
      v-card.text-center.grey.darken-4.white--text(tile outlined) 移動
    v-col(cols="10")
      v-card.pl-2(tile outlined)
        | {{ monster.mv | feet }}

    // アクション
    v-col.mt-1(cols="12")
      .overline.font-weight-black
        | アクション
    template(v-for="action of monster.actions")
      v-col.mt-1(cols="12")
        v-card.overline.pl-2.grey.darken-4.white--text(tile outlined)
          | {{ action | label }}
      v-col(cols="12")
        v-card.pl-1(tile outlined)
          | {{ action | text }}

    // 属性
    v-col.mt-1(cols="12")
      .overline.font-weight-black
        | 属性
    template(v-for="attribute of monster.attributes")
      v-col(cols="12")
        v-card.overline.pl-2.grey.darken-4.white--text(tile outlined)
          | {{ attribute | label }}
      v-col(cols="12")
        v-card.pl-1(tile outlined)
          | {{ attribute | text }}

    // 特技
    v-col.mt-1(cols="12")
      .overline.font-weight-black
        | 特技
    template(v-for="special of monster.specials")
      v-col.mt-1(cols="12")
        v-card.overline.pl-2.grey.darken-4.white--text(tile outlined)
          | {{ special | label }}
      v-col(cols="12")
        v-card(tile outlined)
          | {{ special | text }}
</template>

<script>
export default {
  props: ["monster", "title"]
};
</script>
