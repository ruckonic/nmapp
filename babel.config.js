module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['macros', ['relay', {artifactDirectory: './src/__generated__'}]],
}
