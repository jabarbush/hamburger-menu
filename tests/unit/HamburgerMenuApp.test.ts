import { mount } from '@vue/test-utils'
import HamburgerMenuApp from '@/components/HamburgerMenuApp.vue'

describe('HamburgerMenuApp.vue', () => {
  it('renders component', () => {
    const wrapper = mount(HamburgerMenuApp);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('sum is initially 0', () => {
    const wrapper = mount(HamburgerMenuApp);
    expect(wrapper.vm.sum).toEqual(0);
  });

  
})

