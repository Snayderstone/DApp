# PagoDecentralizado

Una DApp basado en Contratos Inteligentes hechos en Solidity y funcionando en la red local de Ganache.
## Prerequisitos
- Tener Descargado e Instalado  VS
- Tener Descargado,Instalado y Configurado Git
- Tener Descargado e Instalado  Node.js
- Tener Descargado e Instalado  Ganache
- Tener Instalada y conectada la cartera de Metamask con Ganache


## Insertar en el Terminal de VS

```bash
npm install 
npm run build
cd truffle
npm install # sí, hay dos paquetes.json, uno para la interfaz y otro para truffle
npm install -g truffle # si tiene problemas de Scrips, ejecuta power shell como administrador y escribe y activa lo siguiente y lo actuvas: Set-ExecutionPolicy Unrestricted 
```

## Compilar y migrar los contratos inteligentes

Primero, asegúrese de ejecutar una cadena de bloques local en este caso "GANACHE",
Verifique que en la carpeta _truffle_ en el archivo _truffle-config.js_  en el apartado de _develop_ este  configurada con los parámetros de su cadena de bloques "GANACHE"; de lo contrario, modifíquelos.
Luego, solo ejecute los comandos _truffle_:

```bash
truffle compile
truffle migrate
```

## Ejecutar pruebas de truffle

```bash
truffle test
```

## Lanzamiento de la aplicación frontend

Regrese a la raíz del proyecto, si aún no está allí, y ejecute:

```bash
cd ..
npm start
```

Visita http://localhost:4200

## Conecte Metamask a una de las cuentas de Ganache

- Asegúrate de estar ejecutando "Ganache". Luego elija la primera cuenta y copie su clave privada.
- Ir a http://localhost:4200
- En Metamask, agregue una nueva Red, con URL http://localhost, 7545 como puerto e ID de cadena 1337. Utilice esta red para el desarrollo.
- También en Metamask importe una cuenta -> especifique la clave privada que copió de la primera cuenta de Ganache. __Advertencia__: no use esta cuenta como una cuenta real.
- Recargar la aplicación web. 
 
