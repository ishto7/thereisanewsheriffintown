import { _ as __nuxt_component_0 } from './Card-D6aIMPAU.mjs';
import { b as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'tailwind-merge';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      {
        title: "Historical Origins",
        heading: "The Birth of a Phrase",
        content: `The phrase "there's a new sheriff in town" emerged during the American frontier era of the 1800s, a period marked by rapid westward expansion and the establishment of law and order in newly formed settlements. During this time, the arrival of a new sheriff was a significant event that often marked a turning point in a town's history.`,
        subHeading: "Historical Context",
        subContent: "In the American Old West, sheriffs were more than just law enforcement officers; they were symbols of civilization and order in often chaotic frontier towns. The position of sheriff was unique to American law enforcement, combining the roles of peace officer, tax collector, and sometimes even town leader."
      },
      {
        title: "Cultural Significance",
        heading: "Impact on Popular Culture",
        content: "The phrase gained widespread popularity through Western films and television shows of the mid-20th century. These media portrayals often depicted the new sheriff as a catalyst for change, whether cleaning up a corrupt town or bringing justice to lawless territories. This reinforced the phrase's association with transformative leadership and decisive action.",
        subHeading: "Modern Usage",
        subContent: "Today, the phrase has transcended its literal meaning to become a powerful metaphor used across various contexts:",
        list: [
          "Business: New CEOs or managers signaling organizational change",
          "Politics: Newly elected officials announcing reform initiatives",
          "Sports: New coaches or team leaders marking a shift in strategy",
          "Technology: Disrupting companies changing industry dynamics"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UScrollArea = resolveComponent("UScrollArea");
      const _component_UCard = __nuxt_component_0;
      const _component_UBadge = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-amber-50/50" }, _attrs))}><div class="container mx-auto px-4 py-8"><div class="space-y-8"><section class="text-center space-y-4"><h1 class="text-4xl md:text-6xl text-amber-900 font-bold"> There&#39;s a New Sheriff in Town </h1><p class="text-lg text-amber-800"> Exploring the rich history and cultural impact of this iconic phrase </p></section>`);
      _push(ssrRenderComponent(_component_UScrollArea, { class: "rounded-lg" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8"${_scopeId}><!--[-->`);
            ssrRenderList(sections, (section, index) => {
              _push2(ssrRenderComponent(_component_UCard, {
                key: index,
                class: "western-card"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="p-6 space-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UBadge, { class: "bg-amber-800 text-amber-50" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(section.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(section.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="prose prose-amber max-w-none"${_scopeId2}><h2 class="text-2xl font-bold text-amber-900"${_scopeId2}>${ssrInterpolate(section.heading)}</h2><p class="text-amber-800"${_scopeId2}>${ssrInterpolate(section.content)}</p>`);
                    if (section.subContent) {
                      _push3(`<!--[--><h3 class="text-xl font-bold text-amber-900 mt-4"${_scopeId2}>${ssrInterpolate(section.subHeading)}</h3><p class="text-amber-800"${_scopeId2}>${ssrInterpolate(section.subContent)}</p>`);
                      if (section.list) {
                        _push3(`<ul class="list-disc pl-6 text-amber-800"${_scopeId2}><!--[-->`);
                        ssrRenderList(section.list, (item, i) => {
                          _push3(`<li${_scopeId2}>${ssrInterpolate(item)}</li>`);
                        });
                        _push3(`<!--]--></ul>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode(_component_UBadge, { class: "bg-amber-800 text-amber-50" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(section.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "prose prose-amber max-w-none" }, [
                          createVNode("h2", { class: "text-2xl font-bold text-amber-900" }, toDisplayString(section.heading), 1),
                          createVNode("p", { class: "text-amber-800" }, toDisplayString(section.content), 1),
                          section.subContent ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("h3", { class: "text-xl font-bold text-amber-900 mt-4" }, toDisplayString(section.subHeading), 1),
                            createVNode("p", { class: "text-amber-800" }, toDisplayString(section.subContent), 1),
                            section.list ? (openBlock(), createBlock("ul", {
                              key: 0,
                              class: "list-disc pl-6 text-amber-800"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(section.list, (item, i) => {
                                return openBlock(), createBlock("li", { key: i }, toDisplayString(item), 1);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                (openBlock(), createBlock(Fragment, null, renderList(sections, (section, index) => {
                  return createVNode(_component_UCard, {
                    key: index,
                    class: "western-card"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode(_component_UBadge, { class: "bg-amber-800 text-amber-50" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(section.title), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "prose prose-amber max-w-none" }, [
                          createVNode("h2", { class: "text-2xl font-bold text-amber-900" }, toDisplayString(section.heading), 1),
                          createVNode("p", { class: "text-amber-800" }, toDisplayString(section.content), 1),
                          section.subContent ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("h3", { class: "text-xl font-bold text-amber-900 mt-4" }, toDisplayString(section.subHeading), 1),
                            createVNode("p", { class: "text-amber-800" }, toDisplayString(section.subContent), 1),
                            section.list ? (openBlock(), createBlock("ul", {
                              key: 0,
                              class: "list-disc pl-6 text-amber-800"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(section.list, (item, i) => {
                                return openBlock(), createBlock("li", { key: i }, toDisplayString(item), 1);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ], 64)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dbu7Q_6K.mjs.map
