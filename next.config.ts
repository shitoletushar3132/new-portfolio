import type { NextConfig, Redirect } from "next";

const nextConfig: NextConfig = {
  async redirect(): Promise<Redirect[]> {
    return [
      // 1️⃣ Redirect www to non-www (or vice versa)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tusharshitole.site" }], // Change if needed
        destination: "https://tusharshitole.site/:path*",
        permanent: true,
      } as Redirect,

      // 2️⃣ Redirect HTTP to HTTPS
      {
        source: "/:path*",
        destination: "https://tusharshitole.site/:path*",
        permanent: true,
      } as Redirect,

      // 3️⃣ Remove trailing slash
      {
        source: "/:path*/",
        destination: "/:path*",
        permanent: true,
      } as Redirect,

      // 4️⃣ Force lowercase URLs (Next.js does not handle this by default)
      {
        source: "/:path((?=.*[A-Z]).*)",
        destination: "/:path*",
        permanent: true,
      } as Redirect,
    ];
  },

  // Remove or enforce trailing slashes
  trailingSlash: false, // Set to `true` if you want to keep slashes
};

export default nextConfig;
