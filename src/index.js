import foo from "./foo";

console.log(foo)

if (import.meta.hot) {
  import.meta.hot.accept();
}
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
if (module.hot) {
  module.hot.accept()
}
