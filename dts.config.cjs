const config = {
  entries: [
    {
      filePath: "src/index.ts",
      outFile: "dist/dll.d.ts",
      noCheck: true,
      output: {
        umdModuleName: 'DLL',
        noBanner: true,
      }
    },
  ],
};

module.exports = config;
