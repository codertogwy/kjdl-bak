import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const Icons = {
    install(app) {
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}

export default Icons