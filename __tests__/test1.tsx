import '@testing-library/jest-dom'
import getDentists from '@/libs/getDentists'
import DentistCatalog from '@/components/DentistCatalog'
import { screen, render, waitFor } from '@testing-library/react'
import Card from '@/components/Card'

describe('Denist test',()=>{
    var dentistsJson:DentistJson
    beforeEach(async () => {
        dentistsJson= await getDentists()
    })
    it('Dentist no no appear on init',()=>{
        let date = ""
        const catalog = DentistCatalog({dentistsJson,date})
        render(catalog)
        expect(Card).not.toHaveBeenCalled()
    })  
    it('Dentist appear on have date',()=>{
        let date = new Date().toISOString()
        const catalog = DentistCatalog({dentistsJson,date})
        render(catalog)
        expect(Card).toHaveBeenCalled()
    })  
})