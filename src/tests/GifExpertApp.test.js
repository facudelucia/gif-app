import React from 'react'
import { shallow } from "enzyme"
import GifExpertApp from '../GifExpertApp'
import '@testing-library/jest-dom'



describe('Pruebas en <GifExpertApp />', () => {

    test('Debe mostrar el componente correctamente', () => {
        let wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })
    test('Debe mostrarse una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })

})