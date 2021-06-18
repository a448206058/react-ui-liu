const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/)
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

const findStories = () => {
  // your custom logic returns a list of files
  let list = ["../src/welcome.stories.tsx"]
  list.push("../src/components/Button/button.stories.tsx")
  list.push("../src/components/Input/input.stories.tsx")
  list.push("../src/components/Card/card.stories.tsx")
  list.push("../src/components/AutoComplete/autoComplete.stories.tsx")
  list.push("../src/components/Menu/menu.stories.tsx")
  list.push("../src/components/Upload/upload.stories.tsx")
  return list
}
// "../src/**/*.stories.mdx",
// "../src/**/*.stories.@(js|jsx|ts|tsx)",
module.exports = {
  "stories": findStories(),
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-info",
    "@storybook/preset-create-react-app"
  ]
}