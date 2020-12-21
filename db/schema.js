const { gql } = require("apollo-server");

// Schema
const typeDefs = gql`
  type Usuario {
    id: ID
    nombre: String
    apellido: String
    email: String
    creado: String
  }

  type Transportista {
    id: ID
    nombre: String
    apellido: String
    dni: String
    email: String
    creado: String
  }

  type Vehiculo {
    id: ID
    marca: String
    modelo: String
    placa: String
    color: String
    creado: String
    transportista: ID
  }

  type VehiculosTransportista {
    id: ID
    marca: String
    modelo: String
    placa: String
    color: String
    creado: String
    transportista: Transportista
  }

  type Token {
    token: String
  }

  type Producto {
    id: ID
    nombre: String
    existencia: Int
    precio: Float
    creado: String
  }

  type Cliente {
    id: ID
    nombre: String
    apellido: String
    empresa: String
    email: String
    telefono: String
    creado: String
    vendedor: ID
  }

  type Pedido {
    id: ID
    pedido: [PedidoGrupo]
    total: Float
    cliente: Cliente
    vendedor: ID
    fecha: String
    estado: EstadoPedido
  }

  type PedidoGrupo {
    id: ID
    cantidad: Int
    nombre: String
    precio: Float
  }

  type TopCliente {
    total: Float
    cliente: [Cliente]
  }

  type TopVehiculo {
    vehiculo: [Vehiculo]
    transportista: [Transportista]
  }

  type TopVendedor {
    total: Float
    vendedor: [Usuario]
  }

  input UsuarioInput {
    nombre: String!
    apellido: String!
    email: String!
    password: String!
  }

  input TransportistaInput {
    nombre: String!
    apellido: String!
    dni: String!
    email: String!
    password: String!
  }

  input VehiculoInput {
    marca: String!
    modelo: String!
    placa: String!
    color: String!
    transportista: ID
  }

  input AutenticarInput {
    email: String!
    password: String!
  }

  input ProductoInput {
    nombre: String!
    existencia: Int!
    precio: Float!
  }

  input ClienteInput {
    nombre: String!
    apellido: String!
    empresa: String!
    email: String!
    telefono: String
  }

  input PedidoProductoInput {
    id: ID
    cantidad: Int
    nombre: String
    precio: Float
  }

  input PedidoInput {
    pedido: [PedidoProductoInput]
    total: Float
    cliente: ID
    estado: EstadoPedido
  }

  enum EstadoPedido {
    PENDIENTE
    COMPLETADO
    CANCELADO
  }

  enum EstadoVehiculo {
    DISPONIBLE
    OCUPADO
  }

  type Query {
    #Transportista
    obtenerTransportista: [Transportista]
    obtenerTransportistas(id: ID!): Transportista

    #Vehiculo
    obtenerVehiculo(id: ID!): Vehiculo
    obtenerVehiculos: [VehiculosTransportista]

    #Usuarios
    obtenerUsuario: Usuario

    # Productos
    obtenerProductos: [Producto]
    obtenerProducto(id: ID!): Producto

    #Clientes
    obtenerClientes: [Cliente]
    obtenerClientesVendedor: [Cliente]
    obtenerCliente(id: ID!): Cliente

    # Pedidos
    obtenerPedidos: [Pedido]
    obtenerPedidosVendedor: [Pedido]
    obtenerPedido(id: ID!): Pedido
    obtenerPedidosEstado(estado: String!): [Pedido]

    # Busquedas Avanzadas
    mejoresClientes: [TopCliente]
    mejoresVendedores: [TopVendedor]
    ReporteEstadoPedido(estado: String!): [TopVendedor]
    buscarProducto(texto: String!): [Producto]
  }

  type Mutation {
    # Usuarios
    nuevoUsuario(input: UsuarioInput): Usuario
    autenticarUsuario(input: AutenticarInput): Token

    # Productos
    nuevoProducto(input: ProductoInput): Producto
    actualizarProducto(id: ID!, input: ProductoInput): Producto
    eliminarProducto(id: ID!): String

    # Clientes
    nuevoCliente(input: ClienteInput): Cliente
    actualizarCliente(id: ID!, input: ClienteInput): Cliente
    eliminarCliente(id: ID!): String

    # Pedidos
    nuevoPedido(input: PedidoInput): Pedido
    actualizarPedido(id: ID!, input: PedidoInput): Pedido
    eliminarPedido(id: ID!): String

    # Transportista
    nuevoTransportista(input: TransportistaInput): Transportista
    eliminarTransportista(id: ID!): String
    actualizarTransportista(id: ID!, input: TransportistaInput): Transportista

    # Vehiculo
    nuevoVehiculo(input: VehiculoInput): Vehiculo
    eliminarVehiculo(id: ID!): String
    actualizarVehiculo(id: ID!, input: VehiculoInput): Vehiculo
  }
`;

module.exports = typeDefs;
