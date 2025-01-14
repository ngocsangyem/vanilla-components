---
outline: deep
---

# Auto Import


## Unplugin Vue Components

If you are using or you pretend to use [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) in your project, its pretty easy to get started,
simply add a custom resolver to the `unplugin-vue-components` configuration on your vite or rollup configuration file.


Here is the example :

::: code-group
```ts [vite.config.ts]
import components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        // Rest of the plugins
        components({
            dirs: [
                './resources/views/components/**/*',
                './resources/layouts',
            ],
            resolvers: [
                HeadlessUiResolver(),
                (componentName) => { // [!code focus:7]
                    if (componentName.startsWith('Vanilla')) {
                        return {
                            name: componentName, from: '@flavorly/vanilla-components',
                        }
                    }
                },
                iconsResolver({
                    customCollections: ['custom'],
                }),
            ],
            directoryAsNamespace: true,
            dts: 'resources/types/components.d.ts',
        }),
    ],
})
```

:::warning Unplugin configuration
Please keep in mind that you should still follow the standard installation instructions for unplugin import, covering the setup here would be out of scope.
:::

That's it! Now you can use the components without having to import them manually, please keep in mind this does not register them globally but imports them as needed!


## IDE Configuration

If you are using Vscode you should have nothing to worry about, it will automatically detect the components and provide you with the correct intellisense.
But if you are using PHPStorm there is some things you should be aware of.

### PHPStorm

Sometimes PHPstorm doesnt understand the `components.d.ts` generated by unplugin, specially if you are using `pnpm` as a workaround
please create a file on your project root with the name `.npmrc` and add the following content:

```ini
public-hoist-pattern[]=@vue*
shamefully-hoist=true
```




