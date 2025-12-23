import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  Fab,
} from "@mui/material";
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Instagram } from '@mui/icons-material';

export type Producto = {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string[];
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function App() {
    const productos: Producto[] = [
      {
        nombre: 'Budín Hamburgues',
        descripcion: '🍫✨ Budín Hamburgues artesanal' +
          'Húmedo, esponjoso y con el sabor perfecto para acompañar tus meriendas y desayunos.' +
          '💛 Con chips de chocolate, nueces crocantes y un baño de chocolate.' +
          '📩 Pedidos por mensaje directo o link de WhatsApp ⤴️' +
          '📍 Hecho con amor en Cocol Pastelería Artesanal' +
          '📆 ¡Encargalo con anticipación y disfrutalo cuando quieras!',
        precio: "11.000",
        imagen: [
          '16.1.jpg', 
          '16.2.jpg',
        ],
      },
      {
        nombre: 'Budin De Naranja',
        descripcion: '🍊❄️ Un mimo para estos días fríos: Budín de naranja casero con glasé 🍊' +
          'Perfecto para acompañar unos mates o un té 🧉☕' +
          'Realizamos pedidos con anticipación como siempre' +
          '📩 Pedidos por mensaje directo, o en el link del perfil ❤️',
        precio: "8.500  | $4.500",
        imagen: [
          '15.1.jpg', 
          '15.2.jpg',
        ],
      },
      {
        nombre: 'Budin De Limon',
        descripcion: '🍋 Budín de limón recién hecho, húmedo y súper aromático.' +
          ' Ideal para cortar la tarde con algo rico 🧉☕ ' +
          ' Pedidos por mensaje o link en la bio 💛',
        precio: "8.500  | $4.500",
        imagen: [
          '19.1.jpg',
        ],
      },
      {
        nombre: 'Budin De Vainilla con Chispas de Chocolate',
        descripcion: '🍫 Budín con chispas de chocolate, bien casero y tentador.' +
          'Suave, húmedo y con choco en cada bocado 🤎 ' +
          'Disponible por pedido 💌',
        precio: "9.000  | $4.500",
        imagen: [
          '20.1.jpg',
        ],
      },
      {
        nombre: 'Pan Dulce',
        descripcion: '🎄✨ LLEGO EL PAN DULCE ARTESANAL✨🎄' +
          'Sin dudas lo más rico de la mesa navideña y lo más discutido🤭...' +
          'Con fruta abrillantada? Con chips?' +
          'ACA EN COCOL TENEMOS PARA TODOS LOS GUSTOS Todos Con su bañoo de Chocolate o Glase 🙂‍↔' +
          'De: 1/2kg 1/4kg' +
          '✨️Solo : $10.000 $5.000' +
          '✨Chispas : $13.000 $6.000' +
          '✨Frutos secos : $16.000 $6.500' +
          '🎄✨️DATAZO: Podes armarlo como más te guste, con chips de choco, frutas abrillantadas, solo.' +
          'Arriba podes elegir baño de choco o glasé como más te guste. 😍' +
          'RECORDA QUE LOS PEDIDOS SE TOMAN CON 24 HS DE ANTICIPACIÓN o Consulta nuestro Stock 💌',
        precio: "",
        imagen: [
          '11.1.jpeg', 
          '11.2.jpeg',
          '11.3.jpeg',
          '11.4.jpeg',
        ],
      },
      {
        nombre: 'Pasta Frola',
        descripcion: 'Hola!! Feliz comienzo de semana! ' +
          'Lunes, Acá traemos nuestra PASTA FROLA de 16cm, tenemos nuestra versión con coco y sin. Para todos los gustos ❤️😋' +
          'Tmb podes pedirla de batata ! ✨',
        precio: "16.000",
        imagen: [
          '4.1.jpg', 
          '4.2.jpg',
          '4.3.jpg',
          '4.4.jpg',
          '4.5.jpg',
          '4.6.jpg',
        ],
      },
      {
        nombre: 'Lemon Pie',
        descripcion: 'Buenas tardes para todos' +
          'Lemon pie 24 cm 🍋✨ con la frescura del limón y la dulzura de un merengue italiano que no podés dejar de probar!' +
          'Estoy tomando pedidos✍🏻 Para este finde! ' +
          'para una rica merienda o porque no para algún festejo!' +
          'Pedidos por Whatsapp link, o a través de MD.' +
          'Buen jueves para todos! ❣️🙌🏻',
        precio: "25.000",
        imagen: [
          '8.1.jpg', 
          '8.2.jpg',
          '8.3.jpg',
          '8.4.jpg',
        ],
      },
      {
        nombre: 'Bizcochuelo de chocolate',
        descripcion: '🍫🍒 ¡Amantes del chocolate, esta es para ustedes!' +
          'Presentamos nuestra versión artesanal de la Selva Negra:' +
          '💛 Bizcochuelo de chocolate súper esponjoso' +
          '💛 Relleno de crema chantilly, dulce de leche y frutos rojos.' +
          '💛 Virutas de chocolate' +
          'Ideal para sorprender o darte un gustito ✨' +
          'Hacemos por pedido con 2 días de anticipación.' +
          '📍 Zona barrio hipódromo' +
          '📩 Pedidos por mensaje o link de WhatsApp⤴️',
        precio: "",
        imagen: [
          '17.1.jpg', 
          '17.2.jpg',
        ],
      },
      {
        nombre: 'Torta Forrada en Pasta mas Modelado',
        descripcion: '🎂 Torta forrada en pasta con modelado artesanal. ' +
          'Diseño personalizado, detalles hechos a mano y terminaciones prolijas. ' +
          'Ideal para cumpleaños y celebraciones especiales. ' +
          'Pedidos con anticipación 💌',
        precio: "",
        imagen: [
          '18.1.jpg',
        ],
      },
      {
        nombre: 'TORTA DEGRADE',
        descripcion: 'TORTA DEGRADE en tonos rosas.' +
          'Les muestro un poco de mi trabajo realizado en el día de hoy.' +
          'La base es un bizcochuelo de vainilla con relleno de dulce de leche. Y se cubre con una suave ganache de chocolate blanco.' +
          'Toda la decoración está hecha a mano. Con pasta de goma. las rosas blancas y las hojas .😍 🫶🏻' +
          'Está torta es perfecta para cualquier ocasión especial.. Espero que lo disfruten tanto como yo lo hice al hacerlo❤️' +
          '#tortas #floresenpastadegoma🌸🏵️🌺 #pasteleriacreativa #ganachecake #dulcedeleche #instafood',
        precio: "",
        imagen: [
          '9.1.jpg', 
          '9.2.jpg',
          '9.3.jpg',
          '9.4.jpg',
          '9.5.jpg',
        ],
      },
      {
        nombre: 'Desayuno para Papá',
        descripcion: 'Desayuno para Papá – Hecho con amor por Cocol 💙' +
          '🧁 Opción 1 – Desayuno Completo para compartir ❣️👌🏻' +
          'Infusiones: té, café y jugo exprimido de naranja' +
          'Mini cake de 12 cm (vainilla con dulce de leche, decorada con buttercream)' +
          '2 scones de queso' +
          '2 alfa cookies' +
          '2 alfajorcitos de masa sablé con azúcar impalpable' +
          '1 pasta frola de membrillo' +
          '🎁 Presentado con caja decorada, cinta y tarjetita personalizada' +
          '💰 $25.000' +
          'Opción 2 – torta sola. (12 cm)' +
          'Bizcochuelo de vainilla con relleno de dulce de leche' +
          'Cobertura en buttercream' +
          'Decoración temática para papá' +
          '💰 $13.000' +
          'Con caja y stickers alusivos al día' +
          '📍 Entrega en zona, barrio hipodromo 122 y 38.' +
          '📱 Pedidos por mensaje directo o Whatssap link⤴️' +
          '📅 Reservá con anticipación hasta el 13/06/25 – Cupos limitados',
        precio: "",
        imagen: [
          '13.1.jpg', 
          '13.2.jpg',
          '13.3.jpg',
          '13.4.jpg',
        ],
      },
      {
        nombre: 'Cookies XL',
        descripcion: '🍪✨ ¡Llegaron las COOKIES XL de Cocol!' +
          'Súper rellenas, blanditas por dentro crocantes por fuera 😍' +
          '💥 Sabores :' +
          'Chips de chocolate semi amargo 🍫' +
          'Rocklets con baño de chocolate blanco 🍭' +
          'Oreo + Nutcream 🍪' +
          '🎁 Caja x3 cookies surtidas: $6.800' +
          '🎁 Caja x6 (2 de cada una): $14 000' +
          '🧁 También por unidad desde $3500' +
          '📍 Entrega por la zona (Barrio Hipódromo)' +
          '🔎 Consultar por demás puntos de entrega' +
          '⏰ Pedilas con anticipación porque vuelan' +
          '#cookies🍪,#cookiesofinstagram' +
          '#pasteleriaartesanal',
        precio: "4.000 | $4.500",
        imagen: [
          '14.1.jpg', 
          '14.2.jpg',
          '14.3.jpg',
          '14.4.jpg',
          '14.5.jpg',
          '14.6.jpg',
          '14.7.jpg',
        ],
      },
      {
        nombre: 'Donas Personalizadas',
        descripcion: '🍩 Donas Personalizadas para eventos y celebraciones especiales! 🎉✨' +
          'Perfectas para cumpleaños, baby showers, despedidas de soltera y más.' +
          'Elige tus sabores y decoraciones favoritas para hacerlas únicas y deliciosas.',
        precio: "",
        imagen: [
          '21.1.jpg', 
          '21.2.jpg', 
          '21.3.jpg', 
        ],
      },
      {
        nombre: 'AlfaCokies',
        descripcion: 'Alfacookies una cookie pero con onda!😎🍪😋',
        precio: "",
        imagen: [
          '2.jpg', 
        ],
      },
      {
        nombre: 'Chipas',
        descripcion: 'Holaaa! Feliz viernes!' +
          'Se vino el fresquito y acá inaguramos la temporada de chipas, recién salidos del horno! Decime si no te tienta para acompañar con unos ricos mates? Una verdadera delicia. ' +
          '📱Hace tu pedido al ' +
          '1136724619. ' +
          '📍Av 122 entre 37 y 38 La plata',
        precio: "",
        imagen: [
          '3.1.jpg', 
          '3.2.jpg', 
        ],
      },
      {
        nombre: 'Alfajores de coco',
        descripcion: 'ALFAJORES DE COCO, una delicia que no podes dejar de probar',
        precio: "",
        imagen: [
          '5.1.jpg', 
          '5.2.jpg',
          '5.3.jpg',
        ],
      },
      {
        nombre: 'Galletitas de Masa Sablée',
        descripcion: 'Galletitas de Masa Sablée vainilla y chocolate con decoración en choco blanco y negro 🍫☕🧉❤️' +
          '#masasablée #galletitasdecoradas',
        precio: "",
        imagen: [
          '6.1.jpg', 
          '6.2.jpg',
          '6.3.jpg',
          '6.4.jpg',
          '6.5.jpg',
        ],
      },
      {
        nombre: 'Desayunos para Mamá',
        descripcion: 'Gracias a todas las personas que confiaron en mí trabajo para mimar a papá, totalmente agradecida y feliz por todo el trabajo que tuve estos días. ' +
          ' espero que hayan disfrutado el día del padre con algo rico hecho con mucho amor🙌🏻💕🦋✨',
        precio: "",
        imagen: [
          '7.1.jpg', 
          '7.2.jpg',
          '7.3.jpg',
          '7.4.jpg',
          '7.5.jpg',
          '7.6.jpg',
          '7.7.jpg',
          '7.8.jpg',
          '7.9.jpg',
        ],
      },
      {
        nombre: 'Box Navideño',
        descripcion: '🎄BOX NAVIDEÑO🎄' +
          'Está época del año es la más divertida y esperada para los peques de la familia 😍 y que mejor que expresen su creatividad ✨con este box que contiene:' +
          '🍪6 Cookies de masa sablee' +
          '3 Mangas de glase real de 50gr cada una' +
          '2 Pack de granas de 20gr cada una' +
          'El valor es de $10.000' +
          'Estamos tomando pedidos con 24hs de anticipación!' +
          '#cookies #navidad #papanoel #glasereal ' +
          '#cajanavideña #feliznavidad',
        precio: "",
        imagen: [
          '10.1.jpg', 
          '10.2.jpg',
        ],
      },
      {
        nombre: 'Chispas Sin Tacc',
        descripcion: 'Los chipá más ricos están en Cocol!' +
          'Crujientes por fuera, suaves por dentro y con ese sabor irresistible a queso.' +
          'adictivos te lo aseguro.' +
          'Ideales para acompañar con unos ricos mates.' +
          'Hace tu pedido por mensaje directo o al WhatsApp que está en la bio. ¡Recién horneados y con mucho amor!' +
          '#CocolPastelería #ChipáCasero #MeriendaRica #ViandasCocol #SaboresQueConectan',
        precio: "",
        imagen: [
          '12.1.jpg', 
          '12.2.jpg',
          '12.3.jpg',
        ],
      },
    ];

  return (
    <Box sx={{ backgroundColor: "#fff8f5", minHeight: "100vh", color: "#506a77" }}>
      <Box sx={{ background: `
              radial-gradient(
                circle at top,
                rgba(232, 227, 221, 1) 23%,
                rgba(244, 180, 195, 1) 100%
              )
            `, py: 4, textAlign: "center", fontFamily: 'Poppins, sans-serif',
        }}
      >
        <Box
          sx={{
            width: 120,
            height: 120,
            borderRadius: 16, // MUI: 6 = bastante redondeado
            overflow: "hidden", // CLAVE para recortar la imagen
            margin: "0 auto",
          }}
        >
    
          <Image src="/cocol/logo.jpeg" alt="Cocol Logo" width={120} height={120} priority />
        </Box>
        <Typography variant="h6">
          Tortas & Mesas Dulces para celebrar en La Plata. ✨
        </Typography>
        <Typography variant="h6">
          Ingredientes de calidad, dedicación y amor en cada bocado. 
        </Typography>
      </Box>
      <Container sx={{ py: 5 }}>
        <Typography variant="h4">
          Productos:
        </Typography>
        <Typography variant="h6" gutterBottom>
          Hace tu pedido por WhatsApp o Instagram
        </Typography>
        <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
          {productos.map((torta, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4}} key={index} sx={{display: 'flex'}}>
              <Card 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', // Empuja el contenido si es necesario
                  width: '100%',
                  borderRadius: 4, 
                  boxShadow: 3,
                  position: 'relative',
                }}
              >
                {torta.precio && (<Box
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    padding: '4px 8px',
                    borderRadius: 1,
                    fontWeight: 'bold',
                    zIndex: 2,
                }}
                >
                ${torta.precio}
                </Box>)}
                <Box> {/* Contenedor superior para Imagen + Título */}
                  <Box sx={{ width: '100%' }}>
                    <Slider {...{ ...settings, infinite: torta.imagen.length > 1 }}>
                      {torta.imagen.map((src, i) => (
                        <Box
                          key={i}
                          sx={{
                            position: 'relative',
                            width: '100%',
                            pt: '75%',
                            borderRadius: 1,
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            component="img"
                            src={`/posts/${src}`}
                            alt={torta.nombre}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              backgroundColor: 'rgba(244, 180, 195, 1)',
                            }}
                          />
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                  
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold', color: "#506a77" }}>
                      {torta.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color: "#506a77"}}>
                      {torta.descripcion}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: "#ffe8e1", textAlign: "center", py: 3 }}>
        <Typography variant="body1">
          📩 Pedidos por Instagram:{" "}
          <Link href="https://instagram.com/sweetcocol.pasteleria" target="_blank">
            @sweetcocol.pasteleria
          </Link>{" "}
        </Typography>
        <Typography variant="body1">
          WhatsApp: 11-3672-4319
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          &copy; 2025 Sweet Cocol - Pastelería Artesanal
        </Typography>
      </Box>

      <Fab
        color="success"
        aria-label="whatsapp"
        href={"https://wa.me/5491136724619"}
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: '#25D366',
          '&:hover': {
            bgcolor: '#1ebe5b',
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
            <Fab
        color="success"
        aria-label="Instagram"
        href={"https://www.instagram.com/sweetcocol.pasteleria/"}
        target="_blank"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 84,
          bgcolor: '#E1306C',
          '&:hover': {
            bgcolor: '#c13584',
          },
        }}
      >
        <Instagram />
      </Fab>
    </Box>
  );
}
