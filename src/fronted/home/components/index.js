import React from 'react';
import Layout from './../../theme/layout';
import './body.css'
import ometepe1 from './../../../assets/ometepe1.jpg';
import ometepe2 from './../../../assets/ometepe2.jpg';
import SJ1 from './../../../assets/SJ1.jpg';
import SJ2 from './../../../assets/SJ2.jpg'
import leon1 from './../../../assets/leon1.jpg'
import leon2 from './../../../assets/leon2.jpg'


const Index = (props) => {
    
    return (
        <Layout>

            <div class="row">
                <h2> Ometepe </h2>
                <div class="column">
                    <img src = {ometepe1} width = '500 px'/>
                        <p>
                        En el lago de Nicaragua, llamado por los conquistadores españoles 
                        “el mar de agua dulce” por su inmensidad, sobresale la isla de Ometepe 
                        cuyo nombre en náhuatl significa “dos cerros”. 
                        La isla de 276 kilómetros cuadrados alberga a dos 
                        majestuosos volcanes unidos por un corto istmo, 
                        y es actualmente uno de los destinos naturales 
                        preferido por turistas nacionales y extranjeros 
                        por su ambiente hospitalario y pasivo, sus 
                        hermosos paisajes, sus dos volcanes, la riqueza arqueológica, 
                        sus tranquilas playas y sus numerosas reservas naturales 
                        y bosques donde puede apreciarse una importante biodiversidad.
                        </p>
                </div>

                <div class="column">
                
                <img src = {ometepe2} width = '375 px'/>
                        <p>
                        Desde siempre, la isla ha representado un destino paradisíaco. 
                        En tiempos precolombinos, según relatos obtenidos por 
                        historiadores, tribus indígenas se desplazaron del norte 
                        hasta Centroamérica en búsqueda de un paraíso vislumbrado 
                        por sus sacerdotes: una tierra formada por dos cerros, y en 
                        sus andares lo encontraron. La isla de Ometepe se convirtió 
                        entonces en un santuario habitado por una mezcla de diversas 
                        tribus y culturas, lo cual es revelado por la enorme cantidad 
                        de petroglifos, cerámica y estatuaria que pueden apreciarse en toda 
                        la zona.
                        </p>
                </div>

            </div>

            <div class="row">
                <div class="column">
                    <img src = {SJ1} width = '500 px'/>
                        <p>
                        Rodeada por dos cerros de mediana elevación, 
                        la Bahía de San Juan del Sur 
                        alberga la ciudad playera más visitada 
                        por surfistas. 
                        Su casco urbano ofrece una completa y 
                        variada oferta turística, 
                        y en su zona municipal se practica el surf, 
                        la pesca, avistamiento 
                        de ballenas, canopy, yoga, cabalgatas y 
                        otros deportes. 
                        Entre sus playas de ambiente silvestre o 
                        con infraestructura, 
                        destaca el Refugio de Vida Silvestre Playa La Flor
                        </p> 
                </div>

                <div class="column">
                <img src = {SJ2} width = '500 px'/>
                        <p>
                        Hay buses directos desde Managua a San Juan del Sur, 
                        que salen desde la terminal del Mercado Roberto Huembes. 
                        Otra forma de llegar: tome en el Mercado Huembes los buses 
                        o minibuses expresos que viajan hacia la ciudad de Rivas; 
                        una vez en el mercado municipal de la ciudad, tome un bus 
                        que vaya hacia San Juan del Sur. También se puede contratar 
                        un taxi si viaja con un grupo de personas
                        </p>
                </div>

            </div>

            <div class="row">
                <div class="column">
                    <img src = {leon1} width = '500 px'/>
                        <p>
                        El departamento de León es tierra de volcanes, playas, 
                        clima caliente e interesantes centros urbanos. 
                        Aquí están las ruinas de una de las primeras ciudades 
                        coloniales españolas en el continente, conservadas 
                        gracias a la arena volcánica que la sepultó tras 
                        una erupción. Está también la elegante ciudad de León, 
                        que guarda su centro histórico con atractivos y 
                        antiguos edificios coloniales. Luego hay una multitud 
                        de atractivos naturales y remotas zonas rurales poco conocidas.
                        </p>
                </div>

                <div class="column">
                <img src = {leon2} width = '500 px' />
                        <p>
                        El departamento posee las costas Norte del Lago Xolotlán 
                        o Lago de Managua, y cerca de ellas se encuentran 
                        dos importantes atractivos: las ruinas de la primera 
                        ciudad de León y el Volcán Momotombo, que provocara 
                        la destrucción de la misma con una erupción en 1610. 
                        Conocido como León Viejo, el sitio histórico conserva 
                        parte de los edificios y permite echar un ojo al pasado 
                        colonial. El Momotombo, cuyo cono es casi perfecto, 
                        resulta un importante reto para escalar.
                        </p>
                </div>

            </div>
        </Layout>
    );

};

export default Index;