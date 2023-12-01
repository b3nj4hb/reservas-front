export class Reserva {
    idreserva?: number
    clase?: string
    idvuelo?: Vuelo
    idcliente?: Cliente
    idhotel?: Hotel
    idsucursal?: Sucursal
}

export class Vuelo {
    idvuelo?: number
    fecha_salida?: string
    hora_salida?: string
    fecha_llegada?: string
    hora_llegada?: string
    origen?: string
    destino?: string
    numero_plazas_totales?: string
}

export class Sucursal {
    idsucursal?: number
    direccion?: string
    localidad?: string
    provincia?: string
    telefono?: number
}

export class Hotel {
    idhotel?: number
    nombre?: string
    direccion?: string
    localidad?: string
    provincia?: string
    telefono?: number
    numero_estrellas?: number
}

export class Cliente {
    idcliente?: number
    nombres?: string
    apellidos?: string
    telefono?: number
    email?: string
}