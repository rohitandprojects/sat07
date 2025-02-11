/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    /*compress: false,
    optimization: {
      minimize: false,
    },*/
    eslint: {
      ignoreDuringBuilds: true,
  },
    //output: 'export',
    images: {
      loader: "custom",
      imageSizes: [],
      deviceSizes: [360, 480, 575, 768, 992, 1024, 1920, 2048],
      unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            //hostname: 'firebasestorage.googleapis.com',
            hostname: '**',//all hostname
            port: '',
            pathname: '/**',
          },
        ],
      },
      transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "80",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
    /*images: {
        formats: ['image/webp'],
        domains: ['firebasestorage.googleapis.com'],
      },*/
      webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],/*, 'url-loader'*/
        });
        return config;
    },    
};
export default nextConfig;