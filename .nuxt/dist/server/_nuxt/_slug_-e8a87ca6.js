import { g as groq, f as formatDate, H as Head, T as Title, M as Meta, L as Link } from "./groq-ecac00d1.js";
import { defineComponent, mergeProps, unref, useSSRContext, h, withAsyncContext, computed, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { S as Site, b as useRoute, a as useSanityQuery } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-6ccd391a.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { defu } from "defu";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "ohash";
import "@sanity/client";
import "@sanity/image-url";
import "unhead";
import "@unhead/shared";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FloatGoal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "floatGoal" }, _attrs))} data-v-e7431e2f><h3 data-v-e7431e2f>${ssrInterpolate(unref(Site).name)}</h3><p data-v-e7431e2f>${ssrInterpolate(unref(Site).salesText)}</p><div id="mc_embed_shell" data-v-e7431e2f><div id="mc_embed_signup" data-v-e7431e2f><form action="https://hartmag.us21.list-manage.com/subscribe/post?u=4c6a61b84bc373c09d9189b6f&amp;id=9717664514&amp;f_id=00b8e2e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="" data-v-e7431e2f><div id="mc_embed_signup_scroll" data-v-e7431e2f><div class="mc-field-group" data-v-e7431e2f><input type="email" name="EMAIL" class="required email" placeholder="Email" id="mce-EMAIL" required="" value="" data-v-e7431e2f><span id="mce-EMAIL-HELPERTEXT" class="helper_text" data-v-e7431e2f></span></div><div id="mce-responses" class="clear foot" data-v-e7431e2f><div class="response" id="mce-error-response" style="${ssrRenderStyle({ "display": "none" })}" data-v-e7431e2f></div><div class="response" id="mce-success-response" style="${ssrRenderStyle({ "display": "none" })}" data-v-e7431e2f></div></div><div aria-hidden="true" style="${ssrRenderStyle({ "position": "absolute", "left": "-5000px" })}" data-v-e7431e2f> /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ <input type="text" name="b_4c6a61b84bc373c09d9189b6f_9717664514" tabindex="-1" value="" data-v-e7431e2f></div><div class="optionalParent" data-v-e7431e2f><div class="clear foot" data-v-e7431e2f><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" data-v-e7431e2f></div></div></div></form></div></div></div>`);
    };
  }
});
const FloatGoal_vue_vue_type_style_index_0_scoped_e7431e2f_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatGoal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e7431e2f"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GoToGoal",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "backlink" }, _attrs))} data-v-076ec996><a${ssrRenderAttr("href", unref(Site).goal)} data-v-076ec996><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-076ec996><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-076ec996></path><path d="M13 7h-6l4 5l-4 5h6l4 -5z" data-v-076ec996></path></svg> ${ssrInterpolate(unref(Site).salesText)}</a></div>`);
    };
  }
});
const GoToGoal_vue_vue_type_style_index_0_scoped_076ec996_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GoToGoal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-076ec996"]]);
const isSpan = (block) => block._type === "span";
const defaults = {
  types: {
    span: "span",
    image: "img"
  },
  marks: {
    strong: "strong",
    em: "em",
    link: "a"
  },
  styles: {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    normal: "p",
    blockquote: "blockquote"
  },
  listItem: "li",
  container: "div"
};
const validAttrs = [
  "abbr",
  "accesskey",
  "accessKey",
  "action",
  "alt",
  "autocomplete",
  "autofocus",
  "autoplay",
  "charset",
  "checked",
  "cite",
  "class",
  "cols",
  "colspan",
  "command",
  "content",
  "datetime",
  "default",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "headers",
  "height",
  "hidden",
  "href",
  "hreflang",
  "id",
  "maxlength",
  "minlength",
  "muted",
  "placeholder",
  "preload",
  "radiogroup",
  "readonly",
  "required",
  "role",
  "selected",
  "src",
  "srcdoc",
  "srcset",
  "tabindex",
  "title",
  "value",
  "width",
  "wrap"
];
function findSerializer(item, serializers) {
  if ((item == null ? void 0 : item.listItem) && item._type !== "list") {
    return serializers.listItem || "li";
  }
  return (item == null ? void 0 : item._type) ? serializers.types[item._type] || serializers.marks[item._type] : void 0;
}
function renderStyle(item, serializers, children) {
  const serializer = item.style && serializers.styles[item.style];
  const isElement = typeof serializer === "string";
  const props = extractProps(item, isElement);
  if (!item.listItem && item.style && serializer) {
    return h(serializer, props, { default: children });
  }
  return children == null ? void 0 : children();
}
function renderInSerializer(item, serializers) {
  return render(serializers, item, () => (item.children || []).map((child) => {
    if (isSpan(child)) {
      return renderMarks(child.text, child.marks, serializers, item.markDefs);
    }
    return render(serializers, child, () => renderMarks(child.text, child.marks, serializers, item.markDefs));
  }));
}
function renderMarks(content, [mark, ...marks] = [], serializers, markDefs = []) {
  if (!mark)
    return content;
  const definition = mark in serializers.marks ? { _type: mark, _key: "" } : markDefs.find((m) => m._key === mark);
  return render(serializers, definition, () => renderMarks(content, marks, serializers, markDefs));
}
function walkList(blocks, block) {
  if (!block.listItem) {
    blocks.push(block);
    return blocks;
  }
  const lastBlock = blocks[blocks.length - 1] || {};
  if (lastBlock._type !== "list" || !lastBlock.children || block.level === 1 && block.listItem !== lastBlock.listItem) {
    blocks.push({
      _type: "list",
      listItem: block.listItem,
      level: block.level,
      children: [block]
    });
    return blocks;
  }
  if (block.level === lastBlock.level && block.listItem === lastBlock.listItem) {
    lastBlock.children.push(block);
    return blocks;
  }
  walkList(lastBlock.children, block);
  return blocks;
}
function render(serializers, item, children) {
  const serializer = findSerializer(item, serializers);
  if (!serializer)
    return children == null ? void 0 : children();
  if (!item) {
    return void 0;
  }
  const isElement = typeof serializer === "string";
  const props = extractProps(item, isElement);
  if (isElement) {
    return h(serializer, props, children == null ? void 0 : children());
  }
  return h(serializer, props, { default: () => children == null ? void 0 : children() });
}
function extractProps(item, isElement) {
  return Object.fromEntries(
    Object.entries(item).filter(([key]) => key !== "_type" && key !== "markDefs").map(
      ([key, value]) => {
        if (key === "_key")
          return ["key", value || null];
        if (!isElement || validAttrs.includes(key))
          return [key, value];
        return [];
      }
    )
  );
}
function renderBlocks(blocks, serializers) {
  return blocks.map((block) => {
    const node = renderStyle(block, serializers, () => renderInSerializer(block, serializers));
    if (process.env.NODE_ENV === "development" && (!node || Array.isArray(node) && !node.length)) {
      console.warn(`No serializer found for block type "${block._type}".`, block);
    }
    return node;
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "SanityContent",
  props: {
    blocks: {
      type: Array,
      default: () => []
    },
    serializers: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const serializers = defu(props.serializers, defaults);
    serializers.types.list = serializers.types.list || createListSerializer(serializers);
    return () => {
      var _a;
      return renderBlocks(((_a = props.blocks) == null ? void 0 : _a.reduce(walkList, [])) || [], serializers);
    };
  }
});
const createListSerializer = (serializers) => {
  return /* @__PURE__ */ defineComponent({
    name: "ListComponent",
    inheritAttrs: false,
    props: {
      children: {
        type: Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 1
      }
    },
    setup(props) {
      return () => {
        var _a;
        const isOrdered = ((_a = props.children[0]) == null ? void 0 : _a.listItem) === "number";
        if (props.level > 1) {
          return h(serializers.listItem || "li", [h(
            isOrdered ? "ol" : "ul",
            {},
            { default: () => renderBlocks(props.children, serializers) }
          )]);
        }
        return h(
          isOrdered ? "ol" : "ul",
          {},
          { default: () => renderBlocks(props.children, serializers) }
        );
      };
    }
  });
};
const _sfc_main$2 = {
  props: {
    blocks: {
      type: Array,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SanityContent = __nuxt_component_0;
  _push(ssrRenderComponent(_component_SanityContent, mergeProps({ blocks: $props.blocks }, _attrs), null, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlockContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BlockContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SocialShare",
  __ssrInlineRender: true,
  props: {
    link: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "social-share" }, _attrs))} data-v-16fa1c8f><p data-v-16fa1c8f>Share it: <a${ssrRenderAttr("href", "https://twitter.com/intent/tweet?text=" + _ctx.title + "&url=" + _ctx.link)} target="_blank" data-v-16fa1c8f><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbbbbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-16fa1c8f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-16fa1c8f></path><path d="M4 4l11.733 16h4.267l-11.733 -16z" data-v-16fa1c8f></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" data-v-16fa1c8f></path></svg></a><a${ssrRenderAttr("href", "https://www.linkedin.com/shareArticle?mini=true&url=" + _ctx.link + "&title=" + _ctx.title)} target="_blank" data-v-16fa1c8f><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbbbbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-16fa1c8f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-16fa1c8f></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" data-v-16fa1c8f></path><path d="M8 11l0 5" data-v-16fa1c8f></path><path d="M8 8l0 .01" data-v-16fa1c8f></path><path d="M12 16l0 -5" data-v-16fa1c8f></path><path d="M16 16v-3a2 2 0 0 0 -4 0" data-v-16fa1c8f></path></svg></a><a${ssrRenderAttr("href", "https://www.facebook.com/sharer/sharer.php?u=" + _ctx.link)} target="_blank" data-v-16fa1c8f><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-16fa1c8f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-16fa1c8f></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" data-v-16fa1c8f></path></svg></a><a${ssrRenderAttr("href", "mailto:?subject=" + _ctx.title + "&body=Check this out " + _ctx.link)} target="_blank" data-v-16fa1c8f><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-16fa1c8f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-16fa1c8f></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-v-16fa1c8f></path><path d="M3 7l9 6l9 -6" data-v-16fa1c8f></path></svg></a><a${ssrRenderAttr("href", "whatsapp://send?text=" + _ctx.title + " " + _ctx.link)} data-action="share/whatsapp/share" class="no-desktop" data-v-16fa1c8f><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-16fa1c8f><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-16fa1c8f></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-v-16fa1c8f></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-v-16fa1c8f></path></svg></a></p></div>`);
    };
  }
});
const SocialShare_vue_vue_type_style_index_0_scoped_16fa1c8f_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialShare.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SocialShare = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-16fa1c8f"]]);
const __default__ = {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: { BlockContent }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
    const { data: post } = ([__temp, __restore] = withAsyncContext(() => useSanityQuery(query, {
      slug: route.params.slug
    })), __temp = await __temp, __restore(), __temp);
    let path = computed(() => Site.url + route.fullPath);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_Link = Link;
      const _component_FloatGoal = __nuxt_component_4;
      const _component_GoToGoal = __nuxt_component_5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(post).title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(post).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: unref(post).excerpt
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "keywords",
              content: unref(post).title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:url",
              content: unref(path)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:type",
              content: "website"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:title",
              content: unref(post).title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:site_name",
              content: unref(Site).name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:description",
              content: unref(post).excerpt
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image",
              content: _ctx.$urlFor(unref(post).mainImage).url()
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
                  createTextVNode(toDisplayString(unref(post).title), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: unref(post).excerpt
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                name: "keywords",
                content: unref(post).title
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:url",
                content: unref(path)
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:type",
                content: "website"
              }),
              createVNode(_component_Meta, {
                property: "og:title",
                content: unref(post).title
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:site_name",
                content: unref(Site).name
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:description",
                content: unref(post).excerpt
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:image",
                content: _ctx.$urlFor(unref(post).mainImage).url()
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
      _push(`<section class="post" data-v-f9ef18ac><div class="card" data-v-f9ef18ac>`);
      _push(ssrRenderComponent(_component_FloatGoal, null, null, _parent));
      _push(`<a${ssrRenderAttr("href", unref(Site).url)} class="back" data-v-f9ef18ac><svg xmlns="http://www.w3.org/2000/svg" class="shareicon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#bbb" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-f9ef18ac><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-f9ef18ac></path><path d="M9 14l-4 -4l4 -4" data-v-f9ef18ac></path><path d="M5 10h11a4 4 0 1 1 0 8h-1" data-v-f9ef18ac></path></svg>Go back</a>`);
      if (unref(post).mainImage) {
        _push(`<img class="post__cover"${ssrRenderAttr("src", _ctx.$urlFor(unref(post).mainImage).width(1920).url())}${ssrRenderAttr("alt", unref(post).title)} data-v-f9ef18ac>`);
      } else {
        _push(`<div class="post__cover--none" data-v-f9ef18ac></div>`);
      }
      _push(`<div class="post__container" data-v-f9ef18ac><h1 class="post__title" data-v-f9ef18ac>${ssrInterpolate(unref(post).title)}</h1><p class="post__date" data-v-f9ef18ac>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(post)._createdAt))}</p>`);
      _push(ssrRenderComponent(SocialShare, {
        link: unref(path),
        title: unref(post).title
      }, null, _parent));
      _push(ssrRenderComponent(_component_GoToGoal, null, null, _parent));
      if (unref(post).body) {
        _push(`<div class="post__content" data-v-f9ef18ac>`);
        _push(ssrRenderComponent(BlockContent, {
          blocks: unref(post).body
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_GoToGoal, null, null, _parent));
      _push(ssrRenderComponent(SocialShare, {
        link: unref(path),
        title: unref(post).title
      }, null, _parent));
      _push(`</div></div></section><!--]-->`);
    };
  }
});
const _slug__vue_vue_type_style_index_0_scoped_f9ef18ac_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9ef18ac"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-e8a87ca6.js.map
