import JavaScriptObfuscator from "javascript-obfuscator";


const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'", // Allow inline scripts for testing
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=(), payment=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-src https://www.google.com/ https://maps.google.com/;"
        }
      ]
    }
  ];
},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Temporarily disable obfuscation for testing
      /*
      config.optimization.minimizer.push({
        apply: (compiler) => {
          compiler.hooks.emit.tapAsync("ObfuscateJS", (compilation, callback) => {
            Object.keys(compilation.assets).forEach((filename) => {
              if (filename.endsWith(".js")) {
                const asset = compilation.assets[filename];
                const obfuscatedCode = JavaScriptObfuscator.obfuscate(asset.source(), {
                  compact: true,
                  controlFlowFlattening: true,
                  deadCodeInjection: true,
                  debugProtection: false,
                  disableConsoleOutput: true, // Disable to restore console logs
                  identifierNamesGenerator: "hexadecimal",
                  log: false,
                  renameGlobals: false,
                  rotateStringArray: true,
                  selfDefending: true,
                  stringArray: true,
                  stringArrayEncoding: ["rc4"],
                  stringArrayThreshold: 0.75,
                  unicodeEscapeSequence: false,
                }).getObfuscatedCode();
                compilation.assets[filename] = {
                  source: () => obfuscatedCode,
                  size: () => obfuscatedCode.length,
                };
              }
            });
            callback();
          });
        },
      });
      */
    }
    return config;
  },
  images: {
    unoptimized: true,
  },
  
  async rewrites() {
    return [];
  },
};

export default nextConfig;