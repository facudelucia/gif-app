import React from 'react'
import { shallow } from "enzyme"
import GifGrid from '../../components/GifGrid'
import '@testing-library/jest-dom'
import useFetchGifs from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    const category = "string"

    test('Debe mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        let wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
    })
    test('Debe mostrar items cuando useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://google.com',
            title: 'Cualquier cosa'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        let wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
    })
})
