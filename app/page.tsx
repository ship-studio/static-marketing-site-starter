export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Welcome Hero */}
        <header className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
            Welcome to
          </p>
          <h1 className="mb-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Ship Studio
          </h1>
          <p className="text-lg text-[var(--muted)]">
            Build marketing sites with Claude Code. Just describe what you want.
          </p>
        </header>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
            Getting Started
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  Start a conversation
                </h3>
                <p className="text-[var(--muted)]">
                  Just type what you want to build. &quot;Create a landing page for my coffee shop&quot; or &quot;I need a portfolio site.&quot;
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  I&apos;ll build it
                </h3>
                <p className="text-[var(--muted)]">
                  Claude handles all the code. You&apos;ll see the site come together in real-time.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-sm font-semibold text-[var(--background)]">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  Refine together
                </h3>
                <p className="text-[var(--muted)]">
                  Ask for changes, add pages, tweak colors. Keep iterating until it&apos;s perfect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Commands */}
        <section className="mb-16">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
            Available Commands
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-[var(--foreground)]/10 p-4">
              <code className="text-sm font-semibold text-[var(--accent)]">/onboarding</code>
              <p className="mt-1 text-[var(--muted)]">
                Set up a new project. I&apos;ll ask about your business and create a personalized build plan.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--foreground)]/10 p-4">
              <code className="text-sm font-semibold text-[var(--accent)]">/page-remake</code>
              <p className="mt-1 text-[var(--muted)]">
                Rebuild from an example. Share a URL you like, and I&apos;ll create something similar but better.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--foreground)]/10 p-4">
              <code className="text-sm font-semibold text-[var(--accent)]">/sanity-cms</code>
              <p className="mt-1 text-[var(--muted)]">
                Add editable content. When you want to update text yourself without touching code.
              </p>
            </div>
          </div>
        </section>

        {/* What You Can Build */}
        <section className="mb-16">
          <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--foreground)]">
            What You Can Build
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Landing pages",
              "Marketing sites",
              "Portfolios",
              "Company websites",
              "Product pages",
              "Coming soon pages",
              "Event sites",
              "Personal sites",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--foreground)]/10 px-4 py-2 text-sm text-[var(--foreground)]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[var(--muted)]">
            All without writing a single line of code.
          </p>
        </section>

        {/* Quick Start */}
        <section className="rounded-lg bg-[var(--foreground)] p-6 text-[var(--background)]">
          <h2 className="mb-2 font-[family-name:var(--font-display)] text-xl font-semibold">
            Ready to start?
          </h2>
          <p className="opacity-80">
            Just describe what you want to build. I&apos;ll take it from there.
          </p>
        </section>
      </main>
    </div>
  );
}
