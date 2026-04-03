import { FadeIn } from "@/components/ui/FadeIn";

export function FooterSection() {
  return (
    <footer className="bg-foreground px-6 py-16 text-background lg:py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            {/* Company Info */}
            <div>
              <p className="text-lg font-semibold">Stird LTD</p>
              <p className="mt-2 text-sm text-background/60">
                London, United Kingdom
              </p>
              <a
                href="mailto:batur@stird.co.uk"
                className="mt-1 block text-sm text-background/60 transition-colors hover:text-background"
              >
                batur@stird.co.uk
              </a>
            </div>

            {/* Links */}
            <div className="flex gap-12">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-background/40">
                  Products
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://gallery-guy-web.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      Gallery Guy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-background/40">
                  Social
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a
                      href="https://x.com/Stird_co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      X / Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/stird_co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://threads.net/@stird_co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      Threads
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/stird-ltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/60 transition-colors hover:text-background"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-background/10 pt-8">
            <p className="text-xs text-background/40">
              &copy; {new Date().getFullYear()} Stird LTD. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
