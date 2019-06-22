package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/promocao', readOnly = false, formats = ['json', 'xml'])
class Promocao {
  Site site
  SalaTeatro sala
  String nomePeca
  double preco
  Date horario
}
