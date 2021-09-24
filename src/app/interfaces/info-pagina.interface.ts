export interface InfoPagina {
    titulo?: string;
    email?: string;
    nombre_corto?: string;
    pagina_autor?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tumblr?: string;
    equipo_trabajo?: Equipotrabajo[];
  }
  
  interface Equipotrabajo {
    nombre?: string;
    apellido?: string;
    dpi?: string;
    dependientes?: Dependiente[];
  }
  
  interface Dependiente {
    nombre?: string;
    apellido?: string;
    dpi?: string;
  }