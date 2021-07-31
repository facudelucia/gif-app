import React from 'react'
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem"




describe('Pruebas en <GifGridItem />', () => {
    const title = 'title'
    const url = 'url.com'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    test('debe tener la imagen con src y alt igual al de los props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
})