import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('props msg가 문자열인지 확인', () => {
    const msg = 0
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
    // 문자열인지? 
  })
  // test('two plus two is four', () => {
  //   expect(wrapper.data01).toBe(333);
  // });
})
