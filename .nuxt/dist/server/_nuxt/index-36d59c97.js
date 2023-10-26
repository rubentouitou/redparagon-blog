import { f as formatDate, g as groq, H as Head, T as Title, M as Meta, L as Link } from "./groq-ecac00d1.js";
import { mergeProps, unref, useSSRContext, defineComponent, withAsyncContext, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-6ccd391a.js";
import { a as useSanityQuery, S as Site } from "../server.mjs";
import "unhead";
import "@unhead/shared";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "destr";
import "klona";
import "ohash";
import "@sanity/client";
import "defu";
import "@sanity/image-url";
const HeroCard_vue_vue_type_style_index_0_scoped_5bd291bf_lang = "";
const _sfc_main$2 = {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-12" }, _attrs))} data-v-5bd291bf>`);
  if ($props.post) {
    _push(`<div class="card hero" data-v-5bd291bf><div class="row" data-v-5bd291bf><div class="col-sm-6" data-v-5bd291bf>`);
    if ($props.post.mainImage) {
      _push(`<img class="card__cover"${ssrRenderAttr("src", _ctx.$urlFor($props.post.mainImage).width(500).height(300).url())} alt="Cover image" data-v-5bd291bf>`);
    } else {
      _push(`<div class="card__cover--none" data-v-5bd291bf></div>`);
    }
    _push(`</div><div class="col-sm-6" data-v-5bd291bf><div class="card__container" data-v-5bd291bf><h3 class="card__title" data-v-5bd291bf><a class="card__link"${ssrRenderAttr("href", `/post/${$props.post.slug.current}`)} data-v-5bd291bf>${ssrInterpolate($props.post.title)}</a></h3><p class="card__excerpt" data-v-5bd291bf>${ssrInterpolate($props.post.excerpt)}</p><p class="card__date" data-v-5bd291bf>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))($props.post._createdAt))}</p></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-5bd291bf"]]);
const Card_vue_vue_type_style_index_0_scoped_6e19ed94_lang = "";
const _sfc_main$1 = {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-sm-6" }, _attrs))} data-v-6e19ed94>`);
  if ($props.post) {
    _push(`<div class="card" data-v-6e19ed94>`);
    if ($props.post.mainImage) {
      _push(`<img class="card__cover"${ssrRenderAttr("src", _ctx.$urlFor($props.post.mainImage).width(500).height(300).url())} alt="Cover image" data-v-6e19ed94>`);
    } else {
      _push(`<div class="card__cover--none" data-v-6e19ed94></div>`);
    }
    _push(`<div class="card__container" data-v-6e19ed94><h3 class="card__title" data-v-6e19ed94><a class="card__link"${ssrRenderAttr("href", `/post/${$props.post.slug.current}`)} data-v-6e19ed94>${ssrInterpolate($props.post.title)}</a></h3><p class="card__excerpt" data-v-6e19ed94>${ssrInterpolate($props.post.excerpt)}</p><p class="card__date" data-v-6e19ed94>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))($props.post._createdAt))}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6e19ed94"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useSanityQuery(query)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Link = Link;
      const _component_HeroCard = __nuxt_component_4;
      const _component_Card = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(Site).googleName)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(Site).googleName), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: unref(Site).description
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "keywords",
              content: unref(Site).keywords
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:url",
              content: unref(Site).url
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:type",
              content: "website"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:title",
              content: unref(Site).googleName
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:site_name",
              content: unref(Site).googleName
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:description",
              content: unref(Site).description
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              "http-equiv": "cache-control",
              content: "max-age=0"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              "http-equiv": "cache-control",
              content: "no-cache"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              "http-equiv": "pragma",
              content: "no-cache"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Link, {
              rel: "icon",
              type: "image/x-icon",
              href: unref(Site).favicon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              "http-equiv": "content-language",
              content: unref(Site).language
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(Site).googleName), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: unref(Site).description
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                name: "keywords",
                content: unref(Site).keywords
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:url",
                content: unref(Site).url
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:type",
                content: "website"
              }),
              createVNode(_component_Meta, {
                property: "og:title",
                content: unref(Site).googleName
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:site_name",
                content: unref(Site).googleName
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:description",
                content: unref(Site).description
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                "http-equiv": "cache-control",
                content: "max-age=0"
              }),
              createVNode(_component_Meta, {
                "http-equiv": "cache-control",
                content: "no-cache"
              }),
              createVNode(_component_Meta, {
                "http-equiv": "pragma",
                content: "no-cache"
              }),
              createVNode(_component_Link, {
                rel: "icon",
                type: "image/x-icon",
                href: unref(Site).favicon
              }, null, 8, ["href"]),
              createVNode(_component_Meta, {
                "http-equiv": "content-language",
                content: unref(Site).language
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="posts" data-v-a808ada9><div class="box" data-v-a808ada9><div class="wave -one" data-v-a808ada9></div><div class="wave -two" data-v-a808ada9></div><div class="wave -three" data-v-a808ada9></div></div><div class="container" data-v-a808ada9><h1 data-v-a808ada9>${ssrInterpolate(unref(Site).h1)}</h1><p data-v-a808ada9>${ssrInterpolate(unref(Site).p)}</p><div class="row" data-v-a808ada9>`);
      _push(ssrRenderComponent(_component_HeroCard, {
        key: unref(posts)[0]._id,
        post: unref(posts)[0]
      }, null, _parent));
      _push(`</div><div class="row" data-v-a808ada9>`);
      if (unref(posts)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(posts).slice(1), (post) => {
          _push(ssrRenderComponent(_component_Card, {
            key: post._id,
            post
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section><!--]-->`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_a808ada9_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a808ada9"]]);
export {
  index as default
};
//# sourceMappingURL=index-36d59c97.js.map
