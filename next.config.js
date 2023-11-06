/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname: "/styles/assets/welcome-image.jpeg",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/",
          outputPath: "static/",
        },
      },
    });

    return config;
  },
};
