package server

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
        "/promocoes"(resources: 'promocao')
        "/promocoes/sites/$id"(controller: 'promocao', action:'getBySite')
        "/promocoes/teatros/$id"(controller: 'promocao',action: 'getByTeatro')
        "/salas"(resources: 'salaTeatro')
        "/salas/cidade/$cidade"(controller: 'salaTeatro', action:'getByCidade')
    }
}
