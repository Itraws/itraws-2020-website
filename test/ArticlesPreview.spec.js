import { mount } from '@vue/test-utils'
import ArticlesPreview from '@/components/elements/ArticlesPreview.vue'

describe('ArticlesPreview', () => {
  test('returns the posts', () => {
    const wrapper = mount(ArticlesPreview)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
