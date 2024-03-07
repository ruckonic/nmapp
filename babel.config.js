module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['macros', ['relay', {artifactDirectory: './src/__generated__'}]],
};
