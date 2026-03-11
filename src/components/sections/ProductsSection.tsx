import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProductsSection() {
  return (
    <section id="products" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Products
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Products
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-3xl bg-section p-8 lg:p-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <Image
                src="/gg.png"
                alt="Gallery Guy"
                width={160}
                height={160}
                className="h-20 w-20 shrink-0 rounded-2xl shadow-lg"
              />

              <div className="flex-1">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Gallery Guy
                </h3>
                <p className="mt-1 text-sm font-medium text-muted">
                  Phone cleanup should be fun, not a chore.
                </p>

                <p className="mt-4 leading-relaxed text-muted">
                  Thousands of photos. Zero organisation. Sound familiar?
                  Gallery Guy is an iOS app that makes cleaning up your photo
                  library fast, painless, and actually fun. No subscriptions —
                  buy it once, own it forever. Because your phone storage
                  shouldn&apos;t be held hostage by blurry screenshots and
                  accidental selfies.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="https://gallery-guy-web.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                  >
                    Learn More
                  </a>
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-section"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                    >
                      <path d="M14.94 13.233c-.247.575-.537 1.104-.872 1.59-.456.662-.83 1.12-1.12 1.376-.447.42-.926.635-1.44.648-.368 0-.813-.105-1.33-.318-.52-.212-.998-.317-1.434-.317-.456 0-.946.105-1.47.317-.525.213-.948.324-1.27.336-.494.024-.984-.198-1.47-.666-.314-.28-.707-.758-1.178-1.436-.505-.726-.92-1.568-1.246-2.528-.35-1.037-.525-2.04-.525-3.013 0-1.114.24-2.074.722-2.878A4.238 4.238 0 0 1 4.82 5.01a4.073 4.073 0 0 1 2.05-.58c.39 0 .903.122 1.54.36.635.24 1.042.361 1.222.361.134 0 .59-.142 1.363-.424.731-.262 1.348-.37 1.853-.328 1.37.11 2.4.652 3.084 1.628-1.226.743-1.832 1.783-1.82 3.117.012 1.04.388 1.905 1.127 2.593.335.318.71.563 1.124.737-.09.262-.185.513-.286.753zM11.34.744c0 .815-.298 1.576-.892 2.28-.717.84-1.584 1.325-2.525 1.249a2.54 2.54 0 0 1-.019-.308c0-.783.34-1.62.946-2.305.302-.347.688-.635 1.156-.866.467-.228.908-.354 1.322-.378.013.11.019.22.019.328h-.007z" />
                    </svg>
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
