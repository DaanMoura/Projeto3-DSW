package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/sala-teatro', readOnly = false, formats = ['json', 'xml'])
class SalaTeatro {
  String email
  String senha
  String cnpj
  String nome
  String cidade
}
