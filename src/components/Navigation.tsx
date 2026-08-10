import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-bold text-foreground">
          the company
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#hero"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Services
          </a>
        </nav>

        <a
          href={`tel:+1 (555) 123-4567`}
          className="hidden items-center gap-2 text-lg font-bold text-foreground transition-colors hover:text-primary md:flex"
        >
          <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
          +1 (555) 123-4567
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#hero"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Home
            </a>
            <a
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              About
            </a>
            <a
              href="#services"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Services
            </a>
            <a
              href={`tel:+1 (555) 123-4567`}
              className="mt-2 flex items-center gap-2 rounded-md px-3 py-2 text-lg font-bold text-foreground hover:bg-muted"
            >
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              +1 (555) 123-4567
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}