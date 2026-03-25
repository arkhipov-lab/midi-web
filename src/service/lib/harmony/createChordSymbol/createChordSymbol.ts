import {getPitchClassName} from '@shared/lib'

interface CreateChordSymbolOptions {
    rootPitchClass: number
    symbolSuffix: string
    bassPitchClass: number | null
    templatePitchClasses: number[]
}

interface CreateChordSymbolResult {
    symbol: string
    bass: string | null
    isSlashChord: boolean
}

export function createChordSymbol(options: CreateChordSymbolOptions): CreateChordSymbolResult {

    const {
        rootPitchClass,
        symbolSuffix,
        bassPitchClass,
        templatePitchClasses,
    } = options

    const rootName = getPitchClassName(rootPitchClass)

    if (
        bassPitchClass === null
        || bassPitchClass === rootPitchClass
        || !templatePitchClasses.includes(bassPitchClass)
    ) {
        return {
            symbol: `${rootName}${symbolSuffix}`,
            bass: null,
            isSlashChord: false,
        }
    }

    const bassName = getPitchClassName(bassPitchClass)

    return {
        symbol: `${rootName}${symbolSuffix}/${bassName}`,
        bass: bassName,
        isSlashChord: true,
    }
}
