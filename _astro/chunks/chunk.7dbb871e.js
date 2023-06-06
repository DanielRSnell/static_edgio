/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as renderComponent, m as maybeRenderHead } from './chunk.8ece003f.js';
/* empty css                */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Frame = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Frame;
  return renderTemplate(_a || (_a = __template([`<html lang="en" class="astro-ZII7MMM3"><head><script type="module">
        import Swup from 'swup';
        import SwupScrollPlugin from '@swup/scroll-plugin';
        import SwupBodyClassPlugin from '@swup/body-class-plugin';
        import SwupHeadPlugin from '@swup/head-plugin';
        import SwupFormsPlugin from '@swup/forms-plugin';
        import SwupSlideTheme from '@swup/slide-theme';
        import SwupPreloadPlugin from '@swup/preload-plugin';
        import SwupProgressPlugin from '@swup/progress-plugin';



        const swupInstance = new swup(
            {
                plugins: [
                    new SwupScrollPlugin({animateScroll: {
                        betweenPages: true,
                        samePageWithHash: true,
                        samePage: true
                    }}),
                    new SwupBodyClassPlugin(),
                    new SwupHeadPlugin(),
                    new SwupFormsPlugin({
                    formSelector: 'form[data-swup-form]'
                    }),
                    new SwupSlideThemePlugin(),
                    new SwupPreloadPlugin(),
                    new SwupProgressPlugin({
                    className: 'swup-progress-bar',
                    transition: 300,
                    delay: 300,
                    initialValue: 0.25,
                    hideImmediately: true
                    })
                ],
            }
        );

        swupInstance.on('contentReplaced', function () {
            // re-init Alpine
            Alpine.initTree(document.body);
        });

    <\/script><script type="module" src="/utils/alpine.js"><\/script><script type="module" src="/utils/alpine-morph.js"><\/script><script type="module" src="/utils/alpine-ajax.js"><\/script>`, "", '</head><body id="swup" class="astro-ZII7MMM3">', `<script defer>
        window.onload = function() {
    var body = document.body;

    // Keep existing x-ref if present, else set to 'primary'
    if (!body.hasAttribute('x-ref')) {
        body.setAttribute('x-ref', 'primary');
    }

    // Keep existing x-data if present, else set to your data
    if (!body.hasAttribute('x-data')) {
        body.setAttribute('x-data', "{store: false, search: false}");
    }

    // Update :class attribute. If light is not true, add 'invert' class.
    
};

    <\/script></body></html>`])), renderSlot($$result, $$slots["headerScripts"]), renderHead($$result), renderSlot($$result, $$slots["default"]));
}, "/Users/notable/CORE/activity/projects/2-ACTIVE/edgio-projects/edgio/src/layouts/frame.astro");

const $$Astro = createAstro();
const $$HomeAwards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomeAwards;
  return renderTemplate`${renderComponent($$result, "Frame", $$Frame, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<section id="corrected-migration" class="w-full flex flex-row justify-center items-center"><div class="flex-1 flex-row justify-center items-center dp-fluid-container"><div id="awards-wrapper" class="flex flex-1 w-full justify-center items-center"><img loading="lazy" src="https://edgio.nyc3.digitaloceanspaces.com/wp-content/uploads/2023/05/31111529/download-2.webp" alt="2023 RSA award" style="object-fit: contain;" class=""></div></div><div id="awards-wrapper" class="flex flex-1 w-full justify-center items-center"><img loading="lazy" src="https://edgio.nyc3.digitaloceanspaces.com/wp-content/uploads/2023/05/31111528/download-3.webp" alt="2023 NAB award" style="object-fit: contain;"></div></section>` })}`;
}, "/Users/notable/CORE/activity/projects/2-ACTIVE/edgio-projects/edgio/src/pages/components/home-awards.astro");

const $$file = "/Users/notable/CORE/activity/projects/2-ACTIVE/edgio-projects/edgio/src/pages/components/home-awards.astro";
const $$url = "/components/home-awards";

const homeAwards = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HomeAwards,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Frame as $, homeAwards as h };
