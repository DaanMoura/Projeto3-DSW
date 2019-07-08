package server

import br.ufscar.dc.dsw.Site
import br.ufscar.dc.dsw.SalaTeatro
import br.ufscar.dc.dsw.Promocao

class BootStrap {

    def init = { servletContext ->
      Site site = new Site(
        email: "site@site.com", 
        senha: "site123", 
        url: "www.site.com",
        nome: "Site",
        telefone: "1140001234")
      site.save()
      Site outrosite = new Site(
        email: "outrosite@site.com", 
        senha: "site123", 
        url: "www.outrosite.com",
        nome: "Outro Site",
        telefone: "1112341234")
      outrosite.save()
      Site teste = new Site(
        email: "teste@site.com", 
        senha: "teste124", 
        url: "www.siteteste.com",
        nome: "Site Teste",
        telefone: "1144332211")
      site.save()
      SalaTeatro sala = new SalaTeatro(
        email: "teatro@teatro.com",
        senha:"teatro123",
        cnpj:"123456789",
        nome:"Um teatro",
        cidade:"Um lugar"
      )
      sala.save()
      sala = new SalaTeatro(
        email:"outroteatro@teatro.com",
        senha:"teatro123",
        cnpj:"987654321",
        nome:"Outro teatro",
        cidade:"Outro lugar"
      )
      sala.save()
      Promocao promocao = new Promocao(
        site: site,
        sala: sala,
        nomePeca: "Tinta secando",
        preco: 0.01,
        horario: new Date()
      )
      promocao.save()
      
      promocao = new Promocao(
        site : outrosite,
        sala : sala,
        nomePeca: "Literalmente Nada",
        preco: 0.02,
        horario: new Date()
      )
      promocao.save()
      promocao = new Promocao(
        site: outrosite,
        sala: sala,
        nomePeca: "Nada",
        preco: 0.03,
        horario: new Date()
      )
      promocao.save()
    }
    def destroy = {
    }
}
