module.exports = {
    // Konfigurasi lainnya
  
    module: {
      rules: [
        // Rule lainnya
        {
          test: /\.(mp3)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
  