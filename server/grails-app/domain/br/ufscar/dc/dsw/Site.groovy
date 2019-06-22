package br.ufscar.dc.dsw


import grails.rest.*

@Resource(uri='/sites',readOnly = false, formats = ['json', 'xml'])
class Site {

  static constraints = {
    email blank: false
    senha blank: false
    // Como colocar tamanho mínimo de senha?
    url blank: false
    nome blank: false
  }

  String email
  String senha
  String url
  String nome
  String telefone
}
