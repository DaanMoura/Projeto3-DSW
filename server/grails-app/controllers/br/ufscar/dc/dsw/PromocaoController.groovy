package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*

class PromocaoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    PromocaoController() {
        super(Promocao)
    }
    def List<Promocao> index(){
        respond Promocao.list(), view: 'index'
    }
    def List<Promocao> getBySite(params){
        Site site = Site.get(params.id)
        respond Promocao.findAllBySite(site), view: 'index'
    }
    def List<Promocao> getByTeatro(params){
        SalaTeatro sala = SalaTeatro.get(params.id)
        respond Promocao.findAllBySala(sala), view: 'index'
    }
}
