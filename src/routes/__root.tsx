import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BrandedMessage, primaryBtn, secondaryBtn } from "@/components/BrandedMessage";

import appCss from "../styles.css?url";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";

function NotFoundComponent() {
  return (
    <BrandedMessage
      code="404"
      title="Page not found"
      message="The page you are looking for does not exist or has been moved. Let us take you back to Laxmikant Worldlink."
    >
      <Link to="/" className={primaryBtn}>
        Go to homepage
      </Link>
      <Link to="/" hash="contact" className={secondaryBtn}>
        Contact us
      </Link>
    </BrandedMessage>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <BrandedMessage
      title="This page didn't load"
      message="Something went wrong on our side. Please try again, or go back to the homepage."
    >
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className={primaryBtn}
      >
        Try again
      </button>
      <a href="/" className={secondaryBtn}>
        Go home
      </a>
    </BrandedMessage>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Laxmikant Worldlink" },

      { name: "google-site-verification", content: "4wabGsN-QKiFIatq9OGcRdCGtxqx777xvVicYcV79Dg" },
      { property: "og:site_name", content: "Laxmikant Worldlink" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        // Runs before the first paint: skip the intro on repeat visits in the same session
        children:
          "try{if(sessionStorage.getItem('lw-intro'))document.documentElement.setAttribute('data-intro','seen')}catch(e){}",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}.site-loader{display:none!important}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
