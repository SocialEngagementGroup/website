import React from "react";
import Image from "next/image";

import { images } from "@/data/imagesData";

// Decorative image field behind the hero copy. Cards sit on a logarithmic
// spiral: tight, small and dim near the middle, opening out to large and
// bright at the edges, so the arm reads as receding into the centre.
//
// Geometry is expressed in a fixed design space; `--seg-spiral-scale` in
// globals.css maps that space onto the viewport per breakpoint. The whole
// thing animates in CSS, so this stays a Server Component and ships no JS.

const COUNT = 48;
const ANGLE_STEP = 30; // 48 × 30° = exactly four full turns
const R0 = 46; // innermost radius
const R_GROWTH = 1.0709; // radius multiplier per step
const S0 = 30; // innermost card edge
const S_GROWTH = 1.0502; // card size multiplier per step
const OPACITY_MIN = 0.12;
const OPACITY_MAX = 0.92;

// Phones render a thinned-out subset: below the cutoff a card is only a few
// pixels wide once the stage scales down, and past it every other one is
// dropped. Hidden slots are `display: none`, so their lazy <Image> is never
// fetched — the phone pulls ~17 images instead of 48.
const MOBILE_INNER_CUTOFF = 14;
const hiddenOnMobile = (i) => i < MOBILE_INNER_CUTOFF || i % 2 === 1;

// Deterministic so server and client markup agree (no hydration mismatch).
const tiltFor = (i) => ((i * 73) % 29) - 14;

// 48 slots over 31 images, so 17 have to repeat. Striding by 7 (coprime with
// 31) walks the whole set before wrapping, which puts each repeat a full 31
// steps from its twin — the widest separation available, and opposite parity,
// so the mobile every-other filter never shows both copies at once.
const imageFor = (i) => images[(i * 7) % images.length];

const cards = Array.from({ length: COUNT }, (_, i) => {
  const t = i / (COUNT - 1);
  const size = S0 * Math.pow(S_GROWTH, i);

  return {
    img: imageFor(i),
    angle: i * ANGLE_STEP,
    radius: R0 * Math.pow(R_GROWTH, i),
    size,
    // Cards span ~30px to ~300px, so ask for what each one actually paints
    // rather than one blanket width. 1.18 is the largest stage scale.
    sizes: `${Math.ceil(size * 1.18)}px`,
    opacity: OPACITY_MIN + (OPACITY_MAX - OPACITY_MIN) * t,
    tilt: tiltFor(i),
    mobileHidden: hiddenOnMobile(i),
  };
});

const HeroSpiral = () => {
  return (
    <div className="seg-spiral" aria-hidden="true">
      <div className="seg-spiral__stage">
        <div className="seg-spiral__arm">
          {cards.map((card, i) => (
            <div
              key={i}
              className="seg-spiral__slot"
              data-mobile-hidden={card.mobileHidden ? "true" : undefined}
              style={{
                width: `${card.size}px`,
                height: `${card.size}px`,
                // Trailing counter-rotation keeps the card box axis-aligned
                // once it has been pushed out along the arm.
                transform: `rotate(${card.angle}deg) translateX(${card.radius}px) rotate(${-card.angle}deg)`,
              }}
            >
              {/* Cancels the arm's spin so images stay upright as they orbit */}
              <div className="seg-spiral__counter">
                <div
                  className="seg-spiral__card"
                  style={{
                    transform: `rotate(${card.tilt}deg)`,
                    opacity: card.opacity,
                  }}
                >
                  <Image
                    src={card.img.src}
                    alt=""
                    fill
                    sizes={card.sizes}
                    quality={55}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Darkens the middle so the headline stays legible, and fades the
          field into the black page top and bottom */}
      <div className="seg-spiral__veil" />
    </div>
  );
};

export default HeroSpiral;
