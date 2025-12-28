/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the app as static HTML (Next Export)
  // output: "export",
  // Keep trailing slashes so exported pages become folders with index.html
  trailingSlash: true,
  // Disable built-in image optimization for static export
  images: { unoptimized: true },
};

export default nextConfig;
