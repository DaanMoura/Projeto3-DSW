package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*

class SalaTeatroController extends RestfulController {
    static responseFormats = ['json', 'xml']
    SalaTeatroController() {
        super(SalaTeatro)
    }
    def List<SalaTeatro> getByCidade(params){
        respond SalaTeatro.findAllByCidade(params.cidade)
    }
}
