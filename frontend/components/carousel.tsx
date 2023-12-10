import { useEffect } from 'react'

export default function Carousel() {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', 'true')

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner')
        if (!scrollerInner) return
        const scrollerContent = Array.from(scrollerInner.children)

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true)
          duplicatedItem.setAttribute('aria-hidden', 'true')
          scrollerInner?.appendChild(duplicatedItem)
        })
      })
    }
  }, [])

  return (
    <div className="">
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
          <img
            src="https://placehold.co/200x200/png"
            alt=""
            className="h-auto max-w-xs rounded"
          />
          <img
            src="https://placehold.co/200x200/png"
            alt=""
            className="h-auto max-w-xs rounded"
          />
          <img
            src="https://placehold.co/200x200/png"
            alt=""
            className="h-auto max-w-xs rounded"
          />
          <img
            src="https://placehold.co/200x200/png"
            alt=""
            className="h-auto max-w-xs rounded"
          />
          <img
            src="https://placehold.co/200x200/png"
            alt=""
            className="h-auto max-w-xs rounded"
          />
          <img
            src="https://placehold.co/200x200/png"
            alt=""
            className="h-auto max-w-xs rounded"
          />
        </div>
      </div>
      <style jsx>{`
        .scroller {
          max-width: 60vw;
        }

        .scroller__inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .scroller[data-animated='true'] {
          overflow: hidden;
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%,
            transparent
          );
        }

        .scroller[data-animated='true'] .scroller__inner {
          width: max-content;
          flex-wrap: nowrap;
          animation: scroll var(--_animation-duration, 40s)
            var(--_animation-direction, forwards) linear infinite;
        }

        .scroller[data-direction='right'] {
          --_animation-direction: reverse;
        }

        .scroller[data-direction='left'] {
          --_animation-direction: forwards;
        }

        .scroller[data-speed='fast'] {
          --_animation-duration: 20s;
        }

        .scroller[data-speed='slow'] {
          --_animation-duration: 60s;
        }

        @keyframes scroll {
          to {
            transform: translate(calc(-50% - 0.5rem));
          }
        }

        /* general styles */

        :root {
          --clr-neutral-100: hsl(0, 0%, 100%);
          --clr-primary-100: hsl(205, 15%, 58%);
          --clr-primary-400: hsl(215, 25%, 27%);
          --clr-primary-800: hsl(217, 33%, 17%);
          --clr-primary-900: hsl(218, 33%, 9%);
        }

        html {
          color-scheme: dark;
        }

        body {
          display: grid;
          min-block-size: 100vh;
          place-content: center;
          font-family: system-ui;
          font-size: 1.125rem;
          background-color: var(--clr-primary-800);
        }

        .tag-list {
          margin: 0;
          padding-inline: 0;
          list-style: none;
        }

        .tag-list li {
          padding: 1rem;
          background: var(--clr-primary-400);
          border-radius: 0.5rem;
          box-shadow: 0 0.5rem 1rem -0.25rem var(--clr-primary-900);
        }
      `}</style>
    </div>
  )
}
