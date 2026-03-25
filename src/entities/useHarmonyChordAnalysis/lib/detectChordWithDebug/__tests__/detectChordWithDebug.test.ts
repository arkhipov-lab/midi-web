import {detectChordWithDebug} from '../detectChordWithDebug'

describe('detectChordWithDebug', () => {
    it('detects Dsus2', () => {
        const result = detectChordWithDebug({
            62: 100,
            64: 100,
            69: 100,
        })

        expect(result.selected?.symbol).toBe('Dsus2')
    })

    it('detects Dsus4', () => {
        const result = detectChordWithDebug({
            62: 100,
            67: 100,
            69: 100,
        })

        expect(result.selected?.symbol).toBe('Dsus4')
    })

    it('detects C9 without false slash output', () => {
        const result = detectChordWithDebug({
            60: 100,
            64: 100,
            70: 100,
            62: 100,
        })

        expect(result.selected?.symbol).toBe('C9')
    })

    it('detects C6/9', () => {
        const result = detectChordWithDebug({
            60: 100,
            62: 100,
            64: 100,
            67: 100,
            69: 100,
        })

        expect(result.selected?.symbol).toBe('C6/9')
    })
})
