import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 border-b border-border pb-10 text-center">
          <span className="text-xl font-bold tracking-tight">
            the company
          </span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-80"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-80"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-80"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-80"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-10 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href=#hero
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=#about
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=#services
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:hello@thecompany.com`}
                  className="transition-colors hover:text-foreground"
                >
                  hello@thecompany.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:+1 (555) 123-4567`}
                  className="transition-colors hover:text-foreground"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 the company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}