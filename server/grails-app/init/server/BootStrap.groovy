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
    }
    def destroy = {
    }
}
