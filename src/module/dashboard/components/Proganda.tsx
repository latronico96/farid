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
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Flag from "react-world-flags";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Instagram } from '@mui/icons-material';
import React from "react";

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
    const [expanded, setExpanded] = React.useState<string | false>("arabe");
    const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const arabe: Producto[] = [
      {
        nombre: 'Picada Árabe Premium – Especial Fiestas',
        descripcion: 'Una propuesta ideal para compartir y celebrar, con una selección de clásicos de la cocina árabe preparados de manera artesanal. \n' +
            '- 2 docenas de Árabes\n' +
            '- 2 docenas de Falafel\n' +
            '- 2 docenas de Keppes fritos\n' +  
            '- 2 docenas de Niños envueltos en hoja de parra\n' +
            '- 250 g de Hummus\n' +
            '- 250 g de Babaganush\n' +
            '- 80 Panes pita\n' +
            '- Salsa de yogur\n' +
            '- Salsa picante.',
        precio: "218.000 Para 10 personas",
        imagen: [
          'picada1.png',
          'picada2.png',
          'picada3.png',
          'picada4.png',
          'picada5.png',
          'picada6.png',
          'picada7.png',
          'picada8.png',
          'picada9.png',
          'picada10.png',
        ],
      },
      {
        nombre: 'Shawarma Libre – Servicio por Persona',
        descripcion: 'Servicio de shawarma ilimitado, ideal para eventos y celebraciones.\n Incluye salsas, ensaladas.\n Consulte por opción veggie.',
        precio: "16000 x persona",
        imagen: [
          'shawarma2.png',
          'shawarma3.jpg',
          'shawarma4.jpg',
          'shawarma5.jpg',
          'shawarma6.jpg',
          'shawarma7.png',
        ],
      },
      {
        nombre: 'Menú Árabe Completo – Entrada + Principal',
        descripcion: 'Una experiencia gastronómica árabe pensada para disfrutar de principio a fin.\n' + 
          'ENTRADA: empanadas árabes de masa casera \n' +
          ' Variedad de pizzetas\n' +
          ' PLATO PRINCIPAL: shawarma libre.',
        precio: "18000 x persona",
        imagen: [
          'a.1.6.jpeg',
          'shawarma2.png',
          'shawarma4.jpg',
          'shawarma5.jpg',
          'shawarma6.jpg',
        ],
      },
      {
        nombre: 'Isla de Picadas Árabes + Shawarma Libre',
        descripcion: 'Una propuesta ideal para eventos, con mesa de picadas y servicio principal en formato libre. ' +
          'Incluye:\n Hummus,\n Babaganoush,\n Niños envueltos,\n Keppes,\n Falafel,\n Tabulé,\n Empanadas árabes,\n Shawarma libre.',
        precio: "22000 x persona",
        imagen: [
          'picada1.png',
          'shawarma2.png',
          'picada2.png',
          'shawarma3.jpg',
          'picada3.png',
          'shawarma4.jpg',
          'picada4.png',
          'shawarma5.jpg',
          'picada5.png',
          'shawarma6.jpg',
          'picada6.png',
          'shawarma2.png',
          'picada7.png',
          'shawarma3.jpg',
          'picada8.png',
          'shawarma4.jpg',
          'picada9.png',
          'shawarma5.jpg',
          'picada10.png',
          'shawarma6.jpg',
        ],
      },
    ];

    const mexicana: Producto[] = [
      {
        nombre: 'Tacos al pastor LIBRE',
        descripcion: "Clásicos tacos mexicanos preparados al momento con carne de cerdo marinada en jugo de naranja y piña, cocida con pimientos y jalapeños. Incluye variedad de vegetales, salsas tradicionales y tortillas de maíz artesanal para armar a gusto.",
        precio: "20000 x persona",
        imagen: [
          'm.1.1.jpg',
          'm.1.2.jpg',
          'm.1.3.jpg',
          'm.1.4.jpg',
          'm.1.6.jpg',
        ],
      },
      {
        nombre: 'Menú Mexicano Completo – Tacos Libres',
        descripcion: "Entrada con burritos de queso, burritos de carne con vegetales y ananá, nachos con guacamole y pico de gallo. Plato principal de tacos al pastor libres, acompañados con tortillas de maíz artesanal.",
        precio: "24000 x persona",
        imagen: [
          'm.1.8.jpg',
          'm.1.1.jpg',
          'm.1.2.jpg',
          'm.1.3.jpg',
          'm.1.4.jpg',
          'm.1.5.jpg',
          'm.1.6.jpg',
          'm.1.7.jpg',
        ],
      },
    ];

    const argentina: Producto[] = [
      {
        nombre: "Pata Flambeada para Eventos | Recepción con Pizzetas",
        descripcion: "Nuestra Pata Flambeada es una opción abundante y rendidora, ideal para compartir en todo tipo de eventos. El servicio comienza con una recepción de pizzetas variadas, recién hechas, para que los invitados disfruten mientras arranca la fiesta. \n" +
          "Como plato principal, la pata flambeada se corta y sirve en el momento, bien caliente y súper sabrosa, acompañada de una gran variedad de salsas para elegir. Un menú simple, rico y efectivo, perfecto para cumpleaños, reuniones y celebraciones donde nadie se queda con hambre.",
        precio: '15000 x persona',
        imagen: [
          'ar.1.1.jpg',
          'ar.1.2.jpg',
          'ar.1.3.jpg',
          'ar.1.4.jpg',
          'ar.1.5.jpg',
          'ar.1.6.jpg',
          'ar.1.7.jpg',
        ],
      }
    ];

  return (
    <Box sx={{ backgroundColor: "#000000ff", minHeight: "100vh", color: "#e0e0e0ff", overflowX: 'hidden', maxWidth: '100vw', }}>
      
      <Box sx={{ background: '#000', textAlign: "center", fontFamily: 'Poppins, sans-serif',py: 5
        }}
      >
        <Avatar alt="Sweet Cocol" src="/farid/logo.png" sx={{
            width: 120,
            height: 120,
            margin: '0 auto 16px',
        }}
        />
        <Typography variant="h2" sx={{color: "#ff9900ff", fontFamily: "var(--font-awal-ramadhan)", fontSize: "2rem",}}>
          Catering Farid
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mx: 'auto', px: 2, textAlign: 'justify' }}>
          Servicio de catering para eventos
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, mx: 'auto', px: 2, textAlign: 'justify' }}>
          En Catering Farid te acercamos los sabores más auténticos de la cocina árabe, con propuestas irresistibles para que celebres de una manera diferente y sorprendas a tus invitados.
          Además, incorporamos opciones de cocina mexicana y argentina para adaptarnos a todos los gustos.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2, mx: 'auto', px: 2, textAlign: 'justify' }}>
          Hace tu pedido por WhatsApp o Instagram
        </Typography>
        <Accordion elevation={0} sx={{  
            backgroundColor: "#0f0f0f",
            color: "#FFFFFF",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            mb: 1.5,
            "&:before": { display: "none" }, }}
            expanded={expanded === "arabe"} onChange={handleChange("arabe")}
        >
            <AccordionSummary expandIcon={<ArrowDownwardIcon sx={{ color: "#FFFFFF" }} />}>
                <Box display="flex" alignItems="center" gap={1}>
                    <Flag code="SA" height={24} width={24} />
                    <Typography variant="h6" sx={{ fontFamily: "var(--font-awal-ramadhan)" }}>
                        Comida Árabe
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    {arabe.map((torta, index) => (
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
                                        src={`/farid/${src}`}
                                        alt={torta.nombre}
                                        sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        backgroundColor: 'rgba(220, 220, 220, 1)',
                                        }}
                                    />
                                    </Box>
                                ))}
                                </Slider>
                            </Box>
                            
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 700, color: "#506a77", fontFamily: "var(--font-montserrat)"}}>
                                {torta.nombre}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{whiteSpace: "pre-line", color: "#506a77", fontFamily: "var(--font-montserrat)"}}>
                                {torta.descripcion}
                                </Typography>
                            </CardContent>
                            </Box>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} sx={{  
            backgroundColor: "#0f0f0f",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            mb: 1.5,
            "&:before": { display: "none" }, }}
            expanded={expanded === "mexicana"}
            onChange={handleChange("mexicana")}
        >
            <AccordionSummary expandIcon={<ArrowDownwardIcon sx={{ color: "#ffffff" }} />}>
              <Box display="flex" alignItems="center" gap={1}>
                  <Flag code="MX" height={24} width={24} />
                  <Typography variant="h6">Mexicana</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    {mexicana.map((torta, index) => (
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
                                        src={`/farid/${src}`}
                                        alt={torta.nombre}
                                        sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        backgroundColor: 'rgba(220, 220, 220, 1)',
                                        }}
                                    />
                                    </Box>
                                ))}
                                </Slider>
                            </Box>
                            
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: '700', color: "#506a77", fontFamily: "var(--font-montserrat)" }}>
                                {torta.nombre}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{whiteSpace: "pre-line", color: "#506a77", fontFamily: "var(--font-montserrat)" }}>
                                {torta.descripcion}
                                </Typography>
                            </CardContent>
                            </Box>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
        <Accordion elevation={0} sx={{  
            backgroundColor: "#0f0f0f",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 2,
            mb: 1.5,
            "&:before": { display: "none" }, }}
            expanded={expanded === "argentina"}
            onChange={handleChange("argentina")}
        >
            <AccordionSummary expandIcon={<ArrowDownwardIcon sx={{ color: "#ffffff" }} />}>
            <Box display="flex" alignItems="center" gap={1}>
                <Flag code="AR" height={24} width={24} />
                <Typography variant="h6">Clasica</Typography>
            </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    {argentina.map((torta, index) => (
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
                                        src={`/farid/${src}`}
                                        alt={torta.nombre}
                                        sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        backgroundColor: 'rgba(220, 220, 220, 1)',
                                        }}
                                    />
                                    </Box>
                                ))}
                                </Slider>
                            </Box>
                            
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: '700', color: "#506a77", fontFamily: "var(--font-montserrat)" }}>
                                {torta.nombre}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{whiteSpace: "pre-line", color: "#506a77", fontFamily: "var(--font-montserrat)" }}>
                                {torta.descripcion}
                                </Typography>
                            </CardContent>
                            </Box>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ bgcolor: "#050505ff", textAlign: "center", py: 3, color: "#ff9900ff" }}>
        <Typography variant="body1">
          📩 Pedidos por Instagram:{" "}
          <Link href="https://instagram.com/shawarmafarid" target="_blank">
            @shawarmafarid
          </Link>{" "}
        </Typography>
        <Typography variant="body1">
          WhatsApp: 351 564-9806
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          &copy; 2025 Shawarma Farid - Servicio de catering para eventos
        </Typography>
      </Box>

      <Fab
        color="success"
        aria-label="whatsapp"
        href={"https://wa.me/543515649806"}
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
        href={"https://www.instagram.com/shawarmafarid/"}
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
