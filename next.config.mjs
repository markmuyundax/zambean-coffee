/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Use basePath for GitHub Pages project sites (e.g. /zambean-coffee)
  // Leave empty for custom domain or username.github.io repos
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
